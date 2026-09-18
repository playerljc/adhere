import { useCallback, useRef, useState } from 'react';

import type { DateFieldValue } from '../types';

/**
 * useDateFieldRegistry
 * @description 维护 DatePicker 字段值注册表，供 dependencies 读取
 */
export function useDateFieldRegistry() {
  const registryRef = useRef<Record<string, DateFieldValue>>({});
  const [version, setVersion] = useState(0);

  const bumpVersion = useCallback(() => {
    setVersion((prev) => prev + 1);
  }, []);

  const register = useCallback(
    (fieldKey: string, value: DateFieldValue) => {
      if (registryRef.current[fieldKey] !== value) {
        registryRef.current[fieldKey] = value;
        bumpVersion();
      }
    },
    [bumpVersion],
  );

  const unregister = useCallback(
    (fieldKey: string) => {
      if (fieldKey in registryRef.current) {
        delete registryRef.current[fieldKey];
        bumpVersion();
      }
    },
    [bumpVersion],
  );

  return {
    register,
    unregister,
    registryRef,
    version,
  };
}

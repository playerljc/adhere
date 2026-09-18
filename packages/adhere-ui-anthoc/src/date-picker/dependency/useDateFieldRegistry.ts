import { useCallback, useRef, useState } from 'react';

import type { DateFieldValue } from '../types';

/**
 * useDateFieldRegistry
 * @description 维护 DatePicker 字段值注册表，供 dependencies 在非 Form 或 form 未同步时读取
 *
 * registry 使用 ref 存储，避免频繁渲染；version 在值变化时递增，
 * 驱动 Provider 与 DatePicker 重新计算 mergedDisabledDate。
 */
export function useDateFieldRegistry() {
  const registryRef = useRef<Record<string, DateFieldValue>>({});
  const [version, setVersion] = useState(0);

  const bumpVersion = useCallback(() => {
    setVersion((prev) => prev + 1);
  }, []);

  const register = useCallback(
    (fieldKey: string, value: DateFieldValue) => {
      // 引用相等时跳过，避免 Dayjs 对象每次 onChange 都触发 version 更新
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

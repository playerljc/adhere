import { useState, useLayoutEffect, useRef } from 'react';

/**
 * useSetState
 * @param defaultValue - 初始值
 */
export default (defaultValue: any) => {
  const [value, setValue] = useState<any>(defaultValue);
  const callbackRef = useRef<() => {}>();

  useLayoutEffect(() => {
    callbackRef?.current?.();
  }, [value]);

  return [
    value,
    (_value: any, callback: () => {}) => {
      callbackRef.current = callback;
      setValue(_value);
    },
  ];
};

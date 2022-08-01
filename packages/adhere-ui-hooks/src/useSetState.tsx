import { useState, useLayoutEffect, useRef } from 'react';

type Dispatch<A> = (value: A, callback?: () => void) => void;

function useSetState<T>(defaultValue: T): [T, Dispatch<T>] {
  const [value, setValue] = useState<T>(defaultValue);
  const callbackRef = useRef<Function>();

  useLayoutEffect(() => {
    callbackRef?.current?.();
  }, [value]);

  return [
    value,
    (_value, callback) => {
      callbackRef.current = callback;
      setValue(_value);
    },
  ];
}

/**
 * useSetState
 * @param defaultValue - 初始值
 */
export default useSetState;

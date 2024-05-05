import { useLayoutEffect, useRef, useState } from 'react';

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A, callback?: Function) => void;

function useSetState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] {
  const [value, setValue] = useState<S>(initialState);
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

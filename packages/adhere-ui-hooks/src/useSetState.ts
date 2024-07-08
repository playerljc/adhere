import { type MutableRefObject, useLayoutEffect, useRef } from 'react';

import useLatestState from './useLatestState';

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A, callback?: Function) => void;

function useSetState<S>(
  initialState: S | (() => S),
): [MutableRefObject<S>, Dispatch<SetStateAction<S>>] {
  const [valueRef, setValue] = useLatestState<S>(initialState);
  const callbackRef = useRef<Function>();

  useLayoutEffect(() => {
    callbackRef?.current?.();
  }, [valueRef.current]);

  return [
    valueRef,
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

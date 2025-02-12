import { type MutableRefObject, useLayoutEffect, useRef } from 'react';

import useLatestState from './useLatestState';

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A, callback?: Function) => void;

/**
 * useSetState
 * @description 带有更新成功回调函数, 返回的是最新的值
 * @param initialState
 */
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

import { type MutableRefObject, useLayoutEffect, useRef } from 'react';

import type { SetStateCallback } from './types';
import useLatestState from './useLatestState';

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A, callback?: SetStateCallback) => void;

/**
 * useSetState hook
 * @description 带有更新成功回调函数的状态管理 Hook，返回最新的值
 * @template S - 状态类型
 * @param {S | (() => S)} initialState - 初始状态值或获取初始状态的函数
 * @returns {UseSetStateReturn<S>} 返回最新的状态引用和设置函数
 *
 * @example
 * ```tsx
 * const [valueRef, setValue] = useSetState(0);
 *
 * const handleClick = () => {
 *   setValue(
 *     prev => prev + 1,
 *     () => {
 *       console.log('状态更新完成，当前值:', valueRef.current);
 *     }
 *   );
 * };
 *
 * // 使用最新值
 * useEffect(() => {
 *   console.log('最新值:', valueRef.current);
 * }, []);
 * ```
 */
function useSetState<S>(
  initialState: S | (() => S),
): [MutableRefObject<S>, Dispatch<SetStateAction<S>>] {
  const [valueRef, setValue] = useLatestState<S>(initialState);
  const callbackRef = useRef<SetStateCallback>({} as SetStateCallback);

  // 状态更新后执行回调
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

export default useSetState;

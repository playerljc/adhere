import { useLatest } from 'ahooks';
import { useState } from 'react';
import type { MutableRefObject } from 'react';

import type { UseLatestState } from './types';

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;

/**
 * useLatestState hook
 * @description 返回最新的状态值，防止闭包问题，返回的值使用 useLatest 包装
 * @template S - 状态类型
 * @param {S | (() => S)} initialState - 初始状态值或获取初始状态的函数
 * @returns {UseLatestStateReturn<S>} 返回最新的状态引用和设置函数
 * 
 * @example
 * ```tsx
 * const [valueRef, setValue] = useLatestState(0);
 * 
 * useEffect(() => {
 *   // 总是能获取到最新的值
 *   console.log('最新值:', valueRef.current);
 * }, []);
 * 
 * const handleClick = () => {
 *   setValue(prev => prev + 1);
 * };
 * ```
 */
function useLatestState<S>(
  initialState: S | (() => S),
): [MutableRefObject<S>, Dispatch<SetStateAction<S>>] {
  const [value, setValue] = useState<S>(initialState);
  const latestRef = useLatest(value);

  return [latestRef, setValue];
}

export default useLatestState;

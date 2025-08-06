import { useLatest } from 'ahooks';
import { type Dispatch, type MutableRefObject, type SetStateAction, useState } from 'react';

/**
 * useLatestState hook 返回类型
 * @template S - 状态类型
 */
type UseLatestStateReturn<S> = [MutableRefObject<S>, Dispatch<SetStateAction<S>>];

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
function useLatestState<S>(initialState: S | (() => S)): UseLatestStateReturn<S> {
  const [value, setValue] = useState<S>(initialState);
  // 显式指定useLatest的泛型类型为S
  const latestRef = useLatest<S>(value);

  return [latestRef as MutableRefObject<S>, setValue];
}

export default useLatestState;

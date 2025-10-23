import { useLatest } from 'ahooks';
import { useState } from 'react';
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
function useLatestState(initialState) {
    var _a = useState(initialState), value = _a[0], setValue = _a[1];
    // 显式指定useLatest的泛型类型为S
    var latestRef = useLatest(value);
    return [latestRef, setValue];
}
export default useLatestState;

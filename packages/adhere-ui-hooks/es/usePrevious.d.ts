import type { UsePrevious } from './types';
/**
 * usePrevious hook
 * @description 用于获取上一次渲染时的值的 React Hook
 * @template T - 值的类型
 * @param {T} value - 当前值
 * @returns {T | undefined} 返回上一次的值
 *
 * @example
 * ```tsx
 * const [count, setCount] = useState(0);
 * const previousCount = usePrevious(count);
 *
 * useEffect(() => {
 *   if (previousCount !== undefined && previousCount !== count) {
 *     console.log(`Count changed from ${previousCount} to ${count}`);
 *   }
 * }, [count, previousCount]);
 * ```
 */
declare const usePrevious: UsePrevious;
export default usePrevious;

import type { UsePropToStateOptions, UsePropToStateReturn } from './types';
/**
 * usePropToState hook
 * @description 将 props 中的值转换为 state，用于在组件内部对 props 进行更新操作。
 * 支持自定义相等比较，避免对象/数组因引用变化误覆盖本地 state。
 * @template T - 状态类型
 * @param {T} propValue - props 中的值
 * @param {UsePropToStateOptions<T>} [options] - 可选配置
 * @returns {UsePropToStateReturn<T>} 返回状态值和设置函数
 *
 * @example
 * ```tsx
 * interface Props {
 *   initialValue: string;
 * }
 *
 * const MyComponent: React.FC<Props> = ({ initialValue }) => {
 *   const [value, setValue] = usePropToState(initialValue);
 *
 *   // 当 props 中的 initialValue 变化时，state 会自动同步
 *   // 同时可以在组件内部修改 value
 *
 *   return (
 *     <input
 *       value={value}
 *       onChange={(e) => setValue(e.target.value)}
 *     />
 *   );
 * };
 * ```
 *
 * @example
 * ```tsx
 * // 对象 props：仅在内容真正变化时同步
 * const [form, setForm] = usePropToState(propForm, {
 *   isEqual: (a, b) => JSON.stringify(a) === JSON.stringify(b),
 * });
 * ```
 */
declare function usePropToState<T>(propValue: T, options?: UsePropToStateOptions<T>): UsePropToStateReturn<T>;
export default usePropToState;

/**
 * useSafeRef hook
 * @description 安全地获取 ref 的当前值，提供默认值支持
 * @template T - ref 值的类型
 * @param {MutableRefObject<T> | RefObject<T> | MutableRefObject<T | undefined>} ref - React ref 对象
 * @param {T} [defaultValue] - 默认值，当 ref.current 为 null 或 undefined 时返回
 * @returns {T | null | undefined} 返回 ref 的当前值或默认值
 *
 * @example
 * ```tsx
 * const divRef = useRef<HTMLDivElement>(null);
 * const safeValue = useSafeRef(divRef, document.createElement('div'));
 *
 * // 或者不提供默认值
 * const element = useSafeRef(divRef);
 * if (element) {
 *   // 使用 element
 * }
 * ```
 */
export default function useSafeRef(ref, defaultValue) {
    var _a;
    return (_a = ref.current) !== null && _a !== void 0 ? _a : defaultValue;
}

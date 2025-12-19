import type { RefObject } from 'react';
/**
 * useSafeRef hook
 * @description 安全地获取 ref 的当前值，提供默认值支持
 * @template T - ref 值的类型
 * @param {RefObject<T | undefined>} ref - React ref 对象
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
export default function useSafeRef<T>(ref: RefObject<T | undefined>, defaultValue?: T): T | null | undefined;

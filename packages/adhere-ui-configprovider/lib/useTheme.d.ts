import type { ForwardedRef, MutableRefObject } from 'react';
/**
 * useTheme 钩子参数接口
 */
export interface UseThemeParams<T extends HTMLElement> {
    /** 元素引用 */
    elRef: MutableRefObject<T | null | undefined> | ForwardedRef<T | null | undefined> | MutableRefObject<T | null | undefined>[];
    /** 组件分组 */
    group: string;
    /** 组件显示名称 */
    displayName?: string;
}
/**
 * useTheme 钩子
 * @description 将Provider中的主题配置注入到指定的DOM元素中
 * @param params useTheme参数
 * @returns void
 *
 * @example
 * ```tsx
 * const elRef = useRef<HTMLDivElement>(null);
 *
 * useTheme({
 *   elRef,
 *   group: 'normal',
 *   displayName: 'Button'
 * });
 * ```
 */
declare function useTheme<T extends HTMLElement>({ elRef, group, displayName, }: UseThemeParams<T>): void;
export default useTheme;

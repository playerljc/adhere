import type { ForwardedRef, MutableRefObject } from 'react';
import type { ConfigProviderContext } from './types';
/**
 * 主题注入参数接口
 */
export interface ThemeInjectionParams<T extends HTMLElement> {
    /** 元素引用 */
    elRef: MutableRefObject<T | null | undefined> | ForwardedRef<T | null | undefined> | MutableRefObject<T | null | undefined>[];
    /** 组件分组 */
    group: string;
    /** 组件显示名称 */
    displayName?: string;
    /** 主题配置 */
    theme: ConfigProviderContext['theme'];
}
/**
 * 主题注入函数
 * @description 将主题配置注入到指定的DOM元素中
 * @param params 主题注入参数
 * @returns void
 *
 * @example
 * ```tsx
 * const elRef = useRef<HTMLDivElement>(null);
 *
 * theme({
 *   elRef,
 *   group: 'normal',
 *   displayName: 'Button',
 *   theme: { components: { normal: { Button: { color: 'red' } } } }
 * });
 * ```
 */
export default function theme<T extends HTMLElement>({ elRef, group, displayName, theme, }: ThemeInjectionParams<T>): void;

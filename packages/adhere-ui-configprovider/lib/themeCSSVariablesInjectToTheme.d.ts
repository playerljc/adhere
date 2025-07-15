/**
 * CSS变量注入参数接口
 */
export interface CSSVariablesInjectionParams {
    /** 组件主题配置 */
    componentTheme: Record<string, string>;
    /** 目标DOM元素数组 */
    els: HTMLElement[];
}
/**
 * 将组件主题配置注入为CSS变量
 * @description 将componentTheme中的属性映射为CSS变量并注入到指定的DOM元素中
 * @param params CSS变量注入参数
 * @returns void
 *
 * @example
 * ```tsx
 * themeCSSVariablesInjectToTheme({
 *   componentTheme: {
 *     backgroundColor: '#ffffff',
 *     textColor: '#000000'
 *   },
 *   els: [document.getElementById('my-element')]
 * });
 * ```
 */
export declare function themeCSSVariablesInjectToTheme({ componentTheme, els, }: CSSVariablesInjectionParams): void;

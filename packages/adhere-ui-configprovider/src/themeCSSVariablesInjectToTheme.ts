import Util from '@baifendian/adhere-util';

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
export function themeCSSVariablesInjectToTheme({
  componentTheme,
  els,
}: CSSVariablesInjectionParams): void {
  if (!componentTheme || Object.keys(componentTheme).length === 0) {
    console.warn('themeCSSVariablesInjectToTheme: componentTheme is empty');
    return;
  }

  if (!els || els.length === 0) {
    console.warn('themeCSSVariablesInjectToTheme: els is empty');
    return;
  }

  // 将componentTheme中的属性映射到CSS变量并注入到每个元素中
  Object.entries(componentTheme).forEach(([key, value]) => {
    // 将驼峰命名转换为kebab-case
    const kebabCaseKey = Util.pascalCaseToKebabCase2(key);
    const cssVariableName = `--${kebabCaseKey}`;

    // 为每个元素设置CSS变量
    els.forEach((el) => {
      if (el && el.style) {
        el.style.setProperty(cssVariableName, value);
      }
    });
  });
}

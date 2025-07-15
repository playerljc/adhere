import type { ForwardedRef, MutableRefObject } from 'react';

import { themeCSSVariablesInjectToTheme } from './themeCSSVariablesInjectToTheme';
import type { ConfigProviderContext } from './types';

/**
 * 主题注入参数接口
 */
export interface ThemeInjectionParams<T extends HTMLElement> {
  /** 元素引用 */
  elRef:
    | MutableRefObject<T | null | undefined>
    | ForwardedRef<T | null | undefined>
    | MutableRefObject<T | null | undefined>[];
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
export default function theme<T extends HTMLElement>({
  elRef,
  group,
  displayName,
  theme,
}: ThemeInjectionParams<T>): void {
  // 验证参数
  if (!elRef) {
    console.warn('theme: elRef is required');
    return;
  }

  if (Array.isArray(elRef)) {
    if (!(elRef as MutableRefObject<T | null | undefined>[]).length) {
      console.warn('theme: elRef array is empty');
      return;
    }
  }

  if (!(elRef as MutableRefObject<T | null | undefined>).current) {
    console.warn('theme: elRef.current is null or undefined');
    return;
  }

  if (!group) {
    console.warn('theme: group is required');
    return;
  }

  if (!theme) {
    console.warn('theme: theme is required');
    return;
  }

  const components = theme?.components;

  if (!components) {
    console.warn('theme: theme.components is required');
    return;
  }

  if (!components[group]) {
    console.warn(`theme: components.${group} is not found`);
    return;
  }

  // 获取组件主题配置
  let componentTheme: Record<string, string> | undefined;

  if (displayName) {
    componentTheme = components?.[group]?.[displayName];
  } else {
    componentTheme = components?.[group];
  }

  if (!componentTheme) {
    console.warn(`theme: component theme for ${group}${displayName ? `.${displayName}` : ''} is not found`);
    return;
  }

  // 获取目标元素
  let els: HTMLElement[] = [];

  if (Array.isArray(elRef)) {
    els = (elRef as MutableRefObject<HTMLElement>[])
      .map((ref) => ref.current)
      .filter((el): el is HTMLElement => el !== null && el !== undefined);
  } else {
    const current = (elRef as MutableRefObject<HTMLElement>).current;
    if (current) {
      els = [current];
    }
  }

  if (els.length === 0) {
    console.warn('theme: no valid elements found');
    return;
  }

  // 注入CSS变量
  themeCSSVariablesInjectToTheme({
    componentTheme,
    els,
  });
}

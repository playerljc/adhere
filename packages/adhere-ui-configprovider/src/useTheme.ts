import { useMount, useUpdateEffect } from 'ahooks';
import { useContext } from 'react';
import type { ForwardedRef, MutableRefObject } from 'react';

import { Context } from './Context';
import { themeCSSVariablesInjectToTheme } from './themeCSSVariablesInjectToTheme';

/**
 * useTheme 钩子参数接口
 */
export interface UseThemeParams<T extends HTMLElement> {
  /** 元素引用 */
  elRef:
    | MutableRefObject<T | null | undefined>
    | ForwardedRef<T | null | undefined>
    | MutableRefObject<T | null | undefined>[];
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
function useTheme<T extends HTMLElement>({
  elRef,
  group,
  displayName,
}: UseThemeParams<T>): void {
  const context = useContext(Context);

  /**
   * 注入CSS变量的内部函数
   */
  function injectCSSVariables(): void {
    // 验证参数
    if (!elRef) {
      console.warn('useTheme: elRef is required');
      return;
    }

    if (Array.isArray(elRef)) {
      if (!(elRef as MutableRefObject<T | null | undefined>[]).length) {
        console.warn('useTheme: elRef array is empty');
        return;
      }
    }

    if (!(elRef as MutableRefObject<T | null | undefined>).current) {
      console.warn('useTheme: elRef.current is null or undefined');
      return;
    }

    if (!group) {
      console.warn('useTheme: group is required');
      return;
    }

    const theme = context.theme;

    if (!theme) {
      console.warn('useTheme: context.theme is not available');
      return;
    }

    const components = theme?.components;

    if (!components) {
      console.warn('useTheme: theme.components is not available');
      return;
    }

    if (!components[group]) {
      console.warn(`useTheme: components.${group} is not found`);
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
      console.warn(`useTheme: component theme for ${group}${displayName ? `.${displayName}` : ''} is not found`);
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
      console.warn('useTheme: no valid elements found');
      return;
    }

    // 注入CSS变量
    themeCSSVariablesInjectToTheme({
      componentTheme,
      els,
    });
  }

  // 组件挂载时注入CSS变量
  useMount(() => {
    injectCSSVariables();
  });

  // 主题变化时重新注入CSS变量
  useUpdateEffect(() => {
    injectCSSVariables();
  }, [context.theme]);
}

export default useTheme;

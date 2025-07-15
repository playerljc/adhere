import { Spinner } from 'spin.js';

import Resource from '@baifendian/adhere-util-resource';

import type { GlobalIndicator, GlobalIndicatorOptions, Size, SpinnerConfig } from './types';

/**
 * CSS 选择器前缀
 */
const SELECTOR_PREFIX: string = 'adhere-ui-global-indicator';

/**
 * 最大 z-index 值
 */
const MAX_ZINDEX: number = Resource?.Dict?.value?.ResourceNormalMaxZIndex?.value || 9999;

/**
 * 尺寸缩放映射
 */
const SIZE_SCALE_MAP: ReadonlyMap<Size, number> = new Map([
  ['small', 0.1],
  ['default', 0.2],
  ['large', 0.3],
]);

/**
 * 默认 Spinner 配置
 */
const DEFAULT_SPINNER_CONFIG: Omit<SpinnerConfig, 'scale' | 'color' | 'zIndex' | 'className'> = {
  lines: 4,
  length: 0,
  width: 52,
  radius: 29,
  corners: 1,
  speed: 2.1,
  rotate: 19,
  animation: 'spinner-line-fade-quick',
  direction: 1,
  fadeColor: 'transparent',
  top: '46%',
  left: '50%',
  shadow: '0 0 1px transparent',
  position: 'absolute',
};

/**
 * 存储所有活跃的指示器实例
 */
const activeHandlers: Set<HTMLElement> = new Set();

/**
 * 获取主题色
 * @returns 主题色值
 */
function getThemeColor(): string {
  return document.documentElement.style.getPropertyValue('--adhere-color-primary') || '#1890ff';
}

/**
 * 创建指示器 DOM 元素
 * @param text - 显示的文本
 * @param zIndex - z-index 层级
 * @returns 指示器 DOM 元素
 */
function createIndicatorElement(text: string, zIndex: number): HTMLElement {
  const container = document.createElement('div');
  
  container.innerHTML = `
    <div class="${SELECTOR_PREFIX}" style="z-index: ${zIndex}">
      <span class="${SELECTOR_PREFIX}-dot"></span>
      ${text ? `<div class="${SELECTOR_PREFIX}-text">${text}</div>` : ''}
    </div>`;

  return container.firstElementChild as HTMLElement;
}

/**
 * 创建并配置 Spinner 实例
 * @param dotElement - 旋转点元素
 * @param size - 指示器尺寸
 * @param zIndex - z-index 层级
 * @returns Spinner 实例
 */
function createSpinner(dotElement: HTMLElement, size: Size, zIndex: number): Spinner {
  const scale = SIZE_SCALE_MAP.get(size) || SIZE_SCALE_MAP.get('default')!;
  const color = getThemeColor();

  const config: SpinnerConfig = {
    ...DEFAULT_SPINNER_CONFIG,
    scale,
    color,
    zIndex,
    className: `${SELECTOR_PREFIX}-spinner`,
  };

  return new Spinner(config);
}

/**
 * 安全移除 DOM 元素
 * @param element - 要移除的元素
 */
function safeRemoveElement(element: HTMLElement): void {
  try {
    element?.parentElement?.removeChild?.(element);
  } catch (error) {
    console.warn('Failed to remove indicator element:', error);
  }
}

/**
 * 全局指示器组件
 * 
 * 提供全局加载指示器功能，支持多种尺寸和自定义配置。
 * 
 * @example
 * ```typescript
 * // 基本使用
 * const indicator = GlobalIndicator.show();
 * 
 * // 带配置的使用
 * const indicator = GlobalIndicator.show({
 *   text: '加载中...',
 *   size: 'large',
 *   zIndex: 10000
 * });
 * 
 * // 隐藏指定指示器
 * GlobalIndicator.hide(indicator);
 * 
 * // 隐藏所有指示器
 * GlobalIndicator.hideAll();
 * ```
 */
const GlobalIndicatorComponent: GlobalIndicator = {
  /**
   * 显示全局指示器
   * 
   * @param optionsOrParent - 配置选项或父容器元素
   * @param text - 显示的文本内容（当第一个参数为 HTMLElement 时使用）
   * @param zIndex - z-index 层级（当第一个参数为 HTMLElement 时使用）
   * @param size - 指示器尺寸（当第一个参数为 HTMLElement 时使用）
   * @returns 指示器 DOM 元素
   * 
   * @example
   * ```typescript
   * // 新版本用法
   * const indicator = GlobalIndicator.show({
   *   text: '加载中...',
   *   size: 'large'
   * });
   * 
   * // 兼容旧版本用法
   * const indicator = GlobalIndicator.show(
   *   document.body,
   *   '加载中...',
   *   10000,
   *   'large'
   * );
   * ```
   */
  show(
    optionsOrParent?: GlobalIndicatorOptions | HTMLElement,
    text?: string,
    zIndex?: number,
    size?: Size,
  ): HTMLElement {
    // 处理参数重载
    let options: GlobalIndicatorOptions;
    
    if (optionsOrParent && 'parent' in optionsOrParent) {
      // 新版本用法：传入配置对象
      options = optionsOrParent;
    } else {
      // 兼容旧版本用法：传入独立参数
      options = {
        parent: optionsOrParent as HTMLElement,
        text,
        zIndex,
        size,
      };
    }

    // 设置默认值
    const {
      parent = document.body,
      text: displayText = '',
      zIndex: displayZIndex = MAX_ZINDEX,
      size: displaySize = 'default',
    } = options;

    // 创建指示器元素
    const indicatorElement = createIndicatorElement(displayText, displayZIndex);
    
    // 获取旋转点元素
    const dotElement = indicatorElement.querySelector(`.${SELECTOR_PREFIX}-dot`) as HTMLElement;
    
    if (!dotElement) {
      throw new Error('Failed to create indicator dot element');
    }

    // 创建并启动 Spinner
    const spinner = createSpinner(dotElement, displaySize, displayZIndex);
    spinner.spin(dotElement);

    // 设置定位样式
    if (parent === document.body) {
      indicatorElement.style.position = 'fixed';
    }

    // 添加到父容器
    parent.appendChild(indicatorElement);

    // 记录活跃实例
    activeHandlers.add(indicatorElement);

    return indicatorElement;
  },

  /**
   * 隐藏指定的指示器
   * 
   * @param indicatorDom - 要隐藏的指示器 DOM 元素
   * 
   * @example
   * ```typescript
   * const indicator = GlobalIndicator.show();
   * // ... 其他操作
   * GlobalIndicator.hide(indicator);
   * ```
   */
  hide(indicatorDom: HTMLElement): void {
    if (!indicatorDom) {
      console.warn('Indicator element is required for hide operation');
      return;
    }

    safeRemoveElement(indicatorDom);
    activeHandlers.delete(indicatorDom);
  },

  /**
   * 隐藏所有活跃的指示器
   * 
   * @example
   * ```typescript
   * // 隐藏所有指示器
   * GlobalIndicator.hideAll();
   * ```
   */
  hideAll(): void {
    const indicators = Array.from(activeHandlers);
    
    indicators.forEach((indicator) => {
      safeRemoveElement(indicator);
    });

    activeHandlers.clear();
  },
};

export default GlobalIndicatorComponent;

import type { GlobalIndicator } from './types';
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
declare const GlobalIndicatorComponent: GlobalIndicator;
export default GlobalIndicatorComponent;

import React from 'react';
import type { SpinProps } from './types';
/**
 * Spin 加载组件
 *
 * 基于 antd-mobile 的 Toast 组件封装的加载指示器，
 * 支持自定义样式、文本和层级控制。
 *
 * @example
 * ```tsx
 * <Spin spinning={true} text="正在加载数据..." />
 * ```
 *
 * @param props - 组件属性
 * @param props.className - 自定义 CSS 类名
 * @param props.style - 自定义内联样式
 * @param props.spinning - 是否显示加载状态
 * @param props.text - 加载提示文本
 * @param props.zIndex - 组件的 z-index 层级
 * @param props.toastProps - 传递给 Toast 的其他属性
 * @returns 加载指示器组件
 */
declare const Spin: React.NamedExoticComponent<SpinProps>;
export default Spin;

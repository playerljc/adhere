import React from 'react';
import { RatioProps } from './types';
/**
 * Ratio 组件
 *
 * 一个根据宽高比自动计算尺寸的容器组件。
 * 可以根据容器的宽度自动计算高度，或根据高度自动计算宽度。
 *
 * @example
 * ```tsx
 * // 根据宽度计算高度，16:9 比例
 * <Ratio aspectRatio="16:9" origin="width">
 *   <div>内容</div>
 * </Ratio>
 *
 * // 根据高度计算宽度，4:3 比例
 * <Ratio aspectRatio={4/3} origin="height">
 *   <div>内容</div>
 * </Ratio>
 * ```
 *
 * @param props - 组件属性
 * @param props.className - 自定义 CSS 类名
 * @param props.style - 自定义内联样式
 * @param props.aspectRatio - 宽高比，支持数字（如 16/9）或字符串（如 "16:9" 或 "16/9"）
 * @param props.origin - 基准方向，width 表示根据宽度计算高度，height 表示根据高度计算宽度，默认为 'width'
 * @param props.children - 子元素内容
 * @returns JSX.Element
 */
declare const Ratio: React.NamedExoticComponent<RatioProps & React.RefAttributes<HTMLDivElement>>;
export default Ratio;

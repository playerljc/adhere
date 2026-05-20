import React from 'react';
import type { SliderScaleProps } from './types';
/**
 * 滑块刻度组件
 *
 * 一个带有刻度显示的滑块组件，支持自定义最小值、最大值、步进值和刻度间隔。
 *
 * @example
 * ```tsx
 * <SliderScale
 *   min={0}
 *   max={100}
 *   step={1}
 *   value={50}
 *   interval={10}
 *   onChange={(value) => console.log('当前值:', value)}
 * />
 * ```
 *
 * @param props - 组件属性
 * @returns 滑块刻度组件
 */
declare const SliderScale: React.NamedExoticComponent<SliderScaleProps>;
export default SliderScale;

import React from 'react';
import type { FontSizeSettingProps } from './types';
/**
 * 字体大小设置组件
 *
 * 提供字体大小调节功能，包含预设选项和滑动条控制
 *
 * @component
 * @param {FontSizeSettingProps} props - 组件属性
 * @param {string} [props.className] - 自定义CSS类名
 * @param {CSSProperties} [props.style] - 自定义内联样式
 * @param {number} [props.min=0] - 字体大小最小值
 * @param {number} [props.max=100] - 字体大小最大值
 * @param {number} [props.step=1] - 滑动步长
 * @param {number} [props.value] - 当前字体大小值
 * @param {(value: number) => void} [props.onChange] - 字体大小变化回调
 * @returns {JSX.Element} 字体大小设置组件
 *
 * @example
 * ```tsx
 * <FontSizeSetting
 *   value={50}
 *   onChange={(value) => console.log('字体大小:', value)}
 *   min={0}
 *   max={100}
 *   step={1}
 * />
 * ```
 */
declare const FontSizeSetting: React.NamedExoticComponent<FontSizeSettingProps>;
export default FontSizeSetting;

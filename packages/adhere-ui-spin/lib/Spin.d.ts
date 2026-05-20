import React from 'react';
import type { SpinProps } from './types';
/**
 * Spin组件
 * @description 一个基于spin.js的加载指示器组件，支持多种尺寸和自定义配置
 * @param props - 组件属性
 * @param props.spinning - 是否显示加载状态，默认为false
 * @param props.text - 加载提示文本，默认为空字符串
 * @param props.zIndex - 组件的z-index层级，默认为ResourceNormalMaxZIndex
 * @param props.size - 组件尺寸，可选值：'small' | 'default' | 'large'，默认为'default'
 * @returns React组件
 * @example
 * ```tsx
 * <Spin spinning={true} text="加载中..." size="large" />
 * ```
 */
declare const Spin: React.NamedExoticComponent<SpinProps>;
export default Spin;

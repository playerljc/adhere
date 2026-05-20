import React from 'react';
import type { FixedProps } from './types';
/**
 * 栅格系统总列数
 */
export declare const gridCount = 24;
/**
 * Fixed 组件引用类型
 */
export interface FixedRef {
    /** 获取元素引用 */
    getEl: () => HTMLDivElement | null;
}
/**
 * Fixed 组件
 * 固定尺寸的布局组件，支持栅格系统和折叠功能
 *
 * @param {FixedProps} props - 组件属性
 * @param {React.Ref<FixedRef>} ref - 组件引用
 * @returns {JSX.Element} Fixed 组件
 */
declare const Fixed: React.NamedExoticComponent<FixedProps>;
export default Fixed;

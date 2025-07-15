import React from 'react';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';
/**
 * LCLayout 组件属性
 * 左侧-中心布局组件，水平方向排列
 */
export interface LCLayoutProps extends TBLRCLayoutProps {
    /** 左侧区域属性 */
    lProps?: TBLRProps;
    /** 左侧分割线 */
    lSplit?: React.ReactNode;
    /** 中心区域属性 */
    cProps?: CenterProps;
}
/**
 * LCLayout 组件
 * 左侧-中心布局组件，用于创建水平方向的左侧固定区域和中心自动适应区域的布局
 *
 * @example
 * ```tsx
 * <LCLayout
 *   lProps={{ span: 6, children: <div>左侧区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   lSplit={<div>分割线</div>}
 * />
 * ```
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
declare const LCLayout: React.NamedExoticComponent<LCLayoutProps & React.RefAttributes<HTMLDivElement>>;
export default LCLayout;

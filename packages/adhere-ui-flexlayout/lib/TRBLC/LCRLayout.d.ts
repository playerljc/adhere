import React from 'react';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';
/**
 * LCRLayout 组件属性
 * 左侧-中心-右侧布局组件，水平方向排列
 */
export interface LCRLayoutProps extends TBLRCLayoutProps {
    /** 左侧区域属性 */
    lProps?: TBLRProps;
    /** 左侧分割线 */
    lSplit?: React.ReactNode;
    /** 中心区域属性 */
    cProps?: CenterProps;
    /** 右侧区域属性 */
    rProps?: TBLRProps;
    /** 右侧分割线 */
    rSplit?: React.ReactNode;
}
/**
 * LCRLayout 组件
 * 左侧-中心-右侧布局组件，用于创建水平方向的左侧固定区域、中心自动适应区域和右侧固定区域的布局
 *
 * @example
 * ```tsx
 * <LCRLayout
 *   lProps={{ span: 6, children: <div>左侧区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   rProps={{ span: 6, children: <div>右侧区域</div> }}
 *   lSplit={<div>左侧分割线</div>}
 *   rSplit={<div>右侧分割线</div>}
 * />
 * ```
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
declare const LCRLayout: React.NamedExoticComponent<LCRLayoutProps & React.RefAttributes<HTMLDivElement>>;
export default LCRLayout;

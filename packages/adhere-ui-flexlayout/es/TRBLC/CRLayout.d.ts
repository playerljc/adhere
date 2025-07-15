import React from 'react';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';
/**
 * CRLayout 组件属性
 * 中心-右侧布局组件，水平方向排列
 */
export interface CRLayoutProps extends TBLRCLayoutProps {
    /** 右侧区域属性 */
    rProps?: TBLRProps;
    /** 右侧分割线 */
    rSplit?: React.ReactNode;
    /** 中心区域属性 */
    cProps?: CenterProps;
}
/**
 * CRLayout 组件
 * 中心-右侧布局组件，用于创建水平方向的中心区域和右侧固定区域的布局
 *
 * @example
 * ```tsx
 * <CRLayout
 *   rProps={{ span: 6, children: <div>右侧区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   rSplit={<div>分割线</div>}
 * />
 * ```
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
declare const CRLayout: React.NamedExoticComponent<CRLayoutProps & React.RefAttributes<HTMLDivElement>>;
export default CRLayout;

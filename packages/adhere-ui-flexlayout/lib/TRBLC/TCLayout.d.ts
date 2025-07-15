import React from 'react';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';
/**
 * TCLayout 组件属性
 * 顶部-中心布局组件，垂直方向排列
 */
export interface TCLayoutProps extends TBLRCLayoutProps {
    /** 顶部区域属性 */
    tProps?: TBLRProps;
    /** 顶部分割线 */
    tSplit?: React.ReactNode;
    /** 中心区域属性 */
    cProps?: CenterProps;
}
/**
 * TCLayout 组件
 * 顶部-中心布局组件，用于创建垂直方向的顶部固定区域和中心自动适应区域的布局
 *
 * @example
 * ```tsx
 * <TCLayout
 *   tProps={{ span: 6, children: <div>顶部区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   tSplit={<div>分割线</div>}
 * />
 * ```
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
declare const TCLayout: React.NamedExoticComponent<TCLayoutProps & React.RefAttributes<HTMLDivElement>>;
export default TCLayout;

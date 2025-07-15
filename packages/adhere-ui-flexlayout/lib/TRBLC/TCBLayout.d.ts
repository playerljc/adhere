import React from 'react';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';
/**
 * TCBLayout 组件属性
 * 顶部-中心-底部布局组件，垂直方向排列
 */
export interface TCBLayoutProps extends TBLRCLayoutProps {
    /** 顶部区域属性 */
    tProps?: TBLRProps;
    /** 顶部分割线 */
    tSplit?: React.ReactNode;
    /** 中心区域属性 */
    cProps?: CenterProps;
    /** 底部区域属性 */
    bProps?: TBLRProps;
    /** 底部分割线 */
    bSplit?: React.ReactNode;
}
/**
 * TCBLayout 组件
 * 顶部-中心-底部布局组件，用于创建垂直方向的顶部固定区域、中心自动适应区域和底部固定区域的布局
 *
 * @example
 * ```tsx
 * <TCBLayout
 *   tProps={{ span: 6, children: <div>顶部区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   bProps={{ span: 6, children: <div>底部区域</div> }}
 *   tSplit={<div>顶部分割线</div>}
 *   bSplit={<div>底部分割线</div>}
 * />
 * ```
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
declare const TCBLayout: React.NamedExoticComponent<TCBLayoutProps & React.RefAttributes<HTMLDivElement>>;
export default TCBLayout;

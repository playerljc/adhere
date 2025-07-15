import React from 'react';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';
/**
 * CBLayout 组件属性
 * 中心-底部布局组件，垂直方向排列
 */
export interface CBLayoutProps extends TBLRCLayoutProps {
    /** 底部区域属性 */
    bProps?: TBLRProps;
    /** 底部分割线 */
    bSplit?: React.ReactNode;
    /** 中心区域属性 */
    cProps?: CenterProps;
}
/**
 * CBLayout 组件
 * 中心-底部布局组件，用于创建垂直方向的中心区域和底部固定区域的布局
 *
 * @example
 * ```tsx
 * <CBLayout
 *   bProps={{ span: 6, children: <div>底部区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   bSplit={<div>分割线</div>}
 * />
 * ```
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
declare const CBLayout: React.NamedExoticComponent<CBLayoutProps & React.RefAttributes<HTMLDivElement>>;
export default CBLayout;

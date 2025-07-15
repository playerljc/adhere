import React from 'react';
import type { AutoProps, CenterProps, FlexLayoutProps, TBLRCLayoutProps, TBLRProps } from '../types';
/**
 * TCBRLayout 组件属性
 * 顶部-中心-底部-右侧布局组件，支持嵌套布局
 */
export interface TCBRLayoutProps extends TBLRCLayoutProps {
    /** 右侧区域属性 */
    rProps?: TBLRProps;
    /** 右侧分割线 */
    rSplit?: React.ReactNode;
    /** 顶部区域属性 */
    tProps?: TBLRProps;
    /** 顶部分割线 */
    tSplit?: React.ReactNode;
    /** 底部区域属性 */
    bProps?: TBLRProps;
    /** 底部分割线 */
    bSplit?: React.ReactNode;
    /** 中心区域属性 */
    cProps?: CenterProps;
    /** 自动包装属性 */
    autoWrapProps?: AutoProps;
    /** 自动内部属性 */
    autoInnerProps?: FlexLayoutProps;
}
/**
 * TCBRLayout 组件
 * 顶部-中心-底部-右侧布局组件，用于创建复杂的嵌套布局，包含顶部区域、中心区域、底部区域和右侧区域
 *
 * @example
 * ```tsx
 * <TCBRLayout
 *   tProps={{ span: 6, children: <div>顶部区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   bProps={{ span: 6, children: <div>底部区域</div> }}
 *   rProps={{ span: 6, children: <div>右侧区域</div> }}
 *   tSplit={<div>顶部分割线</div>}
 *   bSplit={<div>底部分割线</div>}
 *   rSplit={<div>右侧分割线</div>}
 * />
 * ```
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
declare const TCBRLayout: React.NamedExoticComponent<TCBRLayoutProps & React.RefAttributes<HTMLDivElement>>;
export default TCBRLayout;

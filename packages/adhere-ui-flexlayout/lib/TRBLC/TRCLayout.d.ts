import React from 'react';
import type { AutoProps, CenterProps, FlexLayoutProps, TBLRCLayoutProps, TBLRProps } from '../types';
/**
 * TRCLayout 组件属性
 * 顶部-右侧-中心布局组件，支持嵌套布局
 */
export interface TRCLayoutProps extends TBLRCLayoutProps {
    /** 右侧区域属性 */
    rProps?: TBLRProps;
    /** 右侧分割线 */
    rSplit?: React.ReactNode;
    /** 顶部区域属性 */
    tProps?: TBLRProps;
    /** 顶部分割线 */
    tSplit?: React.ReactNode;
    /** 中心区域属性 */
    cProps?: CenterProps;
    /** 自动包装属性 */
    autoWrapProps?: AutoProps;
    /** 自动内部属性 */
    autoInnerProps?: FlexLayoutProps;
}
/**
 * TRCLayout 组件
 * 顶部-右侧-中心布局组件，用于创建复杂的嵌套布局，包含顶部区域、右侧区域和中心区域
 *
 * @example
 * ```tsx
 * <TRCLayout
 *   tProps={{ span: 6, children: <div>顶部区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   rProps={{ span: 6, children: <div>右侧区域</div> }}
 *   tSplit={<div>顶部分割线</div>}
 *   rSplit={<div>右侧分割线</div>}
 * />
 * ```
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
declare const TRCLayout: React.NamedExoticComponent<TRCLayoutProps & React.RefAttributes<HTMLDivElement>>;
export default TRCLayout;

import React from 'react';
import type { AutoProps, CenterProps, FlexLayoutProps, TBLRCLayoutProps, TBLRProps } from '../types';
/**
 * LTCLayout 组件属性
 * 左侧-顶部-中心布局组件，支持嵌套布局
 */
export interface LTCLayoutProps extends TBLRCLayoutProps {
    /** 左侧区域属性 */
    lProps?: TBLRProps;
    /** 左侧分割线 */
    lSplit?: React.ReactNode;
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
 * LTCLayout 组件
 * 左侧-顶部-中心布局组件，用于创建复杂的嵌套布局，包含左侧区域、顶部区域和中心区域
 *
 * @example
 * ```tsx
 * <LTCLayout
 *   lProps={{ span: 6, children: <div>左侧区域</div> }}
 *   tProps={{ span: 6, children: <div>顶部区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   lSplit={<div>左侧分割线</div>}
 *   tSplit={<div>顶部分割线</div>}
 * />
 * ```
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
declare const LTCLayout: React.NamedExoticComponent<LTCLayoutProps & React.RefAttributes<HTMLDivElement>>;
export default LTCLayout;

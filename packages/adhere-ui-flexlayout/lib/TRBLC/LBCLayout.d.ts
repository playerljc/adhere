import React from 'react';
import type { AutoProps, CenterProps, FlexLayoutProps, TBLRCLayoutProps, TBLRProps } from '../types';
/**
 * LBCLayout 组件属性
 * 左侧-底部-中心布局组件，支持嵌套布局
 */
export interface LBCLayoutProps extends TBLRCLayoutProps {
    /** 左侧区域属性 */
    lProps?: TBLRProps;
    /** 左侧分割线 */
    lSplit?: React.ReactNode;
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
 * LBCLayout 组件
 * 左侧-底部-中心布局组件，用于创建复杂的嵌套布局，包含左侧区域、底部区域和中心区域
 *
 * @example
 * ```tsx
 * <LBCLayout
 *   lProps={{ span: 6, children: <div>左侧区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   bProps={{ span: 6, children: <div>底部区域</div> }}
 *   lSplit={<div>左侧分割线</div>}
 *   bSplit={<div>底部分割线</div>}
 * />
 * ```
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
declare const LBCLayout: React.NamedExoticComponent<LBCLayoutProps & React.RefAttributes<HTMLDivElement>>;
export default LBCLayout;

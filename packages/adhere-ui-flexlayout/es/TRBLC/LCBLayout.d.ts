import React from 'react';
import type { AutoProps, CenterProps, FlexLayoutProps, TBLRCLayoutProps, TBLRProps } from '../types';
/**
 * LCBLayout 组件属性
 * 左侧-中心-底部布局组件，支持嵌套布局
 */
export interface LCBLayoutProps extends TBLRCLayoutProps {
    /** 左侧区域属性 */
    lProps?: TBLRProps;
    /** 左侧分割线 */
    lSplit?: React.ReactNode;
    /** 中心区域属性 */
    cProps?: CenterProps;
    /** 底部区域属性 */
    bProps?: TBLRProps;
    /** 底部分割线 */
    bSplit?: React.ReactNode;
    /** 自动包装属性 */
    autoWrapProps?: AutoProps;
    /** 自动内部属性 */
    autoInnerProps?: FlexLayoutProps;
}
/**
 * LCBLayout 组件
 * 左侧-中心-底部布局组件，用于创建复杂的嵌套布局，包含左侧区域、中心区域和底部区域
 *
 * @example
 * ```tsx
 * <LCBLayout
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
declare const LCBLayout: React.NamedExoticComponent<LCBLayoutProps & React.RefAttributes<HTMLDivElement>>;
export default LCBLayout;

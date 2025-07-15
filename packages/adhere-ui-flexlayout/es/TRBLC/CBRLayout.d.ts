import React from 'react';
import type { AutoProps, CenterProps, FlexLayoutProps, TBLRCLayoutProps, TBLRProps } from '../types';
/**
 * CBRLayout 组件属性
 * 中心-底部-右侧布局组件，支持嵌套布局
 */
export interface CBRLayoutProps extends TBLRCLayoutProps {
    /** 右侧区域属性 */
    rProps?: TBLRProps;
    /** 右侧分割线 */
    rSplit?: React.ReactNode;
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
 * CBRLayout 组件
 * 中心-底部-右侧布局组件，用于创建复杂的嵌套布局，包含中心区域、底部区域和右侧区域
 *
 * @example
 * ```tsx
 * <CBRLayout
 *   rProps={{ span: 6, children: <div>右侧区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   bProps={{ span: 6, children: <div>底部区域</div> }}
 *   rSplit={<div>右侧分割线</div>}
 *   bSplit={<div>底部分割线</div>}
 * />
 * ```
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
declare const CBRLayout: React.NamedExoticComponent<CBRLayoutProps & React.RefAttributes<HTMLDivElement>>;
export default CBRLayout;

import React from 'react';
import type { TBLRCSplitLayoutProps } from '../types';
/**
 * TCBLayout 组件
 * 顶部-中心-底部布局组件，支持可拖拽的分割线
 *
 * @description
 * 该组件提供了一个三区域布局：
 * - 顶部区域 (Top) - 位于顶部，可配置固定尺寸或百分比
 * - 中心区域 (Center) - 占据主要空间，自动填充剩余区域
 * - 底部区域 (Bottom) - 位于底部，可配置固定尺寸或百分比
 *
 * 区域之间都有可拖拽的分割线，支持自定义分割线属性，
 * 包括最小/最大尺寸限制、拖拽事件回调等
 *
 * @example
 * ```tsx
 * <TCBLayout
 *   tSplitProps={{ minSize: 60, maxSize: '25%' }}
 *   bSplitProps={{ minSize: 80, maxSize: '30%' }}
 * >
 *   <div>顶部内容区域</div>
 *   <div>中心内容区域</div>
 *   <div>底部内容区域</div>
 * </TCBLayout>
 * ```
 *
 * @param props - 组件属性
 * @param props.tSplitProps - 顶部分割线配置属性
 * @param props.bSplitProps - 底部分割线配置属性
 * @param props.children - 子元素，依次为顶部、中心、底部区域
 * @param ref - 组件引用
 * @returns 渲染的布局组件
 */
declare const TCBLayout: React.NamedExoticComponent<TBLRCSplitLayoutProps & React.RefAttributes<HTMLDivElement>>;
export default TCBLayout;

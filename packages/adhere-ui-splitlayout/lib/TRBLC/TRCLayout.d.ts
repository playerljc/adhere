import React from 'react';
import type { TBLRCSplitLayoutProps } from '../types';
/**
 * TRCLayout 组件
 * 顶部-右侧-中心布局组件，支持可拖拽的分割线
 *
 * @description
 * 该组件提供了一个三区域布局：
 * - 顶部区域 (Top) - 位于顶部，可配置固定尺寸或百分比
 * - 右侧区域 (Right) - 位于右侧，可配置固定尺寸或百分比
 * - 中心区域 (Center) - 占据主要空间，自动填充剩余区域
 *
 * 区域之间都有可拖拽的分割线，支持自定义分割线属性，
 * 包括最小/最大尺寸限制、拖拽事件回调等
 *
 * @example
 * ```tsx
 * <TRCLayout
 *   tSplitProps={{ minSize: 50, maxSize: '25%' }}
 *   rSplitProps={{ minSize: 100, maxSize: '30%' }}
 * >
 *   <div>顶部内容区域</div>
 *   <div>右侧内容区域</div>
 *   <div>中心内容区域</div>
 * </TRCLayout>
 * ```
 *
 * @param props - 组件属性
 * @param props.tSplitProps - 顶部分割线配置属性
 * @param props.rSplitProps - 右侧分割线配置属性
 * @param props.children - 子元素，依次为顶部、右侧、中心区域
 * @param ref - 组件引用
 * @returns 渲染的布局组件
 */
declare const TRCLayout: React.NamedExoticComponent<TBLRCSplitLayoutProps & React.RefAttributes<HTMLDivElement>>;
export default TRCLayout;

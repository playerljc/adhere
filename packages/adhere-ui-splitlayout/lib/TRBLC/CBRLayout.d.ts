import React from 'react';
import type { TBLRCSplitLayoutProps } from '../types';
/**
 * CBRLayout 组件
 * 中心-底部-右侧布局组件，支持可拖拽的分割线
 *
 * @description
 * 该组件提供了一个三区域布局：
 * - 中心区域 (Center) - 占据主要空间，自动填充剩余区域
 * - 底部区域 (Bottom) - 位于底部，可配置固定尺寸或百分比
 * - 右侧区域 (Right) - 位于右侧，可配置固定尺寸或百分比
 *
 * 区域之间都有可拖拽的分割线，支持自定义分割线属性，
 * 包括最小/最大尺寸限制、拖拽事件回调等
 *
 * @example
 * ```tsx
 * <CBRLayout
 *   bSplitProps={{ minSize: 100, maxSize: '40%' }}
 *   rSplitProps={{ minSize: 80, maxSize: '30%' }}
 * >
 *   <div>中心内容区域</div>
 *   <div>底部内容区域</div>
 *   <div>右侧内容区域</div>
 * </CBRLayout>
 * ```
 *
 * @param props - 组件属性
 * @param props.bSplitProps - 底部分割线配置属性
 * @param props.rSplitProps - 右侧分割线配置属性
 * @param props.children - 子元素，依次为中心、底部、右侧区域
 * @param ref - 组件引用
 * @returns 渲染的布局组件
 */
declare const CBRLayout: React.NamedExoticComponent<TBLRCSplitLayoutProps & React.RefAttributes<HTMLDivElement>>;
export default CBRLayout;

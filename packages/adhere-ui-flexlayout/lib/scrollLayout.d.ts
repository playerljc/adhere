import React from 'react';
import type { ScrollLayoutContextType, ScrollLayoutProps } from './types';
/**
 * ScrollLayout 上下文
 * 提供滚动布局相关的上下文信息
 */
export declare const ScrollLayoutContext: React.Context<ScrollLayoutContextType>;
/**
 * 使用 ScrollLayout Hook
 * 获取滚动布局上下文信息
 *
 * @returns {ScrollLayoutContextType} 滚动布局上下文
 */
export declare const useScrollLayout: () => ScrollLayoutContextType;
/**
 * ScrollLayout 组件
 * 提供滚动功能的布局容器
 *
 * @param {ScrollLayoutProps} props - 组件属性
 * @returns {JSX.Element} ScrollLayout 组件
 */
declare const ScrollLayout: React.NamedExoticComponent<ScrollLayoutProps>;
export default ScrollLayout;

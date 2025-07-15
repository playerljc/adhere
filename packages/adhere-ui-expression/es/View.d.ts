import React from 'react';
import type { ViewProps } from './types';
/**
 * 表达式视图组件
 * 用于只读显示表达式内容，支持省略号显示
 *
 * @param wrapClassName - 包装器类名
 * @param wrapStyle - 包装器样式
 * @param value - 显示的值
 * @param ellipsisProps - 省略号组件属性
 * @returns JSX元素
 */
declare const View: React.NamedExoticComponent<ViewProps>;
export default View;

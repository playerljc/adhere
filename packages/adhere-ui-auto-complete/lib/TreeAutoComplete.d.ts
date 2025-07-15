import React from 'react';
import type { TreeAutoCompleteProps } from './types';
/**
 * TreeAutoComplete 组件
 * 提供树形结构的自动完成功能，支持搜索、防抖、自定义渲染等特性
 *
 * @param props - 组件属性
 * @param props.classNameWrap - 外层容器类名
 * @param props.styleWrap - 外层容器样式
 * @param props.renderLoading - 自定义加载状态渲染函数
 * @param props.debounceTimeout - 防抖延迟时间
 * @param props.loadData - 数据加载函数
 * @param props.treeData - 树形数据
 * @param props.defaultTreeData - 默认树形数据
 * @param props.emptyContent - 空状态内容
 * @param props.children - 自定义下拉内容渲染函数
 * @param props.treeDataSimpleMode - 是否为简单模式
 * @param props.isUsePath - 是否使用路径模式
 * @param props.treeSelectProps - TreeSelect 组件的其他属性
 * @returns 渲染的组件
 *
 * @example
 * ```tsx
 * <TreeAutoComplete
 *   placeholder="请选择节点"
 *   loadData={async (keyword) => {
 *     const data = await fetchTreeData(keyword);
 *     setTreeData(data);
 *   }}
 *   treeData={treeData}
 *   onChange={(value) => console.log('选中:', value)}
 * />
 * ```
 */
declare const TreeAutoComplete: React.NamedExoticComponent<TreeAutoCompleteProps>;
export default TreeAutoComplete;

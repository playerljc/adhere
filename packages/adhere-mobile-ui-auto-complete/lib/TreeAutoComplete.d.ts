import React from 'react';
import type { TreeAutoCompleteProps } from './types';
/**
 * 树形自动完成组件
 *
 * @description 将带有children的树形数据结构转换为扁平结构，支持树形数据的自动完成功能
 *
 * @param props - 组件属性
 * @param props.treeSelectProps - 树选择组件的属性配置
 * @param props.searchDataSource - 搜索数据源，支持带有children的树形结构
 * @param props.autoCompleteProps - 自动完成组件的其他属性
 *
 * @returns 树形自动完成组件实例
 *
 * @example
 * ```tsx
 * <TreeAutoComplete
 *   searchDataSource={treeData}
 *   treeSelectProps={{
 *     treeDataSimpleMode: true
 *   }}
 *   onChange={handleChange}
 * />
 * ```
 */
declare const TreeAutoComplete: React.NamedExoticComponent<TreeAutoCompleteProps>;
export default TreeAutoComplete;

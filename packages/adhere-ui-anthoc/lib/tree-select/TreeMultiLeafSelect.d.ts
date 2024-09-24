import type { TreeSelectProps } from 'antd';
import React from 'react';
import type { DisplayNameInternal } from '../types';
/**
 * TreeMultiLeafSelect
 * @description 可以多选的只能选叶子节点的TreeSelect
 * @param props
 * @constructor
 */
declare const InternalTreeMultiLeafSelect: React.NamedExoticComponent<TreeSelectProps<any, import("rc-tree-select/lib/TreeSelect").DefaultOptionType>>;
declare const TreeMultiLeafSelect: DisplayNameInternal<typeof InternalTreeMultiLeafSelect>;
export default TreeMultiLeafSelect;

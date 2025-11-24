import type { TreeSelectProps } from 'antd';
import React from 'react';
import type { DisplayNameInternal } from '../types';
/**
 * TreeLeafSelect
 * @description 只能选择叶子节点的TreeSelect
 * @param props
 * @constructor
 */
declare const InternalTreeLeafSelect: React.NamedExoticComponent<TreeSelectProps<any, import("@rc-component/tree-select/lib/interface").DataNode>>;
declare const TreeLeafSelect: DisplayNameInternal<typeof InternalTreeLeafSelect>;
export default TreeLeafSelect;

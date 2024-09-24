import type { TreeSelectProps } from 'antd';
import React from 'react';
import type { DisplayNameInternal } from '../types';
/**
 * TreeCheckedShowAllSelect
 * @description 可以多选的只能选叶子节点的TreeSelect
 * @param props
 * @constructor
 */
declare const InternalTreeCheckedShowAllSelect: React.NamedExoticComponent<TreeSelectProps<any, import("rc-tree-select/lib/TreeSelect").DefaultOptionType>>;
declare const TreeCheckedShowAllSelect: DisplayNameInternal<typeof InternalTreeCheckedShowAllSelect>;
export default TreeCheckedShowAllSelect;

import type { TreeSelectProps } from 'antd';
import React from 'react';
import type { DisplayNameInternal } from '../types';
/**
 * TreeMultiSelect
 * @description 可以多选的TreeSelect
 * @param props
 * @constructor
 */
declare const InternalTreeMultiSelect: React.NamedExoticComponent<TreeSelectProps<any, import("rc-tree-select/lib/TreeSelect").DefaultOptionType>>;
declare const TreeMultiSelect: DisplayNameInternal<typeof InternalTreeMultiSelect>;
export default TreeMultiSelect;

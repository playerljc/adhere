import type { TreeSelectProps } from 'antd';
import React from 'react';
import type { DisplayNameInternal } from '../types';
/**
 * TreeCheckedShowChildSelect
 * @description 可以多选的只能选叶子节点的TreeSelect
 * @param props
 * @constructor
 */
declare const InternalTreeCheckedShowChildSelect: React.NamedExoticComponent<TreeSelectProps<any, import("@rc-component/tree-select/lib/interface").DataNode>>;
declare const TreeCheckedShowChildSelect: DisplayNameInternal<typeof InternalTreeCheckedShowChildSelect>;
export default TreeCheckedShowChildSelect;

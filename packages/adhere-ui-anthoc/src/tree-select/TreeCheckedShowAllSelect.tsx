import type { TreeSelectProps } from 'antd';
import React, { memo } from 'react';

import type { DisplayNameInternal } from '../types';
import TreeSelect from './TreeSelect';

/**
 * TreeCheckedShowAllSelect
 * @description 可以多选的只能选叶子节点的TreeSelect
 * @param props
 * @constructor
 */
const InternalTreeCheckedShowAllSelect = memo<TreeSelectProps>((props) => {
  return <TreeSelect {...props} treeCheckable showCheckedStrategy={TreeSelect.SHOW_ALL} />;
});

const TreeCheckedShowAllSelect = InternalTreeCheckedShowAllSelect as DisplayNameInternal<
  typeof InternalTreeCheckedShowAllSelect
>;
TreeCheckedShowAllSelect.displayName = 'TreeCheckedShowAllSelect';

export default TreeCheckedShowAllSelect;

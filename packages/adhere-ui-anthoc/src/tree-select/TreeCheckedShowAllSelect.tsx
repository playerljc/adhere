import type { TreeSelectProps } from 'antd';
import React, { memo } from 'react';
import type { FC } from 'react';

import TreeSelect from './TreeSelect';

/**
 * TreeCheckedShowAllSelect
 * @description 可以多选的只能选叶子节点的TreeSelect
 * @param props
 * @constructor
 */
const TreeCheckedShowAllSelect: FC<TreeSelectProps> = (props) => {
  return <TreeSelect {...props} treeCheckable showCheckedStrategy={TreeSelect.SHOW_ALL} />;
};

export default memo(TreeCheckedShowAllSelect);

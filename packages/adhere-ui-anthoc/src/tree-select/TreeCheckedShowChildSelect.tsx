import type { TreeSelectProps } from 'antd';
import React, { memo } from 'react';
import type { FC } from 'react';

import TreeSelect from './TreeSelect';

/**
 * TreeCheckedShowChildSelect
 * @description 可以多选的只能选叶子节点的TreeSelect
 * @param props
 * @constructor
 */
const TreeCheckedShowChildSelect: FC<TreeSelectProps> = (props) => {
  return <TreeSelect {...props} treeCheckable />;
};

export default memo(TreeCheckedShowChildSelect);

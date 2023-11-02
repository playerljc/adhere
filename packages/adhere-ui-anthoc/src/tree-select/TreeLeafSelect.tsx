import type { TreeSelectProps } from 'antd';
import React, { memo } from 'react';
import type { FC } from 'react';

import TreeSelect from './TreeSelect';
import useTreeSelectLeaf from './useTreeSelectLeaf';

/**
 * TreeLeafSelect
 * @description 只能选择叶子节点的TreeSelect
 * @param props
 * @constructor
 */
const TreeLeafSelect: FC<TreeSelectProps> = (props) => {
  const targetTreeData = useTreeSelectLeaf(props.treeData);

  return <TreeSelect {...props} treeData={targetTreeData} />;
};

export default memo(TreeLeafSelect);

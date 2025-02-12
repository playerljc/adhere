import type { TreeSelectProps } from 'antd';
import React, { memo } from 'react';

import type { DisplayNameInternal } from '../types';
import TreeSelect from './TreeSelect';
import useTreeSelectLeaf from './useTreeSelectLeaf';

/**
 * TreeLeafSelect
 * @description 只能选择叶子节点的TreeSelect
 * @param props
 * @constructor
 */
const InternalTreeLeafSelect = memo<TreeSelectProps>((props) => {
  const targetTreeData = useTreeSelectLeaf(props.treeData);

  return <TreeSelect {...props} treeData={targetTreeData} />;
});

const TreeLeafSelect = InternalTreeLeafSelect as DisplayNameInternal<typeof InternalTreeLeafSelect>;
TreeLeafSelect.displayName = 'TreeLeafSelect';

export default TreeLeafSelect;

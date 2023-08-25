import React, { FC } from 'react';

import { TreeSelectLeafFormItemProps } from '../../types';
import TreeSelectFormItem from '../TreeSelectFormItem';
import { useTreeSelectLeaf } from '../hooks';

/**
 * TreeSelectLeafFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const TreeSelectLeafFormItem: FC<TreeSelectLeafFormItemProps> = ({ dataSource, ...props }) => {
  const targetDataSource = useTreeSelectLeaf(dataSource);

  return <TreeSelectFormItem {...props} treeData={targetDataSource} /*selectMode="isLeaf"*/ />;
};

export default TreeSelectLeafFormItem;

import React, { FC } from 'react';

import { TreeSelectLeafMultiFormItemProps } from '../../types';
import TreeMultiSelectFormItem from '../TreeMultiSelectFormItem';
import { useTreeSelectLeaf } from '../hooks';

/**
 * TreeSelectLeafMultiFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const TreeSelectLeafMultiFormItem: FC<TreeSelectLeafMultiFormItemProps> = ({
  dataSource,
  ...props
}) => {
  const targetDataSource = useTreeSelectLeaf(dataSource);

  return <TreeMultiSelectFormItem {...props} treeData={targetDataSource} /*selectMode="leaf"*/ />;
};

export default TreeSelectLeafMultiFormItem;

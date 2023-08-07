import React, { FC } from 'react';

import { TreeSelectMultiFormItemProps } from '../../types';
import TreeMultiSelectFormItem from '../TreeMultiSelectFormItem';

/**
 * TreeSelectMultiFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const TreeSelectMultiFormItem: FC<TreeSelectMultiFormItemProps> = ({ dataSource, ...props }) => {
  return <TreeMultiSelectFormItem {...props} treeData={dataSource} /*selectMode="any"*/ />;
};

export default TreeSelectMultiFormItem;

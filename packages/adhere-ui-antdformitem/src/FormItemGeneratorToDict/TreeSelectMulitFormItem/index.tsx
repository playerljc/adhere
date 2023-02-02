import React, { FC } from 'react';

import { TreeSelectMulitFormItemProps } from '../../types';
import TreeMulitSelectFormItem from '../TreeMulitSelectFormItem';

/**
 * TreeSelectMulitFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const TreeSelectMulitFormItem: FC<TreeSelectMulitFormItemProps> = ({ dataSource, ...props }) => {
  return <TreeMulitSelectFormItem {...props} treeData={dataSource} /*selectMode="any"*/ />;
};

export default TreeSelectMulitFormItem;

import React, { FC } from 'react';

import { TreeSelect } from '@baifendian/adhere-ui-anthoc';

import { TreeSelectFormItemProps } from '../../types';

/**
 * TreeSelectFormItem
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const TreeSelectFormItem: FC<TreeSelectFormItemProps> = (props) => {
  return <TreeSelect showSearch allowClear treeNodeFilterProp="title" {...props} />;
};

export default TreeSelectFormItem;

import React from 'react';

import { TreeSelect } from '../../AntFormItemNormalize';

/**
 * TreeSelectFormItem
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function TreeSelectFormItem(props) {
  return <TreeSelect showSearch allowClear treeNodeFilterProp="title" {...props} />;
}

export default TreeSelectFormItem;

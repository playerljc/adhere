import React from 'react';

import TreeSelectFormItem from '../TreeSelectFormItem';

/**
 * TreeMultiSelectFormItem
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function TreeMultiSelectFormItem(props) {
  return <TreeSelectFormItem {...props} multiple treeCheckable />;
}

export default TreeMultiSelectFormItem;

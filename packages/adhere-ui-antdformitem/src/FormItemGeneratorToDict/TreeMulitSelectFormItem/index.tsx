import React from 'react';

import TreeSelectFormItem from '../TreeSelectFormItem';

/**
 * TreeMulitSelectFormItem
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function TreeMulitSelectFormItem(props) {
  return <TreeSelectFormItem {...props} multiple treeCheckable />;
}

export default TreeMulitSelectFormItem;

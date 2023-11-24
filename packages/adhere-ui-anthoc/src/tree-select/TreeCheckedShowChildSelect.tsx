import type { TreeSelectProps } from 'antd';
import React, { memo } from 'react';

import type { DisplayNameInternal } from '../types';
import TreeSelect from './TreeSelect';

/**
 * TreeCheckedShowChildSelect
 * @description 可以多选的只能选叶子节点的TreeSelect
 * @param props
 * @constructor
 */
const InternalTreeCheckedShowChildSelect = memo<TreeSelectProps>((props) => {
  return <TreeSelect {...props} treeCheckable />;
});

const TreeCheckedShowChildSelect = InternalTreeCheckedShowChildSelect as DisplayNameInternal<
  typeof InternalTreeCheckedShowChildSelect
>;
TreeCheckedShowChildSelect.displayName = 'TreeCheckedShowChildSelect';

export default TreeCheckedShowChildSelect;

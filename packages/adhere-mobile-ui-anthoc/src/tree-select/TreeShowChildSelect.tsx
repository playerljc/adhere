import React, { memo } from 'react';

import type { TreeSelectProps } from '@baifendian/adhere-mobile-ui-tree/es/types';

import type { DisplayNameInternal } from '../types';
import TreeSelect from './TreeSelect';

/**
 * TreeCheckedShowChildSelect
 * @description 可以多选的只能选叶子节点的TreeSelect
 * @param props
 * @constructor
 */
const InternalTreeCheckedShowChildSelect = memo<TreeSelectProps>((props) => {
  return <TreeSelect {...props} checkStrictly />;
});

const TreeCheckedShowChildSelect = InternalTreeCheckedShowChildSelect as DisplayNameInternal<
  typeof InternalTreeCheckedShowChildSelect
>;
TreeCheckedShowChildSelect.displayName = 'TreeCheckedShowChildSelect';

export default TreeCheckedShowChildSelect;

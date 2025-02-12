import React, { memo } from 'react';

import type { TreeSelectProps } from '@baifendian/adhere-mobile-ui-tree/es/types';

import type { DisplayNameInternal } from '../types';
import TreeSelect from './TreeSelect';

/**
 * TreeCheckedShowParentSelect
 * @description 可以多选的只能选叶子节点的TreeSelect
 * @param props
 * @constructor
 */
const InternalTreeCheckedShowParentSelect = memo<TreeSelectProps>((props) => {
  return <TreeSelect {...props} checkStrictly={false} />;
});

const TreeCheckedShowParentSelect = InternalTreeCheckedShowParentSelect as DisplayNameInternal<
  typeof InternalTreeCheckedShowParentSelect
>;
TreeCheckedShowParentSelect.displayName = 'TreeCheckedShowParentSelect';

export default TreeCheckedShowParentSelect;

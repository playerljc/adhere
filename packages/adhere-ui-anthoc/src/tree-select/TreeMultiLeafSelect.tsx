import type { TreeSelectProps } from 'antd';
import React, { memo } from 'react';

import type { DisplayNameInternal } from '../types';
import TreeLeafSelect from './TreeLeafSelect';
import useTreeSelectMulti from './useTreeSelectMulti';

/**
 * TreeMultiLeafSelect
 * @description 可以多选的只能选叶子节点的TreeSelect
 * @param props
 * @constructor
 */
const InternalTreeMultiLeafSelect = memo<TreeSelectProps>((props) => {
  const multiProps = useTreeSelectMulti();

  return <TreeLeafSelect {...multiProps} {...props} />;
});

const TreeMultiLeafSelect = InternalTreeMultiLeafSelect as DisplayNameInternal<
  typeof InternalTreeMultiLeafSelect
>;
TreeMultiLeafSelect.displayName = 'TreeMultiLeafSelect';

export default TreeMultiLeafSelect;

import type { TreeSelectProps } from 'antd';
import React, { memo } from 'react';

import type { DisplayNameInternal } from '../types';
import TreeSelect from './TreeSelect';
import useTreeSelectMulti from './useTreeSelectMulti';

/**
 * TreeMultiSelect
 * @description 可以多选的TreeSelect
 * @param props
 * @constructor
 */
const InternalTreeMultiSelect = memo<TreeSelectProps>((props) => {
  const multiProps = useTreeSelectMulti();

  return <TreeSelect {...multiProps} {...props} />;
});

const TreeMultiSelect = InternalTreeMultiSelect as DisplayNameInternal<
  typeof InternalTreeMultiSelect
>;
TreeMultiSelect.displayName = 'TreeMultiSelect';

export default TreeMultiSelect;

import type { TreeSelectProps } from 'antd';
import React, { memo } from 'react';
import type { FC } from 'react';

import TreeSelect from './TreeSelect';
import useTreeSelectMulti from './useTreeSelectMulti';

/**
 * TreeMultiSelect
 * @description 可以多选的TreeSelect
 * @param props
 * @constructor
 */
const TreeMultiSelect: FC<TreeSelectProps> = (props) => {
  const multiProps = useTreeSelectMulti();

  return <TreeSelect {...multiProps} {...props} />;
};

export default memo(TreeMultiSelect);

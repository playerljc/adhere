import type { TreeSelectProps } from 'antd';
import React, { memo } from 'react';
import type { FC } from 'react';

import TreeLeafSelect from './TreeLeafSelect';
import useTreeSelectMulti from './useTreeSelectMulti';

/**
 * TreeMultiLeafSelect
 * @description 可以多选的只能选叶子节点的TreeSelect
 * @param props
 * @constructor
 */
const TreeMultiLeafSelect: FC<TreeSelectProps> = (props) => {
  const multiProps = useTreeSelectMulti();

  return <TreeLeafSelect {...multiProps} {...props} />;
};

export default memo(TreeMultiLeafSelect);

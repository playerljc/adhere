import React, { memo } from 'react';
import type { FC } from 'react';

import type { AsyncTreeMultiLeafSelectProps } from '../types';
import AsyncTreeLeafSelect from './AsyncTreeLeafSelect';
import useTreeSelectMulti from './useTreeSelectMulti';

/**
 * AsyncTreeMultiLeafSelect
 * @description 可以多选的只能选叶子节点的TreeSelect
 * @param props
 * @constructor
 */
const AsyncTreeMultiLeafSelect: FC<AsyncTreeMultiLeafSelectProps> = (props) => {
  const multiProps = useTreeSelectMulti();

  return <AsyncTreeLeafSelect {...multiProps} {...props} />;
};

export default memo(AsyncTreeMultiLeafSelect);

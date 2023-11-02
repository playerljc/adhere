import React, { memo } from 'react';
import type { FC } from 'react';

import type { AsyncTreeMultiSelectProps } from '../types';
import AsyncTreeSelect from './AsyncTreeSelect';
import useTreeSelectMulti from './useTreeSelectMulti';

/**
 * AsyncTreeMultiSelect
 * @description 可以多选的AsyncTreeMultiSelect
 * @param props
 * @constructor
 */
const AsyncTreeMultiSelect: FC<AsyncTreeMultiSelectProps> = (props) => {
  const multiProps = useTreeSelectMulti();

  return <AsyncTreeSelect {...multiProps} {...props} />;
};

export default memo(AsyncTreeMultiSelect);

import React, { memo } from 'react';
import type { FC } from 'react';

import type { AsyncTreeSelectProps } from '../types';
import AsyncTreeSelect from './AsyncTreeSelect';
import TreeSelect from './TreeSelect';

/**
 * AsyncTreeCheckedShowAllSelect
 * @param props
 * @constructor
 */
const AsyncTreeCheckedShowAllSelect: FC<AsyncTreeSelectProps> = (props) => (
  <AsyncTreeSelect {...props} treeCheckable showCheckedStrategy={TreeSelect.SHOW_ALL} />
);

export default memo(AsyncTreeCheckedShowAllSelect);

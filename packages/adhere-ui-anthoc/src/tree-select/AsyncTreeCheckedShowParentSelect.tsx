import React, { memo } from 'react';
import type { FC } from 'react';

import type { AsyncTreeSelectProps } from '../types';
import AsyncTreeSelect from './AsyncTreeSelect';
import TreeSelect from './TreeSelect';

/**
 * AsyncTreeCheckedShowParentSelect
 * @param props
 * @constructor
 */
const AsyncTreeCheckedShowParentSelect: FC<AsyncTreeSelectProps> = (props) => (
  <AsyncTreeSelect {...props} treeCheckable showCheckedStrategy={TreeSelect.SHOW_PARENT} />
);

export default memo(AsyncTreeCheckedShowParentSelect);

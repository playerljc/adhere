import React, { memo } from 'react';
import type { FC } from 'react';

import type { AsyncTreeSelectProps } from '../types';
import AsyncTreeSelect from './AsyncTreeSelect';

/**
 * AsyncTreeCheckedShowChildSelect
 * @param props
 * @constructor
 */
const AsyncTreeCheckedShowChildSelect: FC<AsyncTreeSelectProps> = (props) => (
  <AsyncTreeSelect {...props} treeCheckable />
);

export default memo(AsyncTreeCheckedShowChildSelect);

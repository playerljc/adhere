import React, { memo } from 'react';
import type { FC } from 'react';

import type { AsyncCascaderProps } from '../types';
import AsyncCascader from './AsyncCascader';

/**
 * AsyncCascaderChangeOnSelect
 * @param props
 * @constructor
 */
const AsyncCascaderChangeOnSelect: FC<AsyncCascaderProps> = (props) => (
  <AsyncCascader {...props} changeOnSelect />
);

export default memo(AsyncCascaderChangeOnSelect);

import React, { memo } from 'react';
import type { FC } from 'react';

import type { AsyncCascaderProps } from '../types';
import AsyncCascader from './AsyncCascader';

/**
 * AsyncCascaderMulti
 * @param props
 * @constructor
 */
const AsyncCascaderMulti: FC<AsyncCascaderProps> = (props) => (
  <AsyncCascader multiple maxTagCount="responsive" {...props} />
);

export default memo(AsyncCascaderMulti);

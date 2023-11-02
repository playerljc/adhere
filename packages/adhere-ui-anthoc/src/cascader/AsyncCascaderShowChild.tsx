import React, { memo } from 'react';
import type { FC } from 'react';

import type { AsyncCascaderProps } from '../types';
import AsyncCascaderMulti from './AsyncCascaderMulti';
import Cascader from './Cascader';

/**
 * AsyncCascaderShowChild
 * @param props
 * @constructor
 */
const AsyncCascaderShowChild: FC<AsyncCascaderProps> = (props) => (
  <AsyncCascaderMulti {...props} showCheckedStrategy={Cascader.SHOW_CHILD} />
);

export default memo(AsyncCascaderShowChild);

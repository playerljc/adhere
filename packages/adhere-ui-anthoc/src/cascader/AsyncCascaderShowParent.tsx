import React, { memo } from 'react';
import type { FC } from 'react';

import type { AsyncCascaderProps } from '../types';
import AsyncCascaderMulti from './AsyncCascaderMulti';
import Cascader from './Cascader';

/**
 * AsyncCascaderShowParent
 * @param props
 * @constructor
 */
const AsyncCascaderShowParent: FC<AsyncCascaderProps> = (props) => (
  <AsyncCascaderMulti {...props} showCheckedStrategy={Cascader.SHOW_PARENT} />
);

export default memo(AsyncCascaderShowParent);

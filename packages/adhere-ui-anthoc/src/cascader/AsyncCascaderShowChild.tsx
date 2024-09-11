import React, { memo } from 'react';

import type { AsyncCascaderProps, DisplayNameInternal } from '../types';
import AsyncCascaderMulti from './AsyncCascaderMulti';
import Cascader from './Cascader';

/**
 * AsyncCascaderShowChild
 * @param props
 * @constructor
 */
const InternalAsyncCascaderShowChild = memo<AsyncCascaderProps>((props) => (
  <AsyncCascaderMulti {...props} showCheckedStrategy={Cascader.SHOW_CHILD} />
));

const AsyncCascaderShowChild = InternalAsyncCascaderShowChild as DisplayNameInternal<
  typeof InternalAsyncCascaderShowChild
>;
AsyncCascaderShowChild.displayName = 'AsyncCascaderShowChild';

export default AsyncCascaderShowChild;

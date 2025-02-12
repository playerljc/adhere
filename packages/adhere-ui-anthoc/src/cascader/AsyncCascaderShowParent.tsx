import React, { memo } from 'react';

import type { AsyncCascaderProps, DisplayNameInternal } from '../types';
import AsyncCascaderMulti from './AsyncCascaderMulti';
import Cascader from './Cascader';

/**
 * AsyncCascaderShowParent
 * @param props
 * @constructor
 */
const InternalAsyncCascaderShowParent = memo<AsyncCascaderProps>((props) => (
  <AsyncCascaderMulti {...props} showCheckedStrategy={Cascader.SHOW_PARENT} />
));

const AsyncCascaderShowParent = InternalAsyncCascaderShowParent as DisplayNameInternal<
  typeof InternalAsyncCascaderShowParent
>;
AsyncCascaderShowParent.displayName = 'AsyncCascaderShowParent';

export default AsyncCascaderShowParent;

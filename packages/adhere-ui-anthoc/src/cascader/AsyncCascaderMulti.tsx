import React, { memo } from 'react';

import type { AsyncCascaderProps, DisplayNameInternal } from '../types';
import AsyncCascader from './AsyncCascader';

/**
 * AsyncCascaderMulti
 * @param props
 * @constructor
 */
const InternalAsyncCascaderMulti = memo<AsyncCascaderProps>((props) => (
  <AsyncCascader multiple maxTagCount="responsive" {...props} />
));

const AsyncCascaderMulti = InternalAsyncCascaderMulti as DisplayNameInternal<
  typeof InternalAsyncCascaderMulti
>;
AsyncCascaderMulti.displayName = 'AsyncCascaderMulti';

export default AsyncCascaderMulti;

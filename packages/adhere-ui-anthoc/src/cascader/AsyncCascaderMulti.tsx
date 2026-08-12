import React, { memo } from 'react';

import type { AsyncCascaderProps, DisplayNameInternal } from '../types';
import AsyncCascader from './AsyncCascader';

/**
 * AsyncCascaderMulti
 * @param props
 * @constructor
 */
const InternalAsyncCascaderMulti = memo<AsyncCascaderProps>((props) => (
  // @ts-ignore
  <AsyncCascader {...props} multiple maxTagCount="responsive" />
));

const AsyncCascaderMulti = InternalAsyncCascaderMulti as DisplayNameInternal<
  typeof InternalAsyncCascaderMulti
>;
AsyncCascaderMulti.displayName = 'AsyncCascaderMulti';

export default AsyncCascaderMulti;

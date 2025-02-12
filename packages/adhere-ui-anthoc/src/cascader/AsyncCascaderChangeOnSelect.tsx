import React, { memo } from 'react';

import type { AsyncCascaderProps, DisplayNameInternal } from '../types';
import AsyncCascader from './AsyncCascader';

/**
 * AsyncCascaderChangeOnSelect
 * @param props
 * @constructor
 */
const InternalAsyncCascaderChangeOnSelect = memo<AsyncCascaderProps>((props) => (
  <AsyncCascader {...props} changeOnSelect />
));

const AsyncCascaderChangeOnSelect = InternalAsyncCascaderChangeOnSelect as DisplayNameInternal<
  typeof InternalAsyncCascaderChangeOnSelect
>;
AsyncCascaderChangeOnSelect.displayName = 'AsyncCascaderChangeOnSelect';

export default AsyncCascaderChangeOnSelect;

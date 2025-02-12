import React, { memo } from 'react';

import type { AsyncTreeSelectProps, DisplayNameInternal } from '../types';
import AsyncTreeSelect from './AsyncTreeSelect';

/**
 * AsyncTreeCheckedShowChildSelect
 * @param props
 * @constructor
 */
const InternalAsyncTreeShowAllSelect = memo<AsyncTreeSelectProps>((props) => (
  <AsyncTreeSelect {...props} checkStrictly={false} />
));

const AsyncTreeShowAllSelect = InternalAsyncTreeShowAllSelect as DisplayNameInternal<
  typeof InternalAsyncTreeShowAllSelect
>;
AsyncTreeShowAllSelect.displayName = 'AsyncTreeShowAllSelect';

export default AsyncTreeShowAllSelect;

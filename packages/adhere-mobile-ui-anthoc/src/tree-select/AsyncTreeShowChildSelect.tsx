import React, { memo } from 'react';

import type { AsyncTreeSelectProps, DisplayNameInternal } from '../types';
import AsyncTreeSelect from './AsyncTreeSelect';
import TreeSelect from './TreeSelect';

/**
 * AsyncTreeCheckedShowParentSelect
 * @param props
 * @constructor
 */
const InternalAsyncTreeShowChildSelect = memo<AsyncTreeSelectProps>((props) => (
  <AsyncTreeSelect {...props} checkStrictly />
));

const AsyncTreeShowChildSelect = InternalAsyncTreeShowChildSelect as DisplayNameInternal<
  typeof InternalAsyncTreeShowChildSelect
>;
AsyncTreeShowChildSelect.displayName = 'AsyncTreeShowChildSelect';

export default AsyncTreeShowChildSelect;

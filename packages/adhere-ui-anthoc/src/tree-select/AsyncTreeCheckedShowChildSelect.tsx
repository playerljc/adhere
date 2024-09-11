import React, { memo } from 'react';

import type { AsyncTreeSelectProps, DisplayNameInternal } from '../types';
import AsyncTreeSelect from './AsyncTreeSelect';

/**
 * AsyncTreeCheckedShowChildSelect
 * @param props
 * @constructor
 */
const InternalAsyncTreeCheckedShowChildSelect = memo<AsyncTreeSelectProps>((props) => (
  <AsyncTreeSelect {...props} treeCheckable />
));

const AsyncTreeCheckedShowChildSelect =
  InternalAsyncTreeCheckedShowChildSelect as DisplayNameInternal<
    typeof InternalAsyncTreeCheckedShowChildSelect
  >;
AsyncTreeCheckedShowChildSelect.displayName = 'AsyncTreeCheckedShowChildSelect';

export default AsyncTreeCheckedShowChildSelect;

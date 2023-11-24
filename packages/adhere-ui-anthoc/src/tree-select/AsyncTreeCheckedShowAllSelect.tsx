import React, { memo } from 'react';

import type { AsyncTreeSelectProps, DisplayNameInternal } from '../types';
import AsyncTreeSelect from './AsyncTreeSelect';
import TreeSelect from './TreeSelect';

/**
 * AsyncTreeCheckedShowAllSelect
 * @param props
 * @constructor
 */
const InternalAsyncTreeCheckedShowAllSelect = memo<AsyncTreeSelectProps>((props) => (
  <AsyncTreeSelect {...props} treeCheckable showCheckedStrategy={TreeSelect.SHOW_ALL} />
));

const AsyncTreeCheckedShowAllSelect = InternalAsyncTreeCheckedShowAllSelect as DisplayNameInternal<
  typeof InternalAsyncTreeCheckedShowAllSelect
>;
AsyncTreeCheckedShowAllSelect.displayName = 'AsyncTreeCheckedShowAllSelect';

export default AsyncTreeCheckedShowAllSelect;

import React, { memo } from 'react';

import type { AsyncTreeSelectProps, DisplayNameInternal } from '../types';
import AsyncTreeSelect from './AsyncTreeSelect';
import TreeSelect from './TreeSelect';

/**
 * AsyncTreeCheckedShowParentSelect
 * @param props
 * @constructor
 */
const InternalAsyncTreeCheckedShowParentSelect = memo<AsyncTreeSelectProps>((props) => (
  <AsyncTreeSelect {...props} treeCheckable showCheckedStrategy={TreeSelect.SHOW_PARENT} />
));

const AsyncTreeCheckedShowParentSelect =
  InternalAsyncTreeCheckedShowParentSelect as DisplayNameInternal<
    typeof InternalAsyncTreeCheckedShowParentSelect
  >;
AsyncTreeCheckedShowParentSelect.displayName = 'AsyncTreeCheckedShowParentSelect';

export default AsyncTreeCheckedShowParentSelect;

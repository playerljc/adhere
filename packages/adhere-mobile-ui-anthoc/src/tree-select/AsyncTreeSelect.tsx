import React, { memo } from 'react';

import type { AsyncTreeSelectProps, DisplayNameInternal } from '../types';
import TreeSelect from './TreeSelect';

/**
 * AsyncTreeSelect
 * @param cascadeParams
 * @param onDataSourceChange
 * @param fetchBranch
 * @param fetchData
 * @param defaultId
 * @param props
 * @constructor
 */
const InternalAsyncTreeSelect = memo<AsyncTreeSelectProps>((props) => {
  return <TreeSelect {...props} />;
});

const AsyncTreeSelect = InternalAsyncTreeSelect as DisplayNameInternal<
  typeof InternalAsyncTreeSelect
>;
AsyncTreeSelect.displayName = 'AsyncTreeSelect';

export default AsyncTreeSelect;

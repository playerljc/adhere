import React, { memo } from 'react';

import type { AsyncTreeMultiSelectProps, DisplayNameInternal } from '../types';
import AsyncTreeSelect from './AsyncTreeSelect';
import useTreeSelectMulti from './useTreeSelectMulti';

/**
 * AsyncTreeMultiSelect
 * @description 可以多选的AsyncTreeMultiSelect
 * @param props
 * @constructor
 */
const InternalAsyncTreeMultiSelect = memo<AsyncTreeMultiSelectProps>((props) => {
  const multiProps = useTreeSelectMulti();

  return <AsyncTreeSelect {...multiProps} {...props} />;
});

const AsyncTreeMultiSelect = InternalAsyncTreeMultiSelect as DisplayNameInternal<
  typeof InternalAsyncTreeMultiSelect
>;
AsyncTreeMultiSelect.displayName = 'AsyncTreeMultiSelect';

export default AsyncTreeMultiSelect;

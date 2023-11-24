import React, { memo } from 'react';

import type { AsyncTreeMultiLeafSelectProps, DisplayNameInternal } from '../types';
import AsyncTreeLeafSelect from './AsyncTreeLeafSelect';
import useTreeSelectMulti from './useTreeSelectMulti';

/**
 * AsyncTreeMultiLeafSelect
 * @description 可以多选的只能选叶子节点的TreeSelect
 * @param props
 * @constructor
 */
const InternalAsyncTreeMultiLeafSelect = memo<AsyncTreeMultiLeafSelectProps>((props) => {
  const multiProps = useTreeSelectMulti();

  return <AsyncTreeLeafSelect {...multiProps} {...props} />;
});

const AsyncTreeMultiLeafSelect = InternalAsyncTreeMultiLeafSelect as DisplayNameInternal<
  typeof InternalAsyncTreeMultiLeafSelect
>;
AsyncTreeMultiLeafSelect.displayName = 'AsyncTreeMultiLeafSelect';

export default AsyncTreeMultiLeafSelect;

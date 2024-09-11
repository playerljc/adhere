import React, { memo } from 'react';

import type { AsyncTreeSelectProps, DisplayNameInternal } from '../types';
import TreeSelect from './TreeSelect';
import useAsyncTreeSelect from './useAsyncTreeSelect';

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
const InternalAsyncTreeSelect = memo<AsyncTreeSelectProps>(
  ({ cascadeParams, onDataSourceChange, fetchBranch, fetchData, defaultId, ...props }) => {
    const { treeData, onLoadData, onChange } = useAsyncTreeSelect({
      cascadeParams,
      onDataSourceChange,
      fetchBranch,
      fetchData,
      defaultId,
      value: props.value,
      treeDataSimpleMode: props.treeDataSimpleMode,
    });

    return (
      <TreeSelect
        {...props}
        virtual={false}
        treeData={treeData}
        loadData={onLoadData}
        onChange={(...params) => onChange(props.onChange, params)}
      />
    );
  },
);

const AsyncTreeSelect = InternalAsyncTreeSelect as DisplayNameInternal<
  typeof InternalAsyncTreeSelect
>;
AsyncTreeSelect.displayName = 'AsyncTreeSelect';

export default AsyncTreeSelect;

import React, { memo } from 'react';

import type { AsyncCascaderProps, DisplayNameInternal } from '../types';
import Cascader from './CascaderTreeSelect';
import useAsyncCascader from './useAsyncCascader';

/**
 * AsyncCascader
 * @param cascadeParams
 * @param onDataSourceChange
 * @param fetchBranch
 * @param fetchData
 * @param defaultId
 * @param treeDataSimpleMode
 * @param onChange
 * @param props
 * @constructor
 */
const InternalAsyncCascader = memo<AsyncCascaderProps>(
  ({
    cascadeParams,
    onDataSourceChange,
    fetchBranch,
    fetchData,
    defaultId,
    onChange,
    ...props
  }) => {
    const {
      treeData,
      onLoadData,
      onChange: onHookChange,
    } = useAsyncCascader({
      cascadeParams,
      onDataSourceChange,
      fetchBranch,
      fetchData,
      defaultId,
      value: props.value,
      treeDataSimpleMode: props.treeDataSimpleMode,
    });

    return (
      // @ts-ignore
      <Cascader
        {...props}
        options={treeData}
        loadData={onLoadData}
        onChange={(...params) => onHookChange(onChange, params)}
      />
    );
  },
);

const AsyncCascader = InternalAsyncCascader as DisplayNameInternal<typeof InternalAsyncCascader>;
AsyncCascader.displayName = 'AsyncCascader';

export default AsyncCascader;

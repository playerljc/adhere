import React, { memo } from 'react';
import type { FC } from 'react';

import type { AsyncCascaderProps } from '../types';
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
const AsyncCascader: FC<AsyncCascaderProps> = ({
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
};

export default memo(AsyncCascader);

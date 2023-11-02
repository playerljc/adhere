import React, { memo } from 'react';
import type { FC } from 'react';

import type { AsyncTreeLeafSelectProps } from '../types';
import TreeSelect from './TreeSelect';
import useAsyncTreeSelect from './useAsyncTreeSelect';
import useTreeSelectLeaf from './useTreeSelectLeaf';

/**
 * AsyncTreeLeafSelect
 * @description 只能选择叶子节点的TreeSelect
 * @param cascadeParams
 * @param onDataSourceChange
 * @param fetchBranch
 * @param fetchData
 * @param defaultId
 * @param props
 * @constructor
 */
const AsyncTreeLeafSelect: FC<AsyncTreeLeafSelectProps> = ({
  cascadeParams,
  onDataSourceChange,
  fetchBranch,
  fetchData,
  defaultId,
  ...props
}) => {
  const { treeData, onLoadData, onChange } = useAsyncTreeSelect({
    cascadeParams,
    onDataSourceChange,
    fetchBranch,
    fetchData,
    defaultId,
    value: props.value,
    treeDataSimpleMode: props.treeDataSimpleMode,
  });

  const targetTreeData = useTreeSelectLeaf(treeData);

  return (
    <TreeSelect
      {...props}
      virtual={false}
      treeData={targetTreeData}
      loadData={onLoadData}
      onChange={(...params) => onChange(props.onChange, params)}
    />
  );
};

export default memo(AsyncTreeLeafSelect);

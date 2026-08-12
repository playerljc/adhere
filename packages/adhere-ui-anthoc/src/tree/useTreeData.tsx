import { useMemo } from 'react';

import Util from '@baifendian/adhere-util';
import type { IFlatTreeArrNode } from '@baifendian/adhere-util/es/types';

import type { UseTreeData } from '../types';

function resolveArrayToAntdTreeConfig(
  treeDataSimpleMode: Parameters<UseTreeData>[0]['treeDataSimpleMode'],
  config?: IFlatTreeArrNode,
): IFlatTreeArrNode {
  if (typeof treeDataSimpleMode === 'object' && treeDataSimpleMode) {
    return {
      keyAttr:
        treeDataSimpleMode.id != null
          ? String(treeDataSimpleMode.id)
          : (config?.keyAttr ?? 'id'),
      titleAttr: config?.titleAttr ?? 'title',
      parentIdAttr:
        treeDataSimpleMode.pId != null
          ? String(treeDataSimpleMode.pId)
          : (config?.parentIdAttr ?? 'pId'),
      rootParentId: treeDataSimpleMode.rootPId ?? config?.rootParentId ?? 0,
    };
  }

  return {
    keyAttr: config?.keyAttr ?? 'id',
    titleAttr: config?.titleAttr ?? 'title',
    parentIdAttr: config?.parentIdAttr ?? 'pId',
    rootParentId: config?.rootParentId ?? 0,
  };
}

/**
 * useTreeData
 * @description 支持 treeDataSimpleMode，将扁平数据转为 Antd Tree 结构
 */
const useTreeData: UseTreeData = ({ treeData, treeDataSimpleMode, config }) => {
  return useMemo(() => {
    if (!treeDataSimpleMode) {
      return treeData;
    }

    return Util.arrayToAntdTree(
      treeData ?? [],
      resolveArrayToAntdTreeConfig(treeDataSimpleMode, config),
    );
  }, [treeData, treeDataSimpleMode, config]);
};

export default useTreeData;

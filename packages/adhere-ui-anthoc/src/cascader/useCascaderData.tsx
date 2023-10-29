import React, { useCallback } from 'react';

import Util from '@baifendian/adhere-util';

import type { UseCascaderData } from '../types';

const useCascaderData: UseCascaderData = ({ options, treeDataSimpleMode, config }) => {
  const getTreeData = useCallback(
    () =>
      // @ts-ignore
      Util.arrayToAntdTreeSelect(options, {
        keyAttr: config?.keyAttr ?? 'value',
        titleAttr: config?.titleAttr ?? 'value',
        rootParentId: config?.rootParentId ?? 0,
        parentIdAttr: config?.parentIdAttr ?? 'pId',
      }),
    [options],
  );

  return treeDataSimpleMode ? getTreeData() : options;
};

export default useCascaderData;

import { useMemo } from 'react';

import Util from '@baifendian/adhere-util';

import type { UseCascaderData } from '../types';

const useCascaderData: UseCascaderData = ({ options, treeDataSimpleMode, config }) => {
  const treeData = useMemo(
    () =>
      // @ts-ignore
      Util.arrayToAntdTreeSelect(options, {
        keyAttr: config?.keyAttr ?? 'value',
        titleAttr: config?.titleAttr ?? 'title',
        rootParentId: config?.rootParentId ?? 0,
        parentIdAttr: config?.parentIdAttr ?? 'pId',
      }),
    [options, config?.keyAttr, config?.titleAttr, config?.rootParentId, config?.parentIdAttr],
  );

  return treeDataSimpleMode ? treeData : options;
};

export default useCascaderData;

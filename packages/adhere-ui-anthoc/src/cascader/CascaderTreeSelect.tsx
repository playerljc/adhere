import React from 'react';
import type { FC } from 'react';

import type { CascaderTreeSelectProps } from '../types';
import Cascader from './Cascader';
import useCascaderData from './useCascaderData';

const CascaderTreeSelect: FC<CascaderTreeSelectProps> = ({
  treeDataSimpleMode,
  arrayToAntdTreeSelectConfig,
  options,
  ...props
}) => {
  const _options = useCascaderData({
    options,
    treeDataSimpleMode,
    config: arrayToAntdTreeSelectConfig ?? {
      keyAttr: 'value',
      titleAttr: 'value',
      rootParentId: 0,
      parentIdAttr: 'pId',
    },
  });

  return <Cascader {...props} options={_options} />;
};

export default CascaderTreeSelect;

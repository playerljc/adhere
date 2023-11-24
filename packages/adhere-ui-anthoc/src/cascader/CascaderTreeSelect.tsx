import React, { memo } from 'react';

import type { CascaderTreeSelectProps, DisplayNameInternal } from '../types';
import Cascader from './Cascader';
import useCascaderData from './useCascaderData';

const InternalCascaderTreeSelect = memo<CascaderTreeSelectProps>(
  ({ treeDataSimpleMode, arrayToAntdTreeSelectConfig, options, ...props }) => {
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
  },
);

const CascaderTreeSelect = InternalCascaderTreeSelect as DisplayNameInternal<
  typeof InternalCascaderTreeSelect
>;
CascaderTreeSelect.displayName = 'CascaderTreeSelect';

export default CascaderTreeSelect;

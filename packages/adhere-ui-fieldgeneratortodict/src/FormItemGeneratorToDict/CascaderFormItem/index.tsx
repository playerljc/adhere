import React, { FC } from 'react';

import { Cascader } from '@baifendian/adhere-ui-anthoc';

import { CascaderFormItemProps } from '../../types';
import { useCascaderData } from '../hooks';

/**
 * CascaderFormItem
 * @param treeDataSimpleMode
 * @param arrayToAntdTreeSelectConfig
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const CascaderFormItem: FC<CascaderFormItemProps> = ({
  treeDataSimpleMode,
  arrayToAntdTreeSelectConfig,
  ...props
}) => {
  const options = useCascaderData({
    options: props.options,
    treeDataSimpleMode,
    config: arrayToAntdTreeSelectConfig,
  });

  return <Cascader {...props} options={options} />;
};

export default CascaderFormItem;

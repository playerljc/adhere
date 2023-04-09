import React, { FC } from 'react';

import { Cascader } from '@baifendian/adhere-ui-anthoc';

import { CascaderFormItemProps } from '../../types';

/**
 * CascaderFormItem
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const CascaderFormItem: FC<CascaderFormItemProps> = (props) => {
  return <Cascader {...props} />;
};

export default CascaderFormItem;

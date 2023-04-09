import React, { FC } from 'react';

import { CascaderMulitFormItemProps } from '../../types';
import CascaderFormItem from '../CascaderFormItem';

/**
 * CascaderMulitFormItem
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const CascaderMulitFormItem: FC<CascaderMulitFormItemProps> = (props) => {
  // @ts-ignore
  return <CascaderFormItem {...props} multiple maxTagCount="responsive" />;
};

export default CascaderMulitFormItem;

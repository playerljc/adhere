import React, { FC } from 'react';

import { CascaderMultiFormItemProps } from '../../types';
import CascaderFormItem from '../CascaderFormItem';

/**
 * CascaderMultiFormItem
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const CascaderMultiFormItem: FC<CascaderMultiFormItemProps> = (props) => {
  // @ts-ignore
  return <CascaderFormItem {...props} multiple maxTagCount="responsive" />;
};

export default CascaderMultiFormItem;

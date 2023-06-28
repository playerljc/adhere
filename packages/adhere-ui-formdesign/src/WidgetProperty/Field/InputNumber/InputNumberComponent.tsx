import { InputNumber } from 'antd';
import React from 'react';
import type { FC } from 'react';

import { WidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';

/**
 * InputNumberComponent
 * @param props
 * @constructor
 */
const InputNumberComponent: FC<WidgetPropertyFieldProps> = ({ props }) => {
  return <InputNumber {...props} />;
};

export default InputNumberComponent;

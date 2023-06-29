import { Input, InputProps } from 'antd';
import React from 'react';
import type { FC } from 'react';

import { WidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';

/**
 * InputComponent
 * @param props
 * @constructor
 */
const InputComponent: FC<WidgetPropertyFieldProps<InputProps, string>> = ({ props }) => {
  return <Input {...props} />;
};

export default InputComponent;

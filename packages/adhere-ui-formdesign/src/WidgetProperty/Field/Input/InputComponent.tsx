import { Input } from 'antd';
import React from 'react';
import type { FC } from 'react';

import { WidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';

/**
 * InputComponent
 * @param props
 * @constructor
 */
const InputComponent: FC<WidgetPropertyFieldProps> = ({ props }) => {
  return <Input {...props} />;
};

export default InputComponent;

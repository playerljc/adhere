import { Switch } from 'antd';
import React from 'react';
import type { FC } from 'react';

import { WidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';

/**
 * SwitchComponent
 * @param props
 * @constructor
 */
const SwitchComponent: FC<WidgetPropertyFieldProps> = ({ props }) => {
  return <Switch {...props} />;
};

export default SwitchComponent;

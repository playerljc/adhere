import { Input } from 'antd';
import React from 'react';
import type { FC } from 'react';

import { WidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';

/**
 * DataSourceComponent
 * @param props
 * @constructor
 */
const DataSourceComponent: FC<WidgetPropertyFieldProps> = ({ props }) => {
  return <Input {...props} />;
};

export default DataSourceComponent;

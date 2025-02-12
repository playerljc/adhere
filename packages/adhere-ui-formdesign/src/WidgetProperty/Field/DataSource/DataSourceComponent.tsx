import { Input } from 'antd';
import React from 'react';
import type { FC } from 'react';

import { WidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';

/**
 * DataSourceComponent
 * @param props
 * @constructor
 */
const DataSourceComponent: FC<WidgetPropertyFieldProps<any, any>> = ({ props }) => {
  return <Input {...props} />;
};

export default DataSourceComponent;

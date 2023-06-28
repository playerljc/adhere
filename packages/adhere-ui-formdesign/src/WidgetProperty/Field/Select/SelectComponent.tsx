import { Select } from 'antd';
import React from 'react';
import type { FC } from 'react';

import { WidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';

/**
 * SelectComponent
 * @param props
 * @constructor
 */
const SelectComponent: FC<WidgetPropertyFieldProps> = ({ props }) => {
  const { dataSource, ...selectProps } = props;

  return (
    <Select {...selectProps}>
      {(dataSource || []).map(({ label, value }) => (
        <Select.Option key={value} value={value}>
          {label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectComponent;

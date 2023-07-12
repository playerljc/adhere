import { Select } from 'antd';
import React from 'react';
import type { FC } from 'react';

import {
  SelectWidgetPropertyFieldProps,
  WidgetPropertyFieldProps,
} from '../../../types/WidgetPropertyFieldTypes';

/**
 * SelectComponent
 * @constructor
 * @param props
 */
const SelectComponent: FC<WidgetPropertyFieldProps<SelectWidgetPropertyFieldProps, string>> = (
  props,
) => {
  const {
    value,
    onChange,
    props: { value: defaultValue, dataSource, ...selectProps },
  } = props;

  return (
    <Select defaultValue={defaultValue} value={value} onChange={onChange} {...selectProps}>
      {(dataSource ?? []).map(({ label, value }) => (
        <Select.Option key={value} value={value}>
          {label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectComponent;

import React, { FC } from 'react';

import { Select } from '@baifendian/adhere-ui-anthoc';

import { SelectFormItemProps } from '../../types';

// @ts-ignore
const { Option } = Select;

/**
 * SelectFormItem
 * @param selectProps
 * @param dataSource
 * @constructor
 */
const SelectFormItem: FC<SelectFormItemProps> = ({ selectProps, dataSource }) => {
  return (
    <Select {...(selectProps || {})}>
      {(dataSource || []).map((item) => (
        <Option key={item.value} value={item.value}>
          {item.label}
        </Option>
      ))}
    </Select>
  );
};

export default SelectFormItem;

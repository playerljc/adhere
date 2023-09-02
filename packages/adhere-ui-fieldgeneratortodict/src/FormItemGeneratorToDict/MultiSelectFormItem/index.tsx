import React, { FC } from 'react';

import { MultipleSelect } from '@baifendian/adhere-ui-anthoc';

import { SelectFormItemProps } from '../../types';

// @ts-ignore
const { Option } = MultipleSelect;

/**
 * MultiSelectFormItem
 * @param selectProps
 * @param dataSource
 * @return {JSX.Element}
 * @constructor
 */
const MultiSelectFormItem: FC<SelectFormItemProps> = ({ selectProps, dataSource }) => {
  function onChange(...params: [any, any]) {
    selectProps?.onChange?.(...(params ?? []), dataSource);
  }

  return (
    <MultipleSelect {...selectProps} onChange={onChange}>
      {dataSource.map((item) => (
        <Option key={item.value} value={item.value}>
          {item.label}
        </Option>
      ))}
    </MultipleSelect>
  );
};

export default MultiSelectFormItem;

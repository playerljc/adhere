import React, { FC } from 'react';

import { MultipleSelect } from '../../AntFormItemNormalize';
import { SelectFormItemProps } from '../../types';

// @ts-ignore
const { Option } = MultipleSelect;

/**
 * MulitSelectFormItem
 * @param selectProps
 * @param dataSource
 * @return {JSX.Element}
 * @constructor
 */
const MulitSelectFormItem: FC<SelectFormItemProps> = ({ selectProps, dataSource }) => {
  return (
    <MultipleSelect {...selectProps}>
      {dataSource.map((item) => (
        <Option key={item.value} value={item.value}>
          {item.label}
        </Option>
      ))}
    </MultipleSelect>
  );
};

export default MulitSelectFormItem;

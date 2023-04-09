import React, { FC, useState } from 'react';

import { Checkbox, Space } from '@baifendian/adhere-ui-anthoc';

import { RadioSelectFormItemProps } from '../../types';
import MulitSelectFormItem from '../MulitSelectFormItem';

/**
 * CheckBoxSelectFormItem
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const CheckBoxSelectFormItem: FC<RadioSelectFormItemProps> = (props) => {
  const [inputValue, setInputValue] = useState('');

  /**
   * renderDropdownRender
   * @return {JSX.Element}
   */
  function renderDropdownRender() {
    const data = inputValue
      ? props.dataSource.filter((t) => t.label.indexOf(inputValue) !== -1)
      : props.dataSource;

    return (
      <Checkbox.Group
        style={{ padding: 10 }}
        {...props}
        onChange={(values) => {
          props?.onChange?.(values);
        }}
      >
        <Space direction="vertical">
          {data.map((t) => (
            <Checkbox key={t.value} value={t.value} disabled={t.disabled}>
              {t.label}
            </Checkbox>
          ))}
        </Space>
      </Checkbox.Group>
    );
  }

  return (
    <MulitSelectFormItem
      selectProps={{
        value: props.value,
        dropdownRender: renderDropdownRender,
        onChange: (values) => {
          props?.onChange?.(values);
        },
        filterOption: () => {
          return false;
        },
        onSearch: (inputValue) => setInputValue(inputValue),
        onBlur: () => {
          setInputValue('');
        },
        onClear: () => {
          setInputValue('');
        },
        ...(props.selectProps || {}),
      }}
      dataSource={props.dataSource}
    />
  );
};

export default CheckBoxSelectFormItem;

import React, { FC, useState } from 'react';

import { Radio, Space } from '../../AntFormItemNormalize';
import { RadioSelectFormItemProps } from '../../types';
import SelectFormItem from '../SelectFormItem';

/**
 * RadioSelectFormItem
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const RadioSelectFormItem: FC<RadioSelectFormItemProps> = (props) => {
  const [inputValue, setInputValue] = useState<string>('');

  /**
   * renderDropdownRender
   * @return {JSX.Element}
   */
  function renderDropdownRender() {
    const data = inputValue
      ? props.dataSource.filter((t) => t.label.indexOf(inputValue) !== -1)
      : props.dataSource;

    return (
      <Radio.Group
        style={{ padding: 10 }}
        {...props}
        onChange={(e) => {
          props?.onChange?.(e.target.value);
        }}
      >
        <Space direction="vertical">
          {data.map((t) => (
            <Radio key={t.value} value={t.value} disabled={t.disabled}>
              {t.label}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    );
  }

  return (
    <SelectFormItem
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

export default RadioSelectFormItem;

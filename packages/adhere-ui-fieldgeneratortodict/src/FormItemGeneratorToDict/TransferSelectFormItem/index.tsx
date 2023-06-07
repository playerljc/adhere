import React, { FC, useState } from 'react';

import { Transfer } from '@baifendian/adhere-ui-anthoc';

import { RadioSelectFormItemProps } from '../../types';
import MulitSelectFormItem from '../MulitSelectFormItem';

/**
 * TransferSelectFormItem
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const TransferSelectFormItem: FC<RadioSelectFormItemProps> = (props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  /**
   * renderDropdownRender
   * @return {JSX.Element}
   */
  function renderDropdownRender() {
    const data = inputValue
      ? props.dataSource.filter((t) => t.label.indexOf(inputValue) !== -1)
      : props.dataSource;

    return (
      <Transfer
        {...props}
        selectedKeys={selectedKeys}
        targetKeys={props.value}
        // @ts-ignore
        dataSource={data.map((t) => ({
          key: t.value,
          title: t.label,
          description: t.label,
        }))}
        // @ts-ignore
        render={(item) => item.title}
        onChange={(targetKeys, direction, moveKeys) => {
          props?.onChange?.(targetKeys);
        }}
        onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
          setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
        }}
      />
    );
  }

  return (
    <MulitSelectFormItem
      selectProps={{
        value: props.value,
        dropdownRender: renderDropdownRender,
        // @ts-ignore
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
        ...(props.selectProps ?? {}),
      }}
      dataSource={props.dataSource}
    />
  );
};

export default TransferSelectFormItem;

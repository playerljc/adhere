import React, { FC, useEffect, useState } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { Checkbox, Space } from '../../AntFormItemNormalize';
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

  const [checkAll, setCheckAll] = useState(props.value.length === props.dataSource.length);

  /**
   * renderDropdownRender
   * @return {JSX.Element}
   */
  function renderDropdownRender() {
    const data = inputValue
      ? props.dataSource.filter((t) => t.label.indexOf(inputValue) !== -1)
      : props.dataSource;

    return (
      <div>
        <div>
          <Checkbox
            style={{ marginLeft: 10 }}
            checked={checkAll}
            onChange={(e) => {
              if (e.target.checked) {
                props?.onChange?.(props.dataSource.map((t) => t.value));
                setCheckAll(true);
              } else {
                props?.onChange?.([]);
                setCheckAll(false);
              }
            }}
          >
            {Intl.v('全选')}
          </Checkbox>
        </div>

        <div>
          <Checkbox.Group
            style={{ padding: 10 }}
            {...props}
            onChange={(values) => {
              props?.onChange?.(values);
              setCheckAll(values.length === (props.dataSource || []).length);
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
        </div>
      </div>
    );
  }

  useEffect(() => {
    setCheckAll(props.value.length === props.dataSource.length);
  }, [props.value, props.dataSource]);

  return (
    <MulitSelectFormItem
      selectProps={{
        value: props.value,
        dropdownRender: renderDropdownRender,
        // @ts-ignore
        onChange: (values) => {
          props?.onChange?.(values);
          setCheckAll(values.length === (props.dataSource || []).length);
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

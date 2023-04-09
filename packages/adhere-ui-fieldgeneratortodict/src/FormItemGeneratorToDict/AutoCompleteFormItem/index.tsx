import React, { FC, useMemo } from 'react';

import { AutoComplete } from '@baifendian/adhere-ui-anthoc';

import { AutoCompleteFormItemProps } from '../../types';

/**
 * AutoCompleteFormItem
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const AutoCompleteFormItem: FC<AutoCompleteFormItemProps> = (props) => {
  // 选择Select的时候调用
  const onSelect = (selectValue) => {
    if (props?.onChange) {
      props.onChange({
        inputValue: '',
        selectValue,
      });
    }
  };

  // 每次输入的时候调用
  const onSearch = (searchText) => {
    if (props?.onChange) {
      props.onChange({
        inputValue: searchText.trim(),
        selectValue: undefined,
      });
    }
  };

  const value = useMemo(() => {
    if (props.value.inputValue) return props.value.inputValue;

    if (props.value.selectValue)
      // @ts-ignore
      return props?.dataSource?.find((t) => t.value === props.value.selectValue)?.label;
  }, [props.value, props.value.inputValue, props.value.selectValue]);

  const options = useMemo(() => {
    if (!props.value.inputValue) return props.dataSource || [];

    // @ts-ignore
    return props?.dataSource?.filter?.((t) => t.label.includes(props.value.inputValue)) || [];
  }, [props.value, props.value.inputValue, props.value.selectValue]);

  return (
    <AutoComplete
      options={options}
      filterOption={false}
      onSelect={onSelect}
      onSearch={onSearch}
      {...props}
      value={value}
    />
  );
};

export default AutoCompleteFormItem;

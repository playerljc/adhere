import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import type { AutoCompleteSelectInputProps } from '../types';
import AutoComplete from './index';

/**
 * AutoCompleteSelectInput
 * @description 既能输入也能选择
 * @param value
 * @param options
 * @param onChange
 * @param props
 * @constructor
 */
const AutoCompleteSelectInput = memo<AutoCompleteSelectInputProps>(
  ({ value, options, onChange, ...props }) => {
    const _value = useMemo(() => {
      if (value?.inputValue) return value?.inputValue;

      if (value?.selectValue) return options?.find((t) => t.value === value?.selectValue)?.label;
    }, [value, value?.inputValue, value?.selectValue, options]);

    const _options = useMemo(() => {
      if (!value?.inputValue) return options || [];

      return options?.filter?.((t) => (t?.label as string)?.includes?.(value?.inputValue)) || [];
    }, [value, value?.inputValue, value?.selectValue, options]);

    // 选择Select的时候调用
    const onSelect = (selectValue) => {
      onChange?.({
        inputValue: '',
        selectValue,
      });
    };

    // 每次输入的时候调用
    const onSearch = (searchText) => {
      onChange?.({
        inputValue: searchText.trim(),
        selectValue: undefined,
      });
    };

    return (
      <AutoComplete
        value={_value}
        filterOption={false}
        onSelect={onSelect}
        onSearch={onSearch}
        options={_options.map(({ label: itemLabel, value: itemValue }) => ({
          label: itemLabel,
          value: itemValue,
          className: classNames({
            'ant-select-item-option-selected': Object.is(value?.selectValue, itemValue),
          }),
        }))}
        {...props}
      />
    );
  },
);

AutoCompleteSelectInput.displayName = 'AutoCompleteSelectInput';

export default AutoCompleteSelectInput;

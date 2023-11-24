import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import Select from '../select';
import type { AutoCompleteSelectInputProps } from '../types';
import AutoComplete from './index';

const { Option } = Select;

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
        {...props}
      >
        {_options.map(({ label: itemLabel, value: itemValue }) => (
          <Option
            className={classNames({
              'ant-select-item-option-selected': value?.selectValue === itemValue,
            })}
            key={itemValue}
            value={itemValue}
          >
            {itemLabel}
          </Option>
        ))}
      </AutoComplete>
    );
  },
);

AutoCompleteSelectInput.displayName = 'AutoCompleteSelectInput';

export default AutoCompleteSelectInput;

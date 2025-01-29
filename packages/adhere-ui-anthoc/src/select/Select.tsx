import type { SelectProps } from 'antd';
import { Select } from 'antd';
import type { LabeledValue } from 'antd/es/select';
import React, { useMemo } from 'react';

import type { SelectHOCComponent } from '../types';
import { createFactory } from '../util';

const InternalSelect: SelectHOCComponent = createFactory<SelectProps>(
  Select,
  {
    showSearch: true,
    allowClear: true,
    placement: 'bottomLeft',
    filterOption: (input, option) =>
      (option?.label as any)?.toLowerCase?.()?.indexOf?.(input.toLowerCase()) >= 0,
  },
  (props) => ({
    ...props,
    // @ts-ignore
    value: props.realValue ?? props.value,
  }),
);

const SelectHOC: SelectHOCComponent = ({ options, defaultValue, value, ...restProps }) => {
  function existsValueInOptions(value: string | number, options: LabeledValue[]) {
    return options.findIndex(({ value: itemValue }) => value === itemValue) !== -1;
  }

  function isLabeledValue(val: LabeledValue): boolean {
    return 'label' in val && 'value' in val;
  }

  function checkExists(value: string | number | LabeledValue, options: LabeledValue[]) {
    if (typeof value === 'string' || typeof value === 'number') {
      return existsValueInOptions(value, options);
    } else if (isLabeledValue(value)) {
      return existsValueInOptions(value.value, options);
    }
    return false;
  }

  function getValue(value: SelectProps['value'], options: LabeledValue[]) {
    if (typeof value === 'string' || typeof value === 'number' || isLabeledValue(value)) {
      return checkExists(value, options) ? value : undefined;
    }

    if (Array.isArray(value)) {
      return (value as LabeledValue[]).filter((_value) => checkExists(_value, options));
    }

    return value;
  }

  const targetValue = useMemo(() => getValue(value, options), [value, options]);

  const targetDefaultValue = useMemo(
    () => getValue(defaultValue, options),
    [defaultValue, options],
  );

  return (
    <InternalSelect
      defaultValue={targetDefaultValue}
      value={targetValue}
      options={options}
      {...restProps}
    />
  );
};

SelectHOC.displayName = 'Select';

export default SelectHOC;

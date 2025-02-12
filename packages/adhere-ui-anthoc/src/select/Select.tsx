import type { SelectProps } from 'antd';
import { Select } from 'antd';
import React, { useMemo } from 'react';

import type { SelectHOCComponent } from '../types';
import { createFactory, getOptionsValue } from '../util';

const InternalSelect: SelectHOCComponent = createFactory<
  SelectProps & {
    isHideInvalidValue: true;
  }
>(
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

const SelectHOC: SelectHOCComponent = ({
  options,
  defaultValue,
  isHideInvalidValue = true,
  value,
  ...restProps
}) => {
  const targetValue = useMemo(
    () => (isHideInvalidValue ? getOptionsValue(value, options) : defaultValue),
    [value, options, isHideInvalidValue],
  );

  const targetDefaultValue = useMemo(
    () => (isHideInvalidValue ? getOptionsValue(defaultValue, options) : defaultValue),
    [defaultValue, options, isHideInvalidValue],
  );

  return (
    <InternalSelect
      {...restProps}
      defaultValue={targetDefaultValue}
      value={targetValue}
      options={options}
    />
  );
};

SelectHOC.displayName = 'Select';

export default SelectHOC;

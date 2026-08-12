import type { SelectProps } from 'antd';
import { Select } from 'antd';
import React, { useMemo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { SelectHOCComponent } from '../types';
import { createFactory, getOptionsValue } from '../util';

const { useTheme } = ConfigProvider;

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

const SelectHOC: SelectHOCComponent = createFactory(
  ({
    wrapperClassName,
    wrapperStyle,
    options,
    defaultValue,
    isHideInvalidValue = true,
    value,
    ...restProps
  }) => {
    const wrapperRef = useRef<HTMLElement | undefined>(undefined);

    const targetValue = useMemo(
      () => (isHideInvalidValue ? getOptionsValue(value, options) : value),
      [value, options, isHideInvalidValue],
    );

    const targetDefaultValue = useMemo(
      () => (isHideInvalidValue ? getOptionsValue(defaultValue, options) : defaultValue),
      [defaultValue, options, isHideInvalidValue],
    );

    useTheme<HTMLElement>({
      elRef: wrapperRef,
      group: 'normal-hoc',
    });

    return (
      <div
        // @ts-ignore
        ref={wrapperRef}
        className={wrapperClassName}
        style={wrapperStyle ?? {}}
      >
        <InternalSelect
          {...restProps}
          defaultValue={targetDefaultValue}
          value={targetValue}
          options={options}
        />
      </div>
    );
  },
  {},
);

SelectHOC.displayName = 'Select';

export default SelectHOC;

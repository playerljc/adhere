import React, { type FC, useCallback, useMemo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Hooks from '@baifendian/adhere-ui-hooks';

import Select from '../select';
import type { InputMultipleSelectProps } from '../types';
import InputMultipleHOC from './InputMultipleHOC';

const selectorPrefix = 'adhere-ui-anthoc-input-multiple-select';

const { usePropToState } = Hooks;

const { useTheme } = ConfigProvider;

/**
 * InputMultipleSelect
 */
const InputMultipleSelect: FC<InputMultipleSelectProps> = ({
  selectProps,
  ...inputMultipleSelectProps
}) => {
  const wrapperRef = useRef<HTMLElement | undefined>(undefined);

  const [targetValue, setTargetValue] = usePropToState(inputMultipleSelectProps.value);

  const targetProps = useMemo(() => selectProps ?? {}, [selectProps]);

  const targetOptions = useMemo(
    () =>
      Array.from(
        new Set([
          ...(inputMultipleSelectProps.options ?? []),
          ...(inputMultipleSelectProps.value ?? []),
        ]),
      ).map((_value) => ({
        label: _value,
        value: _value,
      })),
    [inputMultipleSelectProps?.options, inputMultipleSelectProps?.value],
  );

  const dropdownRender = useCallback(() => {
    return <InputMultipleHOC {...inputMultipleSelectProps} options={targetOptions} />;
  }, [inputMultipleSelectProps, targetOptions]);

  useTheme<HTMLElement>({
    elRef: wrapperRef,
    group: 'normal-hoc',
  });

  return (
    <div
      // @ts-ignore
      ref={wrapperRef}
      className={selectorPrefix}
    >
      <Select
        mode="multiple"
        {...targetProps}
        value={targetValue}
        onChange={(_value) => {
          setTargetValue(_value);
          inputMultipleSelectProps?.onChange?.(_value);
        }}
        options={targetOptions}
        popupRender={dropdownRender}
      />
    </div>
  );
};

export default InputMultipleSelect;

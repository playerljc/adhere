import React, { FC, useCallback, useMemo } from 'react';

import { Hooks } from '@baifendian/adhere';

import Select from '../select';
import type { InputMultipleSelectProps } from '../types';
import InputMultipleHOC from './InputMultipleHOC';

const selectorPrefix = 'adhere-ui-anthoc-input-multiple-select';

const { usePropToState } = Hooks;

/**
 * InputMultipleSelect
 */
const InputMultipleSelect: FC<InputMultipleSelectProps> = ({
  selectProps,
  ...inputMultipleSelectProps
}) => {
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

  return (
    <div className={selectorPrefix}>
      <Select
        mode="multiple"
        {...targetProps}
        value={targetValue}
        onChange={(_value) => {
          setTargetValue(_value);
          inputMultipleSelectProps?.onChange?.(_value);
        }}
        options={targetOptions}
        dropdownRender={dropdownRender}
      />
    </div>
  );
};

export default InputMultipleSelect;

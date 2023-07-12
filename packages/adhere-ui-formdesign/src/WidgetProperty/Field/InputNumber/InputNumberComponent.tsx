import { InputNumber, InputNumberProps } from 'antd';
import type { FC } from 'react';
import React from 'react';

import { WidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';

/**
 * InputNumberComponent
 * @constructor
 * @param props
 */
const InputNumberComponent: FC<WidgetPropertyFieldProps<InputNumberProps, number>> = (props) => {
  const {
    value,
    onChange,
    props: { value: defaultValue, ...inputProps },
  } = props;

  return (
    <InputNumber defaultValue={defaultValue} value={value} onChange={onChange} {...inputProps} />
  );
};

export default InputNumberComponent;

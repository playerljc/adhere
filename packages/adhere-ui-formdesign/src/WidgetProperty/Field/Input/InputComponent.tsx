import { Input, InputProps } from 'antd';
import React from 'react';
import type { FC } from 'react';

import { WidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';

/**
 * InputComponent
 * @constructor
 */
const InputComponent: FC<WidgetPropertyFieldProps<InputProps, string>> = (props) => {
  const {
    value,
    onChange,
    props: { value: defaultValue, ...inputProps },
  } = props;

  return <Input defaultValue={defaultValue} value={value} onChange={onChange} {...inputProps} />;
};

export default InputComponent;

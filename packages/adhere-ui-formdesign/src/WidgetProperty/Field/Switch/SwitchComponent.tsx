import { Switch, SwitchProps } from 'antd';
import React from 'react';
import type { FC } from 'react';

import { WidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';

/**
 * SwitchComponent
 * @param props
 * @constructor
 */
const SwitchComponent: FC<WidgetPropertyFieldProps<SwitchProps, boolean>> = (props) => {
  const {
    value,
    onChange,
    props: { value: defaultValue, ...switchProps },
  } = props;

  return <Switch defaultValue={defaultValue} value={value} onChange={onChange} {...switchProps} />;
};

export default SwitchComponent;

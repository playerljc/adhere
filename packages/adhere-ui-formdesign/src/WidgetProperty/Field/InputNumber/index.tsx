import { InputNumberProps } from 'antd';
import React, { ReactNode } from 'react';

import WidgetPropertyField from '../WidgetPropertyField';
import InputNumberComponent from './InputNumberComponent';

/**
 * InputNumberPropertyField
 * @description InputNumber
 */
class InputNumberPropertyField extends WidgetPropertyField<InputNumberProps> {
  render(): ReactNode {
    const { key, name, required, type, props } = this;
    const args = {
      key,
      name,
      required,
      type,
      props,
    };

    return super.render(<InputNumberComponent {...args} />);
  }
}

export default InputNumberPropertyField;

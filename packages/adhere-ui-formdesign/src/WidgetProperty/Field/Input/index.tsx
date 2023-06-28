import React, { ReactNode } from 'react';

import WidgetPropertyField from '../WidgetPropertyField';
import InputComponent from './InputComponent';

/**
 * InputPropertyField
 * @description 单行文本框
 */
class InputPropertyField extends WidgetPropertyField {
  render(): ReactNode {
    const { key, name, required, type, props } = this;
    const args = {
      key,
      name,
      required,
      type,
      props,
    };

    return super.render(<InputComponent {...args} />);
  }
}

export default InputPropertyField;

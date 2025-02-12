import React, { ReactNode } from 'react';

import { InputValidationTypeWidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';
import WidgetPropertyField from '../WidgetPropertyField';
import InputValidationTypeComponent from './InputValidationTypeComponent';

/**
 * InputValidationTypePropertyField
 * @description input验证
 */
class InputValidationTypePropertyField extends WidgetPropertyField<InputValidationTypeWidgetPropertyFieldProps> {
  render(): ReactNode {
    const { key, name, required, type, props } = this;
    const args = {
      key,
      name,
      required,
      type,
      props,
    };

    return super.render(<InputValidationTypeComponent {...args} />);
  }
}

export default InputValidationTypePropertyField;

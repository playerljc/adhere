import React, { ReactNode } from 'react';

import { SelectWidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';
import WidgetPropertyField from '../WidgetPropertyField';
import SelectComponent from './SelectComponent';

/**
 * SelectPropertyField
 * @description Select
 */
class SelectPropertyField extends WidgetPropertyField<SelectWidgetPropertyFieldProps> {
  render(): ReactNode {
    const { key, name, required, type, props } = this;
    const args = {
      key,
      name,
      required,
      type,
      props,
    };

    return super.render(<SelectComponent {...args} />);
  }
}

export default SelectPropertyField;

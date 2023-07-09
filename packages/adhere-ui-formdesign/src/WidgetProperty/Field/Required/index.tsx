import React, { ReactNode } from 'react';

import { RequiredWidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';
import WidgetPropertyField from '../WidgetPropertyField';
import RequiredComponent from './RequiredComponent';

/**
 * RequiredPropertyField
 * @description Required
 */
class RequiredPropertyField extends WidgetPropertyField<RequiredWidgetPropertyFieldProps> {
  render(): ReactNode {
    const { key, name, required, type, props } = this;
    const args = {
      key,
      name,
      required,
      type,
      props,
    };

    return super.render(<RequiredComponent {...args} />);
  }
}

export default RequiredPropertyField;

import { SwitchProps } from 'antd';
import React, { ReactNode } from 'react';

import WidgetPropertyField from '../WidgetPropertyField';
import SwitchComponent from './SwitchComponent';

/**
 * SwitchPropertyField
 * @description Switch
 */
class SwitchPropertyField extends WidgetPropertyField<SwitchProps> {
  render(): ReactNode {
    const { key, name, required, type, props } = this;
    const args = {
      key,
      name,
      required,
      type,
      props,
    };

    return super.render(<SwitchComponent {...args} />);
  }
}

export default SwitchPropertyField;

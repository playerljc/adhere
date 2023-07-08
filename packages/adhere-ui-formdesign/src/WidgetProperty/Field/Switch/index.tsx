import { Form, SwitchProps } from 'antd';
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

    return (
      <Form.Item
        key={key}
        name={key}
        label={name}
        valuePropName="checked"
        rules={[
          {
            required,
          },
        ]}
      >
        <SwitchComponent {...args} />
      </Form.Item>
    );
  }
}

export default SwitchPropertyField;

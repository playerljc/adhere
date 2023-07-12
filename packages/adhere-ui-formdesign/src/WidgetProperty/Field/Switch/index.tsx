import { Form, SwitchProps } from 'antd';
import React, { ReactNode } from 'react';

import { selectorPrefix } from '../../../FormDesign/FormDesign';
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
      <li className={`${selectorPrefix}-widget-property-field`}>
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
      </li>
    );
  }
}

export default SwitchPropertyField;

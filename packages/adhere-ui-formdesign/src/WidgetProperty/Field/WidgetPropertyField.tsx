import { Form } from 'antd';
import React from 'react';
import type { ReactNode } from 'react';

import { selectorPrefix } from '../../FormDesign/FormDesign';
import { IWidgetPropertyField, Type } from '../../types/WidgetPropertyFieldTypes';

/**
 * WidgetPropertyField
 * @description WidgetProperty的Field(字段)
 */
class WidgetPropertyField<P> implements IWidgetPropertyField<P> {
  constructor(key, name, required, type, props) {
    this.key = key;
    this.name = name;
    this.required = required;
    this.type = type;
    this.props = props;
  }

  readonly key: string;

  readonly name: string;

  readonly required: boolean;

  /**
   * type
   * @description field的类型
   * @private
   */
  readonly type: Type;

  /**
   * props
   * @description field的props
   * @private
   */
  readonly props: P;

  getKey() {
    return this.key;
  }

  getName() {
    return this.name;
  }

  getRequired() {
    return this.required;
  }

  getType() {
    return this.type;
  }

  getProps() {
    return { ...this.props };
  }

  /**
   * render
   * @description 包装一层FormItem
   * @param {ReactNode} children
   * @return {ReactNode}
   */
  render(children: ReactNode): ReactNode {
    return (
      <li className={`${selectorPrefix}-widget-property-field`}>
        <Form.Item
          key={this.key}
          name={this.key}
          label={this.name}
          rules={[
            {
              required: this.required,
            },
          ]}
        >
          {children}
        </Form.Item>
      </li>
    );
  }
}

export default WidgetPropertyField;

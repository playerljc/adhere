import type { ReactNode } from 'react';

import { IWidgetPropertyField, Type } from '../../types/WidgetPropertyFieldTypes';

/**
 * WidgetPropertyField
 * @description WidgetProperty的Field(字段)
 */
class WidgetPropertyField implements IWidgetPropertyField {
  constructor(type, props) {
    this.type = type;
    this.props = props;
  }

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
  readonly props: { [key: string]: any };

  getType() {
    return this.type;
  }

  getProps() {
    return { ...this.props };
  }

  render(): ReactNode {
    return null;
  }
}

export default WidgetPropertyField;

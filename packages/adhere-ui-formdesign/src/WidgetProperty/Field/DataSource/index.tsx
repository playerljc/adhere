import React, { ReactNode } from 'react';

import WidgetPropertyField from '../WidgetPropertyField';
import DataSourceComponent from './DataSourceComponent';

/**
 * DataSourcePropertyField
 * @description 数据源
 */
class DataSourcePropertyField extends WidgetPropertyField {
  render(): ReactNode {
    const { key, name, required, type, props } = this;
    const args = {
      key,
      name,
      required,
      type,
      props,
    };

    return super.render(<DataSourceComponent {...args} />);
  }
}

export default DataSourcePropertyField;

import { Switch } from 'antd';
import React, { ReactNode } from 'react';

import WidgetPropertyField from '../WidgetPropertyField';

/**
 * RequiredPropertyField
 * @description Switch
 */
class RequiredPropertyField extends WidgetPropertyField {
  render(): ReactNode {
    return <Switch />;
  }
}

export default RequiredPropertyField;

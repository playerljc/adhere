import { Switch } from 'antd';
import React, { ReactNode } from 'react';

import WidgetPropertyField from '../WidgetPropertyField';

/**
 * SwitchPropertyField
 * @description Switch
 */
class SwitchPropertyField extends WidgetPropertyField {
  render(): ReactNode {
    return <Switch />;
  }
}

export default SwitchPropertyField;

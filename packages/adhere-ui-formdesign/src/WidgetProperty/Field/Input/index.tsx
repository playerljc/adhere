import { Input } from 'antd';
import React, { ReactNode } from 'react';

import WidgetPropertyField from '../WidgetPropertyField';

/**
 * InputPropertyField
 * @description 单行文本框
 */
class InputPropertyField extends WidgetPropertyField {
  render(): ReactNode {
    return <Input />;
  }
}

export default InputPropertyField;

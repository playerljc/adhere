import type { ReactNode } from 'react';
import React from 'react';

import DNDWidget from '../DNDWidget';
import Widget from '../index';
import DesignInputFormItem from './DesignInputFormItem';
import InputFormItem from './InputFormItem';

/**
 * InputWidget
 * @description 单行文本框
 */
class InputWidget extends Widget {
  renderDesign(): ReactNode {
    const { id, groupType, type, propertys } = this;
    const props = {
      id,
      groupType,
      type,
      propertys,
    };

    return (
      <DNDWidget {...props}>
        <DesignInputFormItem {...props} />
      </DNDWidget>
    );
  }

  render(): ReactNode {
    return <InputFormItem />;
  }
}

export default InputWidget;

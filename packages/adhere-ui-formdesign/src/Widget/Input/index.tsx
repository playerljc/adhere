import type { ReactNode } from 'react';
import React from 'react';

import { Type as WidgetPropertyFieldType } from '../../types/WidgetPropertyFieldTypes';
import { GroupType, Type as WidgetType } from '../../types/WidgetTypes';
import Widget from '../index';
import DesignInputFormItem from './DesignInputFormItem';
import InputFormItem from './InputFormItem';

/**
 * InputWidget
 * @description 单行文本框
 */
class InputWidget extends Widget {
  constructor(...arg) {
    super(...arg);

    debugger;
  }

  readonly groupType: GroupType = GroupType.BASE;

  readonly type: WidgetType.INPUT;

  /**
   * defineProperts
   * @description 定义缺省的propertys
   * @protected
   */
  protected defineProperts() {
    return this.mergePropertys(super.defineProperts(), [
      // {
      //   key: 'title',
      //   value: {
      //     type: WidgetPropertyFieldType.INPUT,
      //     props: {
      //       value: '单行文本',
      //     },
      //   },
      // },
    ]);
  }

  renderDesign(): ReactNode {
    const { id, groupType, type, propertys } = this;
    const props = {
      id,
      groupType,
      type,
      propertys,
    };

    return super.renderDesign(<DesignInputFormItem {...props} />);
  }

  render(): ReactNode {
    return <InputFormItem />;
  }
}

export default InputWidget;

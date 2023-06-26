import type { ReactNode } from 'react';
import React from 'react';

import { WidgetPropertyFieldType } from '../../types/WidgetPropertyFieldTypes';
import { GroupType, Type, WidgetType } from '../../types/WidgetTypes';
import Widget from '../index';
import InputFormItem from './InputFormItem';

/**
 * InputWidget
 * @description 单行文本框
 */
class InputWidget extends Widget {
  // Group类型
  readonly groupType: GroupType = GroupType.BASE;

  // Widget类型
  readonly type: Type = WidgetType.INPUT;

  /**
   * defineProperts
   * @description 定义缺省的propertys
   * @protected
   * @return {DWidget[]}
   */
  protected defineProperts() {
    return this.mergePropertys(super.defineProperts(), [
      {
        key: 'title',
        value: {
          type: WidgetPropertyFieldType.INPUT,
          props: {
            value: '单行文本',
          },
        },
      },
    ]);
  }

  /**
   * renderDesign
   * @description 渲染设计视图
   * @return {ReactNode}
   */
  renderDesign(): ReactNode {
    const { id, groupType, type, propertys } = this;
    const props = {
      id,
      groupType,
      type,
      propertys,
    };

    return super.renderDesign(super.render(<InputFormItem {...props} />));
  }

  /**
   * render
   * @description 渲染实际视图
   * @return {ReactNode}
   */
  render(): ReactNode {
    const { id, groupType, type, propertys } = this;
    const props = {
      id,
      groupType,
      type,
      propertys,
    };

    return super.render(<InputFormItem {...props} />);
  }
}

export default InputWidget;

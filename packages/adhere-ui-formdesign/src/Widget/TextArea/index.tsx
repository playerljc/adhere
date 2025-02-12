import type { ReactNode } from 'react';
import React from 'react';

import { WidgetPropertyFieldType } from '../../types/WidgetPropertyFieldTypes';
import { GroupType, Type, WidgetType } from '../../types/WidgetTypes';
import { getInputValidationTypeDataSource } from '../../util';
import Widget from '../index';
import TextAreaFormItem from './TextAreaFormItem';

/**
 * TextAreaWidget
 * @description 多行文本
 */
class TextAreaWidget extends Widget {
  // Group类型
  readonly groupType: GroupType = GroupType.BASE;

  // Widget类型
  readonly type: Type = WidgetType.TEXT_AREA;

  /**
   * defineProperts
   * @description 定义缺省的properties
   * @protected
   * @return {DWidget[]}
   */
  protected defineProperts() {
    return this.mergeProperties(super.defineProperts(), [
      {
        key: 'title',
        value: {
          type: WidgetPropertyFieldType.INPUT,
          props: {
            value: '多行文本',
          },
        },
      },
      {
        key: 'placeholder',
        name: '占位内容',
        required: false,
        value: {
          type: WidgetPropertyFieldType.INPUT,
          props: {
            value: '多行文本',
          },
        },
      },
      {
        key: 'maxLength',
        name: '最大输入长度',
        required: false,
        value: {
          type: WidgetPropertyFieldType.INPUT_NUMBER,
          props: {
            value: 500,
            precision: 0,
          },
        },
      },
      {
        key: 'allowClear',
        name: '显示清除按钮',
        required: false,
        value: {
          type: WidgetPropertyFieldType.SWITCH,
          props: {
            value: true,
          },
        },
      },
      {
        key: 'autoSize',
        name: '高度自适应',
        required: false,
        value: {
          type: WidgetPropertyFieldType.SWITCH,
          props: {
            value: true,
          },
        },
      },
      {
        key: 'rows',
        name: '输入框行数',
        required: false,
        value: {
          type: WidgetPropertyFieldType.INPUT_NUMBER,
          props: {
            value: 3,
          },
        },
      },
      {
        key: 'validationType',
        name: '校验类型',
        require: true,
        value: {
          type: WidgetPropertyFieldType.INPUT_VALIDATION_TYPE,
          props: {
            value: {
              checked: false,
              type: '',
              validationMessage: '',
            },
            dataSource: getInputValidationTypeDataSource(),
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
    const { id, groupType, type, properties } = this;
    const props = {
      id,
      groupType,
      type,
      properties,
    };

    return super.renderDesign(super.render(<TextAreaFormItem {...props} />));
  }

  /**
   * render
   * @description 渲染实际视图
   * @return {ReactNode}
   */
  render(): ReactNode {
    const { id, groupType, type, properties } = this;
    const props = {
      id,
      groupType,
      type,
      properties,
    };

    return super.render(<TextAreaFormItem {...props} />);
  }
}

export default TextAreaWidget;

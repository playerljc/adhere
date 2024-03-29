import type { ReactNode } from 'react';
import React from 'react';

import {
  InputWidgetPropertyFieldType,
  WidgetPropertyFieldType,
} from '../../types/WidgetPropertyFieldTypes';
import { GroupType, Type, WidgetType } from '../../types/WidgetTypes';
import { getInputValidationTypeDataSource } from '../../util';
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
            value: '单行文本',
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
            value: '单行文本',
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
        key: 'inputType',
        name: 'input类型',
        require: true,
        value: {
          type: WidgetPropertyFieldType.SELECT,
          props: {
            value: 'text',
            dataSource: InputWidgetPropertyFieldType.map((t) => ({
              label: t,
              value: t,
            })),
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

    return super.renderDesign(super.render(<InputFormItem {...props} />));
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

    return super.render(<InputFormItem {...props} />);
  }
}

export default InputWidget;

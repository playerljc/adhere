import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

import renderItem from './formitem';
import { IFormItemCreatorProps, IFormItemProps } from './types';

/**
 * FormItemCreator
 * @class FormItemCreator
 * @classdesc 表单项的创建组件
 */
class FormItemCreator extends React.Component<IFormItemCreatorProps> {
  static defaultProps: any;
  static propTypes: any;

  static TEXT = Symbol('text');
  static INPUT = Symbol('input');
  static SEARCH = Symbol('search');
  static PASSWORD = Symbol('password');
  static TEXTAREA = Symbol('textarea');
  static NUMBER = Symbol('number');
  static RADIO = Symbol('radio');
  static CHECKBOX = Symbol('checkbox');
  static DATEPICKER = Symbol('datepicker');
  static RANGEPICKER = Symbol('rangepicker');
  static TIMEPICKER = Symbol('timepicker');
  static SWITCH = Symbol('switch');
  static SELECT = Symbol('select');
  static SLIDER = Symbol('slider');
  static RATE = Symbol('rate');
  static UPLOAD = Symbol('upload');
  static DEFINE = Symbol('define');

  private readonly FORM_ITEM_CONFIG = new Map([
    [FormItemCreator.TEXT, 'renderText'],
    [FormItemCreator.INPUT, 'renderInput'],
    [FormItemCreator.SEARCH, 'renderSearch'],
    [FormItemCreator.PASSWORD, 'renderPassword'],
    [FormItemCreator.TEXTAREA, 'renderInputArea'],
    [FormItemCreator.NUMBER, 'renderInputNumber'],
    [FormItemCreator.RADIO, 'renderRadio'],
    [FormItemCreator.CHECKBOX, 'renderCheckbox'],
    [FormItemCreator.DATEPICKER, 'renderDatePicker'],
    [FormItemCreator.RANGEPICKER, 'renderRangePicker'],
    [FormItemCreator.TIMEPICKER, 'renderTimePicker'],
    [FormItemCreator.SWITCH, 'renderSwitch'],
    [FormItemCreator.SELECT, 'renderSelect'],
    [FormItemCreator.SLIDER, 'renderSlider'],
    [FormItemCreator.RATE, 'renderRate'],
    [FormItemCreator.UPLOAD, 'renderUpload'],
  ]);

  /**
   * getDefaultItemProps - 表单单项的默认配置 通过type来制定
   * @param {Object} item
   */
  private getDefaultItemProps(item: IFormItemProps) {
    switch (item.type) {
      case FormItemCreator.SWITCH:
        return { valuePropName: 'checked' };
      case FormItemCreator.CHECKBOX:
        return { valuePropName: 'checked' };
      case FormItemCreator.UPLOAD:
        return { valuePropName: 'fileList' };
      default:
        return null;
    }
  }

  /**
   * renderFormItem - 表单单项渲染 通过type来制定
   * @param {Object} item
   */
  private renderFormItem(item: IFormItemProps) {
    const { type, contentProps = {} } = item;

    // @ts-ignore
    if (type === FormItemCreator.DEFINE) {
      return item.content;
    } else {
      // @ts-ignore
      const renderMethodName = this.FORM_ITEM_CONFIG.get(type || FormItemCreator.INPUT);

      // @ts-ignore
      return renderMethodName ? renderItem[renderMethodName](contentProps) : null;
    }
  }

  render() {
    // @ts-ignore
    const { columns, layout } = this.props;

    // @ts-ignore
    return columns.map((item: IFormItemProps) => {
      const { skip, contentProps, ...itemProps } = item;

      if (skip) return;

      return (
        <Form.Item {...this.getDefaultItemProps(item)} {...layout} {...itemProps}>
          {this.renderFormItem(item)}
        </Form.Item>
      );
    });
  }
}

FormItemCreator.defaultProps = {
  columns: [],
};

FormItemCreator.propTypes = {
  columns: PropTypes.array,
};

export default FormItemCreator;

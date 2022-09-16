import { Col, Form, Row } from 'antd';
import React, { useMemo } from 'react';

import renderItem from './formitem';
import { ColumnItemProps, FormItemCreatorFunction, FormItemCreatorProps } from './types';

const FormItemCreator: FormItemCreatorFunction<FormItemCreatorProps> = (props) => {
  const { columns, layout, row } = props;

  /**
   * renderFormItem
   * @description 表单单项渲染 通过type来制定
   * @param item
   */
  function renderFormItem(item: ColumnItemProps) {
    const { type, contentProps = {} } = item;

    if (type === FormItemCreator.DEFINE) {
      return item.content;
    } else {
      const renderMethodName = FORM_ITEM_CONFIG.get(type || FormItemCreator.INPUT);

      return renderMethodName ? renderItem[renderMethodName](contentProps) : null;
    }
  }

  /**
   * getDefaultItemProps
   * @description 表单单项的默认配置 通过type来制定
   * @param item
   */
  function getDefaultItemProps(item: ColumnItemProps) {
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

  const FORM_ITEM_CONFIG = useMemo(
    () =>
      new Map([
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
      ]),
    [],
  );

  const formItems = useMemo(
    () =>
      columns
        .filter((item) => !('skip' in item))
        .map((item) => {
          const { contentProps, col, ...itemProps } = item;

          const formItem = (
            <Form.Item {...getDefaultItemProps(item)} {...layout} {...itemProps}>
              {renderFormItem(item)}
            </Form.Item>
          );

          return col ? <Col {...col}>{formItem}</Col> : formItem;
        }),
    [columns],
  );

  return row ? <Row {...row}>{formItems}</Row> : formItems;
};

FormItemCreator.TEXT = Symbol('text');
FormItemCreator.INPUT = Symbol('input');
FormItemCreator.SEARCH = Symbol('search');
FormItemCreator.PASSWORD = Symbol('password');
FormItemCreator.TEXTAREA = Symbol('textarea');
FormItemCreator.NUMBER = Symbol('number');
FormItemCreator.RADIO = Symbol('radio');
FormItemCreator.CHECKBOX = Symbol('checkbox');
FormItemCreator.DATEPICKER = Symbol('datepicker');
FormItemCreator.RANGEPICKER = Symbol('rangepicker');
FormItemCreator.TIMEPICKER = Symbol('timepicker');
FormItemCreator.SWITCH = Symbol('switch');
FormItemCreator.SELECT = Symbol('select');
FormItemCreator.SLIDER = Symbol('slider');
FormItemCreator.RATE = Symbol('rate');
FormItemCreator.UPLOAD = Symbol('upload');
FormItemCreator.DEFINE = Symbol('define');

export default FormItemCreator;

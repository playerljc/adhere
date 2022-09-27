import { Col, Form, Row } from 'antd';
import React, { FC, ReactElement, memo, useMemo } from 'react';

import renderItem from './formitem';
import { ColumnItemProps, FormItemCreatorFunction, FormItemCreatorProps } from './types';

const TEXT = Symbol('text');
const INPUT = Symbol('input');
const SEARCH = Symbol('search');
const PASSWORD = Symbol('password');
const TEXTAREA = Symbol('textarea');
const NUMBER = Symbol('number');
const RADIO = Symbol('radio');
const CHECKBOX = Symbol('checkbox');
const DATEPICKER = Symbol('datepicker');
const RANGEPICKER = Symbol('rangepicker');
const TIMEPICKER = Symbol('timepicker');
const SWITCH = Symbol('switch');
const SELECT = Symbol('select');
const SLIDER = Symbol('slider');
const RATE = Symbol('rate');
const UPLOAD = Symbol('upload');
const DEFINE = Symbol('define');

const FormItemCreator: FC<FormItemCreatorProps> = (props) => {
  const { columns, layout, row } = props;

  /**
   * renderFormItem
   * @description 表单单项渲染 通过type来制定
   * @param item
   */
  function renderFormItem(item: ColumnItemProps) {
    const { type, contentProps = {} } = item;

    if (type === DEFINE) {
      return item.content;
    } else {
      const renderMethodName = FORM_ITEM_CONFIG.get(type || INPUT);

      if (renderMethodName) {
        const FormItem = renderItem[renderMethodName];

        return <FormItem {...contentProps} />;
      }

      return null;

      // return renderMethodName ? renderItem[renderMethodName](contentProps) : null;
    }
  }

  /**
   * getDefaultItemProps
   * @description 表单单项的默认配置 通过type来制定
   * @param item
   */
  function getDefaultItemProps(item: ColumnItemProps) {
    switch (item.type) {
      case SWITCH:
        return { valuePropName: 'checked' };
      case CHECKBOX:
        return { valuePropName: 'checked' };
      case UPLOAD:
        return { valuePropName: 'fileList' };
      default:
        return null;
    }
  }

  const FORM_ITEM_CONFIG = useMemo(
    () =>
      new Map([
        [TEXT, 'renderText'],
        [INPUT, 'renderInput'],
        [SEARCH, 'renderSearch'],
        [PASSWORD, 'renderPassword'],
        [TEXTAREA, 'renderInputArea'],
        [NUMBER, 'renderInputNumber'],
        [RADIO, 'renderRadio'],
        [CHECKBOX, 'renderCheckbox'],
        [DATEPICKER, 'renderDatePicker'],
        [RANGEPICKER, 'renderRangePicker'],
        [TIMEPICKER, 'renderTimePicker'],
        [SWITCH, 'renderSwitch'],
        [SELECT, 'renderSelect'],
        [SLIDER, 'renderSlider'],
        [RATE, 'renderRate'],
        [UPLOAD, 'renderUpload'],
      ]),
    [],
  );

  const formItems = useMemo<ReactElement[]>(
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

  return <>{row ? <Row {...row}>{formItems}</Row> : formItems}</>;
};

//@ts-ignore
const MemoWrap: FormItemCreatorFunction<FormItemCreatorProps> = memo(FormItemCreator);

MemoWrap.TEXT = TEXT;
MemoWrap.INPUT = INPUT;
MemoWrap.SEARCH = SEARCH;
MemoWrap.PASSWORD = PASSWORD;
MemoWrap.TEXTAREA = TEXTAREA;
MemoWrap.NUMBER = NUMBER;
MemoWrap.RADIO = RADIO;
MemoWrap.CHECKBOX = CHECKBOX;
MemoWrap.DATEPICKER = DATEPICKER;
MemoWrap.RANGEPICKER = RANGEPICKER;
MemoWrap.TIMEPICKER = TIMEPICKER;
MemoWrap.SWITCH = SWITCH;
MemoWrap.SELECT = SELECT;
MemoWrap.SLIDER = SLIDER;
MemoWrap.RATE = RATE;
MemoWrap.UPLOAD = UPLOAD;
MemoWrap.DEFINE = DEFINE;

export default MemoWrap;

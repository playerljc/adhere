import { Col, Form, Row } from 'antd';
import React, { ReactElement, memo, useMemo } from 'react';

import renderItem from './FormItem';
import type { ColumnItemProps, FormItemCreatorComponent, FormItemCreatorProps } from './types';

// 表单组件类型符号定义
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
const TAG = Symbol('tag');
const DEFINE = Symbol('define');

/**
 * 内部表单项目创建器组件
 * @description 根据配置动态生成表单项目的核心组件
 * @param props - 表单项目创建器属性
 * @returns 渲染的表单项目
 */
const InternalFormItemCreator = memo<FormItemCreatorProps>((props) => {
  const { columns, layout, row } = props;

  /**
   * 渲染表单项目
   * @description 根据类型渲染对应的表单组件
   * @param item - 表单项目配置
   * @returns 渲染的表单组件
   */
  function renderFormItem(item: ColumnItemProps): ReactElement | null {
    const { type, contentProps = {} } = item;

    if (type === DEFINE) {
      return item.content || null;
    } else {
      const renderMethodName = FORM_ITEM_CONFIG.get(type || INPUT);

      if (renderMethodName) {
        const FormItem = renderItem[renderMethodName as keyof typeof renderItem] as React.ComponentType<any>;

        return <FormItem {...contentProps} />;
      }

      return null;
    }
  }

  /**
   * 获取默认项目属性
   * @description 根据组件类型返回默认的表单项目属性
   * @param item - 表单项目配置
   * @returns 默认属性配置
   */
  function getDefaultItemProps(item: ColumnItemProps): Record<string, any> | null {
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

  // 表单项目类型到渲染方法的映射
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
        [TAG, 'renderTag'],
      ]),
    [],
  );

  // 渲染表单项目列表
  const formItems = useMemo<ReactElement[]>(
    () =>
      columns
        .filter((item) => !('skip' in item && item.skip))
        .map((item) => {
          const { contentProps, col, type, ...itemProps } = item;

          const formItem = (
            <Form.Item
              {...getDefaultItemProps(item)}
              {...layout}
              {...itemProps}
              key={item.name as React.Key}
            >
              {renderFormItem(item)}
            </Form.Item>
          );

          return col ? (
            <Col {...col} key={item.name as React.Key}>
              {formItem}
            </Col>
          ) : (
            formItem
          );
        }),
    [columns, layout],
  );

  return (
    <>
      {row && <Row {...row}>{formItems}</Row>}
      {!row && formItems}
    </>
  );
});

// 导出组件并添加类型符号
const FormItemCreator = InternalFormItemCreator as FormItemCreatorComponent;

FormItemCreator.displayName = 'FormItemCreator';

// 添加组件类型符号
FormItemCreator.TEXT = TEXT;
FormItemCreator.INPUT = INPUT;
FormItemCreator.SEARCH = SEARCH;
FormItemCreator.PASSWORD = PASSWORD;
FormItemCreator.TEXTAREA = TEXTAREA;
FormItemCreator.NUMBER = NUMBER;
FormItemCreator.RADIO = RADIO;
FormItemCreator.CHECKBOX = CHECKBOX;
FormItemCreator.DATEPICKER = DATEPICKER;
FormItemCreator.RANGEPICKER = RANGEPICKER;
FormItemCreator.TIMEPICKER = TIMEPICKER;
FormItemCreator.SWITCH = SWITCH;
FormItemCreator.SELECT = SELECT;
FormItemCreator.SLIDER = SLIDER;
FormItemCreator.RATE = RATE;
FormItemCreator.UPLOAD = UPLOAD;
FormItemCreator.TAG = TAG;
FormItemCreator.DEFINE = DEFINE;

export default FormItemCreator;

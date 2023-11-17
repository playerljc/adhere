import { InputNumber } from 'antd';
import type { ReactNode } from 'react';
import React from 'react';

import {
  DatePicker,
  Input,
  InputNumberDecimal1,
  InputNumberDecimal2,
  InputNumberInteger,
  RangePicker,
  Rate,
  Slider,
  Switch,
  TextArea,
  TimePicker,
} from '@baifendian/adhere-ui-anthoc';
import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import type { FormItemGeneratorConfig } from '../../../types';

// const { FormItemGeneratorToDict } = FieldGeneratorToDict;

export default {
  /**
   * render
   * @description 对表单控件进行渲染
   * @param type 控件类型
   // * @param renderChildren 渲染孩子
   * @param props 控件的props
   * @param dictName distName
   * @param form 表单的form实例
   * @param dataIndex
   * @param rowIndex
   */
  render({
    type,
    // renderChildren,
    props,
    dictName,
    form,
    dataIndex,
    rowIndex,
  }: FormItemGeneratorConfig) {
    const defaultProps = {
      autoFocus: true,
      zIndex: 1051,
    };

    const renderInput = () => {
      return <Input {...defaultProps} {...(props ?? {})} />;
    };
    const renderTextArea = () => {
      return <TextArea {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNumber = () => {
      return <InputNumber {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNumberDecimal1 = () => {
      return <InputNumberDecimal1 {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNumberDecimal2 = () => {
      return <InputNumberDecimal2 {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNumberInteger = () => {
      return <InputNumberInteger {...defaultProps} {...(props ?? {})} />;
    };
    const renderDatePicker = () => {
      return <DatePicker {...defaultProps} {...(props ?? {})} />;
    };
    const renderTimePicker = () => {
      return <TimePicker {...defaultProps} {...(props ?? {})} />;
    };
    const renderRangePicker = () => {
      return <RangePicker {...defaultProps} {...(props ?? {})} />;
    };
    const renderSlider = () => {
      return <Slider {...defaultProps} {...(props ?? {})} />;
    };
    const renderSliderRange = () => {
      return <Slider range {...defaultProps} {...(props ?? {})} />;
    };
    const renderRate = () => {
      return <Rate {...defaultProps} {...(props ?? {})} />;
    };
    const renderSwitch = () => {
      return <Switch {...defaultProps} {...(props ?? {})} />;
    };
    const renderDict = () => {
      if (!dictName) return null;

      const Component = FieldGeneratorToDict.Components[dictName];

      // if (dictName?.indexOf('CustomFormItem') !== -1) {
      //   return (
      //     <Component {...defaultProps} {...(props ?? {})}>
      //       {(data) => renderChildren?.(data)}
      //     </Component>
      //   );
      // }

      return <Component {...defaultProps} {...(props ?? {})} />;
    };

    const typeMap = new Map<string, () => ReactNode>([
      // ['select', renderSelect],
      // ['multiSelect', renderMultiSelect],
      // ['checkAllMultiSelect', renderCheckAllMultiSelect],
      //
      // ['autoCompleteSelect', renderAutoCompleteSelect],
      // ['autoCompleteSelectMulti', renderAutoCompleteSelectMulti],
      // ['autoCompleteSelectCheckAllMulti', renderAutoCompleteSelectCheckAllMulti],
      //
      // ['radioHorizontal', renderRadioHorizontal],
      // ['radioButton', renderRadioButton],
      // ['radioSelect', renderRadioSelect],
      // ['radioCustom', renderRadioCustom],
      //
      // ['checkBoxHorizontal', renderCheckBoxHorizontal],
      // ['checkBoxCheckAllHorizontal', renderCheckBoxCheckAllHorizontal],
      // ['checkboxSelect', renderCheckboxSelect],
      // ['checkBoxCheckAllSelect', renderCheckBoxCheckAllSelect],
      // ['checkBoxCustom', renderCheckBoxCustom],
      // ['checkBoxCheckAllCustom', renderCheckBoxCheckAllCustom],
      //
      // ['transferSelect', renderTransferSelect],
      //
      // ['tableSelect', renderTableSelect],
      // ['tableMultiSelect', renderTableMultiSelect],
      // ['tablePagingSelect', renderTablePagingSelect],
      // ['tablePagingMultiSelect', renderTablePagingMultiSelect],
      //
      // ['listSelect', renderListSelect],
      // ['listMultiSelect', renderListMultiSelect],
      // ['listPagingSelect', renderListPagingSelect],
      // ['listPagingMultiSelect', renderListPagingMultiSelect],
      //
      // ['treeSelect', renderTreeSelect],
      // ['treeMultiSelect', renderTreeMultiSelect],
      // ['treeSelectLeaf', renderTreeSelectLeaf],
      // ['treeMultiSelectLeaf', renderTreeMultiSelectLeaf],
      //
      // ['cascaderSelect', renderCascaderSelect],
      // ['cascaderMultiSelect', renderCascaderMultiSelect],
      // ['cascaderSelectLeaf', renderCascaderSelectLeaf],
      // ['cascaderMultiSelectLeaf', renderCascaderMultiSelectLeaf],
      ['dict', renderDict],
      ['input', renderInput],
      ['textArea', renderTextArea],
      ['inputNumber', renderInputNumber],
      ['inputNumberDecimal1', renderInputNumberDecimal1],
      ['inputNumberDecimal2', renderInputNumberDecimal2],
      ['inputNumberInteger', renderInputNumberInteger],
      ['datePicker', renderDatePicker],
      ['timePicker', renderTimePicker],
      ['rangePicker', renderRangePicker],
      ['slider', renderSlider],
      ['sliderRange', renderSliderRange],
      ['rate', renderRate],
      ['switch', renderSwitch],
    ]);

    return typeMap.get(type as string)?.();
  },
};

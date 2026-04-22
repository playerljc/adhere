// import { ColorPicker, Input, InputNumber, Rate, Slider, Switch } from 'antd';
import { InputNumber } from 'antd';
import type { ReactNode } from 'react';
import React from 'react';

import {
  ColorPicker,
  DatePicker,
  Input,
  InputNumberDecimal1,
  InputNumberDecimal2,
  InputNumberInteger,
  RangePicker,
  Rate,
  Slider,
  Switch,
  TimePicker,
} from '@baifendian/adhere-ui-anthoc';

// import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';
import type { FormItemGeneratorConfig } from '../../../types';

// const { FormItemGeneratorToDict } = FieldGeneratorToDict;
const { TextArea } = Input;

export default {
  /**
   * render
   * @description 对表单控件进行渲染
   * @param type 控件类型
   // * @param renderChildren 渲染孩子
   * @param props 控件的props
   * @param dictName distName
   * @param form 表单的form实例
   * @param FieldGeneratorToDict
   */
  render({
    type,
    // renderChildren,
    props,
    dictName,
    searchFieldGeneratorProps,
    // form,
    // dataIndex,
    // rowIndex,
    FieldGeneratorToDict,
  }: FormItemGeneratorConfig) {
    const defaultProps = {
      autoFocus: true,
      zIndex: 1051,
    };

    const renderInput = () => {
      return <Input showCount={false} {...defaultProps} {...(props ?? {})} />;
    };
    const renderTextArea = () => {
      return <TextArea showCount={false} {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNumber = () => {
      return <InputNumber {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNumberDecimal1 = () => {
      return <InputNumberDecimal1 {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNegativeNumberDecimal1 = () => {
      return (
        <InputNumberDecimal1.InputNegativeNumberDecimal1 {...defaultProps} {...(props ?? {})} />
      );
    };
    const renderInputPositiveNumberDecimal1 = () => {
      return (
        <InputNumberDecimal1.InputPositiveNumberDecimal1 {...defaultProps} {...(props ?? {})} />
      );
    };
    const renderInputNumberDecimal1French = () => {
      return <InputNumberDecimal1.InputNumberDecimal1French {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNumberDecimal1German = () => {
      return <InputNumberDecimal1.InputNumberDecimal1German {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNumberDecimal1International = () => {
      return (
        <InputNumberDecimal1.InputNumberDecimal1International
          {...defaultProps}
          {...(props ?? {})}
        />
      );
    };
    const renderInputNumberDecimal1US = () => {
      return <InputNumberDecimal1.InputNumberDecimal1US {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNumberDecimal2 = () => {
      return <InputNumberDecimal2 {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNegativeNumberDecimal2 = () => {
      return (
        <InputNumberDecimal2.InputNegativeNumberDecimal2 {...defaultProps} {...(props ?? {})} />
      );
    };
    const renderInputPositiveNumberDecimal2 = () => {
      return (
        <InputNumberDecimal2.InputPositiveNumberDecimal2 {...defaultProps} {...(props ?? {})} />
      );
    };
    const renderInputNumberDecimal2French = () => {
      return <InputNumberDecimal2.InputNumberDecimal2French {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNumberDecimal2German = () => {
      return <InputNumberDecimal2.InputNumberDecimal2German {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNumberDecimal2International = () => {
      return (
        <InputNumberDecimal2.InputNumberDecimal2International
          {...defaultProps}
          {...(props ?? {})}
        />
      );
    };
    const renderInputNumberDecimal2US = () => {
      return <InputNumberDecimal2.InputNumberDecimal2US {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNumberInteger = () => {
      return <InputNumberInteger {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNegativeNumberInteger = () => {
      return <InputNumberInteger.InputNegativeNumberInteger {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputPositiveNumberInteger = () => {
      return <InputNumberInteger.InputPositiveNumberInteger {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNumberIntegerFrench = () => {
      return <InputNumberInteger.InputNumberIntegerFrench {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNumberIntegerGerman = () => {
      return <InputNumberInteger.InputNumberIntegerGerman {...defaultProps} {...(props ?? {})} />;
    };
    const renderInputNumberIntegerInternational = () => {
      return (
        <InputNumberInteger.InputNumberIntegerInternational {...defaultProps} {...(props ?? {})} />
      );
    };
    const renderInputNumberIntegerUS = () => {
      return <InputNumberInteger.InputNumberIntegerUS {...defaultProps} {...(props ?? {})} />;
    };
    const renderDatePicker = () => {
      return <DatePicker {...defaultProps} {...(props ?? {})} />;
    };
    const renderBirthdayPicker = () => {
      return <DatePicker.BirthdayPicker {...defaultProps} {...(props ?? {})} />;
    };
    const renderBoundedTimePicker = () => {
      return <DatePicker.BoundedTimePicker {...defaultProps} {...(props ?? {})} />;
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
    const renderColorPicker = () => {
      return <ColorPicker {...defaultProps} {...(props ?? {})} />;
    };
    const renderSwitch = () => {
      return <Switch {...defaultProps} {...(props ?? {})} />;
    };
    const renderDict = () => {
      if (!dictName) return null;

      let Component = FieldGeneratorToDict.Components[dictName];

      if (searchFieldGeneratorProps) {
        Component = Component(searchFieldGeneratorProps);
      }

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
      ['inputNegativeNumberDecimal1', renderInputNegativeNumberDecimal1],
      ['inputPositiveNumberDecimal1', renderInputPositiveNumberDecimal1],
      ['inputNumberDecimal1French', renderInputNumberDecimal1French],
      ['inputNumberDecimal1German', renderInputNumberDecimal1German],
      ['inputNumberDecimal1International', renderInputNumberDecimal1International],
      ['inputNumberDecimal1US', renderInputNumberDecimal1US],
      ['inputNumberDecimal2', renderInputNumberDecimal2],
      ['inputNegativeNumberDecimal2', renderInputNegativeNumberDecimal2],
      ['inputPositiveNumberDecimal2', renderInputPositiveNumberDecimal2],
      ['inputNumberDecimal2French', renderInputNumberDecimal2French],
      ['inputNumberDecimal2German', renderInputNumberDecimal2German],
      ['inputNumberDecimal2International', renderInputNumberDecimal2International],
      ['inputNumberDecimal2US', renderInputNumberDecimal2US],
      ['inputNumberInteger', renderInputNumberInteger],
      ['inputNegativeNumberInteger', renderInputNegativeNumberInteger],
      ['inputPositiveNumberInteger', renderInputPositiveNumberInteger],
      ['inputNumberIntegerFrench', renderInputNumberIntegerFrench],
      ['inputNumberIntegerGerman', renderInputNumberIntegerGerman],
      ['inputNumberIntegerInternational', renderInputNumberIntegerInternational],
      ['inputNumberIntegerUS', renderInputNumberIntegerUS],
      ['datePicker', renderDatePicker],
      ['birthdayPicker', renderBirthdayPicker],
      ['boundedTimePicker', renderBoundedTimePicker],
      ['timePicker', renderTimePicker],
      ['rangePicker', renderRangePicker],
      ['slider', renderSlider],
      ['sliderRange', renderSliderRange],
      ['rate', renderRate],
      ['switch', renderSwitch],
      ['colorPicker', renderColorPicker],
    ]);

    return typeMap.get(type as string)?.();
  },
};

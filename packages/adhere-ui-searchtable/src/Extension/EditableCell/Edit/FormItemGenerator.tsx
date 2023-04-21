import { Input, InputNumber, Rate, Slider, Switch } from 'antd';
import type { ReactNode } from 'react';
import React from 'react';

import {
  DatePicker,
  InputNumberDecimal1,
  InputNumberDecimal2,
  InputNumberInteger,
  RangePicker,
  TimePicker,
} from '@baifendian/adhere-ui-anthoc';
import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import type { FormItemGeneratorConfig } from '../../../types';

const { FormItemGeneratorToDict } = FieldGeneratorToDict;

export default {
  /**
   * render
   * @description 对表单控件进行渲染
   * @param type 控件类型
   * @param renderChildren 渲染孩子
   * @param props 控件的props
   * @param dictName distName
   * @param form 表单的form实例
   * @param dataIndex
   * @param rowIndex
   */
  render({
    type,
    renderChildren,
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

    // const renderSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}FormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderMultiSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}MulitFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderCheckAllMultiSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}CheckAllMulitFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    //
    // const renderAutoCompleteSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}FormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderAutoCompleteSelectMulti = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}MulitFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderAutoCompleteSelectCheckAllMulti = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}CheckAllMulitFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    //
    // const renderRadioHorizontal = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}HorizontalFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderRadioButton = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}ButtonFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderRadioSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}SelectFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderRadioCustom = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}CustomFormItem`];
    //
    //   return (
    //     <Component {...defaultProps} {...(props || {})}>
    //       {(data) => renderChildren?.(data)}
    //     </Component>
    //   );
    // };
    //
    // const renderCheckBoxHorizontal = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}HorizontalFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderCheckBoxCheckAllHorizontal = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}CheckAllHorizontalFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderCheckboxSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}SelectFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderCheckBoxCheckAllSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}CheckAllSelectFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderCheckBoxCustom = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}CustomFormItem`];
    //
    //   return (
    //     <Component {...defaultProps} {...(props || {})}>
    //       {(dataSource) => renderChildren?.(dataSource)}
    //     </Component>
    //   );
    // };
    // const renderCheckBoxCheckAllCustom = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}CheckAllCustomFormItem`];
    //
    //   return (
    //     <Component {...defaultProps} {...(props || {})}>
    //       {(dataSource) => renderChildren?.(dataSource)}
    //     </Component>
    //   );
    // };
    //
    // const renderTransferSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}SelectFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    //
    // const renderTableSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}SelectFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderTableMultiSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}MulitSelectFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderTablePagingSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}PaginationSelectFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderTablePagingMultiSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}PaginationMulitSelectFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    //
    // const renderListSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}SelectFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderListMultiSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}MulitSelectFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderListPagingSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}PaginationSelectFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderListPagingMultiSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}PaginationMulitSelectFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    //
    // const renderTreeSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}FormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderTreeMultiSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}MulitFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderTreeSelectLeaf = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}LeafFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderTreeMultiSelectLeaf = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}LeafMulitFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    //
    // const renderCascaderSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}FormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderCascaderMultiSelect = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}MulitFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderCascaderSelectLeaf = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}LeafFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };
    // const renderCascaderMultiSelectLeaf = () => {
    //   const Component = FormItemGeneratorToDict[`${dictName}LeafMulitFormItem`];
    //
    //   return <Component {...defaultProps} {...(props || {})} />;
    // };

    const renderInput = () => {
      return <Input {...defaultProps} {...(props || {})} />;
    };
    const renderTextArea = () => {
      return <Input.TextArea {...defaultProps} {...(props || {})} />;
    };
    const renderInputNumber = () => {
      return <InputNumber {...defaultProps} {...(props || {})} />;
    };
    const renderInputNumberDecimal1 = () => {
      return <InputNumberDecimal1 {...defaultProps} {...(props || {})} />;
    };
    const renderInputNumberDecimal2 = () => {
      return <InputNumberDecimal2 {...defaultProps} {...(props || {})} />;
    };
    const renderInputNumberInteger = () => {
      return <InputNumberInteger {...defaultProps} {...(props || {})} />;
    };
    const renderDatePicker = () => {
      return <DatePicker {...defaultProps} {...(props || {})} />;
    };
    const renderTimePicker = () => {
      return <TimePicker {...defaultProps} {...(props || {})} />;
    };
    const renderRangePicker = () => {
      return <RangePicker {...defaultProps} {...(props || {})} />;
    };
    const renderSlider = () => {
      return <Slider {...defaultProps} {...(props || {})} />;
    };
    const renderSliderRange = () => {
      return <Slider range {...defaultProps} {...(props || {})} />;
    };
    const renderRate = () => {
      return <Rate {...defaultProps} {...(props || {})} />;
    };
    const renderSwitch = () => {
      return <Switch {...defaultProps} {...(props || {})} />;
    };
    const renderDict = () => {
      const Component = FormItemGeneratorToDict[`${dictName}FormItem`];

      if (dictName?.indexOf('CustomFormItem') !== -1) {
        return (
          <Component {...defaultProps} {...(props || {})}>
            {(data) => renderChildren?.(data)}
          </Component>
        );
      }

      return <Component {...defaultProps} {...(props || {})} />;
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

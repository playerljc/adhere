import { Input, InputNumber, Rate, Slider, Switch } from 'antd';
import React, { ReactNode } from 'react';

import AntdFormItem from '@baifendian/adhere-ui-antdformitem';

import { FormItemGeneratorConfig } from '../../../types';

const {
  FormItemGeneratorToDict,
  AntFormItemNormalize: {
    DatePicker,
    InputNumberDecimal1,
    InputNumberDecimal2,
    InputNumberInteger,
    RangePicker,
    TimePicker,
  },
} = AntdFormItem;

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
    };

    const needProps = {
      onBlur: (e) => {
        if (props.onBlur) {
          props.onBlur(e, { form, dataIndex, rowIndex });
        }
      },
      onChange: (e) => {
        if (props.onChange) {
          props.onChange(e, { form, dataIndex, rowIndex });
        }
      },
    };

    const renderInput = () => {
      return <Input {...defaultProps} {...(props || {})} {...needProps} />;
    };

    const renderTextArea = () => {
      return <Input.TextArea {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderInputNumber = () => {
      return <InputNumber {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderInputNumberDecimal1 = () => {
      return <InputNumberDecimal1 {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderInputNumberDecimal2 = () => {
      return <InputNumberDecimal2 {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderInputNumberInteger = () => {
      return <InputNumberInteger {...defaultProps} {...(props || {})} {...needProps} />;
    };

    const renderSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}FormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}MulitFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderCheckAllMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}CheckAllMulitFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };

    const renderAutoCompleteSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}FormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderAutoCompleteSelectMulti = () => {
      const Component = FormItemGeneratorToDict[`${dictName}MulitFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderAutoCompleteSelectCheckAllMulti = () => {
      const Component = FormItemGeneratorToDict[`${dictName}CheckAllMulitFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };

    const renderRadioHorizontal = () => {
      const Component = FormItemGeneratorToDict[`${dictName}HorizontalFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderRadioButton = () => {
      const Component = FormItemGeneratorToDict[`${dictName}ButtonFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderRadioSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}SelectFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderRadioCustom = () => {
      const Component = FormItemGeneratorToDict[`${dictName}CustomFormItem`];

      return (
        <Component {...defaultProps} {...(props || {})} {...needProps}>
          {(data) => renderChildren?.(data)}
        </Component>
      );
    };

    const renderCheckBoxHorizontal = () => {
      const Component = FormItemGeneratorToDict[`${dictName}HorizontalFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderCheckBoxCheckAllHorizontal = () => {
      const Component = FormItemGeneratorToDict[`${dictName}CheckAllHorizontalFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderCheckboxSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}SelectFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderCheckBoxCheckAllSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}CheckAllSelectFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderCheckBoxCustom = () => {
      const Component = FormItemGeneratorToDict[`${dictName}CustomFormItem`];

      return (
        <Component {...defaultProps} {...(props || {})} {...needProps}>
          {(dataSource) => renderChildren?.(dataSource)}
        </Component>
      );
    };
    const renderCheckBoxCheckAllCustom = () => {
      const Component = FormItemGeneratorToDict[`${dictName}CheckAllCustomFormItem`];

      return (
        <Component {...defaultProps} {...(props || {})} {...needProps}>
          {(dataSource) => renderChildren?.(dataSource)}
        </Component>
      );
    };

    const renderTransferSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}SelectFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };

    const renderTableSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}SelectFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderTableMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}MulitSelectFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderTablePagingSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}PaginationSelectFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderTablePagingMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}PaginationMulitSelectFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };

    const renderListSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}SelectFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderListMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}MulitSelectFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderListPagingSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}PaginationSelectFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderListPagingMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}PaginationMulitSelectFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };

    const renderTreeSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}FormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderTreeMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}MulitFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderTreeSelectLeaf = () => {
      const Component = FormItemGeneratorToDict[`${dictName}LeafFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderTreeMultiSelectLeaf = () => {
      const Component = FormItemGeneratorToDict[`${dictName}LeafMulitFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };

    const renderCascaderSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}FormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderCascaderMultiSelect = () => {
      const Component = FormItemGeneratorToDict[`${dictName}MulitFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderCascaderSelectLeaf = () => {
      const Component = FormItemGeneratorToDict[`${dictName}LeafFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderCascaderMultiSelectLeaf = () => {
      const Component = FormItemGeneratorToDict[`${dictName}LeafMulitFormItem`];

      return <Component {...defaultProps} {...(props || {})} {...needProps} />;
    };

    const renderDatePicker = () => {
      return <DatePicker {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderTimePicker = () => {
      return <TimePicker {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderRangePicker = () => {
      return <RangePicker {...(props || {})} {...needProps} />;
    };

    const renderSlider = () => {
      return <Slider {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderSliderRange = () => {
      return <Slider range {...defaultProps} {...(props || {})} {...needProps} />;
    };

    const renderRate = () => {
      return <Rate {...defaultProps} {...(props || {})} {...needProps} />;
    };
    const renderSwitch = () => {
      return <Switch {...defaultProps} {...(props || {})} {...needProps} />;
    };

    const typeMap = new Map<string, () => ReactNode>([
      ['input', renderInput],
      ['textArea', renderTextArea],

      ['inputNumber', renderInputNumber],
      ['inputNumberDecimal1', renderInputNumberDecimal1],
      ['inputNumberDecimal2', renderInputNumberDecimal2],
      ['inputNumberInteger', renderInputNumberInteger],

      ['select', renderSelect],
      ['multiSelect', renderMultiSelect],
      ['checkAllMultiSelect', renderCheckAllMultiSelect],

      ['autoCompleteSelect', renderAutoCompleteSelect],
      ['autoCompleteSelectMulti', renderAutoCompleteSelectMulti],
      ['autoCompleteSelectCheckAllMulti', renderAutoCompleteSelectCheckAllMulti],

      ['radioHorizontal', renderRadioHorizontal],
      ['radioButton', renderRadioButton],
      ['radioSelect', renderRadioSelect],
      ['radioCustom', renderRadioCustom],

      ['checkBoxHorizontal', renderCheckBoxHorizontal],
      ['checkBoxCheckAllHorizontal', renderCheckBoxCheckAllHorizontal],
      ['checkboxSelect', renderCheckboxSelect],
      ['checkBoxCheckAllSelect', renderCheckBoxCheckAllSelect],
      ['checkBoxCustom', renderCheckBoxCustom],
      ['checkBoxCheckAllCustom', renderCheckBoxCheckAllCustom],

      ['transferSelect', renderTransferSelect],

      ['tableSelect', renderTableSelect],
      ['tableMultiSelect', renderTableMultiSelect],
      ['tablePagingSelect', renderTablePagingSelect],
      ['tablePagingMultiSelect', renderTablePagingMultiSelect],

      ['listSelect', renderListSelect],
      ['listMultiSelect', renderListMultiSelect],
      ['listPagingSelect', renderListPagingSelect],
      ['listPagingMultiSelect', renderListPagingMultiSelect],

      ['treeSelect', renderTreeSelect],
      ['treeMultiSelect', renderTreeMultiSelect],
      ['treeSelectLeaf', renderTreeSelectLeaf],
      ['treeMultiSelectLeaf', renderTreeMultiSelectLeaf],

      ['cascaderSelect', renderCascaderSelect],
      ['cascaderMultiSelect', renderCascaderMultiSelect],
      ['cascaderSelectLeaf', renderCascaderSelectLeaf],
      ['cascaderMultiSelectLeaf', renderCascaderMultiSelectLeaf],

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

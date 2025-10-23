import type { DatePickerProps, InputNumberProps, InputProps, RadioGroupProps, RateProps, SelectProps, SliderSingleProps, SwitchProps, TimePickerProps, TreeSelectProps, UploadProps } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';
import type { RangePickerProps } from 'antd/es/date-picker';
import type { TextAreaProps } from 'antd/es/input/TextArea';
import type { OptionProps } from 'antd/es/select';
import React, { ReactElement } from 'react';
import type { TagItemProps } from './types';
/**
 * 表单项目渲染器导出对象
 * @description 包含所有表单组件的渲染函数
 */
declare const _default: {
    renderText: React.NamedExoticComponent<InputProps>;
    renderInput: React.NamedExoticComponent<InputProps>;
    renderSearch: React.NamedExoticComponent<InputProps>;
    renderPassword: React.NamedExoticComponent<InputProps>;
    renderInputArea: React.NamedExoticComponent<TextAreaProps>;
    renderInputNumber: React.NamedExoticComponent<InputNumberProps<import("rc-input-number").ValueType>>;
    renderRadio: React.NamedExoticComponent<RadioGroupProps>;
    renderCheckbox: React.NamedExoticComponent<CheckboxGroupProps<any>>;
    renderSelect: React.NamedExoticComponent<SelectProps<any, import("rc-select/lib/Select").DefaultOptionType> & {
        optGroup?: Array<OptionProps[]>;
        renderOption?: (v: OptionProps) => ReactElement;
        autoComplete?: boolean;
    }>;
    renderDatePicker: React.NamedExoticComponent<DatePickerProps>;
    renderRangePicker: React.NamedExoticComponent<RangePickerProps>;
    renderTimePicker: React.NamedExoticComponent<TimePickerProps>;
    renderSwitch: React.NamedExoticComponent<SwitchProps>;
    renderTreeSelect: React.NamedExoticComponent<TreeSelectProps<any, import("rc-tree-select/lib/interface").DataNode>>;
    renderSlider: React.NamedExoticComponent<SliderSingleProps>;
    renderRate: React.NamedExoticComponent<RateProps>;
    renderTag: React.NamedExoticComponent<TagItemProps>;
    renderUpload: React.NamedExoticComponent<UploadProps<any>>;
};
export default _default;

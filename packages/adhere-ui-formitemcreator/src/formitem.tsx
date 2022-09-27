import {
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  TreeSelect,
  Upload,
} from 'antd';
import type {
  DatePickerProps,
  InputNumberProps,
  InputProps,
  RadioGroupProps,
  RateProps,
  SelectProps,
  SliderSingleProps,
  SwitchProps,
  TimePickerProps,
  TreeSelectProps,
  UploadProps,
} from 'antd';
import type { CheckboxGroupProps, CheckboxProps } from 'antd/es/checkbox';
import type { RangePickerProps } from 'antd/es/date-picker';
import type { TextAreaProps } from 'antd/es/input/TextArea';
import type { OptionProps } from 'antd/es/select';
import React, { ReactElement, memo } from 'react';

import Intl from '@baifendian/adhere-util-intl';

const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

const renderText = memo<InputProps>(({ value, ...others }) => <Input {...others} readOnly />);

const renderInput = memo<InputProps>(
  ({ type, maxLength = 100, placeholder = Intl.v('请输入'), ...others }) => (
    <Input
      autoComplete="off"
      type={type}
      maxLength={maxLength || 100}
      placeholder={placeholder}
      {...others}
    />
  ),
);

const renderSearch = memo<InputProps>(
  ({ maxLength = 800, placeholder = Intl.v('请输入'), ...others }) => (
    <Input.Search
      autoComplete="off"
      maxLength={maxLength || 800}
      placeholder={placeholder}
      {...others}
    />
  ),
);

const renderInputArea = memo<TextAreaProps>(
  ({ maxLength = 500, rows = 4, placeholder = Intl.v('请输入'), ...others }) => (
    <TextArea
      autoComplete="off"
      maxLength={maxLength || 500}
      rows={rows}
      placeholder={placeholder}
      {...others}
    />
  ),
);

const renderPassword = memo<InputProps>(
  ({ type, maxLength = 800, placeholder = Intl.v('请输入'), ...others }) => (
    <Input.Password
      autoComplete="off"
      type={type}
      maxLength={maxLength || 800}
      placeholder={placeholder}
      {...others}
    />
  ),
);

const renderInputNumber = memo<InputNumberProps>(
  ({ placeholder = '请输入', max = Infinity, min = -Infinity, ...others }) => (
    <InputNumber
      autoComplete="off"
      placeholder={placeholder}
      max={max || Infinity}
      min={min || -Infinity}
      {...others}
    />
  ),
);

const renderRadio = memo<RadioGroupProps>(({ ...others }) => <RadioGroup {...others} />);

// @ts-ignore
const renderCheckbox = memo<CheckboxProps | CheckboxGroupProps>(({ options, ...others }) =>
  options.length && options.length === 1 ? (
    // @ts-ignore
    <Checkbox {...others}>{options[0].label}</Checkbox>
  ) : (
    // @ts-ignore
    <CheckboxGroup options={options} {...others} />
  ),
);

const renderSelect = memo<
  SelectProps & {
    optGroup: Array<OptionProps>;
    renderOption: (v: OptionProps) => ReactElement;
  }
>(({ optGroup, options, placeholder = Intl.v('请选择'), renderOption, ...others }) => {
  const renderOptionItem = (arr) =>
    (arr || []).map((v) => (
      <Option value={v.value} key={v.value} disabled={v.disabled}>
        {renderOption ? renderOption(v) : v.label}
      </Option>
    ));

  return (
    <Select placeholder={placeholder} {...others}>
      {optGroup && optGroup.length
        ? optGroup.map((e) => renderOptionItem(e))
        : renderOptionItem(options)}
    </Select>
  );
});

const renderRangePicker = memo<RangePickerProps>(({ format, ...others }) => (
  // @ts-ignore
  <RangePicker format={format} {...others} />
));

const renderDatePicker = memo<DatePickerProps>(({ format, ...others }) => (
  // @ts-ignore
  <DatePicker format={format} {...others} />
));

const renderTimePicker = memo<TimePickerProps>(({ ...others }) => <TimePicker {...others} />);

const renderSwitch = memo<SwitchProps>((item) => <Switch {...item} />);

const renderTreeSelect = memo<
  Omit<TreeSelectProps, 'treeData'> & {
    data: Pick<TreeSelectProps, 'treeData'>;
  }
>(({ data, allowClear, ...others }) => (
  // @ts-ignore
  <TreeSelect allowClear={allowClear} treeData={data} {...others} />
));

const renderSlider = memo<SliderSingleProps>(({ ...others }) => <Slider {...others} />);

const renderRate = memo<RateProps>(({ ...others }) => <Rate {...others} />);

const renderUpload = memo<UploadProps>(({ ...others }) => <Upload {...others} />);

export default {
  renderText,
  renderInput,
  renderSearch,
  renderPassword,
  renderInputArea,
  renderInputNumber,
  renderRadio,
  renderCheckbox,
  renderSelect,
  renderDatePicker,
  renderRangePicker,
  renderTimePicker,
  renderSwitch,
  renderTreeSelect,
  renderSlider,
  renderRate,
  renderUpload,
};

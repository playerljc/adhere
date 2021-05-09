import React from 'react';
import {
  Input,
  InputNumber,
  Radio,
  Checkbox,
  Select,
  DatePicker,
  Switch,
  TreeSelect,
  Slider,
  TimePicker,
  Rate,
  Upload,
} from 'antd';

import Intl from '@baifendian/adhere-util-intl';

const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

const renderText = ({ value, ...others }) => <Input {...others} readOnly />;

const renderInput = ({ type, maxLength = 100, placeholder = Intl.v('请输入'), ...others }) => (
  <Input
    autoComplete="off"
    type={type}
    maxLength={maxLength || 100}
    placeholder={placeholder}
    {...others}
  />
);

const renderSearch = ({ maxLength = 800, placeholder = Intl.v('请输入'), ...others }) => (
  <Input.Search
    autoComplete="off"
    maxLength={maxLength || 800}
    placeholder={placeholder}
    {...others}
  />
);

const renderInputArea = ({
  maxLength = 500,
  rows = 4,
  placeholder = Intl.v('请输入'),
  ...others
}) => (
  <TextArea
    autoComplete="off"
    maxLength={maxLength || 500}
    rows={rows}
    placeholder={placeholder}
    {...others}
  />
);

const renderPassword = ({ type, maxLength = 800, placeholder = Intl.v('请输入'), ...others }) => (
  <Input.Password
    autoComplete="off"
    type={type}
    maxLength={maxLength || 800}
    placeholder={placeholder}
    {...others}
  />
);

const renderInputNumber = ({
  placeholder = '请输入',
  max = Infinity,
  min = -Infinity,
  ...others
}) => (
  <InputNumber
    autoComplete="off"
    placeholder={placeholder}
    max={max || Infinity}
    min={min || -Infinity}
    {...others}
  />
);

const renderRadio = ({ ...others }) => <RadioGroup {...others} />;

const renderCheckbox = ({ options, ...others }) =>
  options.length && options.length === 1 ? (
    <Checkbox {...others}>{options[0].label}</Checkbox>
  ) : (
    <CheckboxGroup options={options} {...others} />
  );

const renderSelect = ({
  optGroup,
  options,
  placeholder = Intl.v('请选择'),
  renderOption,
  ...others
}) => {
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
};

const renderRangePicker = ({ format, ...others }) => <RangePicker format={format} {...others} />;

const renderDatePicker = ({ format, ...others }) => <DatePicker format={format} {...others} />;

const renderTimePicker = ({ ...others }) => <TimePicker {...others} />;

const renderSwitch = (item) => <Switch {...item} />;

const renderTreeSelect = ({ data, allowClear, ...others }) => (
  <TreeSelect allowClear={allowClear} treeData={data} {...others} />
);

const renderSlider = ({ ...others }) => <Slider {...others} />;

const renderRate = ({ ...others }) => <Rate {...others} />;

const renderUpload = ({ ...others }) => <Upload {...others} />;

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

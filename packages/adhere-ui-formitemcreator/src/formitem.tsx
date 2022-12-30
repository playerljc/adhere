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
  Tag,
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
  InputRef,
} from 'antd';
import type { CheckboxGroupProps, CheckboxProps } from 'antd/es/checkbox';
import type { RangePickerProps } from 'antd/es/date-picker';
import type { TextAreaProps } from 'antd/es/input/TextArea';
import type { OptionProps } from 'antd/es/select';
import React, { FC, ReactElement, memo, useState, useEffect, useRef } from 'react';

import Intl from '@baifendian/adhere-util-intl';
import type { TagItemProps } from './types';

const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

// 只读文本
const renderText = memo<InputProps>(({ ...others }) => <Input {...others} readOnly />);

// 输入框
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

// 搜索框
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

// 多行输入框
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

// 密码输入框
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

// 数字输入框
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

// 单选
const renderRadio = memo<RadioGroupProps>(({ ...others }) => <RadioGroup {...others} />);

// 多选
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

// 下拉
const renderSelect = memo<
  SelectProps & {
    optGroup: Array<OptionProps>;
    renderOption: (v: OptionProps) => ReactElement;
    autoComplete: boolean; // 非多选模式自动填充
  }
>(({ optGroup, options, placeholder = Intl.v('请选择'), renderOption, autoComplete, ...others }) => {
  const [searchValue, setSearchValue] = useState('');

  const getOptions = (arr) => {
    if (arr?.length && autoComplete && searchValue && !others.mode) {
      if (arr?.find(v => (v.value && v.value.toString() === searchValue) || (v.label && v.label.toString() === searchValue))) {
        return arr;
      }
      return [...arr, { label: searchValue, value: searchValue }];
    }
    return arr;
  }
  const renderOptionItem = (arr) =>
    (arr || []).map((v) => (
      <Option value={v.value} key={v.value} disabled={v.disabled}>
        {renderOption ? renderOption(v) : v.label}
      </Option>
    ));

  return (
    <Select
      placeholder={placeholder}
      optionFilterProp="children"
      onSearch={v => setSearchValue(v)}
      {...others}
      showSearch={others.showSearch || autoComplete}
    >
      {optGroup && optGroup.length
        ? optGroup.map((e) => renderOptionItem(e))
        : renderOptionItem(getOptions(options))}
    </Select>
  );
});

// 日期范围选择框
const renderRangePicker = memo<RangePickerProps>(({ ...others }) => (
  // @ts-ignore
  <RangePicker {...others} />
));

// 日期选择框
const renderDatePicker = memo<DatePickerProps>(({...others }) => (
  // @ts-ignore
  <DatePicker {...others} />
));

// 时间选择框
const renderTimePicker = memo<TimePickerProps>(({ ...others }) => <TimePicker {...others} />);

// 开关
const renderSwitch = memo<SwitchProps>((item) => <Switch {...item} />);

// 树形选择框
const renderTreeSelect = memo<TreeSelectProps>(({ ...others }) => (
  // @ts-ignore
  <TreeSelect {...others} />
));

// 滑动输入条
const renderSlider = memo<SliderSingleProps>(({ ...others }) => <Slider {...others} />);

// 评分
const renderRate = memo<RateProps>(({ ...others }) => <Rate {...others} />);

// 上传
const renderUpload = memo<UploadProps>(({ ...others }) => <Upload {...others} />);

// 标签
const Tags: FC<TagItemProps> = (props) => {
  const { longLimit = 20, disabled, addTagInner = '+' } = props;
  const [tags, setTags] = useState(props.value || []);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputValue, setEditInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible, inputValue]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [editInputValue]);

  useEffect(() => {
    if (JSON.stringify(props.value) !== JSON.stringify(tags)) {
      setTags(props.value || []);
    }
  }, [props.value]);

  useEffect(() => {
    if (props.onChange) {
      props.onChange(tags);
    }
  }, [tags])

  const handleInputConfirm = (isedit: boolean) => {
    if (isedit) {
      const newTags = [...tags];
      newTags[editInputIndex] = editInputValue;
      setTags(newTags);
      setEditInputIndex(-1);
      setEditInputValue('');
    } else {
      if (inputValue && tags.indexOf(inputValue) === -1) {
        setTags([...tags, inputValue]);
      }
      setInputVisible(false);
      setInputValue('');
    }
  };

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter(tag => tag !== removedTag);
    setTags(newTags);
  };
  
  const renderTagInput = (val: string, isedit:boolean = false) => (
    <Input
      type="text"
      key={isedit ? val : ''}
      ref={isedit ? editInputRef : inputRef}
      size="small"
      maxLength={100}
      className="form-item-tag-input"
      value={val}
      onChange={e => isedit ? setEditInputValue(e.target.value) : setInputValue(e.target.value)}
      onPressEnter={() => handleInputConfirm(isedit)}
      onBlur={() => handleInputConfirm(isedit)}
    />
  );

  const renderTag = (tag: string, index: number) => {
    const isLongTag = tag.length > longLimit;

    return (
      <Tag
        className="form-item-tag"
        key={tag}
        closable={!disabled}
        onClose={() => handleClose(tag)}
      >
        <span
          onDoubleClick={e => {
            if (!disabled) {
              setEditInputIndex(index);
              setEditInputValue(tag);
              e.preventDefault();
            }
          }}
        >
          {isLongTag ? `${tag.slice(0, 20)}...` : tag}
        </span>
      </Tag>
    )
  }

  const renderAdd = () => (
    inputVisible ? renderTagInput(inputValue, false) : (
      <Tag
        className="form-item-tag-add"
        onClick={() => setInputVisible(true)}
      >
        {addTagInner}
      </Tag>
    )
  );

  return (
    <div className="form-item-tag">
      {
        tags?.map((tag, index) => (index === editInputIndex ? renderTagInput(editInputValue, true) : renderTag(tag, index)))
      }
      { disabled ? '' : renderAdd() }
    </div>
  )
};
const renderTag = memo<TagItemProps>((item) => <Tags {...item} />);

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
  renderTag,
  renderUpload,
};

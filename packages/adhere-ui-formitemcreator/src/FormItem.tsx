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
  Tag,
  TimePicker,
  TreeSelect,
  Upload,
} from 'antd';
import type {
  DatePickerProps,
  InputNumberProps,
  InputProps,
  InputRef,
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
import React, { FC, ReactElement, memo, useEffect, useRef, useState } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { TagItemProps } from './types';

const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

/**
 * 只读文本输入框组件
 * @description 渲染一个只读的文本输入框
 */
const renderText = memo<InputProps>(({ ...rest }) => <Input {...rest} readOnly />);

/**
 * 普通输入框组件
 * @description 渲染一个标准的输入框，带有默认的占位符和最大长度限制
 */
const renderInput = memo<InputProps>(
  ({ type, maxLength = 100, placeholder = Intl.get('please_enter'), ...rest }) => (
    <Input
      autoComplete="off"
      type={type}
      maxLength={maxLength || 100}
      placeholder={placeholder}
      {...rest}
    />
  ),
);

/**
 * 搜索输入框组件
 * @description 渲染一个带有搜索功能的输入框
 */
const renderSearch = memo<InputProps>(
  ({ maxLength = 800, placeholder = Intl.get('please_enter'), ...rest }) => (
    <Input.Search
      autoComplete="off"
      maxLength={maxLength || 800}
      placeholder={placeholder}
      {...rest}
    />
  ),
);

/**
 * 多行文本输入框组件
 * @description 渲染一个多行文本输入框
 */
const renderInputArea = memo<TextAreaProps>(
  ({ maxLength = 500, rows = 4, placeholder = Intl.get('please_enter'), ...rest }) => (
    <TextArea
      autoComplete="off"
      maxLength={maxLength || 500}
      rows={rows}
      placeholder={placeholder}
      {...rest}
    />
  ),
);

/**
 * 密码输入框组件
 * @description 渲染一个密码输入框
 */
const renderPassword = memo<InputProps>(
  ({ type, maxLength = 800, placeholder = Intl.get('please_enter'), ...rest }) => (
    <Input.Password
      autoComplete="off"
      type={type}
      maxLength={maxLength || 800}
      placeholder={placeholder}
      {...rest}
    />
  ),
);

/**
 * 数字输入框组件
 * @description 渲染一个数字输入框
 */
const renderInputNumber = memo<InputNumberProps>(
  ({ placeholder = '请输入', max = Infinity, min = -Infinity, ...rest }) => (
    <InputNumber
      autoComplete="off"
      placeholder={placeholder}
      max={max || Infinity}
      min={min || -Infinity}
      {...rest}
    />
  ),
);

/**
 * 单选框组组件
 * @description 渲染一个单选框组
 */
const renderRadio = memo<RadioGroupProps>(({ ...rest }) => <RadioGroup {...rest} />);

/**
 * 复选框组件
 * @description 根据选项数量渲染单个复选框或复选框组
 */
const renderCheckbox = memo<CheckboxGroupProps>(({ options = [], ...rest }) => {
  const checkboxOptions = options as Array<{ label: string; value: any }>;
  
  return checkboxOptions.length && checkboxOptions.length === 1 ? (
    <Checkbox {...(rest as CheckboxProps)}>{checkboxOptions[0].label}</Checkbox>
  ) : (
    <CheckboxGroup options={checkboxOptions} {...rest} />
  );
});

/**
 * 下拉选择器组件
 * @description 渲染一个下拉选择器，支持自动完成功能
 */
const renderSelect = memo<
  SelectProps & {
    optGroup?: Array<OptionProps[]>;
    renderOption?: (v: OptionProps) => ReactElement;
    autoComplete?: boolean; // 非多选模式自动填充
  }
>(
  ({
    optGroup,
    options = [],
    placeholder = Intl.get('please_select'),
    renderOption,
    autoComplete,
    ...rest
  }) => {
    const [searchValue, setSearchValue] = useState('');

    const getOptions = (arr: OptionProps[]): OptionProps[] => {
      if (arr?.length && autoComplete && searchValue && !rest.mode) {
        if (
          arr?.find(
            (v) =>
              (v.value && v.value.toString() === searchValue) ||
              (v.label && v.label.toString() === searchValue),
          )
        ) {
          return arr;
        }
        return [...arr, { label: searchValue, value: searchValue, children: searchValue }];
      }
      return arr;
    };

    const renderOptionItem = (arr: OptionProps[]): ReactElement[] =>
      (arr || []).map((v) => (
        <Option value={v.value} key={v.value} disabled={v.disabled}>
          {renderOption ? renderOption(v) : v.label}
        </Option>
      ));

    return (
      <Select
        placeholder={placeholder}
        optionFilterProp="children"
        onSearch={(v) => setSearchValue(v)}
        {...rest}
        showSearch={rest.showSearch || autoComplete}
      >
        {optGroup && optGroup.length
          ? optGroup.map((e) => renderOptionItem(e))
          : renderOptionItem(getOptions(options as OptionProps[]))}
      </Select>
    );
  },
);

/**
 * 日期范围选择器组件
 * @description 渲染一个日期范围选择器
 */
const renderRangePicker = memo<RangePickerProps>(({ ...rest }) => <RangePicker {...rest} />);

/**
 * 日期选择器组件
 * @description 渲染一个日期选择器
 */
const renderDatePicker = memo<DatePickerProps>(({ ...rest }) => <DatePicker {...rest} />);

/**
 * 时间选择器组件
 * @description 渲染一个时间选择器
 */
const renderTimePicker = memo<TimePickerProps>(({ ...rest }) => <TimePicker {...rest} />);

/**
 * 开关组件
 * @description 渲染一个开关组件
 */
const renderSwitch = memo<SwitchProps>((item) => <Switch {...item} />);

/**
 * 树形选择器组件
 * @description 渲染一个树形选择器
 */
const renderTreeSelect = memo<TreeSelectProps>(({ ...rest }) => <TreeSelect {...rest} />);

/**
 * 滑动条组件
 * @description 渲染一个滑动条组件
 */
const renderSlider = memo<SliderSingleProps>(({ ...rest }) => <Slider {...rest} />);

/**
 * 评分组件
 * @description 渲染一个评分组件
 */
const renderRate = memo<RateProps>(({ ...rest }) => <Rate {...rest} />);

/**
 * 文件上传组件
 * @description 渲染一个文件上传组件
 */
const renderUpload = memo<UploadProps>(({ ...rest }) => <Upload {...rest} />);

/**
 * 标签组件
 * @description 一个可编辑的标签组件，支持添加、删除和编辑标签
 */
const Tags: FC<TagItemProps> = (props) => {
  const { longLimit = 20, disabled, addTagInner = '+' } = props;
  const [tags, setTags] = useState<string[]>(props.value || []);
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
  }, [tags, props.onChange]);

  /**
   * 处理输入确认
   * @param isedit - 是否为编辑模式
   */
  const handleInputConfirm = (isedit: boolean): void => {
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

  /**
   * 处理标签关闭
   * @param removedTag - 要移除的标签
   */
  const handleClose = (removedTag: string): void => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  /**
   * 渲染标签输入框
   * @param val - 输入值
   * @param isedit - 是否为编辑模式
   * @returns 输入框组件
   */
  const renderTagInput = (val: string, isedit: boolean = false): ReactElement => (
    <Input
      type="text"
      key={isedit ? val : ''}
      ref={isedit ? editInputRef : inputRef}
      size="small"
      maxLength={100}
      className="form-item-tag-input"
      value={val}
      onChange={(e) => (isedit ? setEditInputValue(e.target.value) : setInputValue(e.target.value))}
      onPressEnter={() => handleInputConfirm(isedit)}
      onBlur={() => handleInputConfirm(isedit)}
    />
  );

  /**
   * 渲染单个标签
   * @param tag - 标签文本
   * @param index - 标签索引
   * @returns 标签组件
   */
  const renderTag = (tag: string, index: number): ReactElement => {
    const isLongTag = tag.length > longLimit;

    return (
      <Tag
        className="form-item-tag"
        key={tag}
        closable={!disabled}
        onClose={() => handleClose(tag)}
      >
        <span
          onDoubleClick={(e) => {
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
    );
  };

  /**
   * 渲染添加标签按钮
   * @returns 添加标签的组件
   */
  const renderAdd = (): ReactElement =>
    inputVisible ? (
      renderTagInput(inputValue, false)
    ) : (
      <Tag className="form-item-tag-add" onClick={() => setInputVisible(true)}>
        {addTagInner}
      </Tag>
    );

  return (
    <div className="form-item-tag">
      {tags?.map((tag, index) =>
        index === editInputIndex ? renderTagInput(editInputValue, true) : renderTag(tag, index),
      )}
      {disabled ? null : renderAdd()}
    </div>
  );
};

/**
 * 标签渲染组件
 * @description 渲染标签组件
 */
const renderTag = memo<TagItemProps>((item) => <Tags {...item} />);

/**
 * 表单项目渲染器导出对象
 * @description 包含所有表单组件的渲染函数
 */
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

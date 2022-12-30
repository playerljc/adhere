import {
  AutoComplete as AntAutoComplete,
  Cascader as AntCascader,
  DatePicker as AntDatePicker,
  Input as AntInput,
  InputNumber as AntInputNumber,
  Mentions as AntMentions,
  Modal as AntModal,
  Select as AntSelect,
  Slider as AntSlider,
  TimePicker as AntTimePicker,
  Tooltip as AntTooltip,
  TreeSelect as AntTreeSelect,
  Upload as AntUpload,
} from 'antd';
import React from 'react';

// @ts-ignore
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Resource from '@baifendian/adhere-util-resource';

const { RangePicker: AntRangePicker } = AntDatePicker;

const { useScrollLayout } = FlexLayout;

/**
 * createFactory
 * @description - 创建一个组件的包装
 * @param Component
 * @param defaultProps
 * @return {function(*)}
 */
function createFactory(Component, defaultProps) {
  function fn(_props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { getEl } = useScrollLayout();

    const props = { ...defaultProps, ..._props };

    if (!('getPopupContainer' in props)) {
      props.getPopupContainer = (el) => {
        return getEl?.() || el?.parentElement || document.body;
      };
    }

    const { children, ...reset } = props;

    return <Component {...reset}>{children}</Component>;
  }

  Object.assign(fn, Component);

  return fn;
}

export const Select = createFactory(AntSelect, {
  showSearch: true,
  allowClear: true,
  filterOption: (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
});

export const MultipleSelect = createFactory(AntSelect, {
  allowClear: true,
  mode: 'multiple',
  filterOption: (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
});

export const TreeSelect = createFactory(AntTreeSelect, {
  showSearch: true,
  allowClear: true,
});

export const AutoComplete = createFactory(AntAutoComplete, {
  allowClear: true,
  filterOption: (input, option) => option!.value.toUpperCase().indexOf(input.toUpperCase()) >= 0,
});

export const DatePicker = createFactory(AntDatePicker, {
  allowClear: true,
});

export const RangePicker = createFactory(AntRangePicker, {
  allowClear: true,
});

export const TimePicker = createFactory(AntTimePicker, {
  allowClear: true,
});

export const Cascader = createFactory(AntCascader, {
  showSearch: {
    filter: (inputValue, path) =>
      path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1),
  },
  allowClear: true,
});

export const Mentions = createFactory(AntMentions, {});

export const Slider = createFactory(AntSlider, {});

export const Upload = createFactory(AntUpload, {
  name: 'file',
  withCredentials: true,
});

export const Tooltip = createFactory(AntTooltip, {});

export const Modal = createFactory(AntModal, {
  closable: true,
  centered: true,
  maskClosable: true,
  destroyOnClose: true,
  zIndex: Resource.Dict.value.ResourceNormalMaxZIndex.value,
});

export const Input = createFactory(AntInput, {
  allowClear: true,
  maxLength: 1000,
  showCount: true,
});

export const TextArea = createFactory(AntInput.TextArea, {
  allowClear: true,
  maxLength: 1000,
  showCount: true,
  autoSize: true,
});

/**
 * InputNumberDecimal1
 * @description 1位小数
 */
export const InputNumberDecimal1 = createFactory(AntInputNumber, {
  precision: 1,
});

/**
 * InputNumberDecimal2
 * @description 2位小数
 */
export const InputNumberDecimal2 = createFactory(AntInputNumber, {
  precision: 2,
});

/**
 * InputNumberInteger
 * @description 整数
 */
export const InputNumberInteger = createFactory(AntInputNumber, {
  precision: 0,
});

import {
  Affix,
  Alert,
  Anchor,
  AutoComplete as AntAutoComplete,
  Cascader as AntCascader,
  DatePicker as AntDatePicker,
  Input as AntInput,
  InputNumber as AntInputNumber,
  Modal as AntModal,
  Select as AntSelect,
  TimePicker as AntTimePicker,
  TreeSelect as AntTreeSelect,
  Upload as AntUpload,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Carousel,
  Checkbox,
  Col,
  Collapse,
  ConfigProvider,
  Descriptions,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  FloatButton,
  Form,
  Grid,
  Image,
  Layout,
  List,
  Mentions,
  Menu,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  QRCode,
  Radio,
  Rate,
  Result,
  Row,
  Segmented,
  Skeleton,
  Slider,
  Space,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  Timeline,
  Tooltip,
  Tour,
  Transfer,
  Tree,
  Typography,
  Watermark,
} from 'antd';
import React from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Resource from '@baifendian/adhere-util-resource';

const { RangePicker: AntRangePicker } = AntDatePicker;

const { useScrollLayout } = FlexLayout;

const AntdComponents = {
  Alert,
  Anchor,
  Affix,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Carousel,
  Checkbox,
  Col,
  Collapse,
  Comment,
  ConfigProvider,
  Descriptions,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Form,
  Grid,
  Image,
  Layout,
  List,
  Menu,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Result,
  Row,
  Segmented,
  Skeleton,
  Space,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  Tour,
  Tag,
  Timeline,
  Transfer,
  Tree,
  Typography,
  Tooltip,
  Mentions,
  Slider,
  FloatButton,
  QRCode,
  Watermark,
};

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

  fn.defaultProps = defaultProps;

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

export const Upload = createFactory(AntUpload, {
  name: 'file',
  withCredentials: true,
});

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
  autoSize: false,
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

// 对剩余没有提供默认值的组件进行统一的操作
export default Object.entries(AntdComponents).reduce((Components, [componentName, Component]) => {
  Components[componentName] = createFactory(Component, {});

  return Components;
}, {});

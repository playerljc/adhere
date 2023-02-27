import {
  Affix as AntAffix,
  Alert as AntAlert,
  Anchor as AntAnchor,
  AutoComplete as AntAutoComplete,
  Avatar as AntAvatar,
  BackTop as AntBackTop,
  Badge as AntBadge,
  Breadcrumb as AntBreadcrumb,
  Button as AntButton,
  Calendar as AntCalendar,
  Card as AntCard,
  Carousel as AntCarousel,
  Cascader as AntCascader,
  Checkbox as AntCheckbox,
  Col as AntCol,
  Collapse as AntCollapse,
  Comment as AntComment,
  ConfigProvider as AntConfigProvider,
  DatePicker as AntDatePicker,
  Descriptions as AntDescriptions,
  Divider as AntDivider,
  Drawer as AntDrawer,
  Dropdown as AntDropdown,
  Empty as AntEmpty,
  Form as AntForm,
  Grid as AntGrid,
  Image as AntImage,
  Input as AntInput,
  InputNumber as AntInputNumber,
  Layout as AntLayout,
  List as AntList,
  Mentions as AntMentions,
  Menu as AntMenu,
  Modal as AntModal,
  PageHeader as AntPageHeader,
  Pagination as AntPagination,
  Popconfirm as AntPopconfirm,
  Popover as AntPopover,
  Progress as AntProgress,
  Radio as AntRadio,
  Rate as AntRate,
  Result as AntResult,
  Row as AntRow,
  Segmented as AntSegmented,
  Select as AntSelect,
  Skeleton as AntSkeleton,
  Slider as AntSlider,
  Space as AntSpace,
  Spin as AntSpin,
  Statistic as AntStatistic,
  Steps as AntSteps,
  Switch as AntSwitch,
  Table as AntTable,
  Tabs as AntTabs,
  Tag as AntTag,
  TimePicker as AntTimePicker,
  Timeline as AntTimeline,
  Tooltip as AntTooltip,
  Transfer as AntTransfer,
  Tree as AntTree,
  TreeSelect as AntTreeSelect,
  Typography as AntTypography,
  Upload as AntUpload,
  ButtonProps,
} from 'antd';
import React, { FC, useState } from 'react';

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
function createFactory(Component, defaultProps): any {
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
  placement: 'bottomLeft',
  filterOption: (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
});

export const MultipleSelect = createFactory(AntSelect, {
  showSearch: true,
  allowClear: true,
  mode: 'multiple',
  placement: 'bottomLeft',
  filterOption: (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
});

export const TreeSelect = createFactory(AntTreeSelect, {
  showSearch: true,
  allowClear: true,
  treeNodeFilterProp: 'title',
  placement: 'bottomLeft',
});

export const AutoComplete = createFactory(AntAutoComplete, {
  allowClear: true,
  filterOption: (input, option) => option!.value.toUpperCase().indexOf(input.toUpperCase()) >= 0,
});

export const DatePicker = createFactory(AntDatePicker, {
  allowClear: true,
  placement: 'bottomLeft',
});

export const RangePicker = createFactory(AntRangePicker, {
  allowClear: true,
  placement: 'bottomLeft',
});

export const TimePicker = createFactory(AntTimePicker, {
  allowClear: true,
  placement: 'bottomLeft',
});

export const Cascader = createFactory(AntCascader, {
  showSearch: {
    filter: (inputValue, path) =>
      path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1),
  },
  allowClear: true,
  placement: 'bottomLeft',
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

/**
 * SubmitButton
 * @description 提交按钮
 */
export const SubmitButton = createFactory(
  (function () {
    const Component: FC<ButtonProps> = (props) => {
      const [loading, setLoading] = useState<boolean>(false);

      return (
        <Button
          loading={loading}
          {...props}
          onClick={(e) => {
            if (!props.onClick) return;

            if (loading) return;

            setLoading(true);

            props
              .onClick(e)
              // @ts-ignore
              ?.then?.(() => setLoading(false))
              ?.catch?.(() => setLoading(false));
          }}
        >
          {props.children}
        </Button>
      );
    };

    return Component;
  })(),
  {},
);

export const Affix = createFactory(AntAffix, {});
export const Alert = createFactory(AntAlert, {});
export const Anchor = createFactory(AntAnchor, {});
export const Avatar = createFactory(AntAvatar, {});
export const BackTop = createFactory(AntBackTop, {});
export const Badge = createFactory(AntBadge, {});
export const Breadcrumb = createFactory(AntBreadcrumb, {});
export const Button = createFactory(AntButton, {});
export const Calendar = createFactory(AntCalendar, {});
export const Card = createFactory(AntCard, {});
export const Carousel = createFactory(AntCarousel, {});
export const Checkbox = createFactory(AntCheckbox, {});
export const Col = createFactory(AntCol, {});
export const Collapse = createFactory(AntCollapse, {});
export const Comment = createFactory(AntComment, {});
export const ConfigProvider = createFactory(AntConfigProvider, {});
export const Descriptions = createFactory(AntDescriptions, {});
export const Divider = createFactory(AntDivider, {});
export const Drawer = createFactory(AntDrawer, {});
export const Dropdown = createFactory(AntDropdown, {});
export const Empty = createFactory(AntEmpty, {});
export const Form = createFactory(AntForm, {});
export const Grid = createFactory(AntGrid, {});
export const Image = createFactory(AntImage, {});
export const Layout = createFactory(AntLayout, {});
export const List = createFactory(AntList, {});
export const Mentions = createFactory(AntMentions, {});
export const Menu = createFactory(AntMenu, {});
export const PageHeader = createFactory(AntPageHeader, {});
export const Pagination = createFactory(AntPagination, {});
export const Popconfirm = createFactory(AntPopconfirm, {});
export const Popover = createFactory(AntPopover, {});
export const Progress = createFactory(AntProgress, {});
export const Radio = createFactory(AntRadio, {});
export const Rate = createFactory(AntRate, {});
export const Result = createFactory(AntResult, {});
export const Row = createFactory(AntRow, {});
export const Segmented = createFactory(AntSegmented, {});
export const Skeleton = createFactory(AntSkeleton, {});
export const Slider = createFactory(AntSlider, {});
export const Space = createFactory(AntSpace, {});
export const Spin = createFactory(AntSpin, {});
export const Statistic = createFactory(AntStatistic, {});
export const Steps = createFactory(AntSteps, {});
export const Switch = createFactory(AntSwitch, {});
export const Table = createFactory(AntTable, {});
export const Tabs = createFactory(AntTabs, {});
export const Tag = createFactory(AntTag, {});
export const Timeline = createFactory(AntTimeline, {});
export const Tooltip = createFactory(AntTooltip, {});
export const Transfer = createFactory(AntTransfer, {});
export const Tree = createFactory(AntTree, {});
export const Typography = createFactory(AntTypography, {});

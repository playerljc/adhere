import {
  AutoCompleteProps,
  BreadcrumbProps,
  CascaderProps,
  DropdownProps,
  ListProps,
  MenuProps,
  RadioGroupProps,
  SegmentedProps,
  SelectProps,
  StepsProps,
  TableProps,
  TagProps,
  TimelineProps,
  TransferProps,
  TreeSelectProps,
} from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import { ReactNode } from 'react';

interface LabelValue {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface RadioLabelValue extends LabelValue {
  disabled: boolean;
}

interface FormItemProps {
  value?: any;
  onChange?: (value?: any) => void;
}

export interface SelectFormItemProps {
  selectProps?: SelectProps & {
    onChange: (any) => void;
  };
  dataSource: LabelValue[];
}

export interface CheckAllFormItemProps extends FormItemProps, SelectFormItemProps {
  onCheckAllChange: (checkAll: boolean) => void;
}

export interface CheckBoxVerticalFormItemProps extends CheckboxGroupProps {
  dataSource: LabelValue[];
}

export interface CheckBoxHorizontalFormItemProps extends CheckboxGroupProps {
  dataSource: LabelValue[];
}

export interface CheckBoxCheckAllVerticalFormItemProps extends CheckboxGroupProps {
  dataSource: LabelValue[];
}

export interface CheckBoxCheckAllHorizontalFormItemProps extends CheckboxGroupProps {
  dataSource: LabelValue[];
}

// @ts-ignore
export interface CheckBoxCustomFormItemProps extends CheckboxGroupProps {
  dataSource: LabelValue[];
  children?: (
    params: {
      data: LabelValue;
      item: ReactNode;
    }[],
  ) => ReactNode;
}

export interface CheckBoxCheckAllCustomFormItemProps extends CheckBoxCustomFormItemProps {}

export type CascaderFormItemProps = {
  options: LabelValue[];
} & CascaderProps<any>;

export type CascaderLeafFormItemProps = {
  dataSource: LabelValue[];
} & CascaderProps<any>;

export type CascaderMulitFormItemProps = {
  options: LabelValue[];
} & CascaderProps<any>;

export type CascaderLeafMulitFormItemProps = {
  dataSource: LabelValue[];
} & CascaderProps<any>;

export interface ListFormItemProps extends ListProps<any> {
  dataSource: LabelValue[];
}

export interface ListSelectFormItemProps extends FormItemProps, ListFormItemProps {
  selectProps?: SelectFormItemProps;
  labelKey?: string;
}

export interface ListMulitSelectFormItemProps extends ListSelectFormItemProps {}

export interface RadioSelectFormItemProps extends FormItemProps, SelectFormItemProps {
  dataSource: RadioLabelValue[];
}

export interface TagSelectFormItemProps extends FormItemProps, SelectFormItemProps {
  dataSource: RadioLabelValue[];
}

export interface RadioVerticalFormItemProps extends RadioGroupProps {
  dataSource: LabelValue[];
}

export interface RadioHorizontalFormItemProps extends RadioVerticalFormItemProps {}

export interface RadioButtonFormItemProps extends RadioVerticalFormItemProps {}

// @ts-ignore
export interface RadioCustomFormItemProps extends RadioVerticalFormItemProps {
  children?: (
    params: {
      data: LabelValue;
      item: ReactNode;
    }[],
  ) => ReactNode;
}

export interface TableFormItemProps extends TableProps<any> {}

// @ts-ignore
export interface TableSelectFormItemProps extends FormItemProps, TableFormItemProps {
  selectProps?: SelectFormItemProps;
  labelKey?: string;
  dataSource: LabelValue[];
  rowKey?: string;
}

export interface TableMulitSelectFormItemProps extends TableSelectFormItemProps {}

export interface TransferFormItemProps extends TransferProps<any> {
  dataSource: LabelValue[];
  value?: any;
}

export interface TreeSelectFormItemProps extends TreeSelectProps {}

export interface TreeSelectLeafFormItemProps extends TreeSelectFormItemProps {
  dataSource: LabelValue[];
}
export interface TreeSelectMulitFormItemProps extends TreeSelectLeafFormItemProps {}

export interface TreeSelectLeafMulitFormItemProps extends TreeSelectMulitFormItemProps {}

// @ts-ignore
export interface AutoCompleteFormItemProps extends FormItemProps, AutoCompleteProps {
  dataSource: LabelValue[];
}

export interface TagFormItemProps extends FormItemProps {
  dataSource: LabelValue[];
  renderItem?: (params: {
    record?: LabelValue;
    index?: number;
    value?: any;
    onChange?: (value?: any) => void;
  }) => {
    component?: any;
    props: TagProps;
    children: ReactNode;
  };
}

export interface TagCheckAllFormItemProps extends FormItemProps, TagFormItemProps {}

// @ts-ignore
export interface MenuFormItemProps extends MenuProps, FormItemProps {}

export interface DropdownFormItemProps extends DropdownProps, FormItemProps {}

// @ts-ignore
export interface BreadcrumbFormItemProps extends FormItemProps, BreadcrumbProps {}

// @ts-ignore
export interface SegmentedFormItemProps extends FormItemProps, SegmentedProps {}

export interface TimelineFormItemProps extends FormItemProps, TimelineProps {}

// @ts-ignore
export interface StepsFormItemProps extends FormItemProps, StepsProps {}

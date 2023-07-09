import {
  AutoCompleteProps,
  BreadcrumbProps,
  CascaderProps,
  DropdownProps,
  ListProps,
  MentionProps,
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
import { ReactElement, ReactNode } from 'react';

export interface LabelValue {
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

interface SyncFormItemProps extends FormItemProps {
  firstLoading?: ReactElement;
  renderEmpty?: Function;
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

export type CheckBoxCustomFormItemProps = CheckboxGroupProps & {
  dataSource: LabelValue[];
  children?: (
    params: {
      data: LabelValue;
      item: ReactNode;
    }[],
  ) => ReactNode;
};

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
  firstLoading?: ReactElement;
  renderEmpty?: Function;
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

export type RadioCustomFormItemProps = RadioVerticalFormItemProps & {
  children?: (
    params: {
      data: LabelValue;
      item: ReactNode;
    }[],
  ) => ReactNode;
};

export interface TableFormItemProps extends TableProps<any> {
  firstLoading?: ReactElement;
  renderEmpty?: Function;
}

export type TableSelectFormItemProps = FormItemProps &
  TableFormItemProps & {
    selectProps?: SelectFormItemProps;
    labelKey?: string;
    dataSource: LabelValue[];
    rowKey?: string;
  };

export interface TableMulitSelectFormItemProps extends TableSelectFormItemProps {}

export interface TransferFormItemProps extends TransferProps<any> {
  dataSource: LabelValue[];
  value?: any;
  firstLoading?: ReactElement;
  renderEmpty?: Function;
}

export interface TreeSelectFormItemProps extends TreeSelectProps {}

export interface TreeSelectLeafFormItemProps extends TreeSelectFormItemProps {
  dataSource: LabelValue[];
}
export interface TreeSelectMulitFormItemProps extends TreeSelectLeafFormItemProps {}

export interface TreeSelectLeafMulitFormItemProps extends TreeSelectMulitFormItemProps {}

export type AutoCompleteFormItemProps = FormItemProps &
  AutoCompleteProps & {
    dataSource: LabelValue[];
  };

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

export type MenuFormItemProps = MenuProps & FormItemProps;

export interface DropdownFormItemProps extends DropdownProps, FormItemProps {}

export type BreadcrumbFormItemProps = FormItemProps & BreadcrumbProps;

export interface SegmentedFormItemProps extends SegmentedProps {}

export interface TimelineFormItemProps extends SyncFormItemProps, TimelineProps {}

export type StepsFormItemProps = SyncFormItemProps & StepsProps;

export type MentionsFormItemProps = FormItemProps & MentionProps;

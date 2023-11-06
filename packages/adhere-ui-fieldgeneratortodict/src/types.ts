import type { SuspenseSyncProps } from '@baifendian/adhere-ui-suspense/es/types';

// import {
//   AutoCompleteProps,
//   BreadcrumbProps,
//   CascaderProps,
//   DropdownProps,
//   ListProps,
//   MentionProps,
//   MenuProps,
//   RadioGroupProps,
//   SegmentedProps,
//   SelectProps,
//   StepsProps,
//   TableProps,
//   TagProps,
//   TimelineProps,
//   TransferProps,
//   TreeSelectProps,
// } from 'antd';
// import { CheckboxGroupProps } from 'antd/es/checkbox';
// import { ReactElement, ReactNode } from 'react';
//
// import type { Components } from './FormItemGeneratorToDict';
//
// export interface LabelValue {
//   label: string;
//   value: string | number;
//   disabled?: boolean;
//   id?: string | number;
//   pId?: string | number;
//   isLeaf?: boolean;
// }
//
// interface RadioLabelValue extends LabelValue {
//   disabled: boolean;
// }
//
// interface FormItemProps {
//   value?: any;
//   onChange?: (value?: any) => void;
// }
//
// interface SyncFormItemProps extends FormItemProps {
//   firstLoading?: ReactElement;
//   renderNormalLoading?: (params: { children: ReactNode; loading: boolean }) => ReactNode;
//   renderEmpty?: Function;
//   isEmpty?: Function;
// }
//
// export interface SelectFormItemProps {
//   selectProps?: Omit<SelectProps, 'onChange'> & {
//     onChange: (value?: any, valueOpt?: any, dataSource?: LabelValue[]) => void;
//   };
//   dataSource: LabelValue[];
// }
//
// export interface CheckAllFormItemProps extends FormItemProps, SelectFormItemProps {
//   onCheckAllChange: (checkAll: boolean) => void;
// }
//
// export interface CheckBoxVerticalFormItemProps extends CheckboxGroupProps {
//   dataSource: LabelValue[];
// }
//
// export interface CheckBoxHorizontalFormItemProps extends CheckboxGroupProps {
//   dataSource: LabelValue[];
// }
//
// export interface CheckBoxCheckAllVerticalFormItemProps extends CheckboxGroupProps {
//   dataSource: LabelValue[];
// }
//
// export interface CheckBoxCheckAllHorizontalFormItemProps extends CheckboxGroupProps {
//   dataSource: LabelValue[];
// }
//
// export type CheckBoxCustomFormItemProps = CheckboxGroupProps & {
//   dataSource: LabelValue[];
//   children?: (
//     params: {
//       data: LabelValue;
//       item: ReactNode;
//     }[],
//   ) => ReactNode;
// };
//
// export interface CheckBoxCheckAllCustomFormItemProps extends CheckBoxCustomFormItemProps {}
//
// export type CascaderFormItemProps = {
//   treeDataSimpleMode?: boolean;
//   arrayToAntdTreeSelectConfig?: {
//     keyAttr: 'value';
//     titleAttr: 'value';
//     rootParentId: 0;
//     parentIdAttr: 'pId';
//   };
//   options: LabelValue[];
// } & CascaderProps<any>;
//
// export type CascaderLeafFormItemProps = {
//   dataSource: LabelValue[];
// } & CascaderProps<any>;
//
// export type CascaderMultiFormItemProps = {
//   options: LabelValue[];
// } & CascaderProps<any>;
//
// export type CascaderLeafMultiFormItemProps = {
//   dataSource: LabelValue[];
// } & CascaderProps<any>;
//
// export interface ListFormItemProps extends ListProps<any> {
//   dataSource: LabelValue[];
//   firstLoading?: ReactElement;
//   renderNormalLoading?: (params: { children: ReactNode; loading: boolean }) => ReactNode;
//   renderEmpty?: Function;
//   isEmpty?: Function;
// }
//
// export interface ListSelectFormItemProps extends FormItemProps, ListFormItemProps {
//   selectProps?: SelectFormItemProps;
//   labelKey?: string;
// }
//
// export interface ListMultiSelectFormItemProps extends ListSelectFormItemProps {}
//
// export interface RadioSelectFormItemProps extends FormItemProps, SelectFormItemProps {
//   dataSource: RadioLabelValue[];
// }
//
// export interface TagSelectFormItemProps extends FormItemProps, SelectFormItemProps {
//   dataSource: RadioLabelValue[];
// }
//
// export interface RadioVerticalFormItemProps extends RadioGroupProps {
//   dataSource: LabelValue[];
// }
//
// export interface RadioHorizontalFormItemProps extends RadioVerticalFormItemProps {}
//
// export interface RadioButtonFormItemProps extends RadioVerticalFormItemProps {}
//
// export type RadioCustomFormItemProps = RadioVerticalFormItemProps & {
//   children?: (
//     params: {
//       data: LabelValue;
//       item: ReactNode;
//     }[],
//   ) => ReactNode;
// };
//
// export interface TableFormItemProps extends TableProps<any> {
//   firstLoading?: ReactElement;
//   renderNormalLoading?: (params: { children: ReactNode; loading: boolean }) => ReactNode;
//   renderEmpty?: Function;
//   isEmpty?: Function;
// }
//
// export type TableSelectFormItemProps = FormItemProps &
//   TableFormItemProps & {
//     selectProps?: SelectFormItemProps;
//     labelKey?: string;
//     dataSource: LabelValue[];
//     rowKey?: string;
//   };
//
// export interface TableMultiSelectFormItemProps extends TableSelectFormItemProps {}
//
// export interface TransferFormItemProps extends TransferProps<any> {
//   dataSource: LabelValue[];
//   value?: any;
//   firstLoading?: ReactElement;
//   renderNormalLoading?: (params: { children: ReactNode; loading: boolean }) => ReactNode;
//   renderEmpty?: Function;
//   isEmpty?: Function;
// }
//
// export interface TreeSelectFormItemProps extends TreeSelectProps {}
//
// export interface TreeSelectAsyncFormItemProps extends TreeSelectFormItemProps {}
//
// export interface TreeSelectLeafFormItemProps extends TreeSelectFormItemProps {
//   dataSource: LabelValue[];
// }
// export interface TreeSelectMultiFormItemProps extends TreeSelectLeafFormItemProps {}
//
// export interface TreeSelectLeafMultiFormItemProps extends TreeSelectMultiFormItemProps {}
//
// export type AutoCompleteFormItemProps = FormItemProps &
//   AutoCompleteProps & {
//     dataSource: LabelValue[];
//   };
//
// export interface TagFormItemProps extends FormItemProps {
//   dataSource: LabelValue[];
//   renderItem?: (params: {
//     record?: LabelValue;
//     index?: number;
//     value?: any;
//     onChange?: (value?: any) => void;
//   }) => {
//     component?: any;
//     props: TagProps;
//     children: ReactNode;
//   };
// }
//
// export interface TagCheckAllFormItemProps extends FormItemProps, TagFormItemProps {}
//
// export type MenuFormItemProps = MenuProps & FormItemProps;
//
// export interface DropdownFormItemProps extends DropdownProps, FormItemProps {}
//
// export type BreadcrumbFormItemProps = FormItemProps & BreadcrumbProps;
//
// export interface SegmentedFormItemProps extends SegmentedProps {}
//
// export interface TimelineFormItemProps extends SyncFormItemProps, TimelineProps {}
//
// export type StepsFormItemProps = SyncFormItemProps & StepsProps;
//
// export type MentionsFormItemProps = FormItemProps & MentionProps;
//
export interface DictRefreshWrapperFunction {
  refresh();
}
//
// export type UseTreeSelectLeaf = (dataSource: LabelValue[]) => LabelValue[];
//
// export type ComponentsType = typeof Components;

export type UseDictParams<D> = {
  dictName: string;
  cascadeParams?: object;
  onDataSourceChange?: (dataSource: D) => void;
};

export type DictComponentProps<T, D> = Omit<T, 'options' | 'dataSource' | 'treeData'> & {
  cascadeParams?: object;
  onDataSourceChange?: (dataSource: D) => void;
};

export type SuspenseProps = Omit<SuspenseSyncProps, 'isEmpty'> & {
  isEmpty: (data: any) => boolean;
  emptyComponent: any;
};

export type SuspenseComponentProps<T> = T & {
  suspenseProps: Omit<SuspenseProps, 'data'>;
};

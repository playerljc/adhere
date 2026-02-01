import type { FormItemProps as AntFormItemProps, AutoCompleteProps as AntdAutoCompleteProps, CalendarProps, CascaderProps, CheckboxProps, DatePickerProps, FormProps, FormRule, InputProps, ListProps, PaginationProps, RadioProps, SelectProps, SpaceProps, StepsProps, TableProps, TagProps, TimePickerProps, TransferProps, TreeSelectProps } from 'antd';
import type { CheckboxGroupProps, CheckboxOptionType } from 'antd/es/checkbox';
import type { RangePickerProps } from 'antd/es/date-picker';
import useForm, { FormInstance } from 'antd/es/form/hooks/useForm';
import type { RadioGroupProps } from 'antd/es/radio';
import type { CheckableTagProps } from 'antd/es/tag';
import type { ColumnType } from 'antd/lib/table/interface';
import dayjs from 'dayjs';
import { ValidateFields } from 'rc-field-form/es/interface';
import type { CSSProperties, NamedExoticComponent, ReactElement, ReactNode } from 'react';
import type { SwiperOptions } from 'swiper/types';
import type { TreeAutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';
import type { AutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';
import ASync from '@baifendian/adhere-ui-suspense/es/Async';
import type { SuspenseASyncProps } from '@baifendian/adhere-ui-suspense/es/types';
import type { TreeUtilType } from '@baifendian/adhere-util/es/tree';
import type { IFlatTreeArrNode } from '@baifendian/adhere-util/es/types';
import AutoCompleteSelectInput from './auto-complete/AutoCompleteSelectInput';
import AsyncCascader from './cascader/AsyncCascader';
import AsyncCascaderChangeOnSelect from './cascader/AsyncCascaderChangeOnSelect';
import AsyncCascaderMulti from './cascader/AsyncCascaderMulti';
import AsyncCascaderShowChild from './cascader/AsyncCascaderShowChild';
import AsyncCascaderShowParent from './cascader/AsyncCascaderShowParent';
import CascaderChangeOnSelect from './cascader/CascaderChangeOnSelect';
import CascaderMulti from './cascader/CascaderMulti';
import CascaderShowChild from './cascader/CascaderShowChild';
import CascaderShowParent from './cascader/CascaderShowParent';
import CascaderTreeSelect from './cascader/CascaderTreeSelect';
import AutoCompleteCheckAllCheckboxSelect from './checkbox/AutoCompleteCheckAllCheckboxSelect';
import AutoCompleteCheckAllCustomCheckboxSelect from './checkbox/AutoCompleteCheckAllCustomCheckboxSelect';
import AutoCompleteCheckboxSelect from './checkbox/AutoCompleteCheckboxSelect';
import AutoCompleteCustomCheckboxSelect from './checkbox/AutoCompleteCustomCheckboxSelect';
import CheckAllCheckboxSelect from './checkbox/CheckAllCheckboxSelect';
import CheckAllCustomCheckboxSelect from './checkbox/CheckAllCustomCheckboxSelect';
import CheckboxGroupExt from './checkbox/CheckboxGroup';
import CheckboxSelect from './checkbox/CheckboxSelect';
import CustomCheckAllCheckbox from './checkbox/CustomCheckAllCheckbox';
import CustomCheckbox from './checkbox/CustomCheckbox';
import CustomCheckboxSelect from './checkbox/CustomCheckboxSelect';
import HorizontalCheckAllCheckbox from './checkbox/HorizontalCheckAllCheckbox';
import HorizontalCheckbox from './checkbox/HorizontalCheckbox';
import VerticalCheckAllCheckbox from './checkbox/VerticalCheckAllCheckbox';
import VerticalCheckbox from './checkbox/VerticalCheckbox';
import CheckboxWrapperFormItm from './form/CheckboxWrapperFormItm';
import CustomWrapperFormItem from './form/CustomWrapperFormItem';
import FormItem from './form/FormItem';
import NestingFormItem from './form/NestingFormItem';
import SubmitButton from './form/SubmitButton';
import AutoCompleteCheckAllListSelect from './list/AutoCompleteCheckAllListSelect';
import AutoCompleteListPagingSelect from './list/AutoCompleteListPagingSelect';
import AutoCompleteListSelect from './list/AutoCompleteListSelect';
import CheckAllListSelect from './list/CheckAllListSelect';
import CheckboxList from './list/CheckboxList';
import ListPaging from './list/ListPaging';
import ListPagingSelect from './list/ListPagingSelect';
import ListSelect from './list/ListSelect';
import RadioList from './list/RadioList';
import AutoCompleteCheckAllMultipleSelect from './multiple-select/AutoCompleteCheckAllMultipleSelect';
import AutoCompleteMultipleSelect from './multiple-select/AutoCompleteMultipleSelect';
import CheckAllSelect from './multiple-select/CheckAllMultipleSelect';
import AutoCompleteButtonRadioSelect from './radio/AutoCompleteButtonRadioSelect';
import AutoCompleteCustomRadioSelect from './radio/AutoCompleteCustomRadioSelect';
import AutoCompleteRadioSelect from './radio/AutoCompleteRadioSelect';
import ButtonRadio from './radio/ButtonRadio';
import ButtonRadioSelect from './radio/ButtonRadioSelect';
import CustomRadio from './radio/CustomRadio';
import CustomRadioSelect from './radio/CustomRadioSelect';
import HorizontalRadio from './radio/HorizontalRadio';
import RadioSelect from './radio/RadioSelect';
import VerticalRadio from './radio/VerticalRadio';
import AutoCompleteSelect from './select/AutoCompleteSelect';
import DropdownRenderSelect from './select/DropdownRenderSelect';
import Select from './select/Select';
import StepsSwiper from './steps/StepsSwiper';
import AutoCompleteTablePagingSelect from './table/AutoCompleteTablePagingSelect';
import AutoCompleteTableSelect from './table/AutoCompleteTableSelect';
import AutoCompleteTreeTablePagingSelect from './table/AutoCompleteTreeTablePagingSelect';
import AutoCompleteTreeTableSelect from './table/AutoCompleteTreeTableSelect';
import CheckboxTable from './table/CheckboxTable';
import CheckboxTreeTable from './table/CheckboxTreeTable';
import RadioTable from './table/RadioTable';
import RadioTreeTable from './table/RadioTreeTable';
import TableExt from './table/TableExt';
import TablePaging from './table/TablePaging';
import TablePagingSelect from './table/TablePagingSelect';
import TableSelect from './table/TableSelect';
import TreeTablePagingSelect from './table/TreeTablePagingSelect';
import TreeTableSelect from './table/TreeTableSelect';
import AutoCompleteCheckAllTagSelect from './tag/AutoCompleteCheckAllTagSelect';
import AutoCompleteTagSelect from './tag/AutoCompleteTagSelect';
import CheckAllTagSelect from './tag/CheckAllTagSelect';
import HorizontalCheckAllCheckableTagGroup from './tag/HorizontalCheckAllCheckableTagGroup';
import HorizontalCheckableTagGroup from './tag/HorizontalCheckableTagGroup';
import HorizontalTagGroup from './tag/HorizontalTagGroup';
import TagSelect from './tag/TagSelect';
import VerticalCheckAllCheckableTagGroup from './tag/VerticalCheckAllCheckableTagGroup';
import VerticalCheckableTagGroup from './tag/VerticalCheckableTagGroup';
import VerticalTagGroup from './tag/VerticalTagGroup';
import AutoCompleteTransferSelect from './transfer/AutoCompleteTransferSelect';
import TransferSelect from './transfer/TransferSelect';
import AsyncTreeCheckedShowAllSelect from './tree-select/AsyncTreeCheckedShowAllSelect';
import AsyncTreeCheckedShowChildSelect from './tree-select/AsyncTreeCheckedShowChildSelect';
import AsyncTreeCheckedShowParentSelect from './tree-select/AsyncTreeCheckedShowParentSelect';
import AsyncTreeLeafSelect from './tree-select/AsyncTreeLeafSelect';
import AsyncTreeMultiLeafSelect from './tree-select/AsyncTreeMultiLeafSelect';
import AsyncTreeMultiSelect from './tree-select/AsyncTreeMultiSelect';
import AsyncTreeSelect from './tree-select/AsyncTreeSelect';
import AutoCompleteTreeLeafSelect from './tree-select/AutoCompleteTreeLeafSelect';
import AutoCompleteTreeMultiLeafSelect from './tree-select/AutoCompleteTreeMultiLeafSelect';
import AutoCompleteTreeMultiSelect from './tree-select/AutoCompleteTreeMultiSelect';
import AutoCompleteTreeSelect from './tree-select/AutoCompleteTreeSelect';
import TreeDropdownRenderSelect from './tree-select/DropdownRenderSelect';
import TreeCheckedShowAllSelect from './tree-select/TreeCheckedShowAllSelect';
import TreeCheckedShowChildSelect from './tree-select/TreeCheckedShowChildSelect';
import TreeCheckedShowParentSelect from './tree-select/TreeCheckedShowParentSelect';
import TreeLeafSelect from './tree-select/TreeLeafSelect';
import TreeMultiLeafSelect from './tree-select/TreeMultiLeafSelect';
import TreeMultiSelect from './tree-select/TreeMultiSelect';
import { createFactory } from './util';
export type FormValidatorRulesType = {
    [prop: string]: (argv?: {
        params?: any;
        invalidMessage?: string;
    }) => FormRule;
};
export type PagingProps = {
    defaultLimit?: number;
    paging: {
        page: number;
        limit: number;
    };
    totalCount: number;
    onPagingShowSizeChange: PaginationProps['onShowSizeChange'];
    onPagingChange: PaginationProps['onChange'];
};
export type PagingWrapperProps<T> = {
    loadData: (page: number, limit: number, kw?: string) => Promise<{
        totalCount: number;
        data: T[];
    }>;
    defaultPage?: number;
    defaultLimit?: number;
    onDataSourceChange?: (page: number, dataSource: T[]) => void;
};
export type CheckAllWrapperStyleProps = {
    checkAllWrapperClassName?: string;
    checkAllWrapperStyle?: CSSProperties;
};
export type DropdownWrapperStyleProps = {
    dropdownWrapperClassName?: string;
    dropdownWrapperStyle?: CSSProperties;
    render?: (checkAllOrigin: ReactElement, childrenOrigin: ReactNode) => ReactElement;
};
export type CheckAllWrapperProps = Pick<SelectProps, 'value' | 'options'> & {
    onChange?: (checkedValue: any[], checked: boolean, changeValue: any[]) => void;
};
export type AutoCompleteCheckAllMultipleSelectProps = DropdownWrapperStyleProps & CheckAllWrapperStyleProps & AutoCompleteProps;
export type CheckAllSelectProps = DropdownWrapperStyleProps & CheckAllWrapperStyleProps & DropdownRenderSelectProps;
export type DropdownRenderSelectProps = Omit<SelectProps, 'children'> & {
    defaultInputValue?: string;
    emptyContent?: ReactElement;
    shouldRenderEmptyData?: boolean;
    children?: (arg: {
        originNode?: ReactElement;
        value?: SelectProps['value'];
        onChange?: SelectProps['onChange'];
        options?: SelectProps['options'];
    }) => ReactElement;
};
export type TreeDropdownRenderSelectProps = Omit<TreeSelectProps, 'children'> & {
    shouldRenderEmptyData?: boolean;
    emptyContent?: ReactElement;
    isUsePath?: boolean;
    children?: (arg: {
        originNode?: ReactElement;
        value?: TreeSelectProps['value'];
        onChange?: TreeSelectProps['onChange'];
        treeData?: TreeSelectProps['treeData'];
    }) => ReactElement;
};
export type CustomCheckAllCheckboxProps = CheckAllWrapperStyleProps & DropdownWrapperStyleProps & CustomCheckboxProps;
export type CustomCheckboxProps = {
    children?: (data: {
        data: CheckboxOptionType;
        onChange: (e: any, itemValue: CheckboxOptionType['value']) => void;
        disabled: boolean;
        checked: boolean;
        defaultNode: ReactElement;
    }[]) => ReactElement;
} & CheckboxGroupExtProps;
export type CustomRadioProps = RadioGroupProps & {
    children?: (data: {
        data: CheckboxOptionType;
        defaultNode: ReactElement;
    }[]) => ReactElement;
};
export type TagGroupProps = (HorizontalTagGroupProps | VerticalTagGroupProps) & {
    direction: SpaceProps['direction'];
};
export type HorizontalTagGroupProps = SpaceProps & {
    options: (TagProps & {
        value: SelectProps['value'];
    })[];
};
export type VerticalTagGroupProps = HorizontalTagGroupProps;
export type HorizontalCheckableTagGroupProps = CheckAllWrapperStyleProps & DropdownWrapperStyleProps & {
    mode?: 'multiple' | 'single';
    value: SelectProps['value'];
    onChange: CheckboxGroupExtProps['onChange'];
    options: (Partial<CheckableTagProps> & {
        value: string | number;
        label: string;
    })[];
};
export type VerticalCheckableTagGroupProps = HorizontalCheckableTagGroupProps;
export type CheckableTagGroupProps = (HorizontalCheckableTagGroupProps | VerticalCheckableTagGroupProps) & {
    direction?: SpaceProps['direction'];
};
export type TagSelectProps = DropdownRenderSelectProps & {
    tagProps?: Omit<VerticalCheckableTagGroupProps, 'value' | 'onChange' | 'options'>;
};
export type CheckAllListSelectProps = CheckAllWrapperStyleProps & DropdownWrapperStyleProps & CheckAllSelectProps & {
    listProps?: Omit<CheckboxListProps, 'value' | 'onChange' | 'options'>;
};
export type RadioListProps = ListProps<any> & {
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
    value?: SelectProps['value'];
    onChange?: SelectProps['onChange'];
    options?: ListProps<any>['dataSource'];
};
export type RadioPagingListProps = RadioListProps & PagingProps;
export type CheckboxListProps = ListProps<any> & {
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
    value?: SelectProps['value'];
    onChange?: SelectProps['onChange'];
    options?: ListProps<any>['dataSource'];
};
export type CheckboxPagingListProps = CheckboxListProps & PagingProps;
export type ListPagingProps<T> = {
    isSuspenseAsync?: boolean;
    suspenseProps?: SuspenseASyncProps;
    pagingProps: PagingWrapperProps<T>;
    listPagingProps: Omit<CheckboxPagingListProps, 'value' | 'onChange'> | Omit<RadioPagingListProps, 'value' | 'onChange'>;
    value?: DropdownRenderSelectProps['value'];
    onChange?: DropdownRenderSelectProps['onChange'];
    mode?: DropdownRenderSelectProps['mode'];
};
export type PagingSelectProps = Omit<DropdownRenderSelectProps, 'children'> & {
    defaultOptions?: any[];
};
export type ListPagingSelectProps<T> = PagingSelectProps & Omit<ListPagingProps<T>, 'mode' | 'value' | 'onChange'>;
export type TablePagingProps<T> = {
    isSuspenseAsync?: boolean;
    suspenseProps?: SuspenseASyncProps;
    pagingProps: PagingWrapperProps<T>;
    tablePagingProps: Omit<CheckboxPagingTableProps, 'value' | 'onChange'> | Omit<RadioPagingTableProps, 'value' | 'onChange'>;
    value?: DropdownRenderSelectProps['value'];
    onChange?: DropdownRenderSelectProps['onChange'];
    mode?: DropdownRenderSelectProps['mode'];
};
export type TablePagingSelectProps<T> = PagingSelectProps & Omit<TablePagingProps<T>, 'mode' | 'value' | 'onChange'>;
export type RadioTableProps = Omit<TableProps<any>, 'onChange'> & {
    value?: SelectProps['value'];
    options?: TableProps<any>['dataSource'];
    onChange?: SelectProps['onChange'];
};
export type RadioTreeTableProps = Omit<TableProps<any>, 'onChange'> & {
    value?: RadioTableProps['value'];
    options?: RadioTableProps['dataSource'];
    onChange?: TreeSelectProps['onChange'];
};
export type CheckboxTableProps = Omit<TableProps<any>, 'onChange'> & {
    value?: SelectProps['value'];
    options?: TableProps<any>['dataSource'];
    onChange?: SelectProps['onChange'];
};
export type CheckboxTreeTableProps = Omit<TableProps<any>, 'onChange'> & {
    value?: CheckboxTableProps['value'];
    options?: CheckboxTableProps['dataSource'];
    onChange?: TreeSelectProps['onChange'];
    checkStrictly?: boolean;
};
export type RadioPagingTableProps = RadioTableProps & PagingProps;
export type CheckboxPagingTableProps = CheckboxTableProps & PagingProps;
export type RadioPagingTreeTableProps = RadioTreeTableProps & PagingProps;
export type CheckboxPagingTreeTableProps = CheckboxTreeTableProps & PagingProps;
export interface UsePaging {
    (arg: Required<PagingProps>): {
        current: number;
        pageSize: number;
        total: number;
        showSizeChanger: boolean;
        onChange: PaginationProps['onChange'];
        onShowSizeChange: PaginationProps['onShowSizeChange'];
        pageSizeOptions: PaginationProps['pageSizeOptions'];
    };
}
export type UseTreeSelectLeaf = (treeData: TreeSelectProps['treeData']) => TreeSelectProps['treeData'];
/**
 * UseAsyncTreeSelect
 */
export interface UseAsyncTreeSelect {
    (arg: {
        cascadeParams: any;
        onDataSourceChange?: (treeData: TreeSelectProps['treeData']) => void;
        fetchBranch?: (value: TreeSelectProps['value'], cascadeParams: string | number) => Promise<TreeSelectProps['treeData']>;
        fetchData: (defaultId: string | number, cascadeParams?: any) => Promise<TreeSelectProps['treeData']>;
        defaultId: string | number;
        value: TreeSelectProps['value'];
        treeDataSimpleMode: TreeSelectProps['treeDataSimpleMode'];
    }): {
        treeData: TreeSelectProps['treeData'];
        onLoadData: any;
        onChange: (onChange: TreeSelectProps['onChange'], ...treeOnChangeParams: any[]) => any;
    };
}
/**
 * UseAsyncCascader
 */
export interface UseAsyncCascader {
    (arg: {
        cascadeParams: any;
        onDataSourceChange?: (treeData: CascaderProps['options']) => void;
        fetchBranch?: (value: CascaderProps['value'], cascadeParams: string | number) => Promise<CascaderProps['options']>;
        fetchData: (defaultId: string | number, cascadeParams?: any) => Promise<CascaderProps['options']>;
        defaultId: string | number;
        value: CascaderProps['value'];
        treeDataSimpleMode: TreeSelectProps['treeDataSimpleMode'];
    }): {
        treeData: CascaderProps['options'];
        onLoadData: any;
        onChange: (onChange: CascaderProps['onChange'], ...treeOnChangeParams: any[]) => any;
    };
}
export interface UseCascaderData {
    (arg: {
        options: CascaderProps['options'];
        treeDataSimpleMode: TreeSelectProps['treeDataSimpleMode'];
        config: IFlatTreeArrNode;
    }): CascaderProps['options'] | ReturnType<TreeUtilType['arrayToAntdTreeSelect']>;
}
export type UseTableRenderProps = (tableProps: TableSelectProps['tableProps']) => (arg: {
    value?: SelectProps['value'];
    onChange?: SelectProps['onChange'];
    options?: TableProps['dataSource'];
    loading?: boolean;
}) => CheckboxTableProps | RadioTableProps;
export type UseTreeTableRenderProps = (tableProps: TableSelectProps['tableProps']) => (arg: {
    value?: SelectProps['value'];
    onChange?: TreeSelectProps['onChange'];
    options?: TableProps['dataSource'];
    loading?: boolean;
}) => CheckboxTreeTableProps | RadioTreeTableProps;
export type UseListRenderProps = (listProps: ListSelectProps['listProps']) => (arg: {
    value?: SelectProps['value'];
    onChange?: SelectProps['onChange'];
    options?: SelectProps['options'];
    loading?: boolean;
}) => CheckboxListProps | RadioListProps;
export type UsePagingTableRenderProps = (arg: PagingWrapperProps<any> & {
    tablePagingProps?: Omit<CheckboxPagingTableProps, 'value' | 'onChange'> | Omit<RadioPagingTableProps, 'value' | 'onChange'>;
    mode?: SelectProps['mode'];
    suspenseRef?: ASync | null;
}) => {
    inputValue: string;
    options: any[];
    paging: PagingProps['paging'];
    setInputValue: (value: ((prevState: string) => string) | string) => void;
    setPaging: (value: ((prevState: {
        limit: number;
        page: number;
    }) => {
        limit: number;
        page: number;
    }) | {
        limit: number;
        page: number;
    }) => void;
    defaultCurrentPage: number;
    defaultPageSize: number;
    isMultiple: boolean;
    fetchData: () => any;
    setKw: (_kw?: string) => void;
    renderProps: (arg: {
        value?: SelectProps['value'];
        onChange?: SelectProps['onChange'];
        options?: SelectProps['options'];
        loading?: boolean;
    }) => TablePagingSelectProps<any>['tablePagingProps'] & PagingProps & {
        value?: SelectProps['value'];
        onChange?: SelectProps['onChange'];
        options?: TableProps<any>['dataSource'];
    };
};
export type UsePagingTreeTableRenderProps = (arg: PagingWrapperProps<any> & {
    tablePagingProps?: Omit<CheckboxPagingTreeTableProps, 'value' | 'onChange'> | Omit<RadioPagingTreeTableProps, 'value' | 'onChange'>;
    multiple?: TreeSelectProps['multiple'];
    treeDataSimpleMode?: TreeSelectProps['treeDataSimpleMode'];
    suspenseRef?: ASync | null;
}) => Omit<ReturnType<UsePagingTableRenderProps>, 'renderProps' | 'options'> & {
    isTreeDataSimpleMode: boolean;
    treeData: TreeSelectProps['treeData'];
    renderProps: (arg: {
        value?: SelectProps['value'];
        onChange?: TreeSelectProps['onChange'];
        options?: TableProps['dataSource'];
        loading?: boolean;
    }) => PagingProps & (Omit<CheckboxPagingTreeTableProps, 'value' | 'onChange'> | Omit<RadioPagingTreeTableProps, 'value' | 'onChange'>) & {
        value?: SelectProps['value'];
        onChange?: TreeSelectProps['onChange'];
        options?: TableProps<any>['dataSource'];
    };
};
export type UsePagingListRenderProps = (arg: PagingWrapperProps<any> & {
    listPagingProps?: Omit<CheckboxPagingListProps, 'value' | 'onChange'> | Omit<RadioPagingListProps, 'value' | 'onChange'>;
    mode?: SelectProps['mode'];
    suspenseRef?: ASync | null;
}) => {
    inputValue: string;
    options: any[];
    paging: PagingProps['paging'];
    setInputValue: (value: ((prevState: string) => string) | string) => void;
    setPaging: (value: ((prevState: {
        limit: number;
        page: number;
    }) => {
        limit: number;
        page: number;
    }) | {
        limit: number;
        page: number;
    }) => void;
    defaultCurrentPage: number;
    defaultPageSize: number;
    isMultiple: boolean;
    fetchData: any;
    setKw: (_kw?: string) => void;
    renderProps: (arg: {
        value?: SelectProps['value'];
        onChange?: SelectProps['onChange'];
        options?: SelectProps['options'];
        loading?: boolean;
    }) => ListPagingSelectProps<any>['listPagingProps'] & PagingProps & {
        value?: SelectProps['value'];
        onChange?: SelectProps['onChange'];
        options?: ListProps<any>['dataSource'];
    };
};
export type AsyncCascaderProps = Omit<CascaderProps, 'options' | 'loadData'> & {
    cascadeParams: any;
    onDataSourceChange?: (treeData: CascaderProps['options']) => void;
    fetchBranch?: (value: CascaderProps['value'], cascadeParams: string | number) => Promise<CascaderProps['options']>;
    fetchData: (defaultId: string | number, cascadeParams?: any) => Promise<CascaderProps['options']>;
    defaultId: string | number;
    treeDataSimpleMode: TreeSelectProps['treeDataSimpleMode'];
};
export type AsyncTreeSelectProps = TreeSelectProps & {
    cascadeParams: any;
    onDataSourceChange?: (treeData: TreeSelectProps['treeData']) => void;
    fetchBranch?: (value: TreeSelectProps['value'], cascadeParams: string | number) => Promise<TreeSelectProps['treeData']>;
    fetchData: (defaultId: string | number, cascadeParams?: any) => Promise<TreeSelectProps['treeData']>;
    defaultId: string | number;
};
export type CascaderTreeSelectProps = CascaderProps & {
    treeDataSimpleMode?: TreeSelectProps['treeDataSimpleMode'];
    arrayToAntdTreeSelectConfig?: {
        keyAttr: 'value';
        titleAttr: 'value';
        rootParentId: 0;
        parentIdAttr: 'pId';
    };
};
export type AsyncTreeMultiSelectProps = AsyncTreeSelectProps;
export type AsyncTreeLeafSelectProps = AsyncTreeSelectProps;
export type AsyncTreeMultiLeafSelectProps = AsyncTreeSelectProps;
export type SelectHOCComponent = ReturnType<typeof createFactory<SelectProps>> & {
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
    DropdownRenderSelect: typeof DropdownRenderSelect;
    AutoCompleteSelect: typeof AutoCompleteSelect;
};
export type MultipleSelectHOCComponent = ReturnType<typeof createFactory<SelectProps>> & {
    CheckAllSelect: typeof CheckAllSelect;
    AutoCompleteMultipleSelect: typeof AutoCompleteMultipleSelect;
    AutoCompleteCheckAllMultipleSelect: typeof AutoCompleteCheckAllMultipleSelect;
};
export type HorizontalCheckAllCheckboxProps = CheckAllWrapperStyleProps & DropdownWrapperStyleProps & CheckboxGroupExtProps;
export type VerticalCheckAllCheckboxProps = CheckAllWrapperStyleProps & DropdownWrapperStyleProps & CheckboxGroupExtProps;
export type ListSelectProps = DropdownRenderSelectProps & {
    listProps?: Omit<CheckboxListProps | RadioListProps, 'value' | 'onChange' | 'options'>;
};
export type TableSelectProps = DropdownRenderSelectProps & {
    tableProps?: Omit<CheckboxTableProps | RadioTableProps, 'value' | 'onChange' | 'options'>;
};
export type CheckboxSelectProps = DropdownRenderSelectProps & {
    checkboxProps?: Omit<CheckboxGroupExtProps, 'value' | 'options'>;
};
export type AutoCompleteCheckboxSelectProps = AutoCompleteProps & {
    checkboxProps?: CheckboxSelectProps['checkboxProps'];
};
export type AutoCompleteTransferSelectProps = AutoCompleteProps & {
    transferProps?: TransferSelectProps['transferProps'];
};
export type AutoCompleteListSelectProps = AutoCompleteProps & {
    listProps?: ListSelectProps['listProps'];
};
export type AutoCompleteTableSelectProps = AutoCompleteProps & {
    tableProps?: TableSelectProps['tableProps'];
};
export type AutoCompleteTreeTableSelectProps = TreeAutoCompleteProps & {
    treeDataSimpleModeConfig?: IFlatTreeArrNode;
    checkStrictly?: boolean;
    tableProps?: TableSelectProps['tableProps'];
};
export type TreeTableSelectProps = TreeDropdownRenderSelectProps & {
    treeDataSimpleModeConfig?: IFlatTreeArrNode;
    checkStrictly?: boolean;
    tableProps?: TableSelectProps['tableProps'];
};
export type AutoCompleteListPagingSelectProps = AutoCompleteProps & {
    pagingProps: PagingWrapperProps<any>;
    listPagingProps?: ListPagingSelectProps<any>['listPagingProps'];
};
export type AutoCompleteTablePagingSelectProps = AutoCompleteProps & {
    pagingProps: PagingWrapperProps<any>;
    tablePagingProps?: TablePagingSelectProps<any>['tablePagingProps'];
};
export type AutoCompleteTreeTablePagingSelectProps = TreeAutoCompleteProps & {
    treeDataSimpleModeConfig?: IFlatTreeArrNode;
    pagingProps: PagingWrapperProps<any>;
    tablePagingProps?: Omit<CheckboxPagingTreeTableProps, 'value' | 'onChange'> | Omit<RadioPagingTreeTableProps, 'value' | 'onChange'>;
    checkStrictly?: boolean;
};
export type TreeTablePagingSelectProps = TreeDropdownRenderSelectProps & {
    treeDataSimpleModeConfig?: IFlatTreeArrNode;
    pagingProps: PagingWrapperProps<any>;
    tablePagingProps?: Omit<CheckboxPagingTreeTableProps, 'value' | 'onChange'> | Omit<RadioPagingTreeTableProps, 'value' | 'onChange'>;
    checkStrictly?: boolean;
    defaultOptions?: any[];
};
export type AutoCompleteTagSelectProps = AutoCompleteProps & {
    tagProps?: TagSelectProps['tagProps'];
};
export type AutoCompleteRadioSelectProps = AutoCompleteProps & {
    radioProps?: RadioSelectProps['radioProps'];
};
export type CheckAllCheckboxSelectProps = CheckAllWrapperStyleProps & DropdownWrapperStyleProps & CheckboxSelectProps;
export type AutoCompleteCheckAllCheckboxSelectProps = AutoCompleteCheckAllMultipleSelectProps & {
    checkboxProps?: CheckboxSelectProps['checkboxProps'];
};
export type AutoCompleteCheckAllListSelectProps = CheckAllSelectProps & CheckAllWrapperStyleProps & AutoCompleteCheckAllMultipleSelectProps & {
    listProps?: ListSelectProps['listProps'];
};
export type AutoCompleteCheckAllTagSelectProps = AutoCompleteCheckAllMultipleSelectProps & {
    tagProps?: TagSelectProps['tagProps'];
};
export type CheckAllTagSelectProps = CheckAllWrapperStyleProps & DropdownWrapperStyleProps & TagSelectProps;
export type CustomCheckboxSelectProps = DropdownRenderSelectProps & {
    children: CustomCheckboxProps['children'];
    checkboxProps: Omit<CheckboxGroupExtProps, 'children' | 'value' | 'options'>;
};
export type AutoCompleteCustomCheckboxSelectProps = AutoCompleteProps & {
    children: CustomCheckboxProps['children'];
    checkboxProps: CustomCheckboxSelectProps['checkboxProps'];
};
export type AutoCompleteCustomRadioSelectProps = AutoCompleteProps & {
    children: CustomRadioProps['children'];
    radioProps: Omit<RadioGroupProps, 'children' | 'value' | 'onChange' | 'options'>;
};
export type AutoCompleteCheckAllCustomCheckboxSelectProps = AutoCompleteCheckAllMultipleSelectProps & {
    children: CustomCheckboxProps['children'];
    checkboxProps?: CustomCheckboxSelectProps['checkboxProps'];
};
export type CheckAllCustomCheckboxSelectProps = CheckAllWrapperStyleProps & DropdownWrapperStyleProps & CustomCheckboxSelectProps;
export type RadioSelectProps = DropdownRenderSelectProps & {
    radioProps?: Omit<RadioGroupProps, 'value' | 'onChange' | 'options'>;
};
export type ButtonRadioSelectProps = DropdownRenderSelectProps & {
    radioProps?: RadioSelectProps['radioProps'];
};
export type AutoCompleteButtonRadioSelectProps = AutoCompleteProps & {
    radioProps?: RadioSelectProps['radioProps'];
};
export type CustomRadioSelectProps = DropdownRenderSelectProps & {
    children: CustomRadioProps['children'];
    radioProps: RadioSelectProps['radioProps'];
};
export type TransferSelectProps = DropdownRenderSelectProps & {
    transferProps?: Omit<TransferProps<any>, 'value' | 'onChange' | 'options'>;
};
export type CheckboxHOCComponent = ReturnType<typeof createFactory<CheckboxProps>> & {
    AutoCompleteCheckboxSelect: typeof AutoCompleteCheckboxSelect;
    AutoCompleteCheckAllCheckboxSelect: typeof AutoCompleteCheckAllCheckboxSelect;
    AutoCompleteCheckAllCustomCheckboxSelect: typeof AutoCompleteCheckAllCustomCheckboxSelect;
    AutoCompleteCustomCheckboxSelect: typeof AutoCompleteCustomCheckboxSelect;
    CheckboxSelect: typeof CheckboxSelect;
    CheckAllCheckboxSelect: typeof CheckAllCheckboxSelect;
    CheckAllCustomCheckboxSelect: typeof CheckAllCustomCheckboxSelect;
    CustomCheckboxSelect: typeof CustomCheckboxSelect;
    CustomCheckbox: typeof CustomCheckbox;
    CustomCheckAllCheckbox: typeof CustomCheckAllCheckbox;
    HorizontalCheckAllCheckbox: typeof HorizontalCheckAllCheckbox;
    HorizontalCheckbox: typeof HorizontalCheckbox;
    VerticalCheckbox: typeof VerticalCheckbox;
    VerticalCheckAllCheckbox: typeof VerticalCheckAllCheckbox;
    CheckboxGroupExt: typeof CheckboxGroupExt;
};
export type FormHOCComponent = ReturnType<typeof createFactory<FormProps>> & {
    ValidatorRules: FormValidatorRulesType;
    NestingFormItem: typeof NestingFormItem;
    CustomWrapperFormItem: typeof CustomWrapperFormItem;
    CheckboxWrapperFormItm: typeof CheckboxWrapperFormItm;
    Item: typeof FormItem;
    SubmitButton: typeof SubmitButton;
};
export type FormComponent = NamedExoticComponent<FormProps> & {
    useForm: <Values = any>(form?: FormInstance<Values>) => [FormInstance<Values>];
};
export interface FormItemProps extends AntFormItemProps {
    useCustomError?: boolean;
    getErrorContainer?: () => HTMLElement | null | undefined;
    fit?: boolean;
}
export type FormInternalProps = FormProps & {
    useForm: typeof useForm;
    scrollMarginTop?: number;
    /**
     * 启用滚动到错误时的抖动动画
     * @default true
     */
    enableShakeAnimation?: boolean;
};
export type ListHOCComponent = ReturnType<typeof createFactory<ListProps<any>>> & {
    AutoCompleteCheckAllListSelect: typeof AutoCompleteCheckAllListSelect;
    AutoCompleteListPagingSelect: typeof AutoCompleteListPagingSelect;
    AutoCompleteListSelect: typeof AutoCompleteListSelect;
    ListSelect: typeof ListSelect;
    CheckAllListSelect: typeof CheckAllListSelect;
    ListPagingSelect: typeof ListPagingSelect;
    ListPaging: typeof ListPaging;
    RadioList: typeof RadioList;
    CheckboxList: typeof CheckboxList;
};
export type RadioHOCComponent = ReturnType<typeof createFactory<RadioProps>> & {
    AutoCompleteRadioSelect: typeof AutoCompleteRadioSelect;
    AutoCompleteCustomRadioSelect: typeof AutoCompleteCustomRadioSelect;
    AutoCompleteButtonRadioSelect: typeof AutoCompleteButtonRadioSelect;
    ButtonRadio: typeof ButtonRadio;
    ButtonRadioSelect: typeof ButtonRadioSelect;
    CustomRadio: typeof CustomRadio;
    CustomRadioSelect: typeof CustomRadioSelect;
    HorizontalRadio: typeof HorizontalRadio;
    RadioSelect: typeof RadioSelect;
    VerticalRadio: typeof VerticalRadio;
};
export type TableHOCComponent = ReturnType<typeof createFactory<TableProps<any>>> & {
    AutoCompleteTablePagingSelect: typeof AutoCompleteTablePagingSelect;
    AutoCompleteTreeTablePagingSelect: typeof AutoCompleteTreeTablePagingSelect;
    AutoCompleteTableSelect: typeof AutoCompleteTableSelect;
    AutoCompleteTreeTableSelect: typeof AutoCompleteTreeTableSelect;
    TableSelect: typeof TableSelect;
    TablePagingSelect: typeof TablePagingSelect;
    TablePaging: typeof TablePaging;
    RadioTable: typeof RadioTable;
    RadioTreeTable: typeof RadioTreeTable;
    CheckboxTable: typeof CheckboxTable;
    CheckboxTreeTable: typeof CheckboxTreeTable;
    TreeTableSelect: typeof TreeTableSelect;
    TreeTablePagingSelect: typeof TreeTablePagingSelect;
    TableExt: typeof TableExt;
};
export type TagHOCComponent = ReturnType<typeof createFactory<TagProps>> & {
    AutoCompleteTagSelect: typeof AutoCompleteTagSelect;
    AutoCompleteCheckAllTagSelect: typeof AutoCompleteCheckAllTagSelect;
    CheckAllTagSelect: typeof CheckAllTagSelect;
    HorizontalCheckAllCheckableTagGroup: typeof HorizontalCheckAllCheckableTagGroup;
    HorizontalCheckableTagGroup: typeof HorizontalCheckableTagGroup;
    HorizontalTagGroup: typeof HorizontalTagGroup;
    TagSelect: typeof TagSelect;
    VerticalCheckAllCheckableTagGroup: typeof VerticalCheckAllCheckableTagGroup;
    VerticalCheckableTagGroup: typeof VerticalCheckableTagGroup;
    VerticalTagGroup: typeof VerticalTagGroup;
};
export type TransferHOCComponent = ReturnType<typeof createFactory<TransferProps<any>>> & {
    AutoCompleteTransferSelect: typeof AutoCompleteTransferSelect;
    TransferSelect: typeof TransferSelect;
};
export type TreeSelectHOCComponent = ReturnType<typeof createFactory<TreeSelectProps>> & {
    TreeMultiSelect: typeof TreeMultiSelect;
    TreeLeafSelect: typeof TreeLeafSelect;
    TreeMultiLeafSelect: typeof TreeMultiLeafSelect;
    TreeCheckedShowAllSelect: typeof TreeCheckedShowAllSelect;
    TreeCheckedShowChildSelect: typeof TreeCheckedShowChildSelect;
    TreeCheckedShowParentSelect: typeof TreeCheckedShowParentSelect;
    AsyncTreeLeafSelect: typeof AsyncTreeLeafSelect;
    AsyncTreeCheckedShowAllSelect: typeof AsyncTreeCheckedShowAllSelect;
    AsyncTreeCheckedShowChildSelect: typeof AsyncTreeCheckedShowChildSelect;
    AsyncTreeCheckedShowParentSelect: typeof AsyncTreeCheckedShowParentSelect;
    AsyncTreeMultiLeafSelect: typeof AsyncTreeMultiLeafSelect;
    AsyncTreeMultiSelect: typeof AsyncTreeMultiSelect;
    AsyncTreeSelect: typeof AsyncTreeSelect;
    AutoCompleteTreeLeafSelect: typeof AutoCompleteTreeLeafSelect;
    AutoCompleteTreeMultiLeafSelect: typeof AutoCompleteTreeMultiLeafSelect;
    AutoCompleteTreeMultiSelect: typeof AutoCompleteTreeMultiSelect;
    AutoCompleteTreeSelect: typeof AutoCompleteTreeSelect;
    DropdownRenderSelect: typeof TreeDropdownRenderSelect;
};
export type CascaderHOCComponent = ReturnType<typeof createFactory<CascaderProps>> & {
    AsyncCascader: typeof AsyncCascader;
    AsyncCascaderChangeOnSelect: typeof AsyncCascaderChangeOnSelect;
    AsyncCascaderMulti: typeof AsyncCascaderMulti;
    AsyncCascaderShowChild: typeof AsyncCascaderShowChild;
    AsyncCascaderShowParent: typeof AsyncCascaderShowParent;
    CascaderChangeOnSelect: typeof CascaderChangeOnSelect;
    CascaderMulti: typeof CascaderMulti;
    CascaderShowChild: typeof CascaderShowChild;
    CascaderShowParent: typeof CascaderShowParent;
    CascaderTreeSelect: typeof CascaderTreeSelect;
};
export type UseCheckAllMultiple = (arg: CheckAllWrapperStyleProps & DropdownWrapperStyleProps & {
    children: DropdownRenderSelectProps['children'];
    renderLoading?: () => ReactNode;
    loading?: boolean;
}) => {
    currentOriginNode: ReactNode;
    dropdownRenderElement: ReactNode;
    renderProps: (arg: {
        originNode?: ReactElement;
        value?: SelectProps['value'];
        onChange?: CheckboxGroupExtProps['onChange'];
        options?: SelectProps['options'];
        loading?: boolean;
    }) => ReactElement;
};
export type UseCheckboxRenderProps = (checkboxProps: CheckboxSelectProps['checkboxProps'] | CustomCheckboxSelectProps['checkboxProps']) => (arg: {
    value?: SelectProps['value'];
    onChange?: CheckboxGroupExtProps['onChange'];
    options?: SelectProps['options'];
    loading?: boolean;
}) => CheckboxGroupExtProps;
export type UseRadioRenderProps = (radioProps: RadioSelectProps['radioProps'] | CustomRadioSelectProps['radioProps']) => (arg: {
    value?: SelectProps['value'];
    onChange?: SelectProps['onChange'];
    options?: SelectProps['options'];
    loading?: boolean;
}) => RadioGroupProps;
export type UseTagRenderProps = (tagProps: TagSelectProps['tagProps'], mode?: HorizontalCheckableTagGroupProps['mode']) => (arg: {
    value?: SelectProps['value'];
    onChange?: CheckboxGroupExtProps['onChange'];
    options?: SelectProps['options'];
    loading?: boolean;
}) => VerticalCheckableTagGroupProps;
export type UseTransferRenderProps = (transferProps: TransferSelectProps['transferProps']) => (arg: {
    value?: SelectProps['value'];
    onChange?: SelectProps['onChange'];
    options?: SelectProps['options'];
    loading?: boolean;
}) => TransferProps<any>;
export type UseAutoCompleteFetchLoading = (renderLoading?: () => ReactNode) => ReactNode;
export type CheckboxGroupExtProps = Omit<CheckboxGroupProps, 'onChange' | 'children'> & {
    className?: string;
    style?: CSSProperties;
    direction?: SpaceProps['direction'];
    spaceProps?: SpaceProps;
    onChange?: (checkedValue: any[], checked: boolean, changeValue: any[]) => void;
    children?: (onChange: (e: any, itemValue: CheckboxOptionType['value']) => void) => ReactNode;
};
export type AutoCompleteSelectInputProps = Omit<AntdAutoCompleteProps, 'value' | 'onChange'> & {
    value: {
        inputValue: AntdAutoCompleteProps['value'];
        selectValue: AntdAutoCompleteProps['value'];
    };
    onChange: (value?: {
        inputValue: AntdAutoCompleteProps['value'];
        selectValue: AntdAutoCompleteProps['value'];
    }) => void;
};
export type AutoCompleteHOCComponent = ReturnType<typeof createFactory<AutoCompleteProps>> & {
    AutoCompleteSelectInput: typeof AutoCompleteSelectInput;
};
export type DisplayNameInternal<T> = T & {
    displayName: string;
};
export type DatePickerFormatValueHOCProps = Omit<DatePickerProps, 'value' | 'onChange' | 'defaultValue'> & {
    defaultValue?: string | null;
    value?: string | null;
    onChange?: (data: string | null | undefined, dateString: string, datejs: dayjs.Dayjs, extra: {
        year?: number;
        quarter?: number;
        month?: number;
        week?: number;
        day?: number;
        date?: number;
        hour?: number;
        minute?: number;
        second?: number;
    }) => void;
};
export type DatePickerTimestampValueHOCProps = Omit<DatePickerProps, 'defaultValue' | 'value' | 'onChange'> & {
    defaultValue?: number | null;
    value?: number | null;
    onChange?: (data: number | null | undefined, dateString: string, datejs: dayjs.Dayjs | null, extra: {
        year?: number;
        quarter?: number;
        month?: number;
        week?: number;
        day?: number;
        date?: number;
        hour?: number;
        minute?: number;
        second?: number;
    }) => void;
    type?: 'milliseconds' | 'seconds';
};
export type DateTimePickerExtra = {
    year?: number;
    quarter?: number;
    month?: number;
    week?: number;
    day?: number;
    date?: number;
    hour?: number;
    minute?: number;
    second?: number;
};
export type RangePickerFormatValueHOCProps = Omit<RangePickerProps, 'defaultValue' | 'value' | 'onChange'> & {
    defaultValue?: string[] | null;
    value?: string[] | null;
    onChange?: (data: [string, string] | null | undefined, dateStrings: [string, string], datejs: [dayjs.Dayjs, dayjs.Dayjs] | null, extra: [DateTimePickerExtra, DateTimePickerExtra] | null) => void;
};
export type RangePickerTimestampValueHOCProps = Omit<RangePickerProps, 'defaultValue' | 'value' | 'onChange'> & {
    defaultValue?: number[] | null;
    value?: number[] | null;
    onChange?: (data: [number, number] | null | undefined, dateStrings: [string, string], datejs: [dayjs.Dayjs, dayjs.Dayjs] | null, extra: [DateTimePickerExtra, DateTimePickerExtra] | null) => void;
    type?: ['milliseconds' | 'seconds', 'milliseconds' | 'seconds'];
};
export type TimePickerFormatValueHOCProps = Omit<TimePickerProps, 'value' | 'onChange' | 'defaultValue'> & {
    defaultValue?: string | null;
    value?: string | null;
    onChange?: (data: string | null | undefined, dateString: string, datejs: dayjs.Dayjs, extra: {
        hour?: number;
        minute?: number;
        second?: number;
    }) => void;
};
export type TimePickerTimestampValueHOCProps = Omit<TimePickerProps, 'defaultValue' | 'value' | 'onChange'> & {
    defaultValue?: number | null;
    value?: number | null;
    onChange?: (data: number, timeString: string, datejs: dayjs.Dayjs | null, extra: {
        hour?: number;
        minute?: number;
        second?: number;
    }) => void;
    type?: 'milliseconds' | 'seconds';
};
export type ArrayEntityValueHOCProps = {
    value?: any;
    onChange?: (...argv: any[]) => any;
    optionsProp?: string;
    valueProp?: string;
    options?: any[];
    isUsePrimaryValue?: boolean;
    changePropagation?: boolean;
    [prop: string]: any;
};
export type TreeEntityValueHOCProps = {
    value?: any;
    onChange?: (...argv: any[]) => any;
    treeDataProp?: string;
    valueProp?: string;
    childrenProp?: string;
    treeData?: TreeSelectProps['treeData'];
    isUsePrimaryValue?: boolean;
    [prop: string]: any;
};
export type PagingEntityValueHOCProps = {
    value?: any;
    onChange?: (...argv: any[]) => any;
    valueProp?: string;
    changePropagation?: boolean;
    getOptionsByDataSource: (_dataSource: any[]) => any[];
    pagingPropsPath?: string[];
    [prop: string]: any;
};
export type AsyncTreeEntityValueHOCProps = {
    value?: any;
    onChange?: (...argv: any[]) => any;
    valueProp?: string;
    [prop: string]: any;
};
export type CalendarFormatValueHOCProps = CalendarProps<dayjs.Dayjs>;
export type CalendarTimestampValueHOC = CalendarProps<dayjs.Dayjs> & {
    type?: 'milliseconds' | 'seconds';
};
export type AutoCompleteTreeLeafSelectProps = TreeAutoCompleteProps & {
    treeSelectProps?: TreeSelectProps;
};
export type AutoCompleteTreeMultiLeafSelectProps = TreeAutoCompleteProps & {
    treeSelectProps?: TreeSelectProps;
};
export interface InternalNestingFormItemProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
    formProps?: FormProps;
    value?: any;
    onChange?: (value?: any) => void;
    children?: ReactNode;
}
export interface InternalNestingFormItemHandle {
    validateFields: () => Promise<void>;
}
export interface CustomWrapperFormItemProps {
    children?: (params: {
        id: string;
        value: any;
        onChange: (value?: any) => void;
    }) => ReactNode;
    value?: any;
    onChange: (value?: any) => void;
    id: string;
}
export interface InputMultipleOptionsItem {
    label: string;
    value: string;
}
export interface InputMultipleProps {
    className?: string;
    style?: CSSProperties;
    tagWrapperClassName?: string;
    tagWrapperStyle?: CSSProperties;
    inputProps?: InputProps;
    tagProps?: VerticalCheckableTagGroupProps | HorizontalCheckableTagGroupProps;
    direction?: 'vertical' | 'horizontal';
    isCheckAll?: boolean;
    renderAdd?: () => ReactNode;
    renderClear?: () => ReactNode;
    value?: string[];
    onChange?: (_value?: string[]) => void;
    options?: InputMultipleOptionsItem[];
}
export interface InputMultipleSelectProps extends Omit<InputMultipleProps, 'options'> {
    selectProps?: SelectProps;
    options?: Pick<InputMultipleOptionsItem, 'value'>[];
}
export type InputMultipleHOCComponent = ReturnType<typeof createFactory<InputMultipleProps>> & {
    Select: typeof Select;
};
export type TableExtProps = Omit<TableProps, 'columns'> & {
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
    fixedHeaderAutoTable?: boolean;
    fixedTableSpaceBetween?: boolean;
    columns: TableProps['columns'];
    defaultColumnTitleFontSize?: number;
    defaultColumnFontFamily?: string;
    defaultColumnSpacing?: number;
    defaultColumnSpace?: number;
    defaultCellFontSize?: number;
    defaultCellFontFamily?: string;
    defaultCellSpace?: number;
    defaultCellSpacing?: number;
};
export type StepsSwiperItemProps = StepsProps & {
    _visited?: boolean;
    children?: ReactNode;
    onNext: () => Promise<void>;
    onPrev: () => Promise<void>;
};
export type StepsSwiperProps = {
    className?: string;
    style?: CSSProperties;
    indicatorClassName?: string;
    indicatorStyle?: CSSProperties;
    indicatorWrapperClassName?: string;
    indicatorWrapperStyle?: CSSProperties;
    contentClassName?: string;
    contentStyle?: CSSProperties;
    navigationClassName?: string;
    navigationStyle?: CSSProperties;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    isFullWidth?: boolean;
    isFullHeight?: boolean;
    itemRenderMode?: 'lazy' | 'forceRecreate';
    itemLayoutMode?: 'auto' | 'grow' | 'surplus' | 'normal';
    items?: StepsSwiperItemProps[];
    navigation?: (params: {
        next: () => Promise<void>;
        prev: () => Promise<void>;
        isShowPrev: boolean;
        isShowNext: boolean;
    }) => ReactNode;
} & Omit<StepsProps, 'direction' | 'items' | 'className' | 'style'>;
export type StepsHOCComponent = ReturnType<typeof createFactory<StepsProps>> & {
    StepsSwiper: typeof StepsSwiper;
};
export interface RevolvingTableColumn<T, U> {
    dataIndex: string;
    key: string;
    title?: ReactNode;
    align?: 'left' | 'center' | 'right';
    width?: number | string;
    ellipsis?: boolean;
    tooltip?: string;
    render?: (value?: U, record?: T, rowIndex?: number) => ReactNode;
}
export interface RevolvingTableProps<T, U> {
    className?: string;
    style?: CSSProperties;
    headerClassName?: string;
    headerStyle?: CSSProperties;
    bodyClassName?: string;
    bodyStyle?: CSSProperties;
    rowKey?: string;
    columns?: RevolvingTableColumn<T, U>[];
    dataSource?: T[];
    renderHeaderBefore?: () => ReactNode;
    renderHeaderAfter?: () => ReactNode;
    renderBodyBefore?: () => ReactNode;
    renderBodyAfter?: () => ReactNode;
    renderBodyScrollBefore?: () => ReactNode;
    renderBodyScrollAfter?: () => ReactNode;
    renderEmpty?: () => ReactNode;
    revolvingConfig?: SwiperOptions;
    size?: 'large' | 'middle' | 'small';
    parity?: boolean;
}
export type ProxyFormInstance<Values> = FormInstance & {
    validateFieldsWithNesting?: ValidateFields<Values>;
};
export interface ColumnWidthMaxContent {
    minWidth?: number;
    maxWidth?: number;
    cellSpacing?: number;
    cellFontSize?: number;
    cellFontFamily?: string;
    cellSpacingSpace?: number;
    titleSpacing?: number;
    titleFontSize?: number;
    titleFontFamily?: string;
    titleSpacingSpace?: number;
}
export type ColumnTypeExt = Omit<ColumnType<any>, 'width'> & {
    width?: undefined | string | number | ColumnWidthMaxContent;
    titleToString?: string;
    renderToString?: (value: any) => string;
};

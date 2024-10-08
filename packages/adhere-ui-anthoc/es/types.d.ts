import type { FormItemProps as AntFormItemProps, AutoCompleteProps as AntdAutoCompleteProps, CalendarProps, CascaderProps, CheckboxProps, DatePickerProps, FormProps, FormRule, InputProps, ListProps, PaginationProps, RadioProps, SelectProps, SpaceProps, TableProps, TagProps, TimePickerProps, TransferProps, TreeSelectProps } from 'antd';
import type { CheckboxGroupProps, CheckboxOptionType } from 'antd/es/checkbox';
import type { RangePickerProps } from 'antd/es/date-picker';
import type { RadioGroupProps } from 'antd/es/radio';
import type { CheckableTagProps } from 'antd/es/tag';
import dayjs from 'dayjs';
import type { CSSProperties, FC, ReactElement, ReactNode } from 'react';
import type { TreeAutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';
import type { AutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';
import ASync from '@baifendian/adhere-ui-suspense/es/Async';
import type { SuspenseASyncProps } from '@baifendian/adhere-ui-suspense/es/types';
import type { TreeUtilType } from '@baifendian/adhere-util/es/tree';
import type { IFlatTreeArrNode } from '@baifendian/adhere-util/es/types';
import CustomWrapperFormItem from './form/CustomWrapperFormItem';
import FormItem from './form/FormItem';
import NestingFormItem from './form/NestingFormItem';
import ButtonRadio from './radio/ButtonRadio';
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
    children?: (arg: {
        originNode?: ReactElement;
        value?: SelectProps['value'];
        onChange?: SelectProps['onChange'];
        options?: SelectProps['options'];
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
    value?: SelectProps['value'];
    onChange?: SelectProps['onChange'];
    options?: ListProps<any>['dataSource'];
};
export type RadioPagingListProps = RadioListProps & PagingProps;
export type CheckboxListProps = ListProps<any> & {
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
export type ListPagingSelectProps<T> = Omit<DropdownRenderSelectProps, 'children'> & Omit<ListPagingProps<T>, 'mode' | 'value' | 'onChange'>;
export type TablePagingProps<T> = {
    isSuspenseAsync?: boolean;
    suspenseProps?: SuspenseASyncProps;
    pagingProps: PagingWrapperProps<T>;
    tablePagingProps: Omit<CheckboxPagingTableProps, 'value' | 'onChange'> | Omit<RadioPagingTableProps, 'value' | 'onChange'>;
    value?: DropdownRenderSelectProps['value'];
    onChange?: DropdownRenderSelectProps['onChange'];
    mode?: DropdownRenderSelectProps['mode'];
};
export type TablePagingSelectProps<T> = Omit<DropdownRenderSelectProps, 'children'> & Omit<TablePagingProps<T>, 'mode' | 'value' | 'onChange'>;
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
    DropdownRenderSelect: FC<DropdownRenderSelectProps>;
    AutoCompleteSelect: FC<AutoCompleteProps>;
};
export type MultipleSelectHOCComponent = ReturnType<typeof createFactory<SelectProps>> & {
    CheckAllSelect: FC<CheckAllSelectProps>;
    AutoCompleteMultipleSelect: FC<AutoCompleteProps>;
    AutoCompleteCheckAllMultipleSelect: FC<AutoCompleteCheckAllMultipleSelectProps>;
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
    AutoCompleteCheckboxSelect: FC<AutoCompleteCheckboxSelectProps>;
    AutoCompleteCheckAllCheckboxSelect: FC<AutoCompleteCheckAllCheckboxSelectProps>;
    AutoCompleteCheckAllCustomCheckboxSelect: FC<AutoCompleteCheckAllCustomCheckboxSelectProps>;
    AutoCompleteCustomCheckboxSelect: FC<AutoCompleteCustomCheckboxSelectProps>;
    CheckboxSelect: FC<CheckboxSelectProps>;
    CheckAllCheckboxSelect: FC<CheckAllCheckboxSelectProps>;
    CheckAllCustomCheckboxSelect: FC<CheckAllCustomCheckboxSelectProps>;
    CustomCheckboxSelect: FC<CustomCheckboxSelectProps>;
    CustomCheckbox: FC<CustomCheckboxProps>;
    CustomCheckAllCheckbox: FC<CustomCheckAllCheckboxProps>;
    HorizontalCheckAllCheckbox: FC<HorizontalCheckAllCheckboxProps>;
    HorizontalCheckbox: FC<CheckboxGroupExtProps>;
    VerticalCheckbox: FC<CheckboxGroupExtProps>;
    VerticalCheckAllCheckbox: FC<VerticalCheckAllCheckboxProps>;
    CheckboxGroupExt: FC<CheckboxGroupExtProps>;
};
export type FormHOCComponent = ReturnType<typeof createFactory<FormProps>> & {
    ValidatorRules: FormValidatorRulesType;
    NestingFormItem: typeof NestingFormItem;
    CustomWrapperFormItem: typeof CustomWrapperFormItem;
    Item: typeof FormItem;
};
export interface FormItemProps extends AntFormItemProps {
    getErrorContainer: () => HTMLElement | null;
}
export type ListHOCComponent = ReturnType<typeof createFactory<ListProps<any>>> & {
    AutoCompleteCheckAllListSelect: FC<AutoCompleteCheckAllListSelectProps>;
    AutoCompleteListPagingSelect: FC<AutoCompleteListPagingSelectProps>;
    AutoCompleteListSelect: FC<AutoCompleteListSelectProps>;
    ListSelect: FC<ListSelectProps>;
    CheckAllListSelect: FC<CheckAllListSelectProps>;
    ListPagingSelect: FC<ListPagingSelectProps<any>>;
    ListPaging: FC<ListPagingProps<any>>;
    RadioList: FC<RadioListProps>;
    CheckboxList: FC<CheckboxListProps>;
};
export type RadioHOCComponent = ReturnType<typeof createFactory<RadioProps>> & {
    AutoCompleteRadioSelect: FC<AutoCompleteRadioSelectProps>;
    AutoCompleteCustomRadioSelect: FC<AutoCompleteCustomRadioSelectProps>;
    AutoCompleteButtonRadioSelect: FC<AutoCompleteButtonRadioSelectProps>;
    ButtonRadio: typeof ButtonRadio;
    ButtonRadioSelect: FC<ButtonRadioSelectProps>;
    CustomRadio: FC<CustomRadioProps>;
    CustomRadioSelect: FC<CustomRadioSelectProps>;
    HorizontalRadio: FC<RadioGroupProps>;
    RadioSelect: FC<RadioSelectProps>;
    VerticalRadio: FC<RadioGroupProps>;
};
export type TableHOCComponent = ReturnType<typeof createFactory<TableProps<any>>> & {
    AutoCompleteTablePagingSelect: FC<AutoCompleteTablePagingSelectProps>;
    AutoCompleteTreeTablePagingSelect: FC<AutoCompleteTreeTablePagingSelectProps>;
    AutoCompleteTableSelect: FC<AutoCompleteTableSelectProps>;
    AutoCompleteTreeTableSelect: FC<AutoCompleteTreeTableSelectProps>;
    TableSelect: FC<TableSelectProps>;
    TablePagingSelect: FC<TablePagingSelectProps<any>>;
    TablePaging: FC<TablePagingProps<any>>;
    RadioTable: FC<RadioTableProps>;
    RadioTreeTable: FC<RadioTreeTableProps>;
    CheckboxTable: FC<CheckboxTableProps>;
    CheckboxTreeTable: FC<CheckboxTreeTableProps>;
};
export type TagHOCComponent = ReturnType<typeof createFactory<TagProps>> & {
    AutoCompleteTagSelect: FC<AutoCompleteTagSelectProps>;
    AutoCompleteCheckAllTagSelect: FC<AutoCompleteCheckAllTagSelectProps>;
    CheckAllTagSelect: FC<CheckAllTagSelectProps>;
    HorizontalCheckAllCheckableTagGroup: FC<HorizontalCheckableTagGroupProps>;
    HorizontalCheckableTagGroup: FC<HorizontalCheckableTagGroupProps>;
    HorizontalTagGroup: FC<HorizontalTagGroupProps>;
    TagSelect: FC<TagSelectProps>;
    VerticalCheckAllCheckableTagGroup: FC<VerticalCheckableTagGroupProps>;
    VerticalCheckableTagGroup: FC<VerticalCheckableTagGroupProps>;
    VerticalTagGroup: FC<VerticalTagGroupProps>;
};
export type TransferHOCComponent = ReturnType<typeof createFactory<TransferProps<any>>> & {
    AutoCompleteTransferSelect: FC<AutoCompleteTransferSelectProps>;
    TransferSelect: FC<TransferSelectProps>;
};
export type TreeSelectHOCComponent = ReturnType<typeof createFactory<TreeSelectProps>> & {
    TreeMultiSelect: FC<TreeSelectProps>;
    TreeLeafSelect: FC<TreeSelectProps>;
    TreeMultiLeafSelect: FC<TreeSelectProps>;
    TreeCheckedShowAllSelect: FC<AsyncTreeSelectProps>;
    TreeCheckedShowChildSelect: FC<AsyncTreeSelectProps>;
    TreeCheckedShowParentSelect: FC<AsyncTreeSelectProps>;
    AsyncLeafTreeSelect: FC<AsyncTreeLeafSelectProps>;
    AsyncTreeCheckedShowAllSelect: FC<TreeSelectProps>;
    AsyncTreeCheckedShowChildSelect: FC<TreeSelectProps>;
    AsyncTreeCheckedShowParentSelect: FC<TreeSelectProps>;
    AsyncTreeMultiLeafSelect: FC<AsyncTreeMultiLeafSelectProps>;
    AsyncTreeMultiSelect: FC<AsyncTreeMultiSelectProps>;
    AsyncTreeSelect: FC<AsyncTreeSelectProps>;
    AutoCompleteTreeLeafSelect: FC<AutoCompleteTreeLeafSelectProps>;
    AutoCompleteTreeMultiLeafSelect: FC<AutoCompleteTreeMultiLeafSelectProps>;
    AutoCompleteTreeMultiSelect: FC<TreeAutoCompleteProps>;
    AutoCompleteTreeSelect: FC<TreeAutoCompleteProps>;
};
export type CascaderHOCComponent = ReturnType<typeof createFactory<CascaderProps>> & {
    AsyncCascader: FC<AsyncCascaderProps>;
    AsyncCascaderChangeOnSelect: FC<AsyncCascaderProps>;
    AsyncCascaderMulti: FC<AsyncCascaderProps>;
    AsyncCascaderShowChild: FC<AsyncCascaderProps>;
    AsyncCascaderShowParent: FC<AsyncCascaderProps>;
    CascaderChangeOnSelect: FC<CascaderProps>;
    CascaderMulti: FC<CascaderProps>;
    CascaderShowChild: FC<CascaderProps>;
    CascaderShowParent: FC<CascaderProps>;
    CascaderTreeSelect: FC<CascaderTreeSelectProps>;
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
    AutoCompleteSelectInput: FC<AutoCompleteSelectInputProps>;
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
    className?: string;
    style?: CSSProperties;
    formProps?: FormProps;
    value?: any;
    onChange?: (value?: any) => void;
    children?: ReactNode;
}
export interface InternalNestingFormItemHandle {
    validateFields: () => Promise<string>;
}
export interface CustomWrapperFormItemProps {
    children?: (params: {
        value: any;
        onChange: (value?: any) => void;
    }) => ReactNode;
    value?: any;
    onChange: (value?: any) => void;
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
export interface InputMultipleSelectProps extends InputMultipleProps {
    selectProps?: SelectProps;
}
export type InputMultipleHOCComponent = ReturnType<typeof createFactory<InputMultipleProps>> & {
    Select: FC<InputMultipleSelectProps>;
};

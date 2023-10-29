import type { CascaderProps, CheckboxProps, FormProps, ListProps, PaginationProps, RadioProps, SelectProps, SpaceProps, TableProps, TagProps, TransferProps, TreeSelectProps } from 'antd';
import { FormRule } from 'antd';
import type { CheckboxGroupProps, CheckboxOptionType } from 'antd/es/checkbox';
import type { RadioGroupProps } from 'antd/es/radio';
import type { CheckableTagProps } from 'antd/es/tag';
import type { CSSProperties, FC, ReactElement, ReactNode } from 'react';
import type { AutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';
import type { TreeUtilType } from '@baifendian/adhere-util/es/tree';
import type { IFlatTreeArrNode } from '@baifendian/adhere-util/es/types';
import ButtonRadio from './radio/ButtonRadio';
import { createFactory } from './util';
export type LabelValue = {
    label: string;
    value: string | number;
};
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
export type CheckAllWrapperStyleProps = {
    checkAllWrapperClassName?: string;
    checkAllWrapperStyle?: CSSProperties;
};
export type DropdownWrapperStyleProps = {
    dropdownWrapperClassName?: string;
    dropdownWrapperStyle?: CSSProperties;
};
export type CheckAllWrapperProps = Pick<SelectProps, 'value' | 'options' | 'onChange'>;
export type AutoCompleteCheckAllMultipleSelectProps = DropdownWrapperStyleProps & CheckAllWrapperStyleProps & AutoCompleteProps;
export type CheckAllSelectProps = DropdownWrapperStyleProps & CheckAllWrapperStyleProps & CheckAllWrapperProps & DropdownRenderSelectProps;
export type DropdownRenderSelectProps = Omit<SelectProps, 'children'> & {
    defaultInputValue?: string;
    children?: (arg: {
        originNode?: ReactElement;
        value?: SelectProps['value'];
        onChange?: SelectProps['onChange'];
        options?: SelectProps['options'];
    }) => ReactElement;
};
export type CustomCheckboxProps = CheckboxGroupProps & CheckAllWrapperStyleProps & DropdownWrapperStyleProps & {
    children?: (data: {
        data: CheckboxOptionType;
        defaultNode: ReactElement;
    }[]) => ReactElement;
};
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
    onChange: SelectProps['onChange'];
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
    value: SelectProps['value'];
    onChange: SelectProps['onChange'];
    options: ListProps<any>['dataSource'];
};
export type RadioPagingListProps = RadioListProps & PagingProps;
export type CheckboxListProps = ListProps<any> & {
    value: SelectProps['value'];
    onChange: SelectProps['onChange'];
    options: ListProps<any>['dataSource'];
};
export type CheckboxPagingListProps = CheckboxListProps & PagingProps;
export type ListPagingSelectProps<T> = Omit<DropdownRenderSelectProps, 'children'> & {
    loadData: (page: number, limit: number) => Promise<{
        totalCount: number;
        data: T[];
    }>;
    defaultPage?: number;
    defaultLimit?: number;
    listPagingProps: Omit<CheckboxPagingListProps, 'value' | 'onChange'> | Omit<RadioPagingListProps, 'value' | 'onChange'>;
};
export type TablePagingSelectProps<T> = Omit<DropdownRenderSelectProps, 'children'> & {
    loadData: (page: number, limit: number) => Promise<{
        totalCount: number;
        data: T[];
    }>;
    defaultPage?: number;
    defaultLimit?: number;
    tablePagingProps: Omit<CheckboxPagingTableProps, 'value' | 'onChange'> | Omit<RadioPagingTableProps, 'value' | 'onChange'>;
};
export type RadioTableProps = Omit<TableProps<any>, 'onChange'> & {
    value: SelectProps['value'];
    onChange: SelectProps['onChange'];
    options: TableProps<any>['dataSource'];
};
export type CheckboxTableProps = Omit<TableProps<any>, 'onChange'> & {
    value: SelectProps['value'];
    onChange: SelectProps['onChange'];
    options: TableProps<any>['dataSource'];
};
export type RadioPagingTableProps = RadioTableProps & PagingProps;
export type CheckboxPagingTableProps = CheckboxTableProps & PagingProps;
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
export type HorizontalCheckAllCheckboxProps = CheckboxGroupProps & CheckAllWrapperStyleProps & DropdownWrapperStyleProps;
export type VerticalCheckAllCheckboxProps = CheckboxGroupProps & CheckAllWrapperStyleProps & DropdownWrapperStyleProps;
export type ListSelectProps = DropdownRenderSelectProps & {
    listProps?: Omit<CheckboxListProps | RadioListProps, 'value' | 'onChange' | 'options'>;
};
export type TableSelectProps = DropdownRenderSelectProps & {
    tableProps?: Omit<CheckboxTableProps | RadioTableProps, 'value' | 'onChange' | 'options'>;
};
export type CheckboxSelectProps = DropdownRenderSelectProps & {
    checkboxProps?: Omit<CheckboxGroupProps, 'value' | 'onChange' | 'options'>;
};
export type AutoCompleteCheckboxSelectProps = AutoCompleteProps & {
    checkboxProps?: Omit<CheckboxGroupProps, 'value' | 'onChange' | 'options'>;
};
export type CheckAllCheckboxSelectProps = CheckAllSelectProps & CheckAllWrapperStyleProps & DropdownWrapperStyleProps & {
    checkboxProps?: Omit<CheckboxGroupProps, 'value' | 'onChange' | 'options'>;
};
export type AutoCompleteCheckAllCheckboxSelectProps = CheckAllSelectProps & CheckAllWrapperStyleProps & AutoCompleteProps & {
    checkboxProps?: Omit<CheckboxGroupProps, 'value' | 'onChange' | 'options'>;
};
export type CheckAllTagSelectProps = CheckAllWrapperStyleProps & DropdownWrapperStyleProps & DropdownRenderSelectProps & {
    tagProps?: Omit<VerticalCheckableTagGroupProps, 'value' | 'onChange' | 'options'>;
};
export type CustomCheckboxSelectProps = DropdownRenderSelectProps & {
    children: CustomCheckboxProps['children'];
    checkboxProps: Omit<CheckboxGroupProps, 'children' | 'value' | 'onChange' | 'options'>;
};
export type AutoCompleteCustomCheckboxSelectProps = AutoCompleteProps & {
    children: CustomCheckboxProps['children'];
    checkboxProps: Omit<CheckboxGroupProps, 'children' | 'value' | 'onChange' | 'options'>;
};
export type AutoCompleteCheckAllCustomCheckboxSelectProps = AutoCompleteCheckAllMultipleSelectProps & {
    children: CustomCheckboxProps['children'];
    checkboxProps: Omit<CheckboxGroupProps, 'children' | 'value' | 'onChange' | 'options'>;
};
export type CheckAllCustomCheckboxSelectProps = CheckAllWrapperStyleProps & DropdownWrapperStyleProps & CustomCheckboxSelectProps;
export type RadioSelectProps = DropdownRenderSelectProps & {
    radioProps?: Omit<RadioGroupProps, 'value' | 'onChange' | 'options'>;
};
export type ButtonRadioSelectProps = DropdownRenderSelectProps & {
    radioProps?: Omit<RadioGroupProps, 'value' | 'onChange' | 'options'>;
};
export type CustomRadioSelectProps = DropdownRenderSelectProps & {
    children: CustomRadioProps['children'];
    radioProps: Omit<RadioGroupProps, 'value' | 'onChange' | 'options'>;
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
    CustomCheckAllCheckbox: FC<CustomCheckboxProps>;
    HorizontalCheckAllCheckbox: FC<HorizontalCheckAllCheckboxProps>;
    HorizontalCheckbox: FC<CheckboxGroupProps>;
    VerticalCheckbox: FC<CheckboxGroupProps>;
    VerticalCheckAllCheckbox: FC<VerticalCheckAllCheckboxProps>;
};
export type FormHOCComponent = ReturnType<typeof createFactory<FormProps>> & {
    ValidatorRules: FormValidatorRulesType;
};
export type ListHOCComponent = ReturnType<typeof createFactory<ListProps<any>>> & {
    ListSelect: FC<ListSelectProps>;
    CheckAllListSelect: FC<CheckAllListSelectProps>;
    ListPagingSelect: FC<ListPagingSelectProps<any>>;
};
export type RadioHOCComponent = ReturnType<typeof createFactory<RadioProps>> & {
    ButtonRadio: typeof ButtonRadio;
    ButtonRadioSelect: FC<ButtonRadioSelectProps>;
    CustomRadio: FC<CustomRadioProps>;
    CustomRadioSelect: FC<CustomRadioSelectProps>;
    HorizontalRadio: FC<RadioGroupProps>;
    RadioSelect: FC<RadioSelectProps>;
    VerticalRadio: FC<RadioGroupProps>;
};
export type TableHOCComponent = ReturnType<typeof createFactory<TableProps<any>>> & {
    TableSelect: FC<TableSelectProps>;
    TablePagingSelect: FC<TablePagingSelectProps<any>>;
};
export type TagHOCComponent = ReturnType<typeof createFactory<TagProps>> & {
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
        onChange?: SelectProps['onChange'];
        options?: SelectProps['options'];
        loading?: boolean;
    }) => ReactElement;
};
export type UseCheckboxRenderProps = (checkboxProps: CheckboxSelectProps['checkboxProps'] | CustomCheckboxSelectProps['checkboxProps']) => (arg: {
    value?: SelectProps['value'];
    onChange?: SelectProps['onChange'];
    options?: SelectProps['options'];
    loading?: boolean;
}) => CheckboxGroupProps;
export type UseAutoCompleteFetchLoading = (renderLoading?: () => ReactNode) => ReactNode;

import type { FormInstance } from 'antd/es/form';
import type { Rule } from 'antd/lib/form/index';
import type { TableProps } from 'antd/lib/table/Table';
import type { ColumnType } from 'antd/lib/table/interface';
import type { DataIndex } from 'rc-table/lib/interface';
import type { CSSProperties, ForwardRefExoticComponent, PropsWithoutRef, ReactElement, ReactNode, RefAttributes, RefObject } from 'react';
import type { SuspenseProps, SuspenseState } from '@baifendian/adhere-ui-suspense/lib/types';
import type SearchTableImplement from './SearchTableImplement';
import type { SearchTableStateImplement } from './SearchTableStateImplement';
export type FormItemType = 'input' | 'textArea' | 'inputNumber' | 'inputNumberDecimal1' | 'inputNumberDecimal2' | 'inputNumberInteger' | 'select' | 'multiSelect' | 'checkAllMultiSelect' | 'autoCompleteSelect' | 'autoCompleteSelectMulti' | 'autoCompleteSelectCheckAllMulti' | 'radioHorizontal' | 'radioButton' | 'radioSelect' | 'radioCustom' | 'checkBoxHorizontal' | 'checkBoxCheckAllHorizontal' | 'checkboxSelect' | 'checkBoxCheckAllSelect' | 'checkBoxCustom' | 'checkBoxCheckAllCustom' | 'transferSelect' | 'tableSelect' | 'tableMultiSelect' | 'tablePagingSelect' | 'tablePagingMultiSelect' | 'listSelect' | 'listMultiSelect' | 'listPagingSelect' | 'listPagingMultiSelect' | 'treeSelect' | 'treeMultiSelect' | 'treeSelectLeaf' | 'treeMultiSelectLeaf' | 'cascaderSelect' | 'cascaderMultiSelect' | 'cascaderSelectLeaf' | 'cascaderMultiSelectLeaf' | 'datePicker' | 'timePicker' | 'rangePicker' | 'slider' | 'sliderRange' | 'rate' | 'switch' | 'custom' | string;
/**
 * ColumnSearchConfig
 * @description 列的查询设置
 */
export interface ColumnSearchConfig {
    type: FormItemType;
    visible?: boolean;
    showColumnHeader?: boolean;
    props?: any;
    labelAttrs?: any;
    valueAttrs?: any;
    authority?: string[];
    renderNoAuthority?: (params?: any) => ReactNode | null;
    dataIndex?: string;
    title?: ReactNode;
    dictName?: string;
    renderChildren?: (params?: any) => ReactNode | null;
    render?: () => ReactNode | null;
    startName?: string;
    endName?: string;
}
export interface ColumnParams {
    value: string;
    record: {
        [prop: string]: any;
    };
    dataIndex?: DataIndex;
    rowIndex: number;
}
export interface EditableCellViewProps extends EditableCellProps {
    editableConfig: ColumnEditableConfig;
    onTriggerChange?: () => void;
}
export interface EditableCellEditProps extends EditableCellProps {
    editableConfig: ColumnEditableConfig;
    onTriggerChange?: () => void;
}
export interface TableRowComponentProps {
    record: {
        [prop: string]: any;
    };
    rowIndex: number;
    columns: any[];
    rowKey: string;
    rowConfig: RowConfig;
    [p: string]: any;
}
export interface TableCellComponentProps {
    record: {
        [prop: string]: any;
    };
    column: ColumnTypeExt;
    rowIndex: number;
    columns: ColumnTypeExt[];
    [p: string]: any;
}
export interface EditableCellProps {
    record: {
        [prop: string]: any;
    };
    column: ColumnTypeExt;
    rowIndex: number;
    columns: ColumnTypeExt[];
}
/**
 * RowEditableConfig
 */
export interface RowEditableConfig {
    editable: boolean;
}
/**
 * RowDragSortConfig
 */
export interface RowDragSortConfig {
    type?: string;
    dropOverDownwardClassName?: string;
    dropOverUpwardClasName?: string;
    dropConfig?: {
        [prop: string]: any;
    };
    dragConfig?: {
        [prop: string]: any;
    };
}
/**
 * RowConfig
 */
export interface RowConfig {
    $editable?: RowEditableConfig;
    $rowDragSort?: RowDragSortConfig;
}
export interface CellConfigReducer {
    (params: {
        rowIndex: number;
        column: ColumnTypeExt;
        record: {
            [prop: string]: any;
        };
        columns: ColumnTypeExt[];
    }): ColumnTypeExt;
}
export interface RowConfigReducer {
    (params: {
        rowIndex: number;
        record: {
            [prop: string]: any;
        };
        columns: ColumnTypeExt[];
        rowConfig: RowConfig;
    }): RowConfig;
}
export interface TableRowComponentReducer {
    (params: {
        rowIndex: number;
        record: {
            [prop: string]: any;
        };
        columns: ColumnTypeExt[];
        rowKey: string;
        rowConfig: RowConfig;
    }): (trREL: ReactElement) => ReactElement;
}
/**
 * TableCellComponentReducer
 */
export interface TableCellComponentReducer {
    (params: {
        record: {
            [prop: string]: any;
        };
        column: ColumnTypeExt;
        rowIndex: number;
        columns: ColumnTypeExt[];
    }): (tdREL: ReactElement) => ReactElement;
}
export interface EditorRowControlProps {
    className?: string;
    styles?: CSSProperties;
    rowKey: string;
    editorRowId: string;
    record: {
        [prop: string]: any;
    };
    renderEditorRow?: () => ReactNode;
    renderSave?: () => ReactNode;
    renderCancel?: () => ReactNode;
    onSave: (values: {
        [props: string]: any;
    }) => Promise<void>;
    onEditor: (id: string) => Promise<void>;
}
export interface EditorTableControlProps {
    className?: string;
    styles?: CSSProperties;
    rowKey: string;
    renderEditorTable?: () => ReactNode;
    renderSave?: () => ReactNode;
    renderCancel?: () => ReactNode;
    onEditor: () => Promise<void>;
    onSave: (values: {
        [prop: string]: any;
    }[]) => Promise<void>;
}
export interface FormItemGeneratorConfig {
    type?: FormItemType | string;
    props?: any;
    dictName?: string;
    renderChildren?: (params?: any) => ReactNode | null;
    form?: FormInstance<any> | null;
    dataIndex?: DataIndex;
    rowIndex?: number;
}
/**
 * ColumnEditableConfig
 * @description 可编辑的单元格
 */
export interface ColumnEditableConfig {
    editable: boolean;
    defaultStatus?: 'view' | 'edit' | string;
    type?: FormItemType | string;
    render?: (params: {
        form: FormInstance<any> | null;
        dataIndex: string | number | readonly (string | number)[] | undefined;
        record: {
            [prop: string]: any;
        };
        rowIndex: number;
        value: any;
        children?: ReactNode;
        updateEditorCellData?: () => Promise<void>;
    }) => ReactNode;
    onBeforeToEdit?: (params: ColumnParams) => Promise<void>;
    onSave?: (params: ColumnParams & {
        values: any;
    }) => Promise<void>;
    onBeforeCancel?: (params: ColumnParams) => Promise<void>;
    formItemProps?: any;
    props?: any;
    useTrigger?: boolean;
    renderToEditTrigger?: (params: ColumnParams) => ReactNode;
    renderSaveTrigger?: (params: ColumnParams) => ReactNode;
    renderCancelTrigger?: (params: ColumnParams) => ReactNode;
    rules?: Rule[];
    dataIndex?: DataIndex;
    dictName?: string;
    renderChildren?: (params?: any) => ReactNode | null;
    useKeepEdit?: boolean;
}
/**
 * ColumnRowDragSortConfig
 */
export interface ColumnRowDragSortConfig {
}
/**
 * ColumnTypeExt
 * @description Column列的扩展设置
 */
export interface ColumnTypeExt extends ColumnType<any> {
    $authorized?: () => boolean;
    $resizable?: boolean;
    $hide?: boolean;
    $search?: ColumnSearchConfig;
    $editable?: ColumnEditableConfig;
    $rowDragSort?: ColumnRowDragSortConfig;
}
/**
 * SearchTableProps
 * @interface SearchTableProps
 */
export interface SearchTableProps extends SuspenseProps {
    className?: string;
    style?: CSSProperties;
    tableClassName: string;
    tableStyle: CSSProperties;
    searchClassName: string;
    searchStyle: CSSProperties;
    firstLoading: ReactElement;
    antdTableProps: TableProps<any>;
    isShowExpandSearch: boolean;
    defaultExpandSearchCollapse: boolean;
    fitSearch: boolean;
    fitTable: boolean;
    autoFixed: boolean;
    fixedHeaderAutoTable: boolean;
    fixedTableSpaceBetween: boolean;
    showColumnSetting: boolean;
}
/**
 * SearchTableState
 * @interface SearchTableState
 */
export interface SearchTableState extends SuspenseState {
    [props: string]: any;
    page?: number;
    limit?: number;
    expand?: boolean;
    scrollY?: number;
    columnSetting?: (ColumnType<any> & {
        sort: number;
        display: boolean;
    })[];
    tableDensity?: TableDensity;
}
export interface ISearchTableImplement {
    /**
     * showLoading - 是否显示遮罩
     */
    showLoading: () => boolean;
    /**
     * fetchData - 加载数据
     */
    fetchData: () => void;
}
/**
 * SearchTableImplementProps
 * @interface SearchTableImplementProps
 */
export interface SearchTableImplementProps extends SearchTableProps {
    [props: string]: any;
    getTableWrapperInstance?: (ref?: RefObject<HTMLDivElement>) => void;
}
/**
 * SearchTableStateImplementProps
 */
export interface SearchTableStateImplementProps extends SearchTableImplementProps {
    $state: {
        serviceNames: string[];
        middleWares: any[];
        reducer: any;
        models: any[];
        mapStateToProps?: (state: any) => any;
        mapDispatchToProps?: (dispatch?: any) => any;
    };
}
export interface SearchTableImplementState extends SearchTableState {
    [props: string]: any;
    selectedRowKeys?: string[];
    selectedRows?: any[];
    searchParams?: any;
}
export interface SearchEditorRowTableState extends SearchTableImplementState {
    editorRowId: string;
}
export interface SearchEditorTableState extends SearchTableImplementState {
    isTableEditor: boolean;
}
export interface AdvancedSearchPanelGroupData {
    className: string;
    style: CSSProperties;
    name: string;
    width: string | number;
    defaultLabelWidth: number;
    padding: number;
    colgroup: number[];
    columnCount: number;
    data: {
        key: string;
        label: ReactNode;
        value: ReactNode;
    }[];
}
export interface AdvancedSearchPanelTableGridLayoutConfig {
    className?: string;
    style?: CSSProperties;
    innerClassName?: string;
    innerStyle?: CSSProperties;
    bordered: boolean;
    layout: 'horizontal' | 'vertical';
    density?: string | number;
    parity?: boolean;
}
export interface AdvancedSearchPanelSearchConfig {
    rowCount: string;
    showStrategy: string;
    advancedSearch: {
        className: string;
        style: CSSProperties;
        width: number | string;
        mask: boolean;
        zIndex: number;
        time: number;
        direction: string;
        collapse: boolean;
        getPopupContainer: Function;
        onBeforeShow: Function;
        onBeforeClose: Function;
        onAfterShow: Function;
        onAfterClose: Function;
    };
    renderTitleLabel?: Function;
    renderCollapse?: Function;
    renderSearchButton?: Function;
    insertSearchButton?: Function;
}
export interface AdvancedSearchPanelProps {
    groupData: AdvancedSearchPanelGroupData[];
    tableGridLayoutConfig: AdvancedSearchPanelTableGridLayoutConfig;
    remainingGroupData: AdvancedSearchPanelGroupData[];
    advancedSearchConfig: AdvancedSearchPanelSearchConfig;
    onSearch: Function;
    onReset: Function;
    onCollapse: Function;
}
export interface SearchTableImplementFactoryFunction<T, P> {
    (params: {
        serviceNames: string[];
        mapStateToProps?: (state: any) => any;
        mapDispatchToProps?: (dispatch?: any) => any;
    }): (Component: typeof SearchTableImplement) => ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
}
export interface SearchTableStateImplementFactoryFunction<T, P> {
    (params: {
        serviceNames: string[];
        models: any[];
        middleWares?: any[];
        reducer?: any;
        mapStateToProps?: (state: any) => any;
        mapDispatchToProps?: (dispatch?: any) => any;
    }): (Component: typeof SearchTableStateImplement) => ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
}
/**
 * TableDensity
 */
export declare enum TableDensity {
    DEFAULT = "default",
    MIDDLE = "middle",
    SMALL = "small"
}

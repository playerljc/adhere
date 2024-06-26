import type { FormInstance } from 'antd/es/form';
import type { TableProps } from 'antd/es/table/InternalTable';
import type { Rule } from 'antd/lib/form/index';
import type { ColumnType } from 'antd/lib/table/interface';
import type { DataIndex } from 'rc-table/lib/interface';
import type { CSSProperties, ForwardRefExoticComponent, PropsWithoutRef, ReactElement, ReactNode, RefAttributes, RefObject } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import type { SuspenseProps, SuspenseState } from '@baifendian/adhere-ui-suspense/lib/types';
import type SearchTableImplement from './SearchTableImplement';
import type { SearchTableStateImplement } from './SearchTableStateImplement';
export type FormItemType = 'input' | 'textArea' | 'inputNumber' | 'inputNumberDecimal1' | 'inputNumberDecimal2' | 'inputNumberInteger' | 'datePicker' | 'timePicker' | 'rangePicker' | 'slider' | 'sliderRange' | 'rate' | 'switch' | 'dict' | 'custom' | string;
/**
 * ColumnSearchConfig
 * @description 列的查询设置
 */
export interface ColumnSearchConfig {
    type: FormItemType | string;
    visible?: boolean;
    showColumnHeader?: boolean;
    props?: any;
    labelAttrs?: any;
    valueAttrs?: any;
    sort?: boolean;
    authority?: string[];
    renderNoAuthority?: (params?: any) => ReactNode | null;
    dataIndex?: string;
    title?: ReactNode;
    dictName?: string;
    renderChildren?: (params?: any) => ReactNode | null;
    render?: () => ReactNode | null;
    startName?: string;
    endName?: string;
    isShowLabelSymbol?: boolean;
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
    override?: {
        type?: string;
        dropOverDownwardClassName?: string;
        dropOverUpwardClasName?: string;
        dragConfig?: (defaultDragConfig?: any) => {
            [prop: string]: any;
        };
        dropConfig?: (defaultDropConfig?: any) => {
            [prop: string]: any;
        };
    };
    dropHooks?: {
        collect?: (monitor?: any) => any;
        drop?: (params?: {
            sourceRecord: any;
            targetRecord: any;
            item: any;
        }) => Promise<void>;
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
    props?: ((params: ColumnParams) => any) | object;
    useTrigger?: boolean;
    renderToEditTrigger?: (params: ColumnParams) => ReactNode;
    renderSaveTrigger?: (params: ColumnParams) => ReactNode;
    renderCancelTrigger?: (params: ColumnParams) => ReactNode;
    rules?: ((params: ColumnParams) => Rule[]) | Rule[];
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
    $tip?: ReactNode;
    renderTip?: (tip: ReactNode) => ReactNode;
    $authorized?: () => boolean;
    $resizable?: boolean;
    $hide?: boolean;
    $search?: ColumnSearchConfig;
    $editable?: ColumnEditableConfig;
    $rowDragSort?: ColumnRowDragSortConfig;
    headerCellAlign?: 'left' | 'center' | 'right';
}
/**
 * SearchProps
 */
export interface SearchProps extends SuspenseProps {
    className?: string;
    style?: CSSProperties;
    searchClassName: string;
    searchStyle: CSSProperties;
    firstLoading: ReactElement;
    isShowExpandSearch: boolean;
    defaultExpandSearchCollapse: boolean;
    fitBody: boolean;
    autoFixed: boolean;
    bodyClassName: string;
    bodyStyle: CSSProperties;
    title: string;
}
/**
 * SearchState
 */
export interface SearchState extends SuspenseState {
    expand?: boolean;
    prePage?: number | undefined;
    page?: number;
    limit?: number;
}
/**
 * SearchTableProps
 * @interface SearchTableProps
 */
export interface SearchTableProps extends SearchProps {
    antdTableProps: TableProps<any>;
    fixedHeaderAutoTable: boolean;
    fixedTableSpaceBetween: boolean;
}
/**
 * SearchTableState
 * @interface SearchTableState
 */
export interface SearchTableState extends SearchState {
    [props: string]: any;
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
    children?: (params: {
        groupData: AdvancedSearchPanelGroupData[];
        tableGridLayoutConfig: AdvancedSearchPanelTableGridLayoutConfig;
        remainingGroupData: AdvancedSearchPanelGroupData[];
        advancedSearchConfig: AdvancedSearchPanelSearchConfig;
        onSearch: Function;
        onReset: Function;
        onCollapse: Function;
    }) => ReactNode;
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
export interface TableDensitySettingProps {
    density: TableDensity;
    onReset: (...args: any[]) => any;
    onChange: (...args: any[]) => any;
    renderDensitySettingBtn?: () => ReactNode;
}
export interface ColumnSettingProps {
    columns: ColumnTypeExt[];
    onShowColumns: (...args: any[]) => any;
    onReset: (...args: any[]) => any;
    onDisplayColumn: (...args: any[]) => any;
    onSortEnd: (...args: any[]) => any;
    renderColumnSettingBtn?: () => ReactNode;
}
export interface ExportExcelProps {
    title: string;
    getDataSource: () => any[];
    getColumns: () => ColumnTypeExt[];
    renderExportExcelBtn?: (onExportExcel: () => void) => ReactNode;
}
export interface ReloadTableProps {
    onReload: () => void;
    showLoading: boolean;
    renderReloadBtn?: ({ showLoading, onReload, }: {
        showLoading: boolean;
        onReload: () => void;
    }) => ReactNode;
}
export interface ColumnTipTitleProps {
    tip: ReactNode;
    title: ReactNode;
}
/**
 * TableDensity
 */
export declare enum TableDensity {
    DEFAULT = "default",
    MIDDLE = "middle",
    SMALL = "small"
}
export interface DragSortRowContextProps {
    dragResult: ReturnType<typeof useDrag>;
    dropResult: ReturnType<typeof useDrop>;
    setCanDrag: (canDrag: boolean) => void;
}
export interface DragSortColumnProps {
    className?: string;
    width?: string | number;
    title?: ReactNode;
    render?: (value: any, record: Record<string, any>, rowIndex: number) => ReactNode;
}

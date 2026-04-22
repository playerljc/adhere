import type { DropdownProps, SwitchProps } from 'antd';
import type { FormInstance, FormListFieldData, FormListOperation } from 'antd/es/form';
import type { ColumnType, FilterValue, SorterResult, TableCurrentDataSource, TablePaginationConfig } from 'antd/es/table/interface';
import type { ReactElement, ReactNode, RefObject } from 'react';
import React from 'react';
import type { ConfigProviderContext, ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import ColumnResizable, { SearchTableResizableTitle } from './Extension/ColumnResizable';
import Search from './Search';
import type { CellConfigReducer, ColumnTypeExt, RowConfig, RowConfigReducer, SearchTableProps, SearchTableState, TableRowSelectionExt } from './types';
import { TableDensity } from './types';
export declare const selectorPrefix = "adhere-ui-search-table";
export declare const SearchTableContext: React.Context<{
    context: SearchTable;
    editable?: {
        tableEditable?: {
            form?: FormInstance;
            formList?: {
                fields: FormListFieldData[];
                operation?: FormListOperation;
                meta?: {
                    errors?: ReactNode[];
                    warnings?: ReactNode[];
                };
            };
        };
    };
} | null>;
/**
 * SearchTable
 * @class SearchTable
 * @classdesc SearchTable
 */
declare abstract class SearchTable<P extends SearchTableProps = SearchTableProps, S extends SearchTableState = SearchTableState> extends Search<P, S> {
    static displayName: string;
    static NUMBER_GENERATOR_RULE_ALONE: symbol;
    static NUMBER_GENERATOR_RULE_CONTINUITY: symbol;
    static ROW_SELECTION_NORMAL_MODE: symbol;
    static ROW_SELECTION_CONTINUOUS_MODE: symbol;
    static CHECKED_STRATEGY_SHOW_ALL: symbol;
    static CHECKED_STRATEGY_SHOW_CHILD: symbol;
    private _hackerElement;
    protected _context: ConfigProviderContext | undefined;
    protected tableWrapRef: RefObject<HTMLDivElement | null>;
    protected editableRowForms: Map<number, FormInstance<any>>;
    protected components: {
        header: {
            cell: typeof SearchTableResizableTitle;
        };
        body: {
            row: React.FC<import("./types").TableRowComponentProps>;
            cell: React.FC<import("./types").TableCellComponentProps>;
        };
    };
    protected columnResizable: ColumnResizable;
    protected columnObserver: any;
    protected rowConfigReducers: RowConfigReducer[];
    protected cellConfigReducers: CellConfigReducer[];
    protected tableRowComponentReducers: string[];
    protected tableCellComponentReducers: string[];
    protected childrenWrapRef: RefObject<HTMLDivElement | null>;
    /**
     * isShowNumber
     * @description 表格是否显示序号
     * @return {boolean}
     */
    abstract isShowNumber(): boolean;
    /**
     * getTableNumberColumnWidth
     * @description 表格序号列的宽度
     * @return {number | string}
     */
    abstract getTableNumberColumnWidth(): number | string;
    /**
     * getTableCheckAllColumnWidth
     * @description 全选列的宽度
     * @return {number | string}
     */
    abstract getTableCheckAllColumnWidth(): number | string;
    /**
     * getTableNumberColumnProps
     * @description 获取序号列的Props
     * @return {object}
     */
    abstract getTableNumberColumnProps(): object;
    /**
     * getTableCheckAllColumnProps
     * @description 获取全选列的Props
     * @return {object}
     */
    abstract getTableCheckAllColumnProps(): object;
    /**
     * getNumberGeneratorRule
     * @description 获取符号列的生成规则
     * @return {symbol}
     */
    abstract getNumberGeneratorRule(): symbol;
    /**
     * getRowSelectionMode
     * @description 获取全选的生模式
     * @return {symbol}
     */
    abstract getRowSelectionMode(): symbol;
    /**
     * getRowKey
     * @description 获取表格的主键属性
     * @return {string}
     */
    abstract getRowKey(): string;
    /**
     * getData
     * @description 获取表格数据
     * @return {object[]}
     */
    abstract getData(): object[];
    /**
     * getCurrent
     * @description 获取当前页码
     * @return {number}
     */
    abstract getCurrent(): number;
    /**
     * setData
     * @description 设置表格数据
     */
    abstract setData<T extends Array<object>>(data: T | ((prevData: T) => T)): Promise<any[]>;
    /**
     * getColumns
     * @description 获取表格列的信息
     * @return {ColumnType<object>[]}
     */
    abstract getColumns(): ColumnType<object>[];
    /**
     * getOrderFieldProp
     * @description 获取表格的排序字段
     * @return {string}
     */
    abstract getOrderFieldProp(): string;
    /**
     * getOrderProp
     * @description 获取表格的排序属性
     * @return {string}
     */
    abstract getOrderProp(): string;
    /**
     * getOrderPropValue
     * @description 获取默认排序方式
     * @return {'descend' | 'ascend'}
     */
    abstract getOrderPropValue(): 'descend' | 'ascend';
    /**
     * getOrderFieldValue
     * @description 获取默认排序字段的值
     * @return {string}
     */
    abstract getOrderFieldValue(): string;
    /**
     * onSubTableChange
     * @description 获取表格change句柄
     * @param pagination
     * @param filters
     * @param sorter
     * @param extra
     */
    abstract onSubTableChange(pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<object> | SorterResult<object>[], extra?: TableCurrentDataSource<object>): void;
    /**
     * onTableRowComponentReducers
     * @description 对tableRowComponentReducers对象进行设置的hook
     * @param {ColumnTypeExt[]} columns
     * @return {string[]}
     */
    abstract onTableRowComponentReducers(columns: ColumnTypeExt[]): string[];
    /**
     * onTableCellComponentReducers
     * @description 对tableCellComponentReducers对象进行设置的hook
     * @param {ColumnTypeExt[]} columns
     * @return {string[]}
     */
    abstract onTableCellComponentReducers(columns: ColumnTypeExt[]): string[];
    /**
     * isUseCheckedStrategy
     * @description 是否使用CheckedStrategy模式 默认false
     * @return {boolean}
     */
    abstract isUseCheckedStrategy(): boolean;
    /**
     * getCheckedStrategy
     * @description 定义selectedRowKeys数据的返回
     * CHECKED_STRATEGY_SHOW_ALL | CHECKED_STRATEGY_SHOW_CHILD 默认是CHECKED_STRATEGY_SHOW_ALL
     * CHECKED_STRATEGY_SHOW_ALL: 返回所有有选择的数据
     * CHECKED_STRATEGY_SHOW_CHILD: 返回叶子节点数据
     * @return {symbol}
     */
    abstract getCheckedStrategy(): symbol;
    /**
     * onRowSelectionChange
     */
    abstract onRowSelectionChange(selectedRowKeys: any[], selectedRows: any[]): void;
    /**
     * onRowSelectionSelect
     */
    abstract onRowSelectionSelect(record: Record<string, any>, selected: boolean): void;
    /**
     * onRowSelectionSelectAll
     */
    abstract onRowSelectionSelectAll(selected: boolean, selectedRows: object[], changeRows: object[]): void;
    switchColumnElRef: RefObject<HTMLDivElement | null | undefined>;
    private _cachedProcessedColumns;
    private _cachedProcessedColumnsKey;
    private _cachedTableProps;
    private _cachedTablePropsKey;
    private _boundOnTableChange;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: P): void;
    componentDidUpdate(prevProps: any, prevState: any, snapshot?: any): void;
    /**
     * effectWithExpandedRowKeys
     * @protected
     * @param nextProps
     */
    effectWithExpandedRowKeys(nextProps: SearchTableProps): void;
    /**
     * syncCheckedStrategyWithShowChild
     * @param {any[]} dataSource
     * @return {Promise<void>}
     */
    syncCheckedStrategyWithShowChild(dataSource: any[]): Promise<void>;
    /**
     * syncCheckedStrategyWithShowAll
     * @param {any[]} dataSource
     * @return {Promise<void>}
     */
    syncCheckedStrategyWithShowAll(dataSource: any[]): Promise<void>;
    /**
     * syncCheckedStrategy
     * @description 同步
     * @param {any[]} dataSource
     * @return {Promise<void>}
     */
    syncCheckedStrategy(dataSource: any[]): Promise<void>;
    /**
     * searchTableResizableEffectLayout
     * @protected
     */
    searchTableResizableEffectLayout(): void;
    /**
     * fixedHeaderAutoTableEffectLayout
     * @protected
     * @param {SearchTableProps} prevProps
     * @param {SearchTableState} prevState
     */
    fixedHeaderAutoTableEffectLayout(prevProps: SearchTableProps, prevState: SearchTableState): void;
    /**
     * effectWithColumnSetting
     * @param {SearchTableProps} props
     * @protected
     */
    effectWithColumnSetting(props: SearchTableProps): void;
    /**
     * onBodyKeyup
     */
    onBodyKeyup(e: any): void;
    /**
     * onSearchPanelCollapse
     * @description 查询面板展开之前
     * @protected
     */
    onSearchPanelCollapseBefore(): void;
    /**
     * onSearchPanelCollapseAfter
     * @description 查询面板展开之后
     * @protected
     */
    onSearchPanelCollapseAfter(): void;
    /**
     * onTableChange
     * @description 表格change
     * @param {any} pagination
     * @param {any} filters
     * @param {any} sorter
     */
    onTableChange(pagination: any, filters: any, sorter: any): Promise<unknown>;
    onTableRow: (columns: any, record: any, rowIndex: any) => any;
    /**
     * sortOrder
     * @description table的column中加入
     * @param {string} columnName
     * @return {string}
     */
    sortOrder(columnName: string): string;
    /**
     * onCellConfigReducers
     * @description 所有onCell的处理
     * @param {
     *     rowIndex: number;
     *     column: ColumnTypeExt;
     *     record: Record<string, any>;
     *     columns: ColumnTypeExt[];
     * } params
     * @return ColumnTypeExt
     */
    onCellConfigReducers(params: {
        rowIndex: number;
        column: ColumnTypeExt;
        record: Record<string, any>;
        columns: ColumnTypeExt[];
    }): ColumnTypeExt;
    /**
     * onRowConfigReducers
     * @description 所有row的处理
     * @param {
     *     rowIndex: number;
     *     record: Record<string, any>;
     *     columns: ColumnTypeExt[];
     * } params
     * @return {RowConfig}
     */
    onRowConfigReducers(params: {
        rowIndex: number;
        record: Record<string, any>;
        columns: ColumnTypeExt[];
    }): RowConfig;
    /**
     * onExpandedRowsChange
     * @param {any[]} expandedRowKeys
     */
    onExpandedRowsChange(expandedRowKeys: any): Promise<void>;
    /**
     * onExpand
     * @description 点击展开图标时触发
     * @param params
     */
    onExpand(...params: any[]): void;
    /**
     * getIndentSize
     * @description Tree数据展开列的递进
     * @return {number}
     */
    getIndentSize(): number;
    /**
     * search
     */
    search(): Promise<any>;
    /**
     * getTableDensity
     * @description 表格密度
     * @return {TableDensity}
     */
    getTableDensity(): TableDensity;
    /**
     * getCtx
     * @private
     */
    private getHackerElement;
    private getTitleText;
    private getCellText;
    /**
     * getWidthByHacker
     * @param text
     * @param font
     * @param family
     * @param spacing
     * @param space
     * @private
     */
    getWidthByHacker({ text, font, family, spacing, space, }: {
        text: string;
        font: number | string;
        family: string;
        spacing?: number;
        space?: number;
    }): number;
    /**
     * pxToRem
     * @param size
     * @param media
     * @protected
     */
    protected pxToRem(size: number | string, media: ConfigProviderProps['media']): string;
    getCellsWidth({ dataSource, columnConfig }: {
        columnConfig: ColumnTypeExt;
        dataSource: any[];
    }): number[];
    /**
     * setColumnWidth
     * @private
     */
    setColumnWidth({ columnConfig, dataSource, media, }: {
        columnConfig: ColumnTypeExt;
        dataSource: any[];
        media: ConfigProviderProps['media'];
    }): void;
    protected getDefaultColumnTitleFontSize(): number;
    protected getDefaultColumnFontFamily(): string;
    protected getDefaultColumnSpacing(): number;
    protected getDefaultColumnSpace(): number;
    protected getDefaultCellFontSize(): number;
    protected getDefaultCellFontFamily(): string;
    protected getDefaultCellSpace(): number;
    protected getDefaultCellSpacing(): number;
    /**
     * getTableColumnsAll
     */
    getTableColumnsAll(): any[];
    /**
     * getTableColumns
     * @description 获取表格的列数据
     * @return Array<any>
     */
    getTableColumns(): any[];
    /**
     * getTableColumnConfig
     * @description 获取表格序号列的设置
     * @return {any}
     */
    getTableColumnConfig(): {
        title: string;
        dataIndex: string;
        key: string;
        align: string;
        width: string | number;
        render: (v: any, r: any, index: any) => React.JSX.Element;
    };
    /**
     * getRowSelectionFilterData
     * @param {boolean} selected
     * @param {any:[]} records
     * @return {object}
     */
    getRowSelectionFilterData(selected: boolean, records: any[]): {
        selectedRowKeys: any[];
        selectedRows: any[];
    };
    /**
     * rowSelectionFilter
     * @description rowSelectionFilter
     * @param {boolean} selected
     * @param {any[]} records
     * @return {Promise<void>}
     */
    rowSelectionFilter(selected: boolean, records: any[]): Promise<void>;
    /**
     * getRowSelectionConfig
     * @description 获取RowSelection的配置对象
     */
    getRowSelectionConfig(): TableRowSelectionExt<object>;
    /**
     * strategyCheckAllChecked
     * @param checked
     */
    strategyCheckAllChecked(checked: boolean): void;
    /**
     * renderCheckedStrategyCheckAll
     * @description 渲染CheckedStrategy的CheckAll(全选)
     */
    renderCheckedStrategyCheckAll(): React.JSX.Element;
    /**
     * strategyCheckItemChecked
     * @param {{
     *   checked:boolean;
     *   record:any;
     *   dataSource?:any[];
     *   flatDataSource?:any[];
     * }} params
     * @return {Promise<void>}
     */
    strategyCheckItemChecked({ checked, record, dataSource, flatDataSource, }: {
        checked: boolean;
        record: any;
        dataSource?: any[];
        flatDataSource?: any[];
    }): Promise<void>;
    /**
     * renderCheckedStrategyCheckItem
     * @description 渲染CheckedStrategy的Check(每行一行)
     * @param {any} record 行数据
     * @param {number} rowIndex 行索引
     */
    renderCheckedStrategyCheckItem(record: Record<string, string>, rowIndex: number): React.JSX.Element;
    /**
     * getCheckedStrategyColumnConfig
     * @description 自定义Selection列
     */
    getCheckedStrategyColumnConfig(): {
        title: React.JSX.Element;
        dataIndex: string;
        key: string;
        align: string;
        width: string | number;
        render: (v: any, record: Record<string, string>, rowIndex: number) => React.JSX.Element;
    };
    /**
     * getTableRowComponentReducers
     * @return {string[]}
     */
    getTableRowComponentReducers(): string[];
    /**
     * getTableCellComponentReducers
     * @return {string[]}
     */
    getTableCellComponentReducers(): string[];
    /**
     * getExportExcelColumns
     * @description 获取导出excel的列
     * @param _columns
     * return {any[]}
     */
    getExportExcelColumns(_columns: any[]): any[];
    /**
     * getExportExcelData
     * @description 获取导出excel的数据
     * @return {any[]}
     */
    getExportExcelData(): any[];
    /**
     * getDataSource
     * @description 获取Table的数据
     * @return {Record<string, any>[]}
     */
    getDataSource(): Record<string, any>[];
    /**
     * renderTableNumberColumn
     * @description - 渲染序号列
     * @param {string} number
     * @param {{ value: any; record: object; index: number }} params
     * @return {ReactNode}
     */
    renderTableNumberColumn(number: string | undefined, params: {
        value: any;
        record: object;
        index: number;
    }): ReactNode;
    /**
     * renderTableReload
     * @description 刷新表格
     * @return {ReactElement}
     */
    renderTableReload(): ReactElement;
    /**
     * renderColumnSetting
     * @description 创建列设置组件
     * @return {ReactElement}
     */
    renderColumnSetting(): ReactElement;
    /**
     * renderTableDensitySetting
     * @description 表格密度设置
     * @return {ReactElement}
     */
    renderTableDensitySetting(): ReactElement;
    /**
     * renderExportExcel
     * @description 渲染导出excel
     * @return {ReactElement}
     */
    renderExportExcel(): ReactElement;
    /**
     * renderSearchBarCollapseOpenControl
     */
    renderSearchBarCollapseOpenControl(): React.JSX.Element;
    /**
     * renderSearchBarCollapseHideControl
     */
    renderSearchBarCollapseHideControl(): React.JSX.Element;
    /**
     * renderSearchBarCollapseControl
     */
    renderSearchBarCollapseControl(): React.JSX.Element;
    /**
     * renderSwitch
     * @description 将column渲染成Switch组件
     * @param {
     * {
     *  className?: string;
     *  record: object;
     *  dataIndex: strinng;
     *  defaultValue: boolean;
     *  onOriginValue: any;
     *  offOriginValue: any;
     *  switchProps:SwitchProps;
     *  onChange?: (
     *    checked: boolean,
     *    event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
     *    ) => Promise<void>;
     */
    renderSwitch({ className, record, dataIndex, defaultValue, onOriginValue, offOriginValue, switchProps, onChange, }: {
        className?: string;
        record: object;
        dataIndex: string;
        defaultValue: boolean;
        onOriginValue: any;
        offOriginValue: any;
        switchProps?: SwitchProps;
        onChange?: (checked: boolean, event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>, switchColumnElRef: HTMLElement) => Promise<void>;
    }): React.JSX.Element;
    /**
     * getSearchFormToolBarItemsEllipsisCountEllipsisCount
     * @description 获取SearchFormToolBar省略的个数
     * @return {Number}
     */
    getSearchFormToolBarItemsEllipsisCountEllipsisCount(): number;
    /**
     * isSearchFormToolBarItemEllipsesShowOnlyOneAfterCollapsing
     * @description SearchFormToolBar只剩一个
     * @return {Boolean}
     */
    isSearchFormToolBarItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
    /**
     * renderSearchFormToolBarMore
     * @description 渲染renderSearchFormToolBar的More
     */
    renderSearchFormToolBarMore(): React.JSX.Element;
    /**
     * renderSearchFormToolBarSearchItem
     * @param cb
     */
    renderSearchFormToolBarSearchItem(cb: any): React.JSX.Element;
    /**
     * renderSearchFormToolBarResetItem
     * @param cb
     */
    renderSearchFormToolBarResetItem(cb: any): React.JSX.Element;
    getSearchFormToolBarMore(): DropdownProps;
    /**
     * renderSearchFormToolBar
     * @description 渲染查询表单的工具栏
     * @return {ReactNode}
     */
    renderSearchFormToolBar(): ReactNode;
    /**
     * renderSearchBarActions
     * @description 渲染查询工具栏
     * @return {ReactNode}
     */
    renderSearchBarActions(): ReactNode;
    /**
     * isColumnMaxContent
     * @description 是否开启列自适应宽度
     */
    isColumnMaxContent(): any;
    /**
     * columnMaxContent
     * @descriptionn 实现列的max-content操作
     * @param columns
     * @param dataSource
     */
    columnMaxContent({ columns, dataSource }: {
        columns: any;
        dataSource: any;
    }): any;
    /**
     * renderTable
     * @description - 认选表格体
     * @return {ReactElement}
     */
    renderBody(): React.JSX.Element;
    /**
     * renderInner
     * @description 渲染SearchTable
     * @return {ReactNode}
     */
    renderInner(): React.JSX.Element;
    /**
     * renderChildren
     * @return {ReactElement}
     */
    renderChildren(): ReactElement;
    /**
     * render
     * @return {ReactElement}
     */
    render(): ReactElement;
    /**
     * isUseLoadData
     * @description 是否使用Tree的异步加载
     * @return {boolean}
     */
    isUseLoadData(): boolean;
    /**
     * getChildrenColumnName
     * @description 获取Tree数据中children的属性名
     * @return {string}
     */
    getChildrenColumnName(): string;
    /**
     * isUseTreeData
     * @description 是否使用Tree数据
     * @return {boolean}
     */
    isUseTreeData(): boolean;
    /**
     * isRootRecordById
     * @description 是否是root数据
     */
    isRootRecordById(id: string): boolean;
    /**
     * getRecordById
     * @description 获取record
     * @param {string} id
     */
    getRecordById(id: string): import("@baifendian/adhere-util/es/types").IAntdTreeNode | import("@baifendian/adhere-util/es/types").IAntdTreeSelectNode | null;
    /**
     * getParentRecordById
     * @description 根据id获取父record
     * @param {string} id
     */
    getParentRecordById(id: string): import("@baifendian/adhere-util/es/types").IAntdTreeNode | import("@baifendian/adhere-util/es/types").IAntdTreeSelectNode | null | undefined;
    /**
     * getPidById
     * @description 获取pid
     * @param {string} id
     */
    getPidById(id: string): string | undefined;
    /**
     * appendData
     */
    appendData<T extends object>(data: T | T[]): Promise<void>;
    appendDataById<T extends object>(pId: string, data: T | T[]): Promise<void>;
    /**
     * prependData
     * @param data
     */
    prependData<T extends object>(data: T | T[]): Promise<void>;
    prependDataById<T extends object>(pId: string, data: T | T[]): Promise<void>;
    /**
     * insertData
     * @param id
     * @param data
     */
    insertData<T extends object>(id: string, data: T | T[]): Promise<void>;
    insertDataById<T extends object>(pId: string, id: string, data: T | T[]): Promise<void>;
    /**
     * replaceData
     */
    replaceData<T extends object>(id: string, data: T | T[]): Promise<void>;
    replaceDataById<T extends object>(pId: string, id: string, data: T | T[]): Promise<void>;
    /**
     * removeData
     * @param id
     */
    removeData(id: string): Promise<void>;
    removeChildrenData(pId: string): Promise<void>;
    clearChildrenData(pId: string): Promise<void>;
    /**
     * getSelectedRowKeys
     * @description 获取selectedRowKeys
     * @return {any[]}
     */
    getSelectedRowKeys(): any[];
    /**
     * 设置指定行的可编辑表单实例
     * @param {number} rowIndex 行索引
     * @param {FormInstance} form 该行对应的表单实例
     */
    setEditableRowForm(rowIndex: number, form: FormInstance): void;
    /**
     * 通过 rowId 获取当前 dataSource 中的 rowIndex
     * @param rowId
     */
    getRowIndexById(rowId: any): number;
}
export declare const defaultProps: {
    className: string;
    style: {};
    searchClassName: string;
    searchStyle: {};
    isFirst: boolean;
    isFirstLoading: null;
    isShowExpandSearch: boolean;
    defaultExpandSearchCollapse: boolean;
    fitBody: boolean;
    autoFixed: boolean;
    antdTableProps: {};
    fixedHeaderAutoTable: boolean;
    fixedTableSpaceBetween: boolean;
};
export declare const propTypes: {
    className: any;
    style: any;
    searchClassName: any;
    searchStyle: any;
    reset: any;
    firstLoading: any;
    isShowExpandSearch: any;
    defaultExpandSearchCollapse: any;
    fitBody: any;
    autoFixed: any;
    title: any;
    antdTableProps: any;
    fixedHeaderAutoTable: any;
    fixedTableSpaceBetween: any;
};
export default SearchTable;

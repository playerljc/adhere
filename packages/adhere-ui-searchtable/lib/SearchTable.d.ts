import type { FormInstance, FormListFieldData, FormListOperation } from 'antd/es/form';
import type { ColumnType, FilterValue, SorterResult, TableCurrentDataSource, TablePaginationConfig } from 'antd/es/table/interface';
import PropTypes from 'prop-types';
import type { ReactElement, ReactNode, RefObject } from 'react';
import React from 'react';
import ColumnResizable, { SearchTableResizableTitle } from './Extension/ColumnResizable';
import Search from './Search';
import type { CellConfigReducer, ColumnTypeExt, RowConfig, RowConfigReducer, SearchTableProps, SearchTableState } from './types';
import { TableDensity } from './types';
export declare const selectorPrefix = "adhere-ui-search-table";
export declare const SearchTableContext: React.Context<{
    context: SearchTable;
    editable?: {
        tableEditable?: {
            form?: FormInstance<any> | undefined;
            formList?: {
                fields: FormListFieldData[];
                operation?: FormListOperation | undefined;
                meta?: {
                    errors?: ReactNode[] | undefined;
                    warnings?: ReactNode[] | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
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
    protected tableWrapRef: RefObject<HTMLDivElement>;
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
    /**
     * isShowNumber
     * @description 表格是否显示序号
     * @return {boolean}
     */
    abstract isShowNumber(): boolean;
    /**
     * getTableNumberColumnWidth
     * @description 表格序号列的宽度
     * @return {number}
     */
    abstract getTableNumberColumnWidth(): number;
    /**
     * getTableNumberColumnProps
     * @description 获取序号列的Props
     * @return {object}
     */
    abstract getTableNumberColumnProps(): object;
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
     * @return Array<Object>
     */
    abstract getData(): object[];
    /**
     * getColumns
     * @description 获取表格列的信息
     * @return Array<object>
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
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: SearchTableProps): void;
    componentDidUpdate(prevProps: any, prevState: any, snapshot?: any): void;
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
    fixedHeaderAutoTableEffectLayout(prevProps: any, prevState: any): void;
    /**
     * columnSettingEffect
     * @param {SearchTableProps} props
     * @protected
     */
    columnSettingEffect(props: SearchTableProps): void;
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
    onTableChange: (pagination: any, filters: any, sorter: any) => Promise<unknown>;
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
        width: number;
        render: (v: any, r: any, index: any) => React.JSX.Element;
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
     * return _columns
     */
    getExportExcelColumns(_columns: any[]): any[];
    /**
     * getExportExcelData
     * @description 获取导出excel的数据
     * @return any[]
     */
    getExportExcelData(): object[];
    /**
     * getDataSource
     * @description 获取Table的数据
     * @return Record<string, any>[]
     */
    getDataSource(): object[];
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
    }): React.JSX.Element;
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
     * renderSearchBarCollapseControl
     */
    renderSearchBarCollapseControl(): React.JSX.Element;
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
     * renderTable
     * @description - 认选表格体
     * @return {ReactElement}
     */
    renderBody(): React.JSX.Element;
    /**
     * renderInner
     * @description 渲染SearchTable
     * @return {ReactElement | null}
     */
    renderInner(): React.JSX.Element;
    /**
     * renderChildren
     * @return {ReactElement}
     */
    renderChildren(): React.JSX.Element;
    /**
     * render
     * @return {ReactElement}
     */
    render(): ReactElement;
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
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    searchClassName: PropTypes.Requireable<string>;
    searchStyle: PropTypes.Requireable<object>;
    reset: PropTypes.Requireable<boolean>;
    firstLoading: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    isShowExpandSearch: PropTypes.Requireable<boolean>;
    defaultExpandSearchCollapse: PropTypes.Requireable<boolean>;
    fitBody: PropTypes.Requireable<boolean>;
    autoFixed: PropTypes.Requireable<boolean>;
    title: PropTypes.Requireable<string>;
    antdTableProps: PropTypes.Requireable<object>;
    fixedHeaderAutoTable: PropTypes.Requireable<boolean>;
    fixedTableSpaceBetween: PropTypes.Requireable<boolean>;
};
export default SearchTable;

import type { ColumnType, FilterValue, SorterResult, TableCurrentDataSource, TablePaginationConfig, TableRowSelection } from 'antd/lib/table/interface';
import type { ReactElement, ReactNode, RefObject } from 'react';
import React from 'react';
import SearchTable from './SearchTable';
import type { ColumnTypeExt, ISearchTableImplement, SearchTableImplementFactoryFunction, SearchTableImplementProps, SearchTableImplementState, SearchTableProps, SearchTableState } from './types';
export declare const selectorPrefix = "adhere-ui-search-table-implement";
/**
 * SearchTableImplement
 * @class SearchTableImplement
 * @classdesc SearchTableImplement - SearchTable的默认实现
 */
export declare class SearchTableImplement<P extends SearchTableProps, S extends SearchTableState> extends SearchTable<SearchTableImplementProps, SearchTableImplementState> implements ISearchTableImplement {
    static displayName: string;
    innerWrapRef: RefObject<HTMLDivElement>;
    constructor(props: any);
    componentDidMount(): void;
    /**
     * getFetchListPropName
     * @override
     * @description - 获取调用列表接口的函数名
     * @return {string}
     */
    getFetchListPropName(): string;
    /**
     * getFetchListPropNameToFirstUpper
     * @override
     * @description - 获取调用列表接口的函数名首字母大写
     * @return {string}
     */
    getFetchListPropNameToFirstUpper(): string;
    /**
     * onSelectChange
     * @description - onSelectChange
     * @param {string} property
     * @param {string} v
     */
    onSelectChange: (property: string, v: string) => void;
    /**
     * onInputChange
     * @description - onInputChange
     * @param {string} property
     * @param {any} e
     */
    onInputChange: (property: string, e: any) => void;
    /**
     * onDateTimeRangeChange
     * @description - onDateTimeRangeChange
     * @param {string[]} propertys
     * @param {any[]} dayjs
     */
    onDateTimeRangeChange: (propertys: string[], dayjs: any[]) => void;
    /**
     * onRowSelectionChange
     */
    onRowSelectionChange(): void;
    /**
     * onRowSelectionSelect
     */
    onRowSelectionSelect(): void;
    /**
     * onRowSelectionSelectAll
     */
    onRowSelectionSelectAll(): void;
    /**
     * getParams
     * @override
     * @description - 获取查询参数对象
     * @return {any}
     */
    getParams(): object;
    /**
     * getServiceName
     * @override
     * @description - 获取接口服务的model名称
     * @return {string}
     */
    getServiceName(): string;
    /**
     * getFetchDataParams
     * @override
     * @description - 获取调用数据接口的参数
     * @return {object}
     */
    getFetchDataParams(): object;
    /**
     * isShowNumber
     * @description - 是否线上序号列
     * @override
     * @return {boolean}
     */
    isShowNumber(): boolean;
    /**
     * getNumberGeneratorRule
     * @override
     * @description - 表格序号列的生成规则
     * @return {symbol}
     */
    getNumberGeneratorRule(): symbol;
    /**
     * getNumberGeneratorRule
     * @description 获取符号列的生成规则
     * @return {symbol}
     */
    getRowSelectionMode(): symbol;
    /**
     * getTableNumberColumnWidth
     * @override
     * @description - 表格序号列的宽度
     * @return {number}
     */
    getTableNumberColumnWidth(): number;
    /**
     * getTableNumberColumnProps
     * @return {object}
     */
    getTableNumberColumnProps(): object;
    /**
     * getRowKey
     * @override
     * @description - 数据的主键
     * @return {string}
     */
    getRowKey(): string;
    /**
     * getDataKey
     * @description - 获取数据的key
     * @protected
     * @return {string}
     */
    getDataKey(): string;
    /**
     * getTotalKey
     * @description - 获取total的key
     * @protected
     * @return {string}
     */
    getTotalKey(): string;
    /**
     * getData
     * @description - Table的数据(Table的dataSource字段)
     * @override
     * @return {object[]}
     */
    getData(): object[];
    /**
     * getTotal
     * @description - Table数据的总条数
     * @override
     * @return {number}
     */
    getTotal(): number;
    /**
     * getRowSelection
     * @override
     * @description - 获取表格行选择对象
     * @return {TableRowSelection<object>}
     */
    getRowSelection(): TableRowSelection<object>;
    /**
     * renderSearchForm
     * @override
     * @description - 渲染Table查询的表单
     * @return {ReactNode}
     */
    renderSearchForm(): ReactNode;
    /**
     * renderInner
     * @override
     * @description - 渲染主体
     * @return {ReactElement | null}
     */
    renderInner(): React.JSX.Element;
    /**
     * renderSearchFooterItems
     * @description - 渲染表格的工具栏
     * @override
     * @return {any[]}
     */
    renderSearchFooterItems(): any[];
    /**
     * getOrderFieldProp
     * @description - 获取排序字段
     * @override
     * @return {string}
     */
    getOrderFieldProp(): string;
    /**
     * getOrderFieldValue
     * @description - 获取默认排序字段的值
     * @override
     * @protected
     * @return {string}
     */
    getOrderFieldValue(): string;
    /**
     * getOrderProp
     * @description - 获取排序方式
     * @return {string}
     */
    getOrderProp(): string;
    /**
     * getOrderPropValue
     * @override
     * @description - 获取默认排序方式
     * @protected
     * @return {'descend' | 'ascend'}
     */
    getOrderPropValue(): 'descend' | 'ascend';
    /**
     * clearSearch
     * @description - 清空查询条件
     * @override
     * @return {Promise<void>}
     */
    clearSearch(): Promise<void>;
    /**
     * clearPaging
     * @description 清除分页信息
     * @return {Promise<any>}
     */
    clearPaging(): Promise<void>;
    /**
     * showLoading
     * @description - 是否显示遮罩
     * @override
     * @return {boolean}
     */
    showLoading(): boolean;
    /**
     * getSearchParams
     * @description - 获取查询参数
     * @protected
     * @return {any}
     */
    getSearchParams(): any;
    /**
     * fetchData
     * @description - 加载数据
     * @override
     * @return {Promise<any>}
     */
    fetchData(): Promise<any>;
    /**
     * sync
     * @description 同步
     * @return Promise<any>
     */
    sync(): Promise<any>;
    /**
     * fetchDataExecute
     * @description - 真正的执行获取列表数据的接口
     * @param {object} searchParams
     * @protected
     * @return {Promise<any>}
     */
    fetchDataExecute(searchParams: object): Promise<any>;
    /**
     * onSearch
     * @description - 点击查询
     * @override
     * @return {Promise<void>}
     */
    onSearch(): Promise<any>;
    /**
     * getColumns
     * @return {ColumnType<object>[]}
     */
    getColumns(): ColumnType<object>[];
    /**
     * onSubTableChange
     * @param {TablePaginationConfig} pagination
     * @param {Record<string, FilterValue | null>} filters
     * @param {SorterResult<object> | SorterResult<object>[]} sorter
     * @param {TableCurrentDataSource<object> | undefined} extra
     */
    onSubTableChange(pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<object> | SorterResult<object>[], extra?: TableCurrentDataSource<object> | undefined): void;
    /**
     * renderSearchFormAfter
     * @return {ReactNode}
     */
    renderSearchFormAfter(): ReactNode;
    /**
     * renderSearchFormBefore
     * @return {ReactNode}
     */
    renderSearchFormBefore(): ReactNode;
    /**
     * renderSearchFooter
     * @return {ReactNode}
     */
    renderSearchFooter(): ReactNode;
    /**
     * renderSearchHeader
     * @return {ReactNode}
     */
    renderSearchHeader(): ReactNode;
    renderSearchFormToolBarDefaultPanel(): ReactNode;
    renderSearchFormToolBarItems(defaultItems: ReactElement[]): ReactNode[];
    /**
     * onTableRowComponentReducers
     * @param {ColumnTypeExt[]} columns
     * @return {string[]}
     */
    onTableRowComponentReducers(columns: ColumnTypeExt[]): string[];
    /**
     * onTableCellComponentReducers
     * @param {ColumnTypeExt[]} columns
     * @return {string[]}
     */
    onTableCellComponentReducers(columns: ColumnTypeExt[]): string[];
}
/**
 * SearchTableImplementFactory
 * @description 创建SearchTableImplementFactory
 * @param {
 *     serviceNames:string[];
 *     mapStateToProps: (props?: any) => any,
 *     mapDispatchToProps: (props?: any) => any,
 * } params
 * @constructor
 */
declare const SearchTableImplementFactory: SearchTableImplementFactoryFunction<any, any>;
export default SearchTableImplementFactory;

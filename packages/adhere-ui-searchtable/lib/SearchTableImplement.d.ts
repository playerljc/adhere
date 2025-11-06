import type { ColumnType, FilterValue, SorterResult, TableCurrentDataSource, TablePaginationConfig } from 'antd/lib/table/interface';
import type { ExpandableConfig } from 'rc-table/lib/interface';
import type { ReactElement, ReactNode, RefObject } from 'react';
import React from 'react';
import SearchTable from './SearchTable';
import type { TableRowSelectionExt } from './types';
import type { ColumnTypeExt, ISearchTableImplement, SearchTableImplementFactoryFunction, SearchTableImplementProps, SearchTableImplementState, SearchTableProps, SearchTableState } from './types';
export declare const selectorPrefix = "adhere-ui-search-table-implement";
/**
 * SearchTableImplement
 * @class SearchTableImplement
 * @classdesc SearchTableImplement - SearchTable的默认实现
 */
export declare class SearchTableImplement<P extends SearchTableProps, S extends SearchTableState> extends SearchTable<SearchTableImplementProps, SearchTableImplementState> implements ISearchTableImplement {
    static displayName: string;
    innerWrapRef: RefObject<HTMLDivElement | null>;
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
     * getFetchDateParams
     * @override
     * @description - 获取调用数据接口的参数
     * @return {object}
     */
    getFetchDateParams(): object;
    /**
     * isShowNumber
     * @description - 是否线上序号列
     * @override
     * @return {boolean}
     */
    isShowNumber(): boolean;
    /**
     * isUseCheckedStrategy
     * @description 是否使用CheckAll列设置
     * @override
     * @return {boolean}
     */
    isUseCheckedStrategy(): boolean;
    /**
     * getCheckedStrategy
     * @description CheckAll列的选择规则
     * @override
     * @return {symbol}
     */
    getCheckedStrategy(): symbol;
    /**
     * getNumberGeneratorRule
     * @override
     * @description - 表格序号列的生成规则
     * @return {symbol}
     */
    getNumberGeneratorRule(): symbol;
    /**
     * getRowSelectionMode
     * @override
     * @description 获取全选的生模式
     * @return {symbol}
     */
    getRowSelectionMode(): symbol;
    /**
     * getTableNumberColumnProps
     * @description 设置序号列的props
     * @override
     * @return {object}
     */
    getTableNumberColumnProps(): object;
    /**
     * getTableCheckAllColumnProps
     * @description 设置全选列的props
     * @override
     * @return {object}
     */
    getTableCheckAllColumnProps(): object;
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
     * getFetchDataResultDataKey
     * @description fetchData返回的结果中数据的key
     * @return {string}
     */
    getFetchDataResultDataKey(): string;
    /**
     * getTotalKey
     * @description - 获取total的key
     * @protected
     * @return {string}
     */
    getTotalKey(): string;
    /**
     * getCurrentKey
     * @description - 获取current的key
     * @protected
     * @return {string}
     */
    getCurrentKey(): string;
    /**
     * getData
     * @description - Table的数据(Table的dataSource字段)
     * @override
     * @return {object[]}
     */
    getData(): object[];
    /**
     * getCurrent
     * @description - Table的数据(Table的dataSource字段)
     * @override
     * @return {object[]}
     */
    getCurrent(): number;
    /**
     * setData
     * @description 设置数据
     * @param data
     */
    setData<T extends Array<object>>(data: T | ((prevData: T) => T)): Promise<any[]>;
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
     * @return {TableRowSelectionExt<object>}
     */
    getRowSelection(): TableRowSelectionExt<object> | null;
    /**
     * getExpandable
     * @description 获取展开的配置对象
     */
    getExpandable(): ExpandableConfig<any>;
    /**
     * getTableNumberColumnWidth
     * @override
     * @description - 表格序号列的宽度
     * @return {number | string}
     */
    getTableNumberColumnWidth(): number | string;
    /**
     * getTableCheckAllColumnWidth
     * @description 获取全选列的宽度
     * @return {number | string}
     */
    getTableCheckAllColumnWidth(): number | string;
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
     * beforeFetchData
     * @description fetchData之后的处理
     */
    beforeFetchData(): Promise<void>;
    /**
     * afterFetchData
     * @description fetchData之后的处理
     * @param {} result {code: data:}
     */
    afterFetchData(result: any): void;
    /**
     * isCanCheckedStrategySync
     * @description 是否可以进行sync操作
     * @return {boolean}
     */
    isCanCheckedStrategySync(): boolean;
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
    /**
     * onExpand
     * @description 在其中处理Tree数据的异步加载操作使用loadData方法
     * @param params
     */
    onExpand(...params: any[]): void | Promise<void>;
    /**
     * renderLoadingIcon
     * @description 渲染loading图标
     * @param onExpand
     * @param record
     * @return {ReactElement}
     */
    renderLoadingIcon({ onExpand, record }: {
        onExpand: any;
        record: any;
    }): ReactElement;
    /**
     * renderExpandIcon
     * @description 渲染展开图标
     * @param onExpand
     * @param record
     * @return {ReactElement}
     */
    renderExpandIcon({ onExpand, record }: {
        onExpand: any;
        record: any;
    }): ReactElement;
    /**
     * renderCollapseIcon
     * @description 渲染闭合图标
     * @param onExpand
     * @param record
     * @return {ReactElement}
     */
    renderCollapseIcon({ onExpand, record }: {
        onExpand: any;
        record: any;
    }): ReactElement;
    /**
     * isCanAsync
     * @description 如果是异步加载的时候当前节点是否允许异步加载
     * @param {any} record
     * @return {boolean}
     */
    isCanAsync(record: any): boolean;
    /**
     * expandIcon
     * @description 处理Tree异步加载的图标
     * @param expanded
     * @param onExpand
     * @param record
     */
    expandIcon({ expanded, onExpand, record }: {
        expanded: any;
        onExpand: any;
        record: any;
    }): ReactElement<unknown, string | React.JSXElementConstructor<any>> | null;
    /**
     * reloadData
     * @description 重新加载节点的数据
     * @param {string} id 节点的id
     */
    reloadData(id: string): Promise<void>;
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

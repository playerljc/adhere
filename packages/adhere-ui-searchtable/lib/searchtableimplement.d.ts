import { ColumnType, FilterValue, SorterResult, TableCurrentDataSource, TablePaginationConfig, TableRowSelection } from 'antd/lib/table/interface';
import { ReactElement, RefObject } from 'react';
import SearchTable from './searchtable';
import { ISearchTableImplement, SearchTableImplementProps, SearchTableImplementState } from './types';
/**
 * SearchTableImplement
 * @class SearchTableImplement
 * @classdesc SearchTableImplement - SearchTable的默认实现
 */
declare class SearchTableImplement extends SearchTable<SearchTableImplementProps, SearchTableImplementState> implements ISearchTableImplement {
    innerWrapRef: RefObject<HTMLDivElement>;
    constructor(props: any);
    componentDidMount(): void;
    /**
     * getFetchListPropName
     * @override
     * @description - 获取调用列表接口的函数名
     */
    getFetchListPropName(): string;
    /**
     * getFetchListPropNameToFirstUpper
     * @override
     * @description - 获取调用列表接口的函数名首字母大写
     * @return string
     */
    getFetchListPropNameToFirstUpper(): string;
    /**
     * onSelectChange
     * @description - onSelectChange
     * @param property
     * @param v
     */
    onSelectChange: (property: string, v: string) => void;
    /**
     * onInputChange
     * @description - onInputChange
     * @param property
     * @param e
     */
    onInputChange: (property: string, e: any) => void;
    /**
     * onDateTimeRangeChange
     * @description - onDateTimeRangeChange
     * @param propertys
     * @param moments
     */
    onDateTimeRangeChange: (propertys: Array<string>, moments: Array<any>) => void;
    /**
     * getParams
     * @override
     * @description - 获取查询参数对象
     */
    getParams(): object;
    /**
     * getServiceName
     * @override
     * @description - 获取接口服务的model名称
     */
    getServiceName(): string;
    /**
     * getFetchDataParams
     * @override
     * @description - 获取调用数据接口的参数
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
     */
    getNumberGeneratorRule(): Symbol;
    /**
     * getNumberGeneratorRule
     * @description 获取符号列的生成规则
     */
    getRowSelectionMode(): Symbol;
    /**
     * getTableNumberColumnWidth
     * @override
     * @description - 表格序号列的宽度
     */
    getTableNumberColumnWidth(): number;
    /**
     * getRowKey
     * @override
     * @description - 数据的主键
     */
    getRowKey(): string;
    /**
     * getDataKey
     * @description - 获取数据的key
     * @protected
     */
    getDataKey(): string;
    /**
     * getTotalKey
     * @description - 获取total的key
     * @protected
     */
    getTotalKey(): string;
    /**
     * getData
     * @description - Table的数据(Table的dataSource字段)
     * @override
     * @return {Array}
     */
    getData(): Array<object>;
    /**
     * getTotal
     * @description - Table数据的总条数
     * @override
     */
    getTotal(): number;
    /**
     * getRowSelection
     * @override
     * @description - 获取表格行选择对象
     */
    getRowSelection(): TableRowSelection<object>;
    /**
     * renderSearchForm
     * @override
     * @description - 渲染Table查询的表单
     */
    renderSearchForm(): ReactElement | null;
    /**
     * renderInner
     * @override
     * @description - 渲染主体
     */
    renderInner(): ReactElement | null;
    /**
     * getOrderFieldProp
     * @description - 获取排序字段
     * @override
     */
    getOrderFieldProp(): string;
    /**
     * getOrderFieldValue
     * @description - 获取默认排序字段的值
     * @override
     * @protected
     */
    getOrderFieldValue(): string;
    /**
     * getOrderProp
     * @description - 获取排序方式
     */
    getOrderProp(): string;
    /**
     * getOrderPropValue
     * @override
     * @description - 获取默认排序方式
     * @protected
     */
    getOrderPropValue(): 'descend' | 'ascend';
    /**
     * clear
     * @description - 清空查询条件
     * @override
     */
    clear(): Promise<void>;
    /**
     * renderSearchFooterItems
     * @description - 渲染表格的工具栏
     * @override
     */
    renderSearchFooterItems(): Array<any>;
    /**
     * showLoading
     * @description - 是否显示遮罩
     * @override
     */
    showLoading(): boolean;
    /**
     * getSearchParams
     * @description - 获取查询参数
     * @protected
     */
    getSearchParams(): any;
    /**
     * fetchData
     * @description - 加载数据
     * @override
     */
    fetchData(): Promise<any>;
    /**
     * fetchDataExecute
     * @description - 真正的执行获取列表数据的接口
     * @param searchParams
     * @protected
     */
    fetchDataExecute(searchParams: object): Promise<any>;
    /**
     * onSearch
     * @description - 点击查询
     * @override
     */
    onSearch(): Promise<void>;
    getColumns(): Array<ColumnType<object>>;
    onSubTableChange(pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<object> | SorterResult<object>[], extra?: TableCurrentDataSource<object> | undefined): void;
    renderSearchFormAfter(): ReactElement | null;
    renderSearchFormBefore(): ReactElement | null;
    renderTableFooter(): ReactElement | null;
    renderTableHeader(): ReactElement | null;
}
export default SearchTableImplement;

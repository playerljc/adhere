import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { TableRowSelection } from 'antd/es/table/interface';
import { ReactElement, ReactNode, RefObject } from 'react';
import SearchList from './SearchList';
import type { ISearchListImplement, SearchListImplementFactoryFunction, SearchListImplementProps, SearchListImplementState, SearchListProps, SearchListState } from './types';
export declare const selectorPrefix = "adhere-ui-searchtableimplement";
export declare class SearchListImplement<P extends SearchListProps, S extends SearchListState> extends SearchList<SearchListImplementProps, SearchListImplementState> implements ISearchListImplement {
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
     * @param dayjs
     */
    onDateTimeRangeChange: (propertys: string[], dayjs: any[]) => void;
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
    getNumberGeneratorRule(): symbol;
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
    getData(): object[];
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
     * renderSearchFooterItems
     * @description - 渲染表格的工具栏
     * @override
     */
    renderSearchFooterItems(): any[];
    /**
     * clear
     * @description - 清空查询条件
     * @override
     */
    clear(): Promise<void>;
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
    getMetas(): {};
    /**
     * fetchData
     * @description - 加载数据
     * @override
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
    /**
     * selectCheckBoxChange
     * @description 选择的CheckBox改变
     * @param {CheckboxChangeEvent} e
     * @param {any} record
     */
    selectCheckBoxChange(e: CheckboxChangeEvent, record: any): void;
    /**
     * unSelectedAll
     * @description 取消所有选取
     * @return {Promise<void>}
     */
    unSelectedAll(): Promise<void>;
    renderSearchFormAfter(): ReactElement | null;
    renderSearchFormBefore(): ReactElement | null;
    renderSearchFooter(): ReactElement | null;
    renderSearchHeader(): ReactElement | null;
    /**
     * renderItemSelection
     * @description 渲染selection
     * @param {ReactNode} Item
     * @param {object} record
     * @return {ReactNode}
     */
    renderItemSelection(Item: ReactNode, record: any): ReactNode;
    /**
     * renderNormalItem
     * @description 渲染列表的行(标准模式)
     * @param {any} record
     * @param {number} rowIndex
     * @return {ReactNode}
     */
    renderNormalItem(record: any, rowIndex: number): ReactNode;
    /**
     * renderNumberColumn
     * @description - 渲染序号列
     * @param {string | number} number
     * @param {record: any; index: number} params
     * @return {ReactNode}
     */
    renderNumberColumn(number: string | number, params: {
        record: any;
        index: number;
    }): JSX.Element;
    /**
     * renderItem
     * @description 渲染列表的item
     * @param record
     * @param rowIndex
     */
    renderItem(record: any, rowIndex: number): ReactNode;
    /**
     * renderListHeader
     * @description
     * @return {ReactNode}
     */
    renderListHeader(): ReactNode;
}
/**
 * SearchListImplementFactory
 * @description 创建SearchListImplementFactory
 * @param serviceNames
 * @param mapStateToProps
 * @param mapDispatchToProps
 * @constructor
 */
declare const SearchListImplementFactory: SearchListImplementFactoryFunction<any, any>;
export default SearchListImplementFactory;

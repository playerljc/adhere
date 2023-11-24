import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { ListItemProps } from 'antd/es/list';
import { TableRowSelection } from 'antd/es/table/interface';
import React, { ReactElement, ReactNode, RefObject } from 'react';
import SearchList from './SearchList';
import type { ISearchListImplement, ListExpandable, SearchListImplementFactoryFunction, SearchListImplementProps, SearchListImplementState, SearchListProps, SearchListState } from './types';
export declare const selectorPrefix = "adhere-ui-search-table-implement";
export declare class SearchListImplement<P extends SearchListProps, S extends SearchListState> extends SearchList<SearchListImplementProps, SearchListImplementState> implements ISearchListImplement {
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
     * getParams
     * @override
     * @description - 获取查询参数对象
     * @return {object}
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
     * clear
     * @description - 清空查询条件
     * @override
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
    /**
     * renderItemSelection
     * @description 渲染selection
     * @param {object} record
     * @return {ReactNode}
     */
    renderItemSelection(record: any): ReactNode;
    /**
     * renderSmallNormalItem
     * @description 渲染Small的NormalItem
     * @param record
     * @param rowIndex
     */
    renderSmallNormalItem(record: any, rowIndex: number): ReactNode;
    /**
     * renderNormalItem
     * @description 渲染列表的行(标准模式)
     * @param {any} record
     * @param {number} rowIndex
     * @return {ReactNode}
     */
    renderNormalItem(record: any, rowIndex: number): ReactNode;
    /**
     * renderNumberColumnInner
     * @description - 渲染序号列
     * @param {string | number} number
     * @param {record: any; index: number} params
     * @return {ReactNode}
     */
    renderNumberColumnInner(number: string | number, params: {
        record: any;
        index: number;
    }): React.JSX.Element;
    /**
     * renderNumberColumn
     * @description 渲染序号列
     * @param {any} record
     * @param {number} rowIndex
     * @return {ReactNode}
     */
    renderNumberColumn(record: any, rowIndex: any): ReactNode;
    /**
     * getExpandable
     */
    getExpandable(): ListExpandable | null | undefined;
    /**
     * getListProps
     * @param record
     * @param rowIndex
     */
    getListProps(record: any, rowIndex: any): ListItemProps;
    /**
     * getSelectionClassName
     * @param {string} id
     */
    getSelectionClassName(id: any): string;
    /**
     * renderHorizontalNormal
     * @description 横向 默认的渲染
     * @param {any} record
     * @param {number} rowIndex
     * @return {ReactNode}
     */
    renderHorizontalNormal({ record, rowIndex }: {
        record: any;
        rowIndex: any;
    }): ReactNode;
    /**
     * renderVerticalNormal
     * @description 纵向 默认的渲染
     * @param {any} record
     * @param {number} rowIndex
     * @return {ReactNode}
     */
    renderVerticalNormal({ record, rowIndex }: {
        record: any;
        rowIndex: any;
    }): ReactNode;
    /**
     * renderCard
     * @description 使用Card渲染item
     * @param {any} record
     * @param {number} rowIndex
     * @param {any} grid
     * @return {ReactNode}
     */
    renderCard({ record, rowIndex, grid }: {
        record: any;
        rowIndex: any;
        grid: any;
    }): ReactNode;
    /**
     * renderHorizontalGrid
     * @description 横向 Card渲染item
     * @param {any} record
     * @param {number} rowIndex
     * @param {} grid
     * @return {ReactNode}
     */
    renderHorizontalGrid({ record, rowIndex, grid }: {
        record: any;
        rowIndex: any;
        grid: any;
    }): ReactNode;
    /**
     * renderVerticalGrid
     * @description 横向 Card渲染item
     * @param {any} record
     * @param {number} rowIndex
     * @param {} grid
     * @return {ReactNode}
     */
    renderVerticalGrid({ record, rowIndex, grid }: {
        record: any;
        rowIndex: any;
        grid: any;
    }): ReactNode;
    /**
     * renderExpandable
     * @param record
     * @param rowIndex
     * @param collapseChildren
     * @param children
     */
    renderExpandable({ record, rowIndex, collapseChildren, children }: {
        record: any;
        rowIndex: any;
        collapseChildren: any;
        children: any;
    }): React.JSX.Element;
    /**
     * renderHorizontalExpandable
     * @description 横向 可展开渲染item
     * @param {any} record
     * @param {number} rowIndex
     * @return {ReactNode}
     */
    renderHorizontalExpandable({ record, rowIndex }: {
        record: any;
        rowIndex: any;
    }): ReactNode;
    /**
     * renderVerticalExpandable
     * @description 纵向 可展开渲染item
     * @param {any} record
     * @param {number} rowIndex
     * @return {ReactNode}
     */
    renderVerticalExpandable({ record, rowIndex }: {
        record: any;
        rowIndex: any;
    }): ReactNode;
    /**
     * renderItem
     * @description 渲染列表的item
     * @param record
     * @param rowIndex
     */
    renderItem(record: any, rowIndex: number): ReactNode;
    /**
     * renderSelectionListHeader
     * @description 渲染SelectionListHeader
     * @return {ReactNode}
     */
    renderSelectionListHeader(): ReactNode;
    /**
     * renderListHeader
     * @description 选人列表的header
     * @return {ReactNode}
     */
    renderListHeader(): ReactNode;
    renderSearchFormAfter(): ReactNode;
    renderSearchFormBefore(): ReactNode;
    renderSearchFooter(): ReactNode;
    renderSearchHeader(): ReactNode;
    renderSearchFormToolBarDefaultPanel(): ReactNode;
    renderSearchFormToolBarItems(defaultItems: ReactElement[]): ReactNode[];
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

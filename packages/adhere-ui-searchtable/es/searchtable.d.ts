import React, { RefObject } from 'react';
import PropTypes from 'prop-types';
import { ColumnType, FilterValue, SorterResult, TableCurrentDataSource, TablePaginationConfig, TableRowSelection } from 'antd/lib/table/interface';
import Suspense from '@baifendian/adhere-ui-suspense';
import { ISearchTableProps, ISearchTableState, TableDensity } from './types';
export declare const selectorPrefix = "adhere-ui-searchtable";
/**
 * SearchTable
 * @class SearchTable
 * @classdesc SearchTable
 */
declare abstract class SearchTable extends Suspense<ISearchTableProps, ISearchTableState> {
    static defaultProps: any;
    static propTypes: any;
    static NUMBER_GENERATOR_RULE_ALONE: symbol;
    static NUMBER_GENERATOR_RULE_CONTINUITY: symbol;
    static ROW_SELECTION_NORMAL_MODE: symbol;
    static ROW_SELECTION_CONTINUOUS_MODE: symbol;
    protected tableWrapRef: RefObject<HTMLDivElement>;
    private components;
    private columnResizable;
    private columnObserver;
    /**
     * isShowNumber - 表格是否显示序号
     * @return boolean
     */
    abstract isShowNumber(): boolean;
    /**
     * getTableNumberColumnWidth - 表格序号列的宽度
     * @return number
     */
    abstract getTableNumberColumnWidth(): Symbol;
    /**
     * getNumberGeneratorRule - 获取符号列的生成规则
     */
    abstract getNumberGeneratorRule(): Symbol;
    /**
     * getRowSelectionMode - 获取全选的生模式
     */
    abstract getRowSelectionMode(): string;
    /**
     * getRowKey - 获取表格的主键属性
     * @return string
     */
    abstract getRowKey(): string;
    /**
     * getData - 获取表格数据
     * @return Array<Object>
     */
    abstract getData(): Array<object>;
    /**
     * getColumns - 获取表格列的信息
     * @return Array<object>
     */
    abstract getColumns(): Array<ColumnType<object>>;
    /**
     *
     * getRowSelection - 获取表格行选择对象
     */
    abstract getRowSelection(): TableRowSelection<object>;
    /**
     * renderSearchBefore
     * @description 渲染查询面板之前
     */
    abstract renderSearchFormBefore(): React.ReactElement | null;
    /**
     * renderSearchForm - 渲染查询的UI
     */
    abstract renderSearchForm(): React.ReactElement | null;
    /**
     * renderSearchBefore
     * @description 渲染查询面板之后
     */
    abstract renderSearchFormAfter(): React.ReactElement | null;
    /**
     * renderTableHeader - 渲染表格的头
     */
    abstract renderTableHeader(): React.ReactElement | null;
    /**
     * renderTableFooter - 渲染表格的脚
     */
    abstract renderTableFooter(): React.ReactElement | null;
    /**
     * getTotal - 获取表格数据的总数
     */
    abstract getTotal(): number;
    /**
     * getOrderFieldProp - 获取表格的排序字段
     */
    abstract getOrderFieldProp(): string;
    /**
     * getOrderProp - 获取表格的排序属性
     */
    abstract getOrderProp(): string;
    /**
     * getOrderPropValue - 获取默认排序方式
     */
    abstract getOrderPropValue(): 'descend' | 'ascend';
    /**
     * getOrderFieldValue - 获取默认排序字段的值
     */
    abstract getOrderFieldValue(): string;
    /**
     * onSubTableChange - 获取表格change句柄
     * @param pagination
     * @param filters
     * @param sorter
     * @param extra
     */
    abstract onSubTableChange(pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<object> | SorterResult<object>[], extra: TableCurrentDataSource<object>): void;
    /**
     * clear - 清除操作
     */
    abstract clear(): Promise<any>;
    /**
     * renderSearchFooterItems - 渲染SearchFooter的按钮组
     */
    abstract renderSearchFooterItems(defaultItems: Array<React.ReactElement>): Array<React.ReactElement> | null;
    /**
     * onSearch - 进行查询
     */
    abstract onSearch(): void;
    protected constructor(props: any);
    componentWillReceiveProps(nextProps: ISearchTableProps): void;
    componentDidUpdate(prevProps: any, prevState: any, snapshot?: any): void;
    /**
     * searchTableResizableEffectLayout
     * @protected
     */
    protected searchTableResizableEffectLayout(): void;
    /**
     * fixedHeaderAutoTableEffectLayout
     * @protected
     */
    protected fixedHeaderAutoTableEffectLayout(prevProps: any, prevState: any): void;
    /**
     * columnSettingEffect
     * @param props
     * @protected
     */
    protected columnSettingEffect(props: ISearchTableProps): void;
    /**
     * renderTableNumberColumn
     * @description - 渲染序号列
     * @param number
     * @param params
     * @protected
     */
    protected renderTableNumberColumn(number: string | undefined, params: {
        value: any;
        record: object;
        index: number;
    }): JSX.Element;
    /**
     * getLimit
     * @description limit参数
     */
    protected getLimit(): number;
    /**
     * getPagination - 获取分页信息
     */
    protected getPagination(): {
        onChange: (page: any, limit: any) => void;
        onShowSizeChange: (page: any, limit: any) => void;
        total: number;
        current: number;
        pageSize: number;
        showQuickJumper: boolean;
        showTotal: (total: any) => string;
    };
    /**
     * onTableChange - 表格change
     */
    protected onTableChange: (pagination: any, filters: any, sorter: any) => void;
    /**
     * onClear - 清除操作
     */
    protected onClear(): Promise<void>;
    /**
     * sortOrder - table的column中加入
     * sorter: true,
     * sortOrder: this.sortOrder('distance'),
     * @param columnName
     * @return {*}
     */
    protected sortOrder(columnName: string): string;
    /**
     * getTableDensity
     * @description 表格密度
     */
    protected getTableDensity(): TableDensity;
    /**
     * getTableColumns - 获取表格的列数据
     * @return Array<any>
     */
    protected getTableColumns(): Array<any>;
    /**
     * renderColumnSetting
     * @description 创建列设置组件
     */
    renderColumnSetting(): React.ReactElement;
    /**
     * renderTableDensitySetting
     * @description 表格密度设置
     */
    renderTableDensitySetting(): React.ReactElement;
    /**
     * renderSearchFooter - 渲染查询工具栏
     * @return React.ReactElement
     */
    protected renderSearchFooter(): React.ReactElement;
    /**
     * renderTable
     * @description - 认选表格体
     * @protected
     */
    protected renderTable(): JSX.Element;
    /**
     * renderInner - 渲染SearchTable
     * @return React.ReactElement | null
     */
    protected renderInner(): React.ReactElement | null;
    /**
     * render
     * @protected
     */
    protected render(): JSX.Element;
}
export declare const defaultProps: {
    className: string;
    style: {};
    tableClassName: string;
    tableStyle: {};
    searchClassName: string;
    searchStyle: {};
    isFirst: boolean;
    isFirstLoading: null;
    antdTableProps: {};
    isShowExpandSearch: boolean;
    defaultExpandSearchCollapse: boolean;
    fitSearch: boolean;
    fitTable: boolean;
    autoFixed: boolean;
    fixedHeaderAutoTable: boolean;
    fixedTableSpaceBetween: boolean;
};
export declare const propTypes: {
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    tableClassName: PropTypes.Requireable<string>;
    tableStyle: PropTypes.Requireable<object>;
    searchClassName: PropTypes.Requireable<string>;
    searchStyle: PropTypes.Requireable<object>;
    reset: PropTypes.Requireable<boolean>;
    firstLoading: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    antdTableProps: PropTypes.Requireable<object>;
    isShowExpandSearch: PropTypes.Requireable<boolean>;
    defaultExpandSearchCollapse: PropTypes.Requireable<boolean>;
    fitSearch: PropTypes.Requireable<boolean>;
    fitTable: PropTypes.Requireable<boolean>;
    autoFixed: PropTypes.Requireable<boolean>;
    fixedHeaderAutoTable: PropTypes.Requireable<boolean>;
    fixedTableSpaceBetween: PropTypes.Requireable<boolean>;
};
export default SearchTable;

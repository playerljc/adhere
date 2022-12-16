import type { ColumnType, FilterValue, SorterResult, TableCurrentDataSource, TablePaginationConfig, TableRowSelection } from 'antd/lib/table/interface';
import PropTypes from 'prop-types';
import { ReactElement, RefObject } from 'react';
import Suspense from '@baifendian/adhere-ui-suspense';
import { ColumnEditableConfig, SearchTableProps, SearchTableState, TableDensity } from './types';
export declare const selectorPrefix = "adhere-ui-searchtable";
/**
 * SearchTable
 * @class SearchTable
 * @classdesc SearchTable
 */
declare abstract class SearchTable<P extends SearchTableProps = SearchTableProps, S extends SearchTableState = SearchTableState> extends Suspense<P, S> {
    static NUMBER_GENERATOR_RULE_ALONE: symbol;
    static NUMBER_GENERATOR_RULE_CONTINUITY: symbol;
    static ROW_SELECTION_NORMAL_MODE: symbol;
    static ROW_SELECTION_CONTINUOUS_MODE: symbol;
    protected tableWrapRef: RefObject<HTMLDivElement>;
    private components;
    private columnResizable;
    private columnObserver;
    /**
     * isShowNumber
     * @description 表格是否显示序号
     * @return boolean
     */
    abstract isShowNumber(): boolean;
    /**
     * getTableNumberColumnWidth
     * @description 表格序号列的宽度
     * @return number
     */
    abstract getTableNumberColumnWidth(): number;
    /**
     * getTableNumberColumnProps - 获取序号列的Props
     */
    abstract getTableNumberColumnProps(): object;
    /**
     * getNumberGeneratorRule
     * @description 获取符号列的生成规则
     */
    abstract getNumberGeneratorRule(): Symbol;
    /**
     * getRowSelectionMode
     * @description 获取全选的生模式
     */
    abstract getRowSelectionMode(): Symbol;
    /**
     * getRowKey
     * @description 获取表格的主键属性
     * @return string
     */
    abstract getRowKey(): string;
    /**
     * getData
     * @description 获取表格数据
     * @return Array<Object>
     */
    abstract getData(): Array<object>;
    /**
     * getColumns
     * @description 获取表格列的信息
     * @return Array<object>
     */
    abstract getColumns(): Array<ColumnType<object>>;
    /**
     *
     * getRowSelection
     * @description 获取表格行选择对象
     */
    abstract getRowSelection(): TableRowSelection<object>;
    /**
     * renderSearchBefore
     * @description 渲染查询面板之前
     */
    abstract renderSearchFormBefore(): ReactElement | null;
    /**
     * renderSearchForm
     * @description 渲染查询的UI
     */
    abstract renderSearchForm(): ReactElement | null;
    /**
     * renderSearchBefore
     * @description 渲染查询面板之后
     */
    abstract renderSearchFormAfter(): ReactElement | null;
    /**
     * renderTableHeader
     * @description 渲染表格的头
     */
    abstract renderTableHeader(): ReactElement | null;
    /**
     * renderTableFooter
     * @description 渲染表格的脚
     */
    abstract renderTableFooter(): ReactElement | null;
    /**
     * getTotal
     * @description 获取表格数据的总数
     */
    abstract getTotal(): number;
    /**
     * getOrderFieldProp
     * @description 获取表格的排序字段
     */
    abstract getOrderFieldProp(): string;
    /**
     * getOrderProp
     * @description 获取表格的排序属性
     */
    abstract getOrderProp(): string;
    /**
     * getOrderPropValue
     * @description 获取默认排序方式
     */
    abstract getOrderPropValue(): 'descend' | 'ascend';
    /**
     * getOrderFieldValue
     * @description 获取默认排序字段的值
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
     * onEditorCell
     * @description 每一个可编辑的单元格的props
     * @param params
     */
    abstract onEditorCell(params: {
        rowIndex: number;
        editorConfig: ColumnEditableConfig;
        record: any;
    }): void;
    /**
     * clear
     * @description  清除操作
     */
    abstract clear(): Promise<any>;
    /**
     * renderSearchFooterItems
     * @description 渲染SearchFooter的按钮组
     */
    abstract renderSearchFooterItems(defaultItems: Array<ReactElement>): Array<ReactElement> | null;
    /**
     * onSearch
     * @description 进行查询
     */
    abstract onSearch(): Promise<void>;
    constructor(props: any);
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
     */
    fixedHeaderAutoTableEffectLayout(prevProps: any, prevState: any): void;
    /**
     * columnSettingEffect
     * @param props
     * @protected
     */
    columnSettingEffect(props: SearchTableProps): void;
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
     * onTableChange - 表格change
     */
    onTableChange: (pagination: any, filters: any, sorter: any) => void;
    /**
     * onClear - 清除操作
     */
    onClear(): Promise<void>;
    /**
     * sortOrder - table的column中加入
     * sorter: true,
     * sortOrder: this.sortOrder('distance'),
     * @param columnName
     * @return {*}
     */
    sortOrder(columnName: string): string;
    /**
     * getLimit
     * @description limit参数
     */
    getLimit(): number;
    /**
     * getPagination - 获取分页信息
     */
    getPagination(): {
        onChange: (page: any, limit: any) => void;
        onShowSizeChange: (page: any, limit: any) => void;
        showTotal: (total: any) => string;
        total: number;
        current: S["page"] | undefined;
        pageSize: S["limit"] | undefined;
        showQuickJumper: boolean;
    };
    /**
     * getTableDensity
     * @description 表格密度
     */
    getTableDensity(): TableDensity;
    /**
     * getTableColumns - 获取表格的列数据
     * @return Array<any>
     */
    getTableColumns(): any[];
    /**
     * renderTableNumberColumn
     * @description - 渲染序号列
     * @param number
     * @param params
     * @protected
     */
    renderTableNumberColumn(number: string | undefined, params: {
        value: any;
        record: object;
        index: number;
    }): JSX.Element;
    /**
     * renderColumnSetting
     * @description 创建列设置组件
     */
    renderColumnSetting(): ReactElement;
    /**
     * renderTableDensitySetting
     * @description 表格密度设置
     */
    renderTableDensitySetting(): ReactElement;
    /**
     * renderSearchFooter - 渲染查询工具栏
     * @return ReactElement
     */
    renderSearchFooter(): ReactElement;
    /**
     * renderTable
     * @description - 认选表格体
     * @protected
     */
    renderTable(): JSX.Element;
    /**
     * renderInner - 渲染SearchTable
     * @return ReactElement | null
     */
    renderInner(): ReactElement | null;
    /**
     * render
     * @protected
     */
    render(): ReactElement;
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

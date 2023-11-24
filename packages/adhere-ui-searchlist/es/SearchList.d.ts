import { ListSize } from 'antd/es/list';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode, RefObject } from 'react';
import type { Metas, SearchListProps, SearchListState } from './types';
declare const Search: typeof import("@baifendian/adhere-ui-searchtable/es/Search").default;
export declare const selectorPrefix = "adhere-ui-search-table";
export declare const SearchListContext: React.Context<{
    context: SearchList;
} | null>;
/**
 * SearchList
 */
declare abstract class SearchList<P extends SearchListProps = SearchListProps, S extends SearchListState = SearchListState> extends Search<P, S> {
    static displayName: string;
    static NUMBER_GENERATOR_RULE_ALONE: symbol;
    static NUMBER_GENERATOR_RULE_CONTINUITY: symbol;
    static defaultProps: any;
    static propTypes: any;
    protected listWrapRef: RefObject<HTMLDivElement>;
    /**
     * isShowNumber
     * @description 列表是否显示序号
     * @return {boolean}
     */
    abstract isShowNumber(): boolean;
    /**
     * getNumberGeneratorRule
     * @description 获取符号列的生成规则
     * @return {symbol}
     */
    abstract getNumberGeneratorRule(): symbol;
    /**
     * getRowKey
     * @description 获取列表的主键属性
     * @return {string}
     */
    abstract getRowKey(): string;
    /**
     * getData
     * @description 获取列表数据
     * @return {object[]}
     */
    abstract getData(): object[];
    /**
     * getMetas
     * @description 列表项配置
     * @return {Metas<any>}
     */
    abstract getMetas(): Metas<any>;
    /**
     * renderItem
     * @description 渲染列表的item
     * @param {any} record 列表行数据
     * @param {number} rowIndex 列表行索引
     * @return {void}
     */
    abstract renderItem(record: any, rowIndex: number): ReactNode;
    /**
     * renderListHeader
     * @description 渲染列表头部
     * @return {ReactNode}
     */
    abstract renderListHeader(): ReactNode;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
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
     * search
     */
    search(): Promise<void>;
    /**
     * getTableDensity
     * @description 表格密度
     * @return {ListSize}
     */
    getListDensity(): ListSize;
    /**
     * getExportExcelData
     * @description 获取导出excel的数据
     * @return any[]
     */
    getExportExcelData(): object[];
    /**
     * getExportExcelColumns
     * @description 获取导出excel的列
     * @param _columns
     * return _columns
     */
    getExportExcelColumns(_columns: any[]): any[];
    /**
     * renderTableDensitySetting
     * @description 表格密度设置
     * @return {ReactElement}
     */
    renderTableDensitySetting(): ReactElement;
    /**
     * renderTableReload
     * @description 刷新
     * @return {ReactElement}
     */
    renderTableReload(): ReactElement;
    /**
     * renderExportExcel
     * @description 导出excel
     * @return {ReactElement}
     */
    renderExportExcel(): ReactElement;
    /**
     * renderSearchFormToolBar
     * @description 渲染查询表单的工具栏
     * @return {ReactNode}
     */
    renderSearchFormToolBar(): ReactNode;
    /**
     * renderSearchToolBar
     * @description 渲染查询工具栏
     * @return {ReactElement}
     */
    renderSearchToolBar(): ReactElement;
    /**
     * getPagination
     * @param params
     */
    getPagination(...params: any[]): {
        showTotal: (total: any) => string;
        total: number;
        current: any;
        pageSize: any;
        pageSizeOptions: number[];
        showQuickJumper: boolean;
        showSizeChanger: boolean;
        onChange: (page: any, limit: any) => void;
        onShowSizeChange: (page: any, limit: any) => void;
    };
    /**
     * renderBody
     * @return {ReactNode}
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
     * @description renderChildren
     * @return {ReactNode}
     */
    renderChildren(): React.JSX.Element;
    /**
     * render
     * @protected
     * @return {ReactElement}
     */
    render(): ReactElement;
}
export declare const defaultProps: {
    antdListProps: {};
    fixedSelectionHeaderAutoList: boolean;
    fixedListSpaceBetween: boolean;
};
export declare const propTypes: {
    title: PropTypes.Requireable<string>;
    antdListProps: PropTypes.Requireable<object>;
    fixedSelectionHeaderAutoList: PropTypes.Requireable<boolean>;
    fixedListSpaceBetween: PropTypes.Requireable<boolean>;
};
export default SearchList;

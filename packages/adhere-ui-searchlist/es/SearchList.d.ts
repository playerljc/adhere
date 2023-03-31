import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode, RefObject } from 'react';
import { TableDensity } from '@baifendian/adhere-ui-searchtable/es/types';
import type { Metas, SearchListProps, SearchListState } from './types';
declare const Search: typeof import("@baifendian/adhere-ui-searchtable/lib/Search").default;
export declare const selectorPrefix = "adhere-ui-searchtable";
export declare const SearchListContext: React.Context<{
    context: SearchList;
} | null>;
/**
 * SearchList
 */
declare abstract class SearchList<P extends SearchListProps = SearchListProps, S extends SearchListState = SearchListState> extends Search<P, S> {
    static NUMBER_GENERATOR_RULE_ALONE: symbol;
    static NUMBER_GENERATOR_RULE_CONTINUITY: symbol;
    protected listWrapRef: RefObject<HTMLDivElement>;
    /**
     * isShowNumber
     * @description 列表是否显示序号
     * @return boolean
     */
    abstract isShowNumber(): boolean;
    /**
     * getNumberGeneratorRule
     * @description 获取符号列的生成规则
     */
    abstract getNumberGeneratorRule(): symbol;
    /**
     * getRowKey
     * @description 获取列表的主键属性
     * @return string
     */
    abstract getRowKey(): string;
    /**
     * getData
     * @description 获取列表数据
     * @return Array<Object>
     */
    abstract getData(): object[];
    /**
     * getMetas
     * @description 列表项配置
     * @return Metas
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
     * getTableDensity
     * @description 表格密度
     */
    getTableDensity(): TableDensity;
    /**
     * renderTableDensitySetting
     * @description 表格密度设置
     */
    renderTableDensitySetting(): ReactElement;
    /**
     * renderSearchToolBar
     * @description 渲染查询工具栏
     * @return ReactElement
     */
    renderSearchToolBar(): ReactElement;
    /**
     * renderBody
     */
    renderBody(): JSX.Element;
    /**
     * renderInner
     * @description 渲染SearchTable
     * @return ReactElement | null
     */
    renderInner(): ReactElement | null;
    /**
     * renderChildren
     * @description renderChildren
     */
    renderChildren(): JSX.Element;
    /**
     * render
     * @protected
     */
    render(): ReactElement;
}
export declare const defaultProps: {
    listTableProps: {};
};
export declare const propTypes: {
    listTableProps: PropTypes.Requireable<object>;
};
export default SearchList;

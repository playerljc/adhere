import { TableRowSelection } from 'antd/es/table/interface';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode, RefObject } from 'react';
import Suspense from '@baifendian/adhere-ui-suspense';
import type { SearchProps, SearchState } from './types';
/**
 * Search
 * @class
 * @classdesc 查询
 */
declare abstract class Search<P extends SearchProps = SearchProps, S extends SearchState = SearchState> extends Suspense<P, S> {
    static displayName: string;
    static defaultProps: any;
    static propTypes: any;
    props: any;
    state: any;
    protected searchFormRef: RefObject<HTMLElement>;
    protected constructor(props: any);
    /**
     * renderSearchBefore
     * @description 渲染查询面板之前
     * @return {ReactNode}
     */
    abstract renderSearchFormBefore(): ReactNode;
    /**
     * renderSearchForm
     * @description 渲染查询的UI
     * @return {ReactNode}
     */
    abstract renderSearchForm(): ReactNode;
    /**
     * renderSearchFormToolBar
     * @description 渲染查询表单的工具栏
     * @return {ReactNode}
     */
    abstract renderSearchFormToolBar(): ReactNode;
    /**
     * renderSearchFormToolBarItems
     * @description 渲染查询表单的工具栏项
     * @param {ReactElement[]} defaultItems
     * @return {ReactNode []}
     */
    abstract renderSearchFormToolBarItems(defaultItems: ReactElement[]): ReactNode[];
    /**
     * renderSearchFormToolBarDefaultPanel
     * @description 渲染查询表单工具栏缺省面板
     * @return {ReactNode}
     */
    abstract renderSearchFormToolBarDefaultPanel(): ReactNode;
    /**
     * renderSearchBefore
     * @description 渲染查询面板之后
     * @return {ReactNode}
     */
    abstract renderSearchFormAfter(): ReactNode;
    /**
     * renderSearchHeader
     * @description 渲染表格的头
     * @return {ReactNode}
     */
    abstract renderSearchHeader(): ReactNode;
    /**
     * renderSearchFooter
     * @description 渲染表格的脚
     * @return {ReactNode}
     */
    abstract renderSearchFooter(): ReactNode;
    /**
     * renderSearchFooterItems
     * @description 渲染SearchFooter的按钮组
     * @return {ReactNode}
     */
    abstract renderSearchFooterItems(defaultItems: ReactElement[]): ReactNode[];
    /**
     * renderSearchToolBar
     * @description 渲染查询工具栏
     * @return {ReactNode}
     */
    abstract renderSearchToolBar(): ReactNode;
    /**
     * renderBody
     * @description 渲染查询主体
     * @return {ReactNode}
     */
    abstract renderBody(): ReactNode;
    /**
     *
     * getRowSelection
     * @description 获取表格行选择对象
     * @return {TableRowSelection<any>}
     */
    abstract getRowSelection(): TableRowSelection<any>;
    /**
     * clear
     * @description 清除查询操作
     * @return {Promise<any>}
     */
    abstract clearSearch(): Promise<void>;
    /**
     * clearPaging
     * @description 清除分页信息
     * @return {Promise<any>}
     */
    abstract clearPaging(): Promise<void>;
    /**
     * getTotal
     * @description 获取表格数据的总数
     * @return {number}
     */
    abstract getTotal(): number;
    /**
     * onSearch
     * @description 进行查询
     * @return {Promise<void>}
     */
    abstract onSearch(): Promise<void>;
    /**
     * getDerivedStateFromProps
     * @description getDerivedStateFromProps
     * @param {SearchProps} props
     * @param {SearchState} state
     * @return {any}
     */
    static getDerivedStateFromProps(props: SearchProps, state: SearchState): {
        prePage: number | undefined;
        expand?: boolean | undefined;
        page?: number | undefined;
        limit?: number | undefined;
    };
    /**
     * getPagination
     * @description 获取分页信息
     * @return {TablePaginationConfig}
     */
    getPagination(): {
        showTotal: (total: any) => string;
        total: number;
        current: any;
        pageSize: any;
        pageSizeOptions: number[];
        showQuickJumper: boolean;
        showSizeChanger: boolean;
    };
    /**
     * getLimit
     * @description limit参数
     * @return {number}
     */
    getLimit(): number;
    /**
     * clearAll
     * @description 清除所有条件 包括分页数据和查询条件
     * @return {Promise<[void, void]>}
     */
    clearAll(): Promise<[void, void]>;
    /**
     * onClear
     * @description - 清除操作
     * @return {Promise<void>}
     */
    onClear(): Promise<void>;
    /**
     * renderInner
     * @description
     * @param {any} bodyWrapRef
     * @param {string} className
     * @return {ReactElement}
     */
    renderInner(bodyWrapRef?: any, className?: string): React.JSX.Element;
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
};
export default Search;

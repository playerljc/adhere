import { TableRowSelection } from 'antd/es/table/interface';
import PropTypes from 'prop-types';
import { ReactElement, ReactNode } from 'react';
import Suspense from '@baifendian/adhere-ui-suspense';
import type { SearchProps, SearchState } from './types';
/**
 * Search
 * @class
 * @classdesc 查询
 */
declare abstract class Search<P extends SearchProps = SearchProps, S extends SearchState = SearchState> extends Suspense<P, S> {
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
     * @description  清除操作
     * @return {Promise<any>}
     */
    abstract clear(): Promise<any>;
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
        onChange: (page: any, limit: any) => void;
        onShowSizeChange: (page: any, limit: any) => void;
        showTotal: (total: any) => string;
        total: number;
        current: S["page"] | undefined;
        pageSize: S["limit"] | undefined;
        showQuickJumper: boolean;
    };
    /**
     * getLimit
     * @description limit参数
     * @return {number}
     */
    getLimit(): number;
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
     * @return {ReactElement | null}
     */
    renderInner(bodyWrapRef?: any, className?: string): ReactElement | null;
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
    fitSearch: boolean;
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
    fitSearch: PropTypes.Requireable<boolean>;
    fitBody: PropTypes.Requireable<boolean>;
    autoFixed: PropTypes.Requireable<boolean>;
};
export default Search;

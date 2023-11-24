import type { ReactNode } from 'react';
import React from 'react';
import type { ColumnTypeExt } from './types';
declare const _default: (SuperClass: any, searchAndPaginParamsMemo: any) => {
    new (props: any): {
        [x: string]: any;
        componentWillUnmount(): void;
        /**
         * onSubTableChange
         * @param pagination
         * @param filters
         * @param sorter
         */
        onSubTableChange(pagination: any, filters: any, sorter: any): void;
        /**
         * onSearchPanelCollapseBefore
         * @description 查询面板Collapse之前
         */
        onSearchPanelCollapseBefore(): void;
        /**
         * unMountSearchAndPaginParamsDeal
         * @description - 卸载的时候处理查询和分页参数的缓存
         */
        unMountSearchAndPaginParamsDeal(): void;
        /**
         * initSearchAndPaginParams
         * @description - 初始化组件的查询和分页参数
         * @param queryReduce 查询参数的处理
         */
        initSearchAndPaginParams(queryReduce?: ((key: string, v: any) => any) | undefined): any;
        /**
         * hasAdvancedSearchPanel
         * @description 是否开启高级搜索
         * @returns {boolean}
         */
        hasAdvancedSearch(): boolean;
        /**
         * hasNumberColumnFixed
         * @description 序号列是否固定
         * @returns {boolean}
         */
        hasNumberColumnFixed(): boolean;
        /**
         * hasOptionColumnFixed
         * @description 操作列是否固定
         * @returns {boolean}
         */
        hasOptionColumnFixed(): boolean;
        /**
         * getPathName
         * @description 不同路由模式下获取pathname的方法
         */
        getPathName(): string;
        /**
         * getSearch
         * @description 不同路由模式下获取search的方法
         */
        getSearch(): string;
        /**
         * getParams
         * @description 根据列设置返回查询参数
         * @default params
         */
        getParams(): {};
        /**
         * getDateState
         * @description 获取时间查询字段，将默认值修改为null或dayjs对象
         * @param state
         * @return {{}}
         */
        getDateState(state: any): {};
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
         * getLimit
         * @return {number}
         */
        getLimit(): number;
        /**
         * getFetchDataParams
         * @description 获取列表接口查询参数
         */
        getFetchDataParams(): {};
        /**
         * getColumns
         * @param columns
         * @return {*}
         */
        getColumns(columns: any): any;
        /**
         * getTableColumns
         * @returns {*}
         */
        getTableColumns(): any;
        /**
         * getTableColumnSearchHeaderIcon
         * @description 获取列头查询图标
         * @param {ColumnTypeExt} column
         * @return JSX.Element
         */
        getTableColumnSearchHeaderIcon(column: ColumnTypeExt): React.JSX.Element;
        /**
         * getOptionsColumnDataIndex
         * @description 操作列的索引名
         * @returns {string}
         */
        getOptionsColumnDataIndex(): string;
        /**
         * getLinkColumnDataIndex
         * @description 可以跳转列的索引
         * @returns {string}
         */
        getLinkColumnDataIndex(): string;
        /**
         * getPagination
         * @return {{showTotal: (function(*): string)}}
         */
        getPagination(): any;
        /**
         * getGridSearchFormGroupParams
         */
        getGridSearchFormGroupParams(): ({
            name: string;
            columnCount: number;
            colgroup: (string | undefined)[];
            data: {
                key: number;
                sort?: number | undefined;
                label: ReactNode;
                value: ReactNode | null;
            }[];
        }[] | {
            rowCount?: undefined;
        } | {
            rowCount: number;
        })[];
        /**
         * getGridSearchFormGroupDataByColumnConfig
         * @description 通过列设置获取gridSearchFormGroup的Data数据
         * @return Array
         */
        getGridSearchFormGroupDataByColumnConfig(): {
            key: number;
            sort?: number | undefined;
            label: ReactNode;
            value: ReactNode | null;
        }[];
        /**
         * assignSearchConfig
         * @description assign searchConfig
         * @param searchConfig
         * @param column
         */
        assignSearchConfig(searchConfig: any, column: any): any;
        /**
         * renderSearchForm
         * 渲染Table查询的表单
         * @override
         */
        renderSearchForm(): React.JSX.Element;
        /**
         * renderSearchFormToolBarItems
         * @description 渲染查询表单的工具栏项
         * @return {ReactNode []}
         * @param _defaultItems
         */
        renderSearchFormToolBarItems(_defaultItems: any): any[];
        /**
         * renderSearchFormToolBarDefaultPanel
         * @description 渲染查询表单工具栏缺省面板
         * @return {ReactNode}
         */
        renderSearchFormToolBarDefaultPanel(): React.JSX.Element | null;
        /***
         * renderSearchFooterItems
         * @param _defaultItems
         * @return {*}
         */
        renderSearchFooterItems(_defaultItems: any): any[];
        /**
         * getSearchFooterItemsEllipsisCount
         * @description 获取SearchFooterItems省略的个数
         * @return {Number}
         */
        getSearchFooterItemsEllipsisCount(): number;
        /**
         * isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing
         * @description 是否折叠后只显示一个操作按钮
         * @return {boolean}
         */
        isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing(): boolean;
        /**
         * renderSearchFooterItemsImpl
         * @param defaultItems
         * @return {*}
         */
        renderSearchFooterItemsImpl(defaultItems: any): any[];
        /**
         * renderGridSearchFormGroupDataItem
         * @description 渲染GridSearchForm的查询项
         * @param type
         * @param searchConfig
         * @param column
         * @param dataIndex
         */
        renderGridSearchFormGroupDataItem(type: any, { searchConfig, column, dataIndex }: {
            searchConfig: any;
            column: any;
            dataIndex: any;
        }): ReactNode;
        /**
         * renderGridSearchFormGroup
         * @param group - TableGridLayout的分组数据
         * @param props - TableGridLayout配置
         * @param advancedSearchConfig - 高级搜索条件
         * @return {JSX.Element}
         */
        renderGridSearchFormGroup(group: any, props: any, advancedSearchConfig: any): React.JSX.Element;
        /**
         * renderOptionColumn
         * @description 渲染配置列
         * @param defaultItems
         * @param params
         * @return {*}
         */
        renderOptionColumn(defaultItems: any, params: any): any;
    };
    [x: string]: any;
    displayName: string;
};
export default _default;

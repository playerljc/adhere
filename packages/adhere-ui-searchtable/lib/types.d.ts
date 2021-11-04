import React from 'react';
import { ColumnType, FilterValue, SorterResult, TableCurrentDataSource, TablePaginationConfig, TableRowSelection } from 'antd/lib/table/interface';
import { ISuspenseProps, ISuspenseState } from '@baifendian/adhere-ui-suspense/lib/types';
/**
 * ISearchTableProps
 * @interface ISearchTableProps
 */
export interface ISearchTableProps extends ISuspenseProps {
    className?: string;
    style?: React.CSSProperties;
    tableClassName: string;
    tableStyle: React.CSSProperties;
    searchClassName: string;
    searchStyle: React.CSSProperties;
    firstLoading: React.ReactElement;
    antdTableProps: object;
    isShowExpandSearch: boolean;
    defaultExpandSearchCollapse: boolean;
    fitSearch: boolean;
    fitTable: boolean;
    autoFixed: boolean;
    fixedHeaderAutoTable: boolean;
    fixedTableSpaceBetween: boolean;
}
/**
 * ISearchTableState
 * @interface ISearchTableState
 */
export interface ISearchTableState extends ISuspenseState {
    page: number;
    limit: number;
    expand: boolean;
}
/**
 * ISearchFormProps
 * @interface ISearchFormProps
 */
export interface ISearchFormProps extends ISearchTableProps {
}
/**
 * ISearchFormRowProps
 * @interface ISearchFormRowProps
 */
export interface ISearchFormRowProps extends ISearchTableProps {
}
/**
 * ISearchFormLabelProps
 * @interface ISearchFormLabelProps
 */
export interface ISearchFormLabelProps extends ISearchTableProps {
}
/**
 * ISearchFormValueProps
 * @interface ISearchFormValueProps
 */
export interface ISearchFormValueProps extends ISearchTableProps {
}
/**
 * ISearchTableImplementProps
 * @interface ISearchTableImplementProps
 */
export interface ISearchTableImplementProps {
    /**
     * isShowNumber - 表格是否显示序号
     * @return boolean
     */
    isShowNumber(): boolean;
    /**
     * getTableNumberColumnWidth - 表格序号列的宽度
     * @return number
     */
    getTableNumberColumnWidth(): number;
    /**
     * getNumberGeneratorRule - 获取符号列的生成规则
     */
    getNumberGeneratorRule(): string;
    /**
     * getRowKey - 获取表格的主键属性
     * @return string
     */
    getRowKey(): string;
    /**
     * getData - 获取表格数据
     * @return Array<Object>
     */
    getData(): Array<object>;
    /**
     * getColumns - 获取表格列的信息
     * @return Array<object>
     */
    getColumns(): Array<ColumnType<object>>;
    /**
     *
     * getRowSelection - 获取表格行选择对象
     */
    getRowSelection(): TableRowSelection<object>;
    /**
     * renderSearchForm - 渲染查询的UI
     */
    renderSearchForm(): React.ReactElement | null;
    /**
     * renderTableHeader - 渲染表格的头
     */
    renderTableHeader(): React.ReactElement | null;
    /**
     * renderTableFooter - 渲染表格的脚
     */
    renderTableFooter(): React.ReactElement | null;
    /**
     * getTotal - 获取表格数据的总数
     */
    getTotal(): number;
    /**
     * getOrderFieldProp - 获取表格的排序字段
     */
    getOrderFieldProp(): string;
    /**
     * getOrderProp - 获取表格的排序属性
     */
    getOrderProp(): string;
    /**
     * onSubTableChange - 获取表格change句柄
     * @param pagination
     * @param filters
     * @param sorter
     * @param extra
     */
    onSubTableChange(pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<object> | SorterResult<object>[], extra: TableCurrentDataSource<object>): void;
    /**
     * clear - 清除操作
     */
    clear(): Promise<any>;
    /**
     * renderSearchFooterItems - 渲染SearchFooter的按钮组
     */
    renderSearchFooterItems(): Array<React.ReactElement> | null;
    /**
     * onSearch - 进行查询
     */
    onSearch(): void;
    /**
     * showLoading - 是否显示遮罩
     */
    showLoading(): boolean;
    /**
     * fetchData - 加载数据
     */
    fetchData(): void;
}

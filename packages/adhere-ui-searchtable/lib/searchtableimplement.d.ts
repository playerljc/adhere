import React from 'react';
import { ColumnType, FilterValue, SorterResult, TableCurrentDataSource, TablePaginationConfig, TableRowSelection } from 'antd/lib/table/interface';
import { ISearchTableImplementProps } from './types';
import SearchTable from './searchtable';
import SearchForm from './searchform';
/**
 * SearchTableImplement
 * @class SearchTableImplement
 * @classdesc SearchTableImplement
 */
declare class SearchTableImplement extends SearchTable<ISearchTableImplementProps, any> {
    static SearchForm: SearchForm;
    static NUMBER_GENERATOR_RULE_ALONE: symbol;
    static NUMBER_GENERATOR_RULE_CONTINUITY: symbol;
    /**
     * isShowNumber - 表格是否显示序号
     * @return boolean
     */
    protected isShowNumber(): boolean;
    /**
     * getTableNumberColumnWidth - 表格序号列的宽度
     * @return number
     */
    protected getTableNumberColumnWidth(): number;
    /**
     * getNumberGeneratorRule - 获取符号列的生成规则
     */
    protected getNumberGeneratorRule(): string;
    /**
     * getRowKey - 获取表格的主键属性
     * @return string
     */
    protected getRowKey(): string;
    /**
     * getData - 获取表格数据
     * @return Array<Object>
     */
    protected getData(): Array<object>;
    /**
     * getColumns - 获取表格列的信息
     * @return Array<object>
     */
    protected getColumns(): Array<ColumnType<object>>;
    /**
     *
     * getRowSelection - 获取表格行选择对象
     */
    protected getRowSelection(): TableRowSelection<object>;
    /**
     * renderSearchForm - 渲染查询的UI
     */
    protected renderSearchForm(): React.ReactElement | null;
    /**
     * getTotal - 获取表格数据的总数
     */
    protected getTotal(): number;
    /**
     * getOrderFieldProp - 获取表格的排序字段
     */
    protected getOrderFieldProp(): string;
    /**
     * getOrderProp - 获取表格的排序属性
     */
    protected getOrderProp(): string;
    /**
     * onSubTableChange - 获取表格change句柄
     * @param pagination
     * @param filters
     * @param sorter
     * @param extra
     */
    protected onSubTableChange(pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<object> | SorterResult<object>[], extra: TableCurrentDataSource<object>): void;
    /**
     * clear - 清除操作
     */
    protected clear(): Promise<any>;
    /**
     * renderSearchFooterItems - 渲染SearchFooter的按钮组
     */
    protected renderSearchFooterItems(): Array<React.ReactElement> | null;
    /**
     * onSearch - 进行查询
     */
    protected onSearch(): void;
}
export default SearchTableImplement;

import React, { RefObject } from 'react';
import { TableRowSelection } from 'antd/lib/table/interface';
import { ISearchTableImplementProps } from './types';
import SearchTable from './searchtable';
/**
 * SearchTableImplement
 * @class SearchTableImplement
 * @classdesc SearchTableImplement - SearchTable的默认实现
 */
declare class SearchTableImplement extends SearchTable<ISearchTableImplementProps, any> {
    protected innerWrapRef: RefObject<HTMLDivElement>;
    constructor(props: any);
    protected componentDidMount(): void;
    /**
     * getFetchListPropName
     * @override
     * @description - 获取调用列表接口的函数名
     */
    protected getFetchListPropName(): string;
    /**
     * getFetchListPropNameToFirstUpper
     * @override
     * @description - 获取调用列表接口的函数名首字母大写
     * @return string
     */
    protected getFetchListPropNameToFirstUpper(): string;
    /**
     * onSelectChange
     * @description - onSelectChange
     * @param property
     * @param v
     */
    protected onSelectChange: (property: string, v: string) => void;
    /**
     * onInputChange
     * @description - onInputChange
     * @param property
     * @param e
     */
    protected onInputChange: (property: string, e: any) => void;
    /**
     * onDateTimeRangeChange
     * @description - onDateTimeRangeChange
     * @param propertys
     * @param moments
     */
    protected onDateTimeRangeChange: (propertys: Array<string>, moments: Array<any>) => void;
    /**
     * getParams
     * @override
     * @description - 获取查询参数对象
     */
    protected getParams(): object;
    /**
     * getServiceName
     * @override
     * @description - 获取接口服务的model名称
     */
    protected getServiceName(): string;
    /**
     * getFetchDataParams
     * @override
     * @description - 获取调用数据接口的参数
     */
    protected getFetchDataParams(): object;
    /**
     * isShowNumber
     * @description - 是否线上序号列
     * @override
     * @return {boolean}
     */
    protected isShowNumber(): boolean;
    /**
     * getNumberGeneratorRule
     * @override
     * @description - 表格序号列的生成规则
     */
    protected getNumberGeneratorRule(): Symbol;
    /**
     * getTableNumberColumnWidth
     * @override
     * @description - 表格序号列的宽度
     */
    protected getTableNumberColumnWidth(): number;
    /**
     * getRowKey
     * @override
     * @description - 数据的主键
     */
    protected getRowKey(): string;
    /**
     * getDataKey
     * @description - 获取数据的key
     * @protected
     */
    protected getDataKey(): string;
    /**
     * getTotalKey
     * @description - 获取total的key
     * @protected
     */
    protected getTotalKey(): string;
    /**
     * getData
     * @description - Table的数据(Table的dataSource字段)
     * @override
     * @return {Array}
     */
    protected getData(): Array<object>;
    /**
     * getTotal
     * @description - Table数据的总条数
     * @override
     */
    protected getTotal(): number;
    /**
     * getRowSelection
     * @override
     * @description - 获取表格行选择对象
     */
    protected getRowSelection(): TableRowSelection<object>;
    /**
     * renderSearchForm
     * @override
     * @description - 渲染Table查询的表单
     */
    protected renderSearchForm(): React.ReactElement | null;
    /**
     * renderInner
     * @override
     * @description - 渲染主体
     */
    protected renderInner(): React.ReactElement | null;
    /**
     * getOrderFieldProp
     * @description - 获取排序字段
     * @override
     */
    protected getOrderFieldProp(): string;
    /**
     * getOrderFieldValue
     * @description - 获取默认排序字段的值
     * @override
     * @protected
     */
    protected getOrderFieldValue(): string;
    /**
     * getOrderProp
     * @description - 获取排序方式
     */
    protected getOrderProp(): string;
    /**
     * getOrderPropValue
     * @override
     * @description - 获取默认排序方式
     * @protected
     */
    protected getOrderPropValue(): 'descend' | 'ascend';
    /**
     * clear
     * @description - 清空查询条件
     * @override
     */
    protected clear(): Promise<any>;
    /**
     * renderSearchFooterItems
     * @description - 渲染表格的工具栏
     * @override
     */
    protected renderSearchFooterItems(): Array<any>;
    /**
     * showLoading
     * @description - 是否显示遮罩
     * @override
     */
    protected showLoading(): boolean;
    /**
     * getSearchParams
     * @description - 获取查询参数
     * @protected
     */
    protected getSearchParams(): any;
    /**
     * fetchData
     * @description - 加载数据
     * @override
     */
    protected fetchData(): Promise<any>;
    /**
     * fetchDataExecute
     * @description - 真正的执行获取列表数据的接口
     * @param searchParams
     * @protected
     */
    protected fetchDataExecute(searchParams: object): Promise<any>;
    /**
     * onSearch
     * @description - 点击查询
     * @override
     */
    protected onSearch(): Promise<any>;
}
export default SearchTableImplement;

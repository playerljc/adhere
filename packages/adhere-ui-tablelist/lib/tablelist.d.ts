import React from 'react';
import { ITableListProps } from './types';
export declare const selectorPrefix = "adhere-ui-tablelist";
/**
 * Template
 * @class Template
 * @classdesc Template
 */
declare class TableList<RecordType extends object = any> extends React.Component<ITableListProps<RecordType>, any> {
    static defaultProps: any;
    static propTypes: any;
    private readonly searchFormRef;
    private readonly getModeProps;
    private readonly getDefaultSelectedColumnKeys;
    private readonly getFormColumns;
    private readonly getRowSelection;
    private readonly getPagination;
    private readonly getLoading;
    private readonly getTableColumns;
    private TableListRef;
    getSortDataSource: Function;
    getParams: Function;
    fetchList: Function;
    onSearch: Function;
    onResetSearch: Function;
    onSettingChange: Function;
    onSettingSortEnd: Function;
    onTableChange: any;
    SortableTableRef: any;
    constructor(props: any);
    static getDerivedStateFromProps(nextProps: Readonly<ITableListProps<object>>, prevState: any): {
        firstLoading: boolean;
    } | null;
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: ITableListProps<RecordType>, nextState: any): boolean;
    /**
     * 渲染搜索
     */
    private renderSearch;
    /**
     * toolbar: 标题，全选----刷新，搜索，设置
     */
    private renderToolbar;
    /**
     * 渲染列表
     */
    private renderList;
    /**
     * 渲染表格
     */
    private renderTable;
    /**
     * 渲染内容
     */
    private renderContent;
    /**
     * 加载效果
     */
    private renderLoading;
    render(): JSX.Element;
}
export default TableList;

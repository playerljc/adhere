import React from 'react';
import { TableListProps, TableListState } from './types';
export declare const selectorPrefix = "adhere-ui-table-list";
/**
 * 表格列表组件
 * 支持表格和列表两种显示模式，提供搜索、分页、排序等功能
 * @template RecordType - 数据记录类型
 */
declare class TableList<RecordType extends object = any> extends React.PureComponent<TableListProps<RecordType>, TableListState> {
    static displayName: string;
    static defaultProps: any;
    static propTypes: any;
    /** 搜索表单引用 */
    private readonly searchFormRef;
    /** 获取模式属性方法 */
    private readonly getModeProps;
    /** 获取默认选中列键方法 */
    private readonly getDefaultSelectedColumnKeys;
    /** 获取表单列配置方法 */
    private readonly getFormColumns;
    /** 获取行选择配置方法 */
    private readonly getRowSelection;
    /** 获取分页配置方法 */
    private readonly getPagination;
    /** 获取加载状态方法 */
    private readonly getLoading;
    /** 获取表格列配置方法 */
    private readonly getTableColumns;
    /** 表格列表容器引用 */
    private TableListRef;
    /** 获取排序数据源方法 */
    getSortDataSource: Function;
    /** 获取参数方法 */
    getParams: Function;
    /** 获取数据方法 */
    fetchList: Function;
    /** 搜索方法 */
    onSearch: Function;
    /** 重置搜索方法 */
    onResetSearch: Function;
    /** 设置变化方法 */
    onSettingChange: Function;
    /** 设置排序结束方法 */
    onSettingSortEnd: Function;
    /** 表格变化方法 */
    onTableChange: any;
    /** 可排序表格引用 */
    SortableTableRef: any;
    /**
     * 构造函数
     * @param props - 组件属性
     */
    constructor(props: TableListProps<RecordType>);
    /**
     * 从属性派生状态
     * @param nextProps - 下一个属性
     * @param prevState - 前一个状态
     * @returns 新的状态或null
     */
    static getDerivedStateFromProps(nextProps: Readonly<TableListProps<object>>, prevState: TableListState): {
        firstLoading: boolean;
    } | null;
    /**
     * 组件挂载后执行
     */
    componentDidMount(): void;
    /**
     * 判断组件是否需要更新
     * @param nextProps - 下一个属性
     * @param nextState - 下一个状态
     * @returns 是否需要更新
     */
    shouldComponentUpdate(nextProps: TableListProps<RecordType>, nextState: TableListState): boolean;
    /**
     * 渲染搜索栏
     * @returns 搜索栏JSX
     */
    private renderSearch;
    /**
     * 渲染工具栏
     * 包含标题、全选、刷新、搜索、设置等功能
     * @returns 工具栏JSX
     */
    private renderToolbar;
    /**
     * 渲染列表
     * @returns 列表JSX
     */
    private renderList;
    /**
     * 渲染表格
     * @returns 表格JSX
     */
    private renderTable;
    /**
     * 渲染内容区域
     * @returns 内容区域JSX
     */
    private renderContent;
    /**
     * 渲染加载效果
     * @returns 加载效果JSX
     */
    private renderLoading;
    /**
     * 渲染组件
     * @returns 组件JSX
     */
    render(): React.ReactNode;
}
export default TableList;

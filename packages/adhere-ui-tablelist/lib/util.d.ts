import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { ColumnType } from 'antd/lib/table';
import { UtilInstance } from './types';
/**
 * 表格列表工具类
 * 提供表格列表组件的各种工具方法和状态管理
 */
declare class Util implements UtilInstance {
    /** 组件实例引用 */
    ins: any;
    /**
     * 构造函数
     * @param ins - 组件实例
     */
    constructor(ins: any);
    /**
     * 获取对应mode的属性配置
     * @returns 当前模式下的属性配置
     */
    getModeProps: () => any;
    /**
     * 获取默认显示的列项键名
     * @param columns - 列配置数组
     * @returns 默认选中的列键名数组
     */
    getDefaultSelectedColumnKeys: (columns: any[]) => string[];
    /**
     * 获取行选择配置
     * 默认支持跨页选中，如果想要跨页取消设置clearOnChange为true
     * @returns 行选择配置对象
     */
    getRowSelection: () => any;
    /**
     * 获取排序后的表格数据
     * @returns 排序后的数据源
     */
    getSortDataSource: () => any[];
    /**
     * 获取请求参数
     * @returns 合并后的请求参数
     */
    getParams: () => Record<string, any>;
    /**
     * 获取表单统一配置
     * @param Formcolumns - 表单列配置
     * @param size - 组件尺寸
     * @param searchNow - 是否立即搜索
     * @returns 处理后的表单列配置
     */
    getFormColumns: (Formcolumns: any[], size: SizeType, searchNow: boolean) => any[];
    /**
     * 获取分页配置
     * @param pagination - 分页配置
     * @returns 处理后的分页配置
     */
    getPagination: (pagination: any) => any;
    /**
     * 获取表格的配置项
     * @returns 处理后的表格列配置
     */
    getTableColumns: () => ColumnType<any>[];
    /**
     * 获取表格或者列表的loading状态
     * @param loading - 加载配置
     * @returns 处理后的加载状态
     */
    getLoading: (loading: any) => any;
    /**
     * 发起数据请求
     * @param params - 请求参数
     */
    fetchList: (params?: Record<string, any>) => void;
    /**
     * 搜索处理
     * @param searchParams - 搜索参数
     */
    onSearch: (searchParams: Record<string, any>) => void;
    /**
     * 重置搜索
     */
    onResetSearch: () => void;
    /**
     * 列设置变化处理
     * @param selectedColumnKeys - 选中的列键
     */
    onSettingChange: (selectedColumnKeys: string[]) => void;
    /**
     * 列设置拖拽排序完毕处理
     * @param params - 拖拽参数
     * @param params.oldIndex - 原索引
     * @param params.newIndex - 新索引
     */
    onSettingSortEnd: ({ oldIndex, newIndex }: {
        oldIndex: number;
        newIndex: number;
    }) => void;
    /**
     * 表格变化处理
     * @param keys - 变化的键
     * @param filters - 过滤器
     * @param sorter - 排序器
     */
    onTableChange: (keys: any, filters: any, sorter: any) => void;
    /**
     * 选项变化处理
     * @param selectedRowKeys - 选中的行键
     * @param selectedRows - 选中的行数据
     */
    onSelectChange: (selectedRowKeys: any[], selectedRows: any[]) => void;
    /**
     * 分页变化处理
     * @param page - 页码
     * @param limit - 每页条数
     */
    onPageChange: (page: number, limit: number) => void;
    /**
     * 表格删除时候操作，刷列表
     * @param deletedKeys - 删除的键数组
     */
    onDelete: (deletedKeys?: any[]) => void;
}
export default Util;

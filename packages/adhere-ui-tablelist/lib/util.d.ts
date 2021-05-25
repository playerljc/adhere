declare class Util {
    ins: any;
    constructor(ins: any);
    /**
     * 获取对应mode的属性
     */
    getModeProps: () => any;
    /**
     * 获取默认显示的列项
     */
    getDefaultSelectedColumnKeys: (columns: any) => any;
    /**
     * 获取rowSelection 默认支持跨页选中，如果想要跨页取消设置clearOnChange为true
     */
    getRowSelection: () => any;
    /**
     * 获取排序后的表格数据
     */
    getSortDataSource: () => any;
    /**
     * 获取参数
     */
    getParams: () => any;
    /**
     * 获取表单统一配置
     * @param {*} Formcolumns
     */
    getFormColumns: (Formcolumns: any, size: any, searchNow: any) => any;
    /**
     * 获取分页
     */
    getPagination: (pagination: any) => any;
    /**
     * 获取表格的配置项
     */
    getTableColumns: () => any;
    getLoading: (loading: any) => any;
    /**
     * 发起请求
     * @param {*} params
     */
    fetchList: (params?: object | undefined) => void;
    /**
     * 搜索
     */
    onSearch: (searchParams: any) => void;
    /**
     * 重置
     */
    onResetSearch: () => void;
    /**
     * 列设置变化
     */
    onSettingChange: (selectedColumnKeys: any) => void;
    /**
     * 列设置拖拽排序完毕
     */
    onSettingSortEnd: ({ oldIndex, newIndex }: {
        oldIndex: any;
        newIndex: any;
    }) => void;
    /**
     * 表格变化
     * @param {*} _
     * @param {*} filters
     * @param {*} sorter
     */
    onTableChange: (keys: any, filters: any, sorter: any) => void;
    /**
     * 选项变化
     */
    onSelectChange: (selectedRowKeys: any, selectedRows: any) => void;
    /**
     * 分页变化
     * @param {*} page
     * @param {*} limit
     */
    onPageChange: (page: any, limit: any) => void;
    onDelete: (deletedKeys?: never[]) => void;
}
export default Util;

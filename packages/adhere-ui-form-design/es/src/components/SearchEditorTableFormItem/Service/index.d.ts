/**
 * serviceName
 * @description 服务的唯一标识名称（需稳定，避免热更新重复注册导致异常）
 */
export declare const serviceName = "SystemSearchEditorTableFormItem";
type FetchListResult = {
    total: number;
    records: unknown[];
    current?: number;
};
type FetchListService = {
    call: () => Promise<{
        data: Record<string, unknown>;
    }>;
    defaultResult: () => Pick<FetchListResult, 'total' | 'records'>;
};
/**
 * fetchList
 * @description 获取列表数据的模拟接口，返回空数据集用于初始化
 * @returns {Object} 包含 call 方法和 defaultResult 的服务配置对象
 */
export declare const fetchList: FetchListService;
export {};

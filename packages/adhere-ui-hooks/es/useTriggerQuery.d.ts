import type { UseTriggerQueryReturn } from './types';
/**
 * useTriggerQuery hook
 * @description 用于管理查询参数和搜索状态的 React Hook
 * @template T - 查询参数类型
 * @param {T} defaultValue - 默认查询参数
 * @returns {UseTriggerQueryReturn<T>} 返回查询管理对象
 *
 * @example
 * ```tsx
 * interface SearchParams {
 *   keyword: string;
 *   status: string;
 *   page: number;
 * }
 *
 * const {
 *   fieldsValue,
 *   searchParams,
 *   setFieldsValue,
 *   search,
 *   reset
 * } = useTriggerQuery<SearchParams>({
 *   keyword: '',
 *   status: 'all',
 *   page: 1
 * });
 *
 * // 更新字段值
 * setFieldsValue(draft => {
 *   draft.keyword = 'search term';
 * });
 *
 * // 执行搜索
 * search(() => {
 *   console.log('搜索完成');
 * });
 *
 * // 重置搜索
 * reset(() => {
 *   console.log('重置完成');
 * }, { page: 1 });
 * ```
 */
declare function useTriggerQuery<T extends Record<string, any>>(defaultValue: T): UseTriggerQueryReturn<T>;
export default useTriggerQuery;

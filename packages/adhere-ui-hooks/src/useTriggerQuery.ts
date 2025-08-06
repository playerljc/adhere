import { useCreation, useLatest } from 'ahooks';
import { useImmer } from 'use-immer';

import type { UseTriggerQueryReturn } from './types';
import useSetState from './useSetState';

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
function useTriggerQuery<T extends Record<string, any>>(defaultValue: T): UseTriggerQueryReturn<T> {
  const memoDefaultValue = useCreation(() => defaultValue, []);

  // 状态参数
  const [fieldsValue, setFieldsValue] = useImmer<T>(memoDefaultValue ?? {});

  // 查询参数
  const [targetSearchParamsRef, setSearchParams] = useSetState<T>(memoDefaultValue ?? {});

  const targetFieldsValueRef = useLatest(fieldsValue);

  /**
   * 执行搜索
   * @param {() => void} [cb] - 搜索完成后的回调函数
   */
  function search(cb?: () => void): void {
    const keys = Object.keys(targetFieldsValueRef.current as object);
    const searchParams: Partial<T> = {};

    keys.forEach((key) => {
      searchParams[key as keyof T] = targetFieldsValueRef?.current?.[key as keyof T];
    });

    setSearchParams(searchParams as T, cb);
  }

  /**
   * 重置搜索
   * @param {() => void} [cb] - 重置完成后的回调函数
   * @param {Partial<T>} [defaultValue] - 重置时的默认值
   */
  function reset(cb?: () => void, defaultValue?: Partial<T>): void {
    const origin = { ...memoDefaultValue, ...(defaultValue ?? {}) };
    const keys = Object.keys(origin);

    // 重置字段值
    setFieldsValue((draft: any) => {
      keys.forEach((key) => {
        draft[key] = origin[key as keyof T];
      });
    });

    // 重置搜索参数
    const searchParams: Partial<T> = {};
    keys.forEach((key) => {
      searchParams[key as keyof T] = origin[key as keyof T];
    });

    setSearchParams(searchParams as T, cb);
  }

  return {
    setFieldsValue: setFieldsValue as (updater: ((draft: T) => void) | T) => void,
    fieldsValue: targetFieldsValueRef,
    searchParams: targetSearchParamsRef,
    search,
    reset,
  };
}

export default useTriggerQuery;

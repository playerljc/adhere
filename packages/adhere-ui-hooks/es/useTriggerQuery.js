var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useCreation, useLatest } from 'ahooks';
import { useImmer } from 'use-immer';
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
function useTriggerQuery(defaultValue) {
    var memoDefaultValue = useCreation(function () { return defaultValue; }, []);
    // 状态参数
    var _a = useImmer(memoDefaultValue !== null && memoDefaultValue !== void 0 ? memoDefaultValue : {}), fieldsValue = _a[0], setFieldsValue = _a[1];
    // 查询参数
    var _b = useSetState(memoDefaultValue !== null && memoDefaultValue !== void 0 ? memoDefaultValue : {}), targetSearchParamsRef = _b[0], setSearchParams = _b[1];
    var targetFieldsValueRef = useLatest(fieldsValue);
    /**
     * 执行搜索
     * @param {() => void} [cb] - 搜索完成后的回调函数
     */
    function search(cb) {
        var keys = Object.keys(targetFieldsValueRef.current);
        var searchParams = {};
        keys.forEach(function (key) {
            var _a;
            searchParams[key] = (_a = targetFieldsValueRef === null || targetFieldsValueRef === void 0 ? void 0 : targetFieldsValueRef.current) === null || _a === void 0 ? void 0 : _a[key];
        });
        setSearchParams(searchParams, cb);
    }
    /**
     * 重置搜索
     * @param {() => void} [cb] - 重置完成后的回调函数
     * @param {Partial<T>} [defaultValue] - 重置时的默认值
     */
    function reset(cb, defaultValue) {
        var origin = __assign(__assign({}, memoDefaultValue), (defaultValue !== null && defaultValue !== void 0 ? defaultValue : {}));
        var keys = Object.keys(origin);
        // 重置字段值
        setFieldsValue(function (draft) {
            keys.forEach(function (key) {
                draft[key] = origin[key];
            });
        });
        // 重置搜索参数
        var searchParams = {};
        keys.forEach(function (key) {
            searchParams[key] = origin[key];
        });
        setSearchParams(searchParams, cb);
    }
    return {
        setFieldsValue: setFieldsValue,
        fieldsValue: targetFieldsValueRef,
        searchParams: targetSearchParamsRef,
        search: search,
        reset: reset,
    };
}
export default useTriggerQuery;

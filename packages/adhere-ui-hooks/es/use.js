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
import { useMount } from 'ahooks';
import { useState } from 'react';
/**
 * 默认状态
 */
var DEFAULT_STATUS = {
    data: null,
    isPending: true,
    isValidate: false,
};
/**
 * 成功状态
 */
var SUCCESS_STATUS = {
    isPending: false,
    isValidate: false,
};
/**
 * 失败状态
 */
var FAIL_STATUS = {
    isPending: false,
    isValidate: true,
};
/**
 * use hook
 * @description 用于处理异步 Promise 的 React Hook，提供加载状态、错误处理和重试功能
 * @template T - Promise 返回的数据类型
 * @template Args - Promise 函数的参数类型
 * @param {(...args: Args) => Promise<T>} p - 要执行的 Promise 函数
 * @param {Args} [defaultArgs] - 默认参数，组件挂载时自动执行
 * @returns {UseResult<T>} 返回包含数据、状态和操作函数的对象
 *
 * @example
 * ```tsx
 * const { data, isPending, isValidate, reset, reload } = use(fetchUserData, [userId]);
 *
 * if (isPending) return <Loading />;
 * if (isValidate) return <Error />;
 * return <UserInfo data={data} />;
 * ```
 */
var use = function (p, defaultArgs) {
    var _a = useState(__assign({}, DEFAULT_STATUS)), result = _a[0], setResult = _a[1];
    var _b = useState('reset'), type = _b[0], setType = _b[1];
    /**
     * 执行 Promise
     * @description 执行传入的 Promise 函数并更新状态
     * @param {Args} _defaultArgs - 执行参数
     * @returns {Promise<T>} Promise 执行结果
     */
    function executePromise(_defaultArgs) {
        var _a, _b;
        return ((_b = (_a = p === null || p === void 0 ? void 0 : p.apply) === null || _a === void 0 ? void 0 : _a.call(p, undefined, _defaultArgs)) === null || _b === void 0 ? void 0 : _b.then(function (res) {
            setResult(__assign({ data: res }, SUCCESS_STATUS));
            return res;
        }).catch(function (err) {
            setResult(__assign({ data: err }, FAIL_STATUS));
            throw err;
        }));
    }
    /**
     * 重置函数
     * @description 重置状态并重新调用接口
     * @param {...Args} args - 执行参数
     * @returns {Promise<T>} Promise 执行结果
     */
    function reset() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        setResult(__assign({}, DEFAULT_STATUS));
        setType('reset');
        return executePromise(args);
    }
    /**
     * 重新加载函数
     * @description 保持当前数据，重新调用接口
     * @param {...Args} args - 执行参数
     * @returns {Promise<T>} Promise 执行结果
     */
    function reload() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        setResult(__assign(__assign({}, DEFAULT_STATUS), { data: result.data }));
        setType('reload');
        return executePromise(args);
    }
    // 组件挂载时自动执行
    useMount(function () {
        if (defaultArgs) {
            executePromise(defaultArgs);
        }
    });
    return __assign(__assign({}, result), { type: type, reset: reset, reload: reload });
};
export default use;

import { useLayoutEffect, useRef } from 'react';
import useLatestState from './useLatestState';
/**
 * useSetState hook
 * @description 带有更新成功回调函数的状态管理 Hook，返回最新的值
 * @template S - 状态类型
 * @param {S | (() => S)} initialState - 初始状态值或获取初始状态的函数
 * @returns {UseSetStateReturn<S>} 返回最新的状态引用和设置函数
 *
 * @example
 * ```tsx
 * const [valueRef, setValue] = useSetState(0);
 *
 * const handleClick = () => {
 *   setValue(
 *     prev => prev + 1,
 *     () => {
 *       console.log('状态更新完成，当前值:', valueRef.current);
 *     }
 *   );
 * };
 *
 * // 使用最新值
 * useEffect(() => {
 *   console.log('最新值:', valueRef.current);
 * }, []);
 * ```
 */
function useSetState(initialState) {
    var _a = useLatestState(initialState), valueRef = _a[0], setValue = _a[1];
    var callbackRef = useRef();
    // 状态更新后执行回调
    useLayoutEffect(function () {
        var _a;
        (_a = callbackRef === null || callbackRef === void 0 ? void 0 : callbackRef.current) === null || _a === void 0 ? void 0 : _a.call(callbackRef);
    }, [valueRef.current]);
    return [
        valueRef,
        function (_value, callback) {
            callbackRef.current = callback;
            setValue(_value);
        },
    ];
}
export default useSetState;

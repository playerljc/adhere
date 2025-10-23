import { useRef, useState } from 'react';
/**
 * useForceUpdate hook
 * @description 用于强制组件重新渲染的 React Hook
 * @returns {UseForceUpdate} 返回强制更新函数
 *
 * @example
 * ```tsx
 * const forceUpdate = useForceUpdate();
 *
 * const handleClick = () => {
 *   // 强制组件重新渲染
 *   forceUpdate();
 * };
 * ```
 */
var useForceUpdate = function () {
    var count = useRef(0);
    var _a = useState(count.current), setState = _a[1];
    return function () {
        setState(++count.current);
    };
};
export default useForceUpdate;

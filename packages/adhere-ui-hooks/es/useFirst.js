import { useRef } from 'react';
/**
 * useFirst hook
 * @description 用于跟踪组件是否为首次渲染的 React Hook
 * @returns {UseFirst} 返回当前是否为首次渲染的状态和设置函数
 *
 * @example
 * ```tsx
 * const [isFirst, setIsFirst] = useFirst();
 *
 * useEffect(() => {
 *   if (isFirst) {
 *     console.log('首次渲染');
 *     setIsFirst(false);
 *   }
 * }, [isFirst]);
 * ```
 */
var useFirst = function () {
    var isFirst = useRef(true);
    return [
        isFirst.current,
        function (first) {
            isFirst.current = first;
        },
    ];
};
export default useFirst;

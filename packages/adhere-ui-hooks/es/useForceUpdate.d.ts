import type { UseForceUpdate } from './types';
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
declare const useForceUpdate: UseForceUpdate;
export default useForceUpdate;

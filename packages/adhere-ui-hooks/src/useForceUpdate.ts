import { useRef, useState } from 'react';

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
const useForceUpdate: UseForceUpdate = () => {
  const count = useRef<number>(0);
  const [, setState] = useState<number>(count.current);

  return () => {
    setState(++count.current);
  };
};

export default useForceUpdate;

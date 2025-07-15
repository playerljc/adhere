import { useRef } from 'react';

import type { UseFirst } from './types';

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
const useFirst: UseFirst = () => {
  const isFirst = useRef<boolean>(true);

  return [
    isFirst.current,
    (first: boolean) => {
      isFirst.current = first;
    },
  ];
};

export default useFirst;

import { useState } from 'react';

import historyBack from '@baifendian/adhere-ui-historyback';

import type { HistoryObject, UseHistoryBack } from './types';

/**
 * useHistoryBack hook
 * @description 用于处理智能返回导航的 React Hook
 * @param {HistoryObject} history - History 对象
 * @param {string} initialPathname - 初始路径名，用于兄弟路径比较
 * @param {string} [routePath] - (可选) 回退路径，当无法返回时使用
 * @returns {UseHistoryBackReturn} 返回包含 back 方法的对象
 *
 * @example
 * ```tsx
 * import { useHistoryBack } from '@baifendian/adhere-ui-hooks';
 * import { useHistory, useLocation } from 'react-router-dom';
 *
 * const MyComponent = () => {
 *   const history = useHistory();
 *   const location = useLocation();
 *   
 *   // 带回退路径
 *   const { back: backWithFallback } = useHistoryBack(history, location.pathname, '/dashboard');
 *   
 *   // 不带回退路径，只执行返回操作
 *   const { back: backOnly } = useHistoryBack(history, location.pathname);
 *
 *   return (
 *     <>
 *       <button onClick={backWithFallback}>返回(带回退)</button>
 *       <button onClick={backOnly}>返回(仅返回)</button>
 *     </>
 *   );
 * };
 * ```
 */
const useHistoryBack: UseHistoryBack = (history, initialPathname, routePath) => {
  // 使用 useState 存储参数
  const [historyState] = useState<HistoryObject>(history);
  const [initialPathnameState] = useState<string>(initialPathname);
  const [routePathState] = useState<string | undefined>(routePath);

  // 返回 back 方法
  const back = () => {
    historyBack(historyState, initialPathnameState, routePathState);
  };

  return { back };
};

export default useHistoryBack;

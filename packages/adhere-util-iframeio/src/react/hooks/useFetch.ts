import { useMemo } from 'react';

import Fetch from '../../fetch';

/**
 * 使用Fetch的React Hook
 * @description 在React组件中创建Fetch实例
 * @param targetOrigin - 目标域名
 * @returns 包含fetch实例和目标域名的对象
 */
export default function useFetch(targetOrigin: string) {
  return useMemo(
    () => ({
      fetch: new Fetch(window, window.location.origin),
      targetOrigin: targetOrigin,
    }),
    [targetOrigin],
  );
}

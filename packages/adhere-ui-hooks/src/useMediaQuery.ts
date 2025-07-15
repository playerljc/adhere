import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

import AdapterScreen from '@baifendian/adhere-util-adapterscreen';

import type { UseMediaQueryReturn } from './types';

/**
 * useMediaQuery hook
 * @description 用于响应式设计的 React Hook，监听屏幕尺寸变化
 * @returns {UseMediaQueryReturn} 返回当前屏幕尺寸状态
 * 
 * @example
 * ```tsx
 * const { isPhone, isPad, isPC } = useMediaQuery();
 * 
 * if (isPhone) return <MobileLayout />;
 * if (isPad) return <TabletLayout />;
 * return <DesktopLayout />;
 * ```
 */
function useMediaQuery(): UseMediaQueryReturn {
  const [state, setState] = useState<UseMediaQueryReturn>({
    isPhone: AdapterScreen.isPhoneSize(),
    isPad: AdapterScreen.isPadSize(),
    isPC: AdapterScreen.isPCSize(),
  });

  useEffect(() => {
    /**
     * 处理窗口大小变化
     */
    const onResize = debounce(() => {
      setState({
        isPhone: AdapterScreen.isPhoneSize(),
        isPad: AdapterScreen.isPadSize(),
        isPC: AdapterScreen.isPCSize(),
      });
    }, 300);

    // 监听窗口大小变化
    window.addEventListener('resize', onResize);
    // 监听页面显示事件
    window.addEventListener('pageshow', onResize);

    // 清理事件监听器
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pageshow', onResize);
    };
  }, []);

  return state;
}

export default useMediaQuery;

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
declare function useMediaQuery(): UseMediaQueryReturn;
export default useMediaQuery;

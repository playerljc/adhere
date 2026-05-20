import React from 'react';
import type { OverlayProps, SlideLayoutHandle } from './types';
/**
 * 覆盖层滑动布局组件
 * 滑动面板覆盖在主内容之上，支持四个方向的滑动
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 覆盖层滑动布局组件
 *
 * @example
 * ```typescript
 * <Overlay
 *   direction="left"
 *   collapse={isOpen}
 *   width="300px"
 *   onAfterShow={() => console.log('展开完成')}
 * >
 *   <div>滑动面板内容</div>
 * </Overlay>
 * ```
 */
declare const Overlay: React.NamedExoticComponent<OverlayProps & React.RefAttributes<SlideLayoutHandle>>;
export default Overlay;

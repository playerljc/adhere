import React from 'react';
import type { PushProps, SlideLayoutHandle } from './types';
/**
 * 推送滑动布局组件
 * 滑动面板推动主内容移动，只支持左右方向的滑动
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 推送滑动布局组件
 *
 * @example
 * ```typescript
 * <Push
 *   direction="left"
 *   collapse={isOpen}
 *   width="300px"
 *   slide={<div>侧边栏内容</div>}
 *   master={<div>主内容</div>}
 * />
 * ```
 */
declare const Push: React.NamedExoticComponent<PushProps & React.RefAttributes<SlideLayoutHandle>>;
export default Push;

import React from 'react';
import { BackTopAnimationProps } from './types';
/**
 * 回到顶部动画组件
 *
 * 该组件提供了一个带有平滑滚动动画的回到顶部功能。
 * 当用户点击组件时，会触发平滑的滚动动画回到页面顶部。
 *
 * @example
 * ```tsx
 * <BackTopAnimation
 *   getContainer={() => document.querySelector('.scroll-container')}
 *   onTrigger={async () => {
 *     // 执行回到顶部的逻辑
 *   }}
 *   duration={500}
 *   onScrollTop={(scrollTop) => console.log('当前滚动位置:', scrollTop)}
 * />
 * ```
 *
 * @param props - 组件属性
 * @returns 回到顶部动画组件
 */
declare const BackTopAnimation: React.NamedExoticComponent<BackTopAnimationProps>;
export default BackTopAnimation;

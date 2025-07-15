import React from 'react';

import Overlay from './Overlay';
import Push from './Push';
import Revolving from './Reveal';
import type { SliderParams } from './types';

export const selectorPrefix = 'adhere-ui-slide-layout';

/**
 * 滑动动画函数
 * 使用CSS3 transform和transition实现平滑的滑动动画效果
 * 
 * @param el - 目标DOM元素
 * @param x - X轴位移值
 * @param y - Y轴位移值
 * @param z - Z轴位移值
 * @param time - 动画持续时间，默认为'0'
 * @param callback - 动画完成后的回调函数
 * 
 * @example
 * ```typescript
 * slider(element, '100px', '0', '0', '300ms', () => {
 *   console.log('动画完成');
 * });
 * ```
 */
export function slider(
  el: HTMLElement,
  x: string,
  y: string,
  z: string,
  time: string | number = '0',
  callback?: () => void,
): void {
  if (!el) {
    console.warn('slider: 目标元素不存在');
    return;
  }

  // 执行回调函数
  if (callback) {
    callback();
  }

  // 设置CSS3 transform属性
  const transformValue = `translate3d(${x},${y},${z})`;
  el.style.transform = transformValue;
  el.style.webkitTransform = transformValue;

  // 设置CSS3 transition属性
  const transitionValue = `all ${time} ease`;
  el.style.transition = transitionValue;
  el.style.webkitTransition = transitionValue;
}

/**
 * 创建遮罩层元素
 * 生成一个可点击的遮罩层，用于关闭滑动面板
 * 
 * @param zIndex - 遮罩层的层级索引
 * @param closeCallback - 点击遮罩层时的关闭回调函数
 * @returns 创建的遮罩层DOM元素
 * 
 * @example
 * ```typescript
 * const mask = createMask(9999, () => {
 *   console.log('点击遮罩层关闭');
 * });
 * document.body.appendChild(mask);
 * ```
 */
export function createMask(zIndex: number | string, closeCallback: () => void): HTMLDivElement {
  // 创建容器元素
  const container = document.createElement('div');
  container.innerHTML = `<div class='${selectorPrefix}-mask'></div>`;

  // 获取遮罩层元素
  const maskEl = container.firstElementChild as HTMLDivElement;
  
  if (!maskEl) {
    throw new Error('createMask: 无法创建遮罩层元素');
  }

  // 设置遮罩层层级
  const maskZIndex = typeof zIndex === 'number' ? `${zIndex - 1}` : zIndex;
  maskEl.style.zIndex = maskZIndex;

  // 添加点击事件监听器
  maskEl.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeCallback();
  });

  return maskEl;
}

/**
 * 滑动布局组件集合
 * 提供三种不同的滑动布局模式：
 * - Overlay: 覆盖层模式，滑动面板覆盖在主内容之上
 * - Push: 推送模式，滑动面板推动主内容移动
 * - Revolving: 揭示模式，滑动面板揭示主内容
 */
const SlideLayout = {
  /** 覆盖层滑动布局组件 */
  Overlay,
  /** 推送滑动布局组件 */
  Push,
  /** 揭示滑动布局组件 */
  Revolving,
};

export default SlideLayout;

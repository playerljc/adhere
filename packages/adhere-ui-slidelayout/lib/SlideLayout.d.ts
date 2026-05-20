import React from 'react';
export declare const selectorPrefix = "adhere-ui-slide-layout";
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
export declare function slider(el: HTMLElement, x: string, y: string, z: string, time?: string | number, callback?: () => void): void;
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
export declare function createMask(zIndex: number | string, closeCallback: () => void): HTMLDivElement;
/**
 * 滑动布局组件集合
 * 提供三种不同的滑动布局模式：
 * - Overlay: 覆盖层模式，滑动面板覆盖在主内容之上
 * - Push: 推送模式，滑动面板推动主内容移动
 * - Revolving: 揭示模式，滑动面板揭示主内容
 */
declare const SlideLayout: {
    /** 覆盖层滑动布局组件 */
    Overlay: React.NamedExoticComponent<import("./types").OverlayProps & React.RefAttributes<import("./types").SlideLayoutHandle>>;
    /** 推送滑动布局组件 */
    Push: React.NamedExoticComponent<import("./types").PushProps & React.RefAttributes<import("./types").SlideLayoutHandle>>;
    /** 揭示滑动布局组件 */
    Revolving: React.NamedExoticComponent<import("./types").RevealProps & React.RefAttributes<import("./types").SlideLayoutHandle>>;
};
export default SlideLayout;

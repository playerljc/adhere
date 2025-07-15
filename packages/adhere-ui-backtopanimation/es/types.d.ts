import type { CSSProperties, RefObject } from 'react';
/**
 * 回到顶部动画组件的属性接口
 * @interface BackTopAnimationProps
 */
export interface BackTopAnimationProps {
    /** 自定义 CSS 类名 */
    className?: string;
    /** 自定义样式对象 */
    style?: CSSProperties;
    /** 组件的 z-index 层级，默认为 ResourceNormalMaxZIndex */
    zIndex?: string | number;
    /** 滚动动画持续时间（毫秒），默认 300ms */
    duration?: number;
    /** 获取滚动容器的函数 */
    getContainer: () => HTMLElement | null | undefined;
    /** 触发回到顶部时的回调函数，返回 Promise */
    onTrigger: () => Promise<void>;
    /** 滚动过程中的回调函数，参数为当前滚动位置 */
    onScrollTop?: (scrollTopVal: number) => void;
}
/**
 * 组件内部状态接口
 * @interface BackTopAnimationState
 */
export interface BackTopAnimationState {
    /** 组件包装器引用 */
    wrapperRef: RefObject<HTMLDivElement>;
    /** 遮罩层引用 */
    maskRef: RefObject<HTMLDivElement>;
    /** 是否正在执行动画的标志 */
    isAnimating: boolean;
}
/**
 * 滚动动画配置接口
 * @interface ScrollAnimationConfig
 */
export interface ScrollAnimationConfig {
    /** 起始滚动位置 */
    startTop: number;
    /** 目标滚动位置 */
    targetTop: number;
    /** 当前滚动位置 */
    currentTop: number;
    /** 滚动步长 */
    step: number;
    /** 动画持续时间 */
    duration: number;
}

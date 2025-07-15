import type { CSSProperties, ReactElement, ReactNode } from 'react';
import React from 'react';
/**
 * PullRefresh 组件的引用句柄接口
 * @interface PullRefreshRefHandle
 */
export interface PullRefreshRefHandle {
    /** 触发刷新操作 */
    refresh: () => void;
    /** 重置组件状态 */
    reset: () => void;
    /** 重置更新时间
     * @param updateTime - 新的更新时间戳（毫秒）
     * @returns Promise<void>
     */
    resetUpdateTime: (updateTime: number) => Promise<void>;
    /** 获取当前更新时间
     * @returns 当前更新时间戳（毫秒）
     */
    getUpdateTime: () => number;
}
/**
 * 自定义触摸事件类型
 */
export interface CustomTouchEvent {
    changedTouches?: Array<{
        pageY: number;
    }>;
    pageY: number;
    preventDefault: () => void;
    target: HTMLElement;
}
/**
 * 自定义滚动事件类型
 */
export interface CustomScrollEvent {
    target: HTMLElement;
}
/**
 * PullRefresh 组件的属性接口
 * @interface PullRefreshProps
 */
export interface PullRefreshProps {
    /** 根容器的 CSS 类名 */
    className?: string;
    /** 根容器的样式 */
    style?: CSSProperties;
    /** 滚动容器的 CSS 类名 */
    scrollClassName?: string;
    /** 滚动容器的样式 */
    scrollStyle?: CSSProperties;
    /** 下拉刷新的触发高度（像素） */
    pullHeight?: number;
    /** 是否显示更新时间 */
    isShowUpdateTime?: boolean;
    /** 更新时间戳（毫秒） */
    updateTime?: number;
    /** 更新时间的格式化字符串 */
    updateTimeFormat?: string;
    /** 自定义图标渲染函数 */
    renderIcon?: () => ReactNode;
    /** 自定义下拉提示文本渲染函数 */
    renderLabel?: () => ReactNode;
    /** 自定义可刷新提示文本渲染函数 */
    renderCanLabel?: () => ReactNode;
    /** 自定义加载动画渲染函数 */
    renderLoadingAnimation?: () => ReactElement | string;
    /** 开始下拉时的回调函数 */
    onPullStart?: () => void;
    /** 达到可刷新状态时的回调函数 */
    onPullCanRefresh?: () => void;
    /** 触发刷新时的回调函数 */
    onPullRefresh?: () => void;
    /** 下拉到底部时的回调函数 */
    onPullBottom?: () => void;
    /** 下拉回弹时的回调函数 */
    onPullRebound?: () => void;
    /** 子元素 */
    children?: ReactNode;
}
/**
 * 组件内部状态接口
 */
export interface PullRefreshState {
    /** 是否可以刷新 */
    isCanRef: boolean;
    /** 上次更新时间戳 */
    preUpdateTime: number;
}
/**
 * 组件内部引用接口
 */
export interface PullRefreshRefs {
    /** 根容器元素 */
    rootEl: React.RefObject<HTMLDivElement>;
    /** 触发器容器元素 */
    el: React.RefObject<HTMLDivElement>;
    /** 滚动容器元素 */
    scrollEl: React.RefObject<HTMLDivElement>;
    /** 图标元素 */
    iconEl: React.RefObject<HTMLDivElement>;
    /** 刷新动画容器元素 */
    refreshEl: React.RefObject<HTMLDivElement>;
    /** 触发器内部元素 */
    triggerInnerEl: React.RefObject<HTMLDivElement>;
    /** 遮罩层元素 */
    maskEl: React.RefObject<HTMLDivElement>;
}

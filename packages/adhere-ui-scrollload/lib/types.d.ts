import { NamedExoticComponent, PropsWithoutRef, RefAttributes, ReactNode } from 'react';
import type { CSSProperties } from 'react';
/**
 * 滚动加载组件的状态常量
 */
export declare const SCROLL_LOAD_STATUS: {
    /** 空数据状态 */
    readonly EMPTY: "empty";
    /** 错误状态 */
    readonly ERROR: "error";
    /** 正常状态 */
    readonly NORMAL: "normal";
    /** 隐藏空数据状态 */
    readonly HIDE_EMPTY: "hide_empty";
};
/**
 * 滚动加载状态类型
 */
export type ScrollLoadStatus = typeof SCROLL_LOAD_STATUS[keyof typeof SCROLL_LOAD_STATUS];
/**
 * 滚动加载组件的引用句柄接口
 */
export interface ScrollLoadRefHandle {
    /**
     * 隐藏所有状态显示（加载中、空数据、错误）
     */
    hideAll: () => void;
    /**
     * 获取滚动容器元素
     * @returns 滚动容器元素，如果不存在则返回 null
     */
    getScrollContainer: () => HTMLElement | null;
}
/**
 * 滚动加载组件的属性接口
 */
export interface ScrollLoadProps {
    /** 容器的 CSS 类名 */
    className?: string;
    /** 容器的内联样式 */
    style?: CSSProperties;
    /** 获取滚动容器的函数，如果不提供则使用组件自身作为滚动容器 */
    getScrollContainer?: () => HTMLElement;
    /** 加载状态的 CSS 类名 */
    loadClassName?: string;
    /** 加载状态的内联样式 */
    loadStyle?: CSSProperties;
    /** 空数据状态的 CSS 类名 */
    emptyClassName?: string;
    /** 空数据状态的内联样式 */
    emptyStyle?: CSSProperties;
    /** 错误状态的 CSS 类名 */
    errorClassName?: string;
    /** 错误状态的内联样式 */
    errorStyle?: CSSProperties;
    /** 是否禁用滚动加载功能 */
    disabled?: boolean;
    /** 触发加载的距离阈值（像素），默认为 50 */
    distance?: number;
    /** 滚动到底部时的回调函数
     * @param handle 状态设置函数，用于设置组件状态
     */
    onScrollBottom?: (handle?: (status?: ScrollLoadStatus) => void) => void;
    /** 空数据状态点击事件回调 */
    onEmptyClick?: () => void;
    /** 错误状态点击事件回调 */
    onErrorClick?: () => void;
    /** 自定义加载状态渲染函数 */
    renderLoading?: () => ReactNode;
    /** 自定义空数据状态渲染函数 */
    renderEmpty?: () => ReactNode;
    /** 自定义错误状态渲染函数 */
    renderError?: () => ReactNode;
    /** 子元素 */
    children?: ReactNode;
}
/**
 * 滚动加载组件类型
 */
export type ScrollLoadComponent = NamedExoticComponent<PropsWithoutRef<ScrollLoadProps> & RefAttributes<ScrollLoadRefHandle>> & {
    /** 空数据状态常量 */
    EMPTY: typeof SCROLL_LOAD_STATUS.EMPTY;
    /** 错误状态常量 */
    ERROR: typeof SCROLL_LOAD_STATUS.ERROR;
    /** 正常状态常量 */
    NORMAL: typeof SCROLL_LOAD_STATUS.NORMAL;
    /** 隐藏空数据状态常量 */
    HIDE_EMPTY: typeof SCROLL_LOAD_STATUS.HIDE_EMPTY;
};

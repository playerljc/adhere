import type { CSSProperties, ReactNode } from 'react';
/**
 * Surnames 组件的引用句柄接口
 * @interface SurnamesRefHandle
 */
export interface SurnamesRefHandle {
    /**
     * 滚动到指定索引位置（带动画效果）
     * @param name - 目标索引名称
     * @param duration - 动画持续时间（毫秒）
     */
    scrollToAnimation: (name?: string, duration?: number) => void;
    /**
     * 直接滚动到指定索引位置（无动画）
     * @param name - 目标索引名称
     */
    scrollTo: (name?: string) => void;
}
/**
 * Surnames 组件的主要属性接口
 * @interface SurnamesProps
 */
export interface SurnamesProps {
    /** 根容器的 CSS 类名 */
    className?: string;
    /** 根容器的内联样式 */
    style?: CSSProperties;
    /** 索引容器的 CSS 类名 */
    indexClassName?: string;
    /** 索引容器的内联样式 */
    indexStyle?: CSSProperties;
    /** 内容容器的 CSS 类名 */
    contentClassName?: string;
    /** 内容容器的内联样式 */
    contentStyle?: CSSProperties;
    /** 索引位置：'top' | 'right' | 'bottom' | 'left' */
    position?: 'top' | 'right' | 'bottom' | 'left';
    /** 索引配置数组 */
    indexes?: IndexConfig[];
    /** 数据源 */
    dataSource?: Record[];
    /** 滚动前的回调函数 */
    onBeforeScroll?: (name?: string) => void;
    /** 滚动后的回调函数 */
    onScroll?: (name?: string) => void;
}
/**
 * 索引配置接口
 * @interface IndexConfig
 */
export interface IndexConfig {
    /** 索引标识符 */
    index?: string;
    /** 自定义渲染索引项的函数 */
    renderIndex?: (index: IndexConfig) => ReactNode;
    /** 自定义渲染标题的函数 */
    renderTitle?: (record: Record) => ReactNode;
    /** 自定义渲染内容的函数 */
    renderContent?: (record: Record) => ReactNode;
}
/**
 * 数据记录接口
 * @interface Record
 */
export interface Record {
    /** 索引标识符 */
    index?: string;
    /** 数据数组 */
    data?: object[];
}
/**
 * 位置信息接口
 * @interface Position
 */
export interface Position {
    /** 索引名称 */
    name?: string;
    /** 距离视口顶部的距离 */
    top?: number;
    /** 距离视口底部的距离 */
    bottom?: number;
    /** 距离视口左侧的距离 */
    left?: number;
    /** 距离视口右侧的距离 */
    right?: number;
    /** 距离父容器顶部的距离 */
    offsetTop?: number;
    /** 距离父容器左侧的距离 */
    offsetLeft?: number;
    /** 元素宽度 */
    width?: number;
    /** 元素高度 */
    height?: number;
}
/**
 * 方向类型
 */
export type Direction = 'vertical' | 'horizontal';
/**
 * 事件处理函数类型
 */
export type EventHandler = (e: Event) => void;
/**
 * 触摸事件处理函数类型
 */
export type TouchEventHandler = (e: TouchEvent) => void;
/**
 * 鼠标事件处理函数类型
 */
export type MouseEventHandler = (e: MouseEvent) => void;

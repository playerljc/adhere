import type { ToastHandler } from 'antd-mobile/es/components/toast/methods';
/**
 * 全局指示器接口定义
 * 提供显示和隐藏全局加载指示器的功能
 */
export interface GlobalIndicator {
    /**
     * 显示全局加载指示器
     * @param parent - 指示器的父容器元素，默认为 document.body
     * @param text - 显示的文本内容，默认为空字符串
     * @returns ToastHandler - 返回 Toast 处理器，用于后续隐藏操作
     */
    show(parent?: HTMLElement, text?: string): ToastHandler;
    /**
     * 隐藏指定的全局指示器
     * @param handler - Toast 处理器，由 show 方法返回
     */
    hide(handler: ToastHandler): void;
    /**
     * 隐藏所有全局指示器
     */
    hideAll(): void;
}
/**
 * 全局指示器配置选项
 */
export interface GlobalIndicatorOptions {
    /** 显示的文本内容 */
    text?: string;
    /** 父容器元素 */
    parent?: HTMLElement;
    /** 是否可点击遮罩关闭 */
    maskClickable?: boolean;
    /** 指示器图标类型 */
    icon?: 'loading' | 'success' | 'fail';
    /** 显示时长（毫秒），0 表示不自动关闭 */
    duration?: number;
}

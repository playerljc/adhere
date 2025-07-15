import type { ToastProps } from 'antd-mobile/es/components/toast/toast';
import { CSSProperties } from 'react';
/**
 * Spin 组件的属性接口
 * 基于 antd-mobile 的 Toast 组件，但移除了不相关的属性并添加了自定义属性
 */
export interface SpinProps extends Omit<ToastProps, 'getContainer' | 'content' | 'visible' | 'duration'> {
    /** 自定义 CSS 类名 */
    className?: string;
    /** 自定义内联样式 */
    style?: CSSProperties;
    /** 是否显示加载状态 */
    spinning?: boolean;
    /** 加载提示文本，会覆盖默认的加载文本 */
    text?: ToastProps['content'];
    /** 组件的 z-index 层级，默认为 999 */
    zIndex?: number;
}

/**
 * DelConfirm 组件的类型定义
 * @module types
 */
import type { CSSProperties, NamedExoticComponent, ReactNode } from 'react';
import type { ConfirmArgv } from '@baifendian/adhere-ui-messagedialog/lib/types';
/**
 * DelConfirm 组件的属性接口
 * @interface DelConfirmProps
 */
export interface DelConfirmProps {
    /** 自定义CSS类名 */
    className?: string;
    /** 自定义内联样式 */
    style?: CSSProperties;
    /** 对话框的z-index层级 */
    zIndex?: number;
    /** 确认删除成功后的回调函数，必须返回Promise */
    success: () => Promise<void>;
    /** 子元素，通常是触发删除确认的按钮或链接 */
    children?: ReactNode;
}
/**
 * DelConfirm.open 方法的参数接口
 * @interface OpenFunction
 * @extends {Omit<ConfirmArgv, 'onSuccess'>}
 */
export interface OpenFunction extends Omit<ConfirmArgv, 'onSuccess'> {
    /** 确认删除成功后的回调函数，可选 */
    success?: () => Promise<void>;
}
/**
 * DelConfirm 组件的完整类型定义
 * 包含组件本身和静态方法
 * @type {DelConfirmComponent}
 */
export type DelConfirmComponent = NamedExoticComponent<DelConfirmProps> & {
    /**
     * 静态方法：打开删除确认对话框
     * @param {OpenFunction} arg - 对话框配置参数
     */
    open: (arg: OpenFunction) => void;
};

import type { ButtonProps } from 'antd';
import type { FormInstance } from 'antd/es/form';
import type { ModalProps } from 'antd/lib/modal/interface';
import type { FRProps } from 'form-render/lib/type';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
/**
 * 警告对话框参数接口
 */
export interface AlertArgv {
    /** 对话框标题 */
    title?: string | null | ReactElement;
    /** 对话框内容文本 */
    text?: string | null | ReactElement;
    /** 对话框宽度 */
    width?: number;
    /** 对话框层级 */
    zIndex?: number;
    /** 国际化语言 */
    local?: string;
    /** 图标元素 */
    icon?: ReactElement | null;
}
/**
 * 确认对话框参数接口
 */
export interface ConfirmArgv extends AlertArgv {
    /** 确认回调函数 */
    onSuccess?: (params?: any) => Promise<void>;
}
/**
 * 输入提示对话框参数接口
 */
export interface PromptArgv {
    /** 对话框标题 */
    title?: string | null | ReactElement;
    /** 表单配置 */
    config: PromptFormProps;
    /** 表单布局 */
    /** 对话框宽度 */
    width?: number;
    /** 对话框层级 */
    zIndex?: number;
    /** 国际化语言 */
    local?: string;
    /** 确认回调函数 */
    onSuccess?: (value: any) => Promise<void>;
}
/**
 * 模态对话框参数接口
 */
export interface ModalArgv {
    /** 子元素 */
    children?: ReactNode;
    /** 是否显示默认关闭按钮 */
    defaultCloseBtn?: boolean;
    /** 国际化语言 */
    local?: string;
    /** 模态框配置 */
    config?: ModalProps;
}
/**
 * 模态对话框组件属性接口
 */
export interface ModalDialogProps {
    /** 是否打开 */
    open: boolean;
    /** 模态框配置 */
    config: ModalProps;
    /** 是否显示关闭按钮 */
    closeBtn: boolean;
    /** 关闭回调函数 */
    close?: () => void;
    /** 子元素 */
    children?: ReactNode;
}
/**
 * 触发提示组件属性接口
 */
export type TriggerPromptProps = Omit<TriggerProps, 'footer' | 'modalConfig'> & {
    /** 提交回调函数 */
    onSubmit?: () => Promise<any>;
    /** 模态框配置 */
    modalConfig?: Omit<ModalArgv, 'children' | 'defaultCloseBtn'>;
    /** 确认按钮文本 */
    okText?: string;
};
/**
 * 触发组件属性接口
 */
export interface TriggerProps {
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
    /** 子元素 */
    children?: ReactNode;
    /** 值 */
    value?: any;
    /** 值变化回调 */
    onChange?: (params?: any) => void;
    /** 渲染触发器函数 */
    renderTrigger?: () => ReactNode;
    /** 是否最大化 */
    maximized?: boolean;
    /** 是否禁用 */
    disabled?: boolean;
    /** 操作按钮数组 */
    actions?: Array<Omit<ButtonProps, 'onClick'> & {
        /** 按钮唯一标识 */
        key: string | number;
        /** 点击回调函数 */
        onClick?: () => Promise<any>;
    }>;
    /** 模态框配置 */
    modalConfig?: Omit<Omit<ModalArgv, 'config'> & {
        config?: Omit<ModalProps, 'footer'>;
    }, 'children' | 'defaultCloseBtn'>;
    /** 是否显示默认关闭按钮 */
    defaultCloseBtn?: boolean;
    /** 触发前回调函数 */
    beforeTrigger?: () => Promise<void>;
}
/**
 * 提交按钮属性接口
 */
export type SubmitButtonProps = Omit<ButtonProps, 'onClick'> & {
    /** 点击回调函数 */
    onClick: (e?: React.MouseEvent<HTMLElement>) => Promise<void>;
};
/**
 * 触发提示组件句柄接口
 */
export interface TriggerPromptHandle {
    /** 关闭方法 */
    close: () => void;
}
/**
 * 触发组件句柄接口
 */
export interface TriggerHandle {
    /** 关闭方法 */
    close: () => void;
}
/**
 * 对话框句柄接口
 */
export interface DialogHandle {
    /** DOM元素 */
    el: HTMLElement;
    /** 关闭方法 */
    close: () => void;
    /** 设置配置方法 */
    setConfig: (callback: (draft: any) => void, children?: ReactNode) => void;
    /** 更新内容方法 */
    update: (children?: ReactNode) => void;
}
export type PromptFormProps = Omit<FRProps, 'form'>;
export type PromptFormRefHandle = {
    validateFields: FormInstance['validateFields'];
};

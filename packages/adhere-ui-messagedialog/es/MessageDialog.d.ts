import React, { ReactNode } from 'react';
import type { AlertArgv, ConfirmArgv, ModalArgv, PromptArgv, TriggerPromptHandle, TriggerHandle, DialogHandle } from './types';
/**
 * MessageDialog工厂类
 * 提供各种类型的弹窗功能，包括确认框、警告框、输入框等
 */
declare const MessageDialogFactory: {
    /**
     * 设置自定义渲染包装器
     * @param _renderToWrapper - 渲染包装器函数
     */
    setRenderToWrapper(_renderToWrapper: (children: () => ReactNode) => ReactNode): void;
    /**
     * 创建确认对话框
     * @param params - 确认对话框参数
     * @param params.title - 对话框标题
     * @param params.text - 对话框内容文本
     * @param params.width - 对话框宽度
     * @param params.zIndex - 对话框层级
     * @param params.local - 国际化语言
     * @param params.icon - 图标元素
     * @param params.onSuccess - 确认回调函数
     * @returns 对话框句柄
     */
    Confirm({ title, text, width, zIndex, local, icon, onSuccess, }: ConfirmArgv): DialogHandle | void;
    /**
     * 创建警告对话框
     * @param params - 警告对话框参数
     * @param params.title - 对话框标题
     * @param params.text - 对话框内容文本
     * @param params.width - 对话框宽度
     * @param params.zIndex - 对话框层级
     * @param params.local - 国际化语言
     * @param params.icon - 图标元素
     * @returns 对话框句柄
     */
    Alert({ title, text, width, zIndex, local, icon, }: AlertArgv): DialogHandle | void;
    /**
     * 创建输入提示对话框
     * @param params - 输入提示对话框参数
     * @param params.title - 对话框标题
     * @param params.config - 表单配置
     * @param params.layout - 表单布局
     * @param params.width - 对话框宽度
     * @param params.zIndex - 对话框层级
     * @param params.local - 国际化语言
     * @param params.onSuccess - 确认回调函数
     * @returns 对话框句柄
     */
    Prompt({ title, config, layout, width, zIndex, local, onSuccess, }: PromptArgv): DialogHandle | void;
    /**
     * 创建输入框提示对话框
     * @param params - 输入框提示对话框参数
     * @returns 对话框句柄
     */
    InputPrompt({ config, ...params }: PromptArgv): DialogHandle | void;
    /**
     * 创建文本域提示对话框
     * @param params - 文本域提示对话框参数
     * @returns 对话框句柄
     */
    TextAreaPrompt({ config, ...params }: PromptArgv): DialogHandle | void;
    /**
     * 创建密码输入提示对话框
     * @param params - 密码输入提示对话框参数
     * @returns 对话框句柄
     */
    PassWordPrompt({ config, ...params }: PromptArgv): DialogHandle | void;
    /**
     * 创建数字输入提示对话框
     * @param params - 数字输入提示对话框参数
     * @returns 对话框句柄
     */
    NumberPrompt({ config, ...params }: PromptArgv): DialogHandle | void;
    /**
     * 创建模态对话框
     * @param params - 模态对话框参数
     * @param params.config - 模态框配置
     * @param params.children - 子元素
     * @param params.defaultCloseBtn - 是否显示默认关闭按钮
     * @returns 对话框句柄
     */
    Modal({ config, children, defaultCloseBtn }: ModalArgv): DialogHandle | void;
    /**
     * 创建最大化模态对话框
     * @param params - 最大化模态对话框参数
     * @param params.config - 模态框配置
     * @param params.children - 子元素
     * @param params.defaultCloseBtn - 是否显示默认关闭按钮
     * @returns 对话框句柄
     */
    MaximizeModal({ config, children, defaultCloseBtn }: ModalArgv): DialogHandle | void;
    /**
     * 关闭指定的对话框
     * @param el - 对话框DOM元素
     */
    close(el: HTMLElement): void;
    /**
     * Trigger组件
     */
    Trigger: React.ForwardRefExoticComponent<import("./types").TriggerProps & React.RefAttributes<TriggerHandle>>;
    /**
     * TriggerPrompt组件
     */
    TriggerPrompt: React.ForwardRefExoticComponent<Omit<import("./types").TriggerProps, "footer" | "modalConfig"> & {
        onSubmit?: () => Promise<any>;
        modalConfig?: Omit<ModalArgv, "children" | "defaultCloseBtn">;
        okText?: string;
    } & React.RefAttributes<TriggerPromptHandle>>;
    /**
     * 设置是否允许多实例共存
     * @param allow - 是否允许
     */
    allowMultipleInstances: (allow: boolean) => void;
};
export default MessageDialogFactory;

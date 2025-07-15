import React from 'react';
import type { TriggerPromptHandle } from './types';
/**
 * TriggerPrompt组件
 * 带确认按钮的触发器组件
 *
 * @param props - 组件属性
 * @param props.onSubmit - 提交回调函数
 * @param props.modalConfig - 模态框配置
 * @param props.okText - 确认按钮文本
 * @param ref - 组件引用
 * @returns 触发器提示组件
 */
declare const TriggerPrompt: React.ForwardRefExoticComponent<Omit<import("./types").TriggerProps, "footer" | "modalConfig"> & {
    onSubmit?: () => Promise<any>;
    modalConfig?: Omit<import("./types").ModalArgv, "children" | "defaultCloseBtn">;
    okText?: string;
} & React.RefAttributes<TriggerPromptHandle>>;
export default TriggerPrompt;

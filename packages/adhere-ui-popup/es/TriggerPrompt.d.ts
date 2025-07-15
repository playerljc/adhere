import React from 'react';
import type { TriggerPromptHandle } from './types';
/**
 * TriggerPrompt组件
 * @description 带确认按钮的弹窗触发器组件
 * @param props - 组件属性
 * @param ref - 组件引用
 * @constructor
 */
declare const TriggerPrompt: React.ForwardRefExoticComponent<Omit<import("./types").TriggerProps, "actions"> & {
    isShowCloseAction?: boolean;
    onSubmit?: () => Promise<any>;
    okText?: string;
} & React.RefAttributes<TriggerPromptHandle>>;
export default TriggerPrompt;

import React from 'react';
import type { TriggerPromptHandle } from './types';
/**
 * TriggerPrompt
 * @param className
 * @param {ModalArgv} modalConfig MessageDialog的配置
 * @param {() => Promise<any>} onSubmit 点击确定按钮，在里面处理实际业务最后resolve的值为value
 * @param {ReactNode} okText 确定按钮文本
 * @constructor
 */
declare const TriggerPrompt: React.ForwardRefExoticComponent<Omit<import("./types").TriggerProps, "footer" | "modalConfig"> & {
    onSubmit?: (() => Promise<any>) | undefined;
    modalConfig?: Omit<import("./types").ModalArgv, "children" | "defaultCloseBtn"> | undefined;
    okText?: string | undefined;
} & React.RefAttributes<TriggerPromptHandle>>;
export default TriggerPrompt;

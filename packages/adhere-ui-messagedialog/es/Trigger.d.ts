import React from 'react';
import type { TriggerHandle, TriggerProps } from './types';
/**
 * Trigger
 * @param className
 * @param style
 * @param {any} value 输入值
 * @param {(params?: any) => void} onChange 输出值
 * @param {ReactNode} children 弹出的UI 默认有value属性
 * @param {() => ReactNode} renderTrigger 触发的UI
 * @param {ModalArgv} modalConfig MessageDialog的配置
 * @param {() => Promise<any>} onSubmit 点击确定按钮，在里面处理实际业务最后resolve的值为value
 * @constructor
 */
declare const Trigger: React.ForwardRefExoticComponent<TriggerProps & React.RefAttributes<TriggerHandle>>;
export default Trigger;

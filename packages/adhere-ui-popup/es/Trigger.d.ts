import React from 'react';
import type { TriggerHandle, TriggerProps } from './types';
/**
 * Trigger组件
 * @description 弹窗触发器组件，用于触发弹窗显示
 * @param props - 组件属性
 * @param ref - 组件引用
 * @constructor
 */
declare const Trigger: React.ForwardRefExoticComponent<TriggerProps & React.RefAttributes<TriggerHandle>>;
export default Trigger;

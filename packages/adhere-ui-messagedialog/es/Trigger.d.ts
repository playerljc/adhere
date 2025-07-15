import React from 'react';
import type { TriggerHandle, TriggerProps } from './types';
/**
 * Trigger组件
 * 用于触发模态对话框的触发器组件
 *
 * @param props - 组件属性
 * @param props.className - 自定义类名
 * @param props.style - 自定义样式
 * @param props.value - 输入值
 * @param props.onChange - 值变化回调函数
 * @param props.children - 弹出的UI内容，默认有value属性
 * @param props.renderTrigger - 渲染触发器的函数
 * @param props.modalConfig - MessageDialog的配置
 * @param props.disabled - 是否禁用
 * @param props.actions - 操作按钮配置数组
 * @param props.maximized - 是否最大化显示
 * @param props.defaultCloseBtn - 是否显示默认关闭按钮
 * @param props.beforeTrigger - 触发前的回调函数
 * @param ref - 组件引用
 * @returns 触发器组件
 */
declare const Trigger: React.ForwardRefExoticComponent<TriggerProps & React.RefAttributes<TriggerHandle>>;
export default Trigger;

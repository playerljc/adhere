import React from 'react';
import type { FormItemProps } from '../types';
/**
 * CheckboxWrapperFormItmProps
 * @description 复选框表单项包装组件的属性类型定义
 * 继承 FormItemProps 的所有属性，但会自动设置 valuePropName="checked"
 */
export interface CheckboxWrapperFormItmProps extends Omit<FormItemProps, 'valuePropName'> {
}
/**
 * CheckboxWrapperFormItm
 * @description 为复选框（Checkbox/Switch）表单项提供统一封装的包装组件
 * 该组件会自动设置 valuePropName="checked"，并对 required 规则进行特殊处理
 *
 * @example
 * ```tsx
 * <CheckboxWrapperFormItm
 *   name="agree"
 *   rules={[{ required: true, message: '请勾选同意协议' }]}
 * >
 *   <Checkbox>我已阅读并同意用户协议</Checkbox>
 * </CheckboxWrapperFormItm>
 * ```
 *
 * @param props - 组件属性
 * @returns Form.Item 包装的复选框元素
 */
declare const CheckboxWrapperFormItm: React.FC<CheckboxWrapperFormItmProps>;
export default CheckboxWrapperFormItm;

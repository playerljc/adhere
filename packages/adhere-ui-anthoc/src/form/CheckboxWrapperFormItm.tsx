import type { FormRule } from 'antd';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { FormItemProps } from '../types';
import Form from './Form';

/**
 * CheckboxWrapperFormItmProps
 * @description 复选框表单项包装组件的属性类型定义
 * 继承 FormItemProps 的所有属性，但会自动设置 valuePropName="checked"
 */
export interface CheckboxWrapperFormItmProps extends Omit<FormItemProps, 'valuePropName'> {}

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
const CheckboxWrapperFormItm: React.FC<CheckboxWrapperFormItmProps> = ({ rules = [], ...rest }) => {
  // 查找 rules 中是否包含 required 规则
  const requiredRuleIndex = rules.findIndex((item) => {
    // 支持对象类型的规则和函数类型的规则
    return typeof item === 'object' && 'required' in item && item.required;
  });
  const hasRequiredRule = requiredRuleIndex !== -1;

  // 构建最终的校验规则
  // 只有当存在 required 规则时，才添加自定义 validator
  const finalRules: FormRule[] = hasRequiredRule
    ? [
        {
          validator: (_, value) => {
            const requiredRule = rules[requiredRuleIndex];
            // 获取错误提示信息
            const message =
              typeof requiredRule === 'object' && 'message' in requiredRule
                ? requiredRule.message
                : Intl.get('PLEASE_SELECT');

            // 如果值为 true 则校验通过，否则返回错误信息
            return value ? Promise.resolve() : Promise.reject(message);
          },
        },
        // 移除原始的 required 规则，避免重复校验
        ...rules.toSpliced(requiredRuleIndex, 1),
      ]
    : rules;

  return <Form.Item valuePropName="checked" rules={finalRules} {...rest} />;
};

export default CheckboxWrapperFormItm;

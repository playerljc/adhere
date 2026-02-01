import { useDebounceFn } from 'ahooks';
import type { ButtonProps, FormInstance } from 'antd';
import { Form } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import type { FC } from 'react';

import SubmitButton from '../submit-button';

export interface InternalSubmitButtonProps extends Omit<ButtonProps, 'form'> {
  form: FormInstance;
}

/**
 * InternalSubmitButton
 * @description 带表单校验状态的内部提交按钮组件
 */
const InternalSubmitButton: FC<InternalSubmitButtonProps> = ({ form, disabled, ...restProps }) => {
  const [submittable, setSubmittable] = useState<boolean>(false);

  // 监听表单字段变化
  const values = Form.useWatch([], { form, preserve: true });

  /**
   * 校验表单字段
   * @description 抽取的表单校验逻辑
   */
  const validateFormFields = useCallback(() => {
    // console.log('submitButton validate', values);

    form
      .validateFields({ validateOnly: true, recursive: true })
      .then(() => {
        // console.log('submitButton validate then');
        setSubmittable(true);
      })
      .catch(() => {
        // console.log('submitButton validate catch');
        setSubmittable(false);
      });
  }, [form, values]);

  // 防抖处理的校验函数，延迟 300ms 执行
  const { run: debouncedValidate } = useDebounceFn(validateFormFields, {
    wait: 300,
  });

  useEffect(() => {
    // 统一使用防抖处理，避免连续调用
    debouncedValidate();
  }, [form, values, debouncedValidate]);

  // console.log('disabled,submittable', disabled, submittable);

  return (
    <SubmitButton {...restProps} disabled={disabled !== undefined ? disabled : !submittable} />
  );
};

export default InternalSubmitButton;

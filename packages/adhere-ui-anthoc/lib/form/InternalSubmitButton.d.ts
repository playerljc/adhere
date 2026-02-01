import type { ButtonProps, FormInstance } from 'antd';
import type { FC } from 'react';
export interface InternalSubmitButtonProps extends Omit<ButtonProps, 'form'> {
    form: FormInstance;
}
/**
 * InternalSubmitButton
 * @description 带表单校验状态的内部提交按钮组件
 */
declare const InternalSubmitButton: FC<InternalSubmitButtonProps>;
export default InternalSubmitButton;

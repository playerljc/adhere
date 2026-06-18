import React, { type CSSProperties, type ReactNode } from 'react';
import type { DesignValue, FieldProps, FormItemProps, StyleProps } from '../types';
import { type DesignFormInjectedProps } from './FormItemBridge';
export declare function LabelDesign({ formItemProps, styleProps, className, }: {
    formItemProps?: FormItemProps;
    styleProps?: StyleProps;
    className?: string;
}): React.JSX.Element;
export declare function ValueDesign({ value: { id, type, props: { formItemProps, fieldProps, styleProps, actionsProps, fieldActionTypes }, }, children, }: {
    value: DesignValue;
    children: (params: {
        fieldProps: FieldProps;
        style: CSSProperties;
        actions: Record<string, (...args: any[]) => any>;
        /** PhoneWithAreaCode：左侧区号选择 */
        areaCodeActions?: Record<string, (...args: any[]) => any>;
        /** PhoneWithAreaCode：右侧号码输入 */
        phoneInputActions?: Record<string, (...args: any[]) => any>;
        /** SendSMS：验证码输入框事件 */
        codeInputActions?: Record<string, (...args: any[]) => any>;
        /** SendSMS：发送按钮事件 */
        sendButtonActions?: Record<string, (...args: any[]) => any>;
        /** SendSMS：倒计时事件 */
        countdownActions?: Record<string, (...args: any[]) => any>;
        lang: string;
    } & DesignFormInjectedProps) => ReactNode;
}): React.JSX.Element;

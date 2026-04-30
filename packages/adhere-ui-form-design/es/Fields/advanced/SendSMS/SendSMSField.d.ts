import React from 'react';
import type { DataSourceManagerFormItemValue } from '../../../components/DataSourceManagerFormItem';
import type { DesignValue } from '../../../types';
import { type PhoneWithAreaCodeFieldProps } from '../PhoneWithAreaCode/PhoneWithAreaCodeField';
export type SendSMSValue = string;
export type SendSMSFieldProps = {
    rootDesignValue?: DesignValue;
    value?: SendSMSValue;
    /**
     * 非受控模式下的初始值（设计器画布中使用）
     */
    defaultValue?: SendSMSValue;
    onChange?: (value: SendSMSValue) => void;
    disabled?: boolean;
    readOnly?: boolean;
    /** 验证码输入框 placeholder */
    placeholder?: string;
    /** 手机号输入配置 */
    phoneProps?: Pick<PhoneWithAreaCodeFieldProps, 'defaultCode' | 'allowClear' | 'areaCodeOptions' | 'areaCodeLoading' | 'areaCodeActions' | 'phoneInputActions'> & {
        /** 手机号输入框 placeholder（右侧） */
        placeholder?: string;
        disabled?: boolean;
        readOnly?: boolean;
    };
    /**
     * 倒计时秒数
     */
    countdownSeconds?: number;
    /**
     * 发送验证码数据源
     */
    sendApi?: {
        source?: DataSourceManagerFormItemValue;
        responseMap?: {
            /** dot-path，从 dataKey 对应 payload 中继续向下取值 */
            dataPath?: string;
        };
        /**
         * 请求时附加的动态参数（会与数据源管理里配置的 request.data 合并）
         */
        requestData?: Record<string, any>;
    };
    /**
     * 设计器下发的 actions（事件），兼容旧版：未配置分区事件时共用
     */
    actions?: Record<string, (...args: any[]) => any>;
    /** 验证码输入框事件（与 actions 合并，本侧优先） */
    codeInputActions?: Record<string, (...args: any[]) => any>;
    /** 发送按钮事件（与 actions 合并，本侧优先） */
    sendButtonActions?: Record<string, (...args: any[]) => any>;
    /** 倒计时事件（tick/finish/reset 等），优先于 actions 内同名 */
    countdownActions?: Record<string, (...args: any[]) => any>;
};
export default function SendSMSField(props: SendSMSFieldProps): React.JSX.Element;

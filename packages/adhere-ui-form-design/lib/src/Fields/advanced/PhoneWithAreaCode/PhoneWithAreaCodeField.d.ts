import type { CSSProperties } from 'react';
import React, { type ReactNode } from 'react';
import type { PhoneAreaCodeItem } from '../../../Dict/PhoneAreaCode';
export type PhoneWithAreaCodeValue = {
    code?: string;
    value?: string;
};
export type PhoneWithAreaCodeFieldProps = {
    value?: PhoneWithAreaCodeValue;
    /**
     * 非受控模式下的初始值（设计器画布中使用）
     */
    defaultValue?: PhoneWithAreaCodeValue;
    onChange?: (value: PhoneWithAreaCodeValue) => void;
    disabled?: boolean;
    readOnly?: boolean;
    /**
     * 右侧电话号码输入框是否允许清除
     */
    allowClear?: boolean;
    placeholder?: string;
    defaultCode?: string;
    /**
     * 设计器下发的样式（用于包裹整个字段）
     */
    style?: CSSProperties;
    /**
     * 设计器下发的 actions（事件），兼容旧版：未配置分区事件时两侧共用
     */
    actions?: Record<string, (...args: any[]) => any>;
    /** 左侧区号选择事件（与 actions 合并，本侧优先） */
    areaCodeActions?: Record<string, (...args: any[]) => any>;
    /** 右侧号码输入事件（与 actions 合并，本侧优先） */
    phoneInputActions?: Record<string, (...args: any[]) => any>;
    /**
     * 右侧扩展内容（例如：发送验证码按钮）
     */
    rightAddon?: ReactNode;
    /**
     * 覆盖默认区号选项（缺省取 Dict.PhoneAreaCode）
     */
    areaCodeOptions?: PhoneAreaCodeItem[];
    /** 区号数据源加载中（设计器动态数据源预览） */
    areaCodeLoading?: boolean;
};
export default function PhoneWithAreaCodeField(props: PhoneWithAreaCodeFieldProps): React.JSX.Element;

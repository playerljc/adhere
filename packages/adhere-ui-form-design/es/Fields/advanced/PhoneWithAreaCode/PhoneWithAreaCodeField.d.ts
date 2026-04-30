import type { CSSProperties } from 'react';
import React from 'react';
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
     * 设计器下发的 actions（事件），需要分发到 Select/Input 上
     */
    actions?: Record<string, (...args: any[]) => any>;
    /**
     * 覆盖默认区号选项（缺省取 Dict.PhoneAreaCode）
     */
    areaCodeOptions?: PhoneAreaCodeItem[];
};
export default function PhoneWithAreaCodeField(props: PhoneWithAreaCodeFieldProps): React.JSX.Element;

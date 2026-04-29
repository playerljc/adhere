import React from 'react';
import type { PhoneAreaCodeItem } from '../../../Dict/PhoneAreaCode';
export type PhoneWithAreaCodeValue = {
    code?: string;
    value?: string;
};
export type PhoneWithAreaCodeFieldProps = {
    value?: PhoneWithAreaCodeValue;
    onChange?: (value: PhoneWithAreaCodeValue) => void;
    disabled?: boolean;
    readOnly?: boolean;
    allowClear?: boolean;
    placeholder?: string;
    defaultCode?: string;
    /**
     * 覆盖默认区号选项（缺省取 Dict.PhoneAreaCode）
     */
    areaCodeOptions?: PhoneAreaCodeItem[];
};
export default function PhoneWithAreaCodeField(props: PhoneWithAreaCodeFieldProps): React.JSX.Element;

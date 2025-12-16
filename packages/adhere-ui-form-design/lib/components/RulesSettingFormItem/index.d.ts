import React from 'react';
import { RuleObject } from '@rc-component/form/lib/interface';
import type { I18nValue } from '../../types';
export type RuleType = 'required' | 'whitespace' | 'max' | 'min' | 'pattern' | 'custom';
export type RuleConfig = Pick<RuleObject, 'required' | 'min' | 'max' | 'type' | 'len' | 'enum' | 'whitespace' | 'warningOnly'> & {
    validator?: string;
    pattern?: string;
    message?: I18nValue;
};
export interface Rule {
    type: RuleType;
    config: RuleConfig;
}
export interface RulesSettingFormItemProps {
    value?: Rule[];
    onChange?: (value: Rule[]) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: React.NamedExoticComponent<RulesSettingFormItemProps>;
export default _default;

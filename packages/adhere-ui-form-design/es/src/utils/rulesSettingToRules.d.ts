import type { RuleObject } from '@rc-component/form/lib/interface';
import type { Rule, RuleConfig } from '../components/RulesSettingFormItem';
type Return = RuleConfig & {
    validate?: RuleObject['validator'];
};
export declare function rulesSettingToRules(rules: Rule[], lang: string): Return[];
export {};

import type { RuleObject, StoreValue } from '@rc-component/form/lib/interface';

import type { Rule, RuleConfig } from '../components/RulesSettingFormItem';

type Return = RuleConfig & {
  validate?: RuleObject['validator'];
};

export function rulesSettingToRules(rules: Rule[], lang: string): Return[] {
  return rules.map((rule) => {
    const {
      config: { validator, pattern, message, ...restConfig },
    } = rule;

    return {
      ...restConfig,
      message: message ? (message[lang] as string) : '',
      pattern: pattern ? new RegExp(pattern) : undefined,
      validator: validator
        ? (rule: RuleObject, value: StoreValue, cb: (error?: string) => void) => {
            const fn = new Function('rule', 'value', 'cb', validator);
            return fn(rule, value, cb);
          }
        : undefined,
    } as unknown as Return;
  });
}

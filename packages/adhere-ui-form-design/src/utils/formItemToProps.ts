import type { Rule } from '../components/RulesSettingFormItem';
import type { FormItemProps } from '../types';
import { rulesSettingToRules } from './rulesSettingToRules';

export function formItemToProps(formItemProps: FormItemProps, lang: string) {
  return {
    name: formItemProps.name,
    hidden: formItemProps.hidden,
    noStyle: formItemProps.noStyle,
    valuePropName: formItemProps.valuePropName,
    getValueFromEvent: formItemProps.getValueFromEvent,
    validateFirst: formItemProps.validateFirst,
    validateTrigger: formItemProps.validateTrigger,
    initialValue: formItemProps.initialValue,
    rules: rulesSettingToRules((formItemProps.rules ?? []) as unknown as Rule[], lang),
  };
}

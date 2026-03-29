import type { Rule } from '../components/RulesSettingFormItem';
import type { FormItemProps } from '../types';
import { rulesSettingToRules } from './rulesSettingToRules';

export function formItemToProps(formItemProps: FormItemProps, lang: string) {
  return {
    ...formItemProps,
    rules: rulesSettingToRules((formItemProps.rules ?? []) as unknown as Rule[], lang),
  };
}

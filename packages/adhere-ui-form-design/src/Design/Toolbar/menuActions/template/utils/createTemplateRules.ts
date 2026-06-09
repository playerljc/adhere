import type { Rule } from '../../../../../components/RulesSettingFormItem';
import { i18nFromKey } from './i18nFromKey';

const EMAIL_PATTERN = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$';

/** 必填校验规则 */
export function requiredRules(messageKey: string): Rule[] {
  return [
    {
      type: 'required',
      config: {
        required: true,
        message: i18nFromKey(messageKey),
      },
    },
  ];
}

/** 邮箱：必填 + 格式 */
export function emailRules(requiredMessageKey: string, invalidMessageKey: string): Rule[] {
  return [
    {
      type: 'required',
      config: {
        required: true,
        message: i18nFromKey(requiredMessageKey),
      },
    },
    {
      type: 'pattern',
      config: {
        pattern: EMAIL_PATTERN,
        message: i18nFromKey(invalidMessageKey),
      },
    },
  ];
}

/** 表单项必填配置：设计态星号 + 校验 rules */
export function requiredFormItem(messageKey: string) {
  return {
    require: true as const,
    rules: requiredRules(messageKey),
  };
}

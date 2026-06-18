import type { Rule } from '../../../../../components/RulesSettingFormItem';
/** 必填校验规则 */
export declare function requiredRules(messageKey: string): Rule[];
/** 邮箱：必填 + 格式 */
export declare function emailRules(requiredMessageKey: string, invalidMessageKey: string): Rule[];
/** 表单项必填配置：设计态星号 + 校验 rules */
export declare function requiredFormItem(messageKey: string): {
    require: true;
    rules: Rule[];
};

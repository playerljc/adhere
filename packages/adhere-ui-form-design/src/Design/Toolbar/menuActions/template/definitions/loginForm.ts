import { TYPE as INPUT_TYPE } from '../../../../../Fields/integration/antd/Input/constant';
import { TYPE as PASSWORD_TYPE } from '../../../../../Fields/integration/antd/Password/constant';
import { TYPE as SELECT_TYPE } from '../../../../../Fields/integration/antd/Select/constant';
import { TYPE as SWITCH_TYPE } from '../../../../../Fields/integration/antd/Switch/constant';
import { createDefaultRootDesignValue } from '../../../../../utils';
import { createTemplateCard } from '../utils/createTemplateCard';
import { createTemplateField } from '../utils/createTemplateField';
import type { GetItemByType } from '../utils/createTemplateField';
import { createTemplateInnerFlex } from '../utils/createTemplateInnerFlex';
import { requiredFormItem } from '../utils/createTemplateRules';
import { createTemplateTableGridContainer } from '../utils/createTemplateTableGridContainer';
import { i18nFromKey } from '../utils/i18nFromKey';
import { staticSelectOptions } from '../utils/staticSelectOptions';

export function buildLoginForm(getItemByType: GetItemByType) {
  const root = createDefaultRootDesignValue();

  root.props.children = [
    createTemplateCard(getItemByType, 'template_card_login_account', [
      createTemplateInnerFlex(getItemByType, [
        createTemplateTableGridContainer(getItemByType, [
          createTemplateField(getItemByType, SELECT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_login_method'),
              name: 'loginMethod',
              ...requiredFormItem('template_rule_required_login_method'),
            },
            fieldProps: {
              placeholder: i18nFromKey('template_placeholder_login_method'),
              selectOptions: staticSelectOptions([
                { labelKey: 'template_option_login_username', value: 'username' },
                { labelKey: 'template_option_login_email', value: 'email' },
                { labelKey: 'template_option_login_phone', value: 'phone' },
              ]),
            },
          }),
          createTemplateField(getItemByType, INPUT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_username'),
              name: 'account',
              ...requiredFormItem('template_rule_required_username'),
            },
            fieldProps: { placeholder: i18nFromKey('template_placeholder_username') },
          }),
          createTemplateField(getItemByType, PASSWORD_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_password'),
              name: 'password',
              ...requiredFormItem('template_rule_required_password'),
            },
            fieldProps: { placeholder: i18nFromKey('template_placeholder_password') },
          }),
        ]),
      ]),
    ]),
    createTemplateCard(getItemByType, 'template_card_login_options', [
      createTemplateInnerFlex(getItemByType, [
        createTemplateTableGridContainer(getItemByType, [
          createTemplateField(getItemByType, INPUT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_captcha'),
              name: 'captcha',
              ...requiredFormItem('template_rule_required_captcha'),
            },
            fieldProps: { placeholder: i18nFromKey('template_placeholder_captcha') },
          }),
          createTemplateField(getItemByType, SWITCH_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_remember_me'),
              name: 'rememberMe',
              valuePropName: 'checked',
            },
          }),
        ]),
      ]),
    ]),
  ];

  return root;
}

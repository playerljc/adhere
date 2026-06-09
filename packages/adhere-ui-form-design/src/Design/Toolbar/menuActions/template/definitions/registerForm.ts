import { TYPE as DATE_PICKER_TYPE } from '../../../../../Fields/integration/antd/DatePicker/constant';
import { TYPE as INPUT_TYPE } from '../../../../../Fields/integration/antd/Input/constant';
import { TYPE as PASSWORD_TYPE } from '../../../../../Fields/integration/antd/Password/constant';
import { TYPE as SELECT_TYPE } from '../../../../../Fields/integration/antd/Select/constant';
import { TYPE as SWITCH_TYPE } from '../../../../../Fields/integration/antd/Switch/constant';
import { TYPE as TEXTAREA_TYPE } from '../../../../../Fields/integration/antd/TextArea/constant';
import { createDefaultRootDesignValue } from '../../../../../utils';
import { createTemplateCard } from '../utils/createTemplateCard';
import { createTemplateField } from '../utils/createTemplateField';
import type { GetItemByType } from '../utils/createTemplateField';
import { createTemplateInnerFlex } from '../utils/createTemplateInnerFlex';
import { emailRules, requiredFormItem } from '../utils/createTemplateRules';
import {
  createTemplateTableGridContainer,
  createTemplateTableGridRow,
} from '../utils/createTemplateTableGridContainer';
import { i18nFromKey } from '../utils/i18nFromKey';
import { staticSelectOptions } from '../utils/staticSelectOptions';

export function buildRegisterForm(getItemByType: GetItemByType) {
  const root = createDefaultRootDesignValue();

  root.props.children = [
    createTemplateCard(getItemByType, 'template_card_register_account', [
      createTemplateInnerFlex(getItemByType, [
        createTemplateTableGridContainer(getItemByType, [
          createTemplateField(getItemByType, INPUT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_username'),
              name: 'username',
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
          createTemplateField(getItemByType, PASSWORD_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_confirm_password'),
              name: 'confirmPassword',
              ...requiredFormItem('template_rule_required_confirm_password'),
            },
            fieldProps: { placeholder: i18nFromKey('template_placeholder_confirm_password') },
          }),
        ]),
      ]),
    ]),
    createTemplateCard(getItemByType, 'template_card_register_profile', [
      createTemplateInnerFlex(getItemByType, [
        createTemplateTableGridContainer(getItemByType, [
          createTemplateField(getItemByType, INPUT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_name'),
              name: 'realName',
              ...requiredFormItem('template_rule_required_name'),
            },
            fieldProps: { placeholder: i18nFromKey('template_placeholder_name') },
          }),
          createTemplateField(getItemByType, INPUT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_email'),
              name: 'email',
              require: true,
              rules: emailRules('template_rule_required_email', 'template_rule_email_invalid'),
            },
            fieldProps: { placeholder: i18nFromKey('template_placeholder_email') },
          }),
          createTemplateField(getItemByType, INPUT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_phone'),
              name: 'phone',
            },
            fieldProps: { placeholder: i18nFromKey('template_placeholder_phone') },
          }),
          createTemplateField(getItemByType, SELECT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_gender'),
              name: 'gender',
            },
            fieldProps: {
              placeholder: i18nFromKey('template_placeholder_gender'),
              selectOptions: staticSelectOptions([
                { labelKey: 'template_option_male', value: 'male' },
                { labelKey: 'template_option_female', value: 'female' },
                { labelKey: 'template_option_other', value: 'other' },
              ]),
            },
          }),
          createTemplateField(getItemByType, SELECT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_department'),
              name: 'department',
              ...requiredFormItem('template_rule_required_department'),
            },
            fieldProps: {
              placeholder: i18nFromKey('template_placeholder_department'),
              selectOptions: staticSelectOptions([
                { labelKey: 'template_option_dept_engineering', value: 'engineering' },
                { labelKey: 'template_option_dept_product', value: 'product' },
                { labelKey: 'template_option_dept_marketing', value: 'marketing' },
                { labelKey: 'template_option_dept_sales', value: 'sales' },
                { labelKey: 'template_option_dept_other', value: 'other' },
              ]),
            },
          }),
          createTemplateField(getItemByType, DATE_PICKER_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_birth_date'),
              name: 'birthDate',
            },
            fieldProps: {
              placeholder: i18nFromKey('template_placeholder_birth_date'),
            },
          }),
        ]),
        createTemplateTableGridRow(
          getItemByType,
          createTemplateField(getItemByType, TEXTAREA_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_bio'),
              name: 'bio',
            },
            fieldProps: {
              placeholder: i18nFromKey('template_placeholder_bio'),
              autoSize: true,
            },
          }),
        ),
      ]),
    ]),
    createTemplateCard(getItemByType, 'template_card_register_agreement', [
      createTemplateInnerFlex(getItemByType, [
        createTemplateTableGridContainer(getItemByType, [
          createTemplateField(getItemByType, SWITCH_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_agree_terms'),
              name: 'agreeTerms',
              valuePropName: 'checked',
              ...requiredFormItem('template_rule_required_agree_terms'),
            },
          }),
        ]),
      ]),
    ]),
  ];

  return root;
}

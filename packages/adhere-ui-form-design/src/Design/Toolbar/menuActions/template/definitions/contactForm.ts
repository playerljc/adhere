import { TYPE as INPUT_TYPE } from '../../../../../Fields/integration/antd/Input/constant';
import { TYPE as SELECT_TYPE } from '../../../../../Fields/integration/antd/Select/constant';
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

export function buildContactForm(getItemByType: GetItemByType) {
  const root = createDefaultRootDesignValue();

  root.props.children = [
    createTemplateCard(getItemByType, 'template_card_contact_basic', [
      createTemplateInnerFlex(getItemByType, [
        createTemplateTableGridContainer(getItemByType, [
          createTemplateField(getItemByType, INPUT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_company'),
              name: 'company',
              ...requiredFormItem('template_rule_required_company'),
            },
            fieldProps: { placeholder: i18nFromKey('template_placeholder_company') },
          }),
          createTemplateField(getItemByType, INPUT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_name'),
              name: 'contactName',
              ...requiredFormItem('template_rule_required_name'),
            },
            fieldProps: { placeholder: i18nFromKey('template_placeholder_name') },
          }),
          createTemplateField(getItemByType, INPUT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_job_title'),
              name: 'jobTitle',
            },
            fieldProps: { placeholder: i18nFromKey('template_placeholder_job_title') },
          }),
          createTemplateField(getItemByType, INPUT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_phone'),
              name: 'phone',
              ...requiredFormItem('template_rule_required_phone'),
            },
            fieldProps: { placeholder: i18nFromKey('template_placeholder_phone') },
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
              label: i18nFromKey('template_field_company_website'),
              name: 'website',
            },
            fieldProps: { placeholder: i18nFromKey('template_placeholder_company_website') },
          }),
        ]),
      ]),
    ]),
    createTemplateCard(getItemByType, 'template_card_contact_message', [
      createTemplateInnerFlex(getItemByType, [
        createTemplateTableGridRow(
          getItemByType,
          createTemplateField(getItemByType, TEXTAREA_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_message'),
              name: 'message',
              ...requiredFormItem('template_rule_required_message'),
            },
            fieldProps: {
              placeholder: i18nFromKey('template_placeholder_message'),
              autoSize: true,
            },
          }),
        ),
      ]),
    ]),
    createTemplateCard(getItemByType, 'template_card_contact_preference', [
      createTemplateInnerFlex(getItemByType, [
        createTemplateTableGridContainer(getItemByType, [
          createTemplateField(getItemByType, SELECT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_contact_method'),
              name: 'contactMethod',
            },
            fieldProps: {
              placeholder: i18nFromKey('template_placeholder_contact_method'),
              selectOptions: staticSelectOptions([
                { labelKey: 'template_option_contact_phone', value: 'phone' },
                { labelKey: 'template_option_contact_email', value: 'email' },
                { labelKey: 'template_option_contact_wechat', value: 'wechat' },
              ]),
            },
          }),
          createTemplateField(getItemByType, SELECT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_preferred_time'),
              name: 'preferredTime',
            },
            fieldProps: {
              placeholder: i18nFromKey('template_placeholder_preferred_time'),
              selectOptions: staticSelectOptions([
                { labelKey: 'template_option_time_morning', value: 'morning' },
                { labelKey: 'template_option_time_afternoon', value: 'afternoon' },
                { labelKey: 'template_option_time_evening', value: 'evening' },
              ]),
            },
          }),
        ]),
      ]),
    ]),
  ];

  return root;
}

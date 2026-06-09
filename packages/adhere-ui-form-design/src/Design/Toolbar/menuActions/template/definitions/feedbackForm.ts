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

export function buildFeedbackForm(getItemByType: GetItemByType) {
  const root = createDefaultRootDesignValue();

  root.props.children = [
    createTemplateCard(getItemByType, 'template_card_feedback_detail', [
      createTemplateInnerFlex(getItemByType, [
        createTemplateTableGridContainer(getItemByType, [
          createTemplateField(getItemByType, SELECT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_feedback_category'),
              name: 'category',
              ...requiredFormItem('template_rule_required_category'),
            },
            fieldProps: {
              placeholder: i18nFromKey('template_placeholder_category'),
              selectOptions: staticSelectOptions([
                { labelKey: 'template_option_feedback_bug', value: 'bug' },
                { labelKey: 'template_option_feedback_feature', value: 'feature' },
                { labelKey: 'template_option_feedback_other', value: 'other' },
              ]),
            },
          }),
          createTemplateField(getItemByType, SELECT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_priority'),
              name: 'priority',
            },
            fieldProps: {
              placeholder: i18nFromKey('template_placeholder_priority'),
              selectOptions: staticSelectOptions([
                { labelKey: 'template_option_priority_low', value: 'low' },
                { labelKey: 'template_option_priority_medium', value: 'medium' },
                { labelKey: 'template_option_priority_high', value: 'high' },
              ]),
            },
          }),
          createTemplateField(getItemByType, INPUT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_subject'),
              name: 'subject',
              ...requiredFormItem('template_rule_required_subject'),
            },
            fieldProps: { placeholder: i18nFromKey('template_placeholder_subject') },
          }),
        ]),
        createTemplateTableGridRow(
          getItemByType,
          createTemplateField(getItemByType, TEXTAREA_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_feedback_content'),
              name: 'content',
              ...requiredFormItem('template_rule_required_content'),
            },
            fieldProps: {
              placeholder: i18nFromKey('template_placeholder_feedback_content'),
              autoSize: true,
            },
          }),
        ),
      ]),
    ]),
    createTemplateCard(getItemByType, 'template_card_feedback_contact', [
      createTemplateInnerFlex(getItemByType, [
        createTemplateTableGridContainer(getItemByType, [
          createTemplateField(getItemByType, INPUT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_contact_name'),
              name: 'contactName',
            },
            fieldProps: { placeholder: i18nFromKey('template_placeholder_contact_name') },
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
          createTemplateField(getItemByType, INPUT_TYPE, {
            formItemProps: {
              label: i18nFromKey('template_field_contact_info'),
              name: 'contactExtra',
            },
            fieldProps: { placeholder: i18nFromKey('template_placeholder_contact_info') },
          }),
        ]),
      ]),
    ]),
  ];

  return root;
}

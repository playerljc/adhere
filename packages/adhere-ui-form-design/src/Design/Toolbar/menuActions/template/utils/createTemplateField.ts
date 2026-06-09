import merge from 'lodash.merge';

import Util from '@baifendian/adhere-util';

import type { Rule } from '../../../../../components/RulesSettingFormItem';
import { Copy, Delete } from '../../../../../components/DesignFieldActions/actions';
import type {
  DesignItem,
  DesignValue,
  DesignValueProps,
  FieldType,
  FormItemProps,
  I18nValue,
} from '../../../../../types';

export type GetItemByType = (type: FieldType) => DesignItem | undefined;

export type TemplateFieldOverrides = {
  formItemProps?: Partial<Omit<NonNullable<DesignValueProps['formItemProps']>, 'label' | 'rules'>> & {
    label?: I18nValue;
    rules?: Rule[];
    require?: boolean;
  };
  fieldProps?: Partial<DesignValueProps['fieldProps']> & {
    placeholder?: I18nValue;
    selectOptions?: {
      type: 'static' | 'dynamic';
      dataSource?: Array<{ label: I18nValue; value: string | number; [key: string]: unknown }>;
    };
  };
  styleProps?: DesignValueProps['styleProps'];
};

/**
 * 基于 DesignItem.defaultValue 合并 overrides，生成模板字段节点
 */
export function createTemplateField(
  getItemByType: GetItemByType,
  type: FieldType,
  overrides: TemplateFieldOverrides = {},
): DesignValue {
  const item = getItemByType(type);
  const defaultProps = (item?.defaultValue ?? {}) as DesignValueProps;

  const props = merge({}, defaultProps, {
    formItemProps: merge({}, defaultProps.formItemProps, overrides.formItemProps),
    fieldProps: merge({}, defaultProps.fieldProps, overrides.fieldProps),
    styleProps: overrides.styleProps ?? defaultProps.styleProps,
    fieldActionTypes: [Copy.key, Delete.key],
  }) as DesignValueProps;

  if (overrides.formItemProps?.rules) {
    props.formItemProps = {
      ...props.formItemProps,
      rules: overrides.formItemProps.rules as unknown as FormItemProps['rules'],
    };
  }

  return {
    id: Util.uuid(),
    type,
    props,
  };
}

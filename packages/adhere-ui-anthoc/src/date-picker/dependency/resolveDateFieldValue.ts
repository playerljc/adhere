import type { FormInstance } from 'antd/es/form';

import type { DateFieldValue } from '../types';
import { normalizeDateFieldValue } from './normalizeDateFieldValue';

export interface ResolveDateFieldValueOptions {
  fieldKey: string;
  registry: Record<string, DateFieldValue>;
  form?: FormInstance;
  externalGetFieldValue?: (fieldKey: string) => DateFieldValue;
}

/**
 * resolveDateFieldValue
 * @description 按优先级读取依赖字段值：externalGetFieldValue > form > registry
 */
export function resolveDateFieldValue({
  fieldKey,
  registry,
  form,
  externalGetFieldValue,
}: ResolveDateFieldValueOptions): DateFieldValue {
  if (externalGetFieldValue) {
    const externalValue = externalGetFieldValue(fieldKey);

    if (externalValue !== undefined) {
      return normalizeDateFieldValue(externalValue);
    }
  }

  if (form) {
    const formValue = form.getFieldValue(fieldKey);

    if (formValue !== undefined) {
      return normalizeDateFieldValue(formValue);
    }
  }

  return registry[fieldKey];
}

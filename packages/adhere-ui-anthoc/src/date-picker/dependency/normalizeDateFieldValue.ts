import type { Dayjs } from 'dayjs';

import type { DateFieldValue } from '../types';

/**
 * normalizeDateFieldValue
 * @description 将 antd DatePicker 值规范为单日期字段值
 */
export function normalizeDateFieldValue(
  value: Dayjs | Dayjs[] | null | undefined,
): DateFieldValue {
  if (value == null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value[0] ?? null;
  }

  return value;
}

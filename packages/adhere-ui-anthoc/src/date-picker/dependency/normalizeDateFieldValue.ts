import type { Dayjs } from 'dayjs';

import type { DateFieldValue } from '../types';

/**
 * normalizeDateFieldValue
 * @description 将 antd DatePicker 值规范为单日期字段值
 *
 * antd DatePickerProps 的 value/onChange 联合类型包含 RangePicker 的 Dayjs[]，
 * 本模块只处理单日期 picker，因此在此统一收敛类型。
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

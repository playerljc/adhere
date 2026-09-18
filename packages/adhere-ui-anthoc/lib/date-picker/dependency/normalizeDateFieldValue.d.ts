import type { Dayjs } from 'dayjs';
import type { DateFieldValue } from '../types';
/**
 * normalizeDateFieldValue
 * @description 将 antd DatePicker 值规范为单日期字段值
 */
export declare function normalizeDateFieldValue(value: Dayjs | Dayjs[] | null | undefined): DateFieldValue;

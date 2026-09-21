import type { Dayjs } from 'dayjs';
import type { DateFieldValue } from '../types';
/**
 * normalizeDateFieldValue
 * @description 将 antd DatePicker 值规范为单日期字段值
 *
 * antd DatePickerProps 的 value/onChange 联合类型包含 RangePicker 的 Dayjs[]，
 * 本模块只处理单日期 picker，因此在此统一收敛类型。
 */
export declare function normalizeDateFieldValue(value: Dayjs | Dayjs[] | null | undefined): DateFieldValue;

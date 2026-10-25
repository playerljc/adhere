import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import './setupDayjs';

export const DEFAULT_DATE_FORMAT = 'L LTS';

export const DEFAULT_TIME_FORMAT = 'LTS';

const LOCALIZED_TOKENS = ['LTS', 'LT', 'LLLL', 'LLL', 'LL', 'L'];

const DATE_TOKEN = /Y{1,4}|M{1,4}|D{1,2}|d{1,4}|Q|w{1,2}|W{1,2}|g{1,2}|G{1,2}/;

export type TimestampUnit = 'milliseconds' | 'seconds';

export type PickerFormat =
  | string
  | ((value: Dayjs) => string)
  | Array<string | ((value: Dayjs) => string)>
  | { format?: string; type?: string }
  | null
  | undefined;

export type DayjsPair = [Dayjs | null, Dayjs | null];

/**
 * expandLocalizedFormat
 * @description 把 L / LT / LTS 展开成当前语言的具体格式。长 token 优先，方括号内的字面量保持不变。
 */
export function expandLocalizedFormat(format: string): string {
  const longDateFormat = (
    dayjs.localeData() as { longDateFormat?: (token: string) => string }
  ).longDateFormat;

  if (!longDateFormat) return format;

  let result = '';
  let index = 0;

  while (index < format.length) {
    if (format[index] === '[') {
      const end = format.indexOf(']', index);
      if (end === -1) {
        result += format.slice(index);
        break;
      }
      result += format.slice(index, end + 1);
      index = end + 1;
      continue;
    }

    const token = LOCALIZED_TOKENS.find((item) => format.startsWith(item, index));
    if (token) {
      result += longDateFormat(token);
      index += token.length;
      continue;
    }

    result += format[index];
    index += 1;
  }

  return result;
}

function firstStringFormat(format: PickerFormat): string | undefined {
  if (!format) return undefined;
  if (typeof format === 'string') return format;
  if (typeof format === 'function') return undefined;
  if (Array.isArray(format)) {
    return format.find((item) => typeof item === 'string');
  }
  if (typeof format.format === 'string') return format.format;
  return undefined;
}

/**
 * resolveParseFormat
 * @description 入站解析用的格式。函数格式无法反解，回退到组件默认格式。
 */
export function resolveParseFormat(format: PickerFormat, fallback: string): string {
  return expandLocalizedFormat(firstStringFormat(format) ?? fallback);
}

function stripLiterals(format: string): string {
  return format.replace(/\[[^\]]*\]/g, '');
}

function isTimeOnlyFormat(format: string): boolean {
  return !DATE_TOKEN.test(stripLiterals(format));
}

/**
 * parseDayjs
 * @description null / undefined 原样返回。时间格式先补上当天日期，避免 dayjs(undefined) 变成当前时间。
 */
export function parseDayjs(
  value: unknown,
  format: PickerFormat,
  fallback: string,
): Dayjs | null | undefined {
  if (value === null || value === undefined) return value;
  if (dayjs.isDayjs(value)) return value.isValid() ? value : null;

  const pattern = resolveParseFormat(format, fallback);
  const text = typeof value === 'string' ? value : String(value);
  if (!text) return null;

  if (isTimeOnlyFormat(pattern)) {
    const today = dayjs().format('YYYY-MM-DD');
    const withDate = dayjs(`${today} ${text}`, `YYYY-MM-DD ${pattern}`, true);
    if (withDate.isValid()) return withDate;
  }

  const parsed = dayjs(text, pattern, true);
  if (parsed.isValid()) return parsed;

  const loose = dayjs(text);
  return loose.isValid() ? loose : null;
}

/**
 * formatDayjs
 * @description 函数格式直接调用；其余按展开后的格式输出，保证能被 parseDayjs 读回。
 */
export function formatDayjs(value: Dayjs, format: PickerFormat, fallback: string): string {
  if (typeof format === 'function') return format(value);

  if (Array.isArray(format)) {
    const text = format.find((item) => typeof item === 'string');
    if (text) return value.format(expandLocalizedFormat(text));
    const formatter = format.find((item) => typeof item === 'function');
    if (formatter) return formatter(value);
  }

  return value.format(resolveParseFormat(format, fallback));
}

export function parseDayjsPair(
  value: unknown,
  format: PickerFormat,
  fallback: string,
): DayjsPair | null | undefined {
  if (value === null || value === undefined) return value;
  if (!Array.isArray(value) || !value.length) return null;

  return [
    value[0] == null ? null : (parseDayjs(value[0], format, fallback) ?? null),
    value.length < 2 || value[1] == null ? null : (parseDayjs(value[1], format, fallback) ?? null),
  ];
}

export function formatDayjsPair(
  value: Array<Dayjs | null | undefined> | null | undefined,
  format: PickerFormat,
  fallback: string,
): [string | null, string | null] | null {
  if (value == null) return null;

  const start = value[0] == null ? null : formatDayjs(value[0], format, fallback);
  const end = value[1] == null ? null : formatDayjs(value[1], format, fallback);
  if (start == null && end == null) return null;
  return [start, end];
}

export function toDateParts(value: Dayjs) {
  return {
    year: value.year(),
    quarter: value.quarter(),
    month: value.month(),
    week: value.week(),
    day: value.day(),
    date: value.date(),
    hour: value.hour(),
    minute: value.minute(),
    second: value.second(),
  };
}

export function toTimeParts(value: Dayjs) {
  return {
    hour: value.hour(),
    minute: value.minute(),
    second: value.second(),
  };
}

export function normalizeTimestampType(type?: string | null): TimestampUnit {
  return type === 'seconds' ? 'seconds' : 'milliseconds';
}

export function normalizeRangeTypes(type?: unknown): [TimestampUnit, TimestampUnit] {
  const raw = Array.isArray(type) ? type.slice(0, 2) : [];
  return [normalizeTimestampType(raw[0]), normalizeTimestampType(raw[1])];
}

export function parseTimestamp(
  value: unknown,
  type: TimestampUnit,
): Dayjs | null | undefined {
  if (value === null || value === undefined) return value;
  if (dayjs.isDayjs(value)) return value.isValid() ? value : null;

  const numeric = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(numeric)) return null;

  const parsed = type === 'seconds' ? dayjs.unix(numeric) : dayjs(numeric);
  return parsed.isValid() ? parsed : null;
}

export function formatTimestamp(value: Dayjs, type: TimestampUnit): number {
  const milliseconds = value.valueOf();
  return type === 'seconds' ? Math.round(milliseconds / 1000) : milliseconds;
}

export function parseTimestampPair(
  value: unknown,
  types: [TimestampUnit, TimestampUnit],
): DayjsPair | null | undefined {
  if (value === null || value === undefined) return value;
  if (!Array.isArray(value) || !value.length) return null;

  return [
    value[0] == null ? null : (parseTimestamp(value[0], types[0]) ?? null),
    value.length < 2 || value[1] == null
      ? null
      : (parseTimestamp(value[1], types[1]) ?? null),
  ];
}

export function formatTimestampPair(
  value: Array<Dayjs | null | undefined> | null | undefined,
  types: [TimestampUnit, TimestampUnit],
): [number | null, number | null] | null {
  if (value == null) return null;

  const start = value[0] == null ? null : formatTimestamp(value[0], types[0]);
  const end = value[1] == null ? null : formatTimestamp(value[1], types[1]);
  if (start == null && end == null) return null;
  return [start, end];
}

/**
 * dayjsToDate
 * @description antd-mobile 的日期组件接收 Date，空值保持 null / undefined。
 */
export function dayjsToDate(value: Dayjs | null | undefined): Date | null | undefined {
  if (value == null) return value;
  return value.toDate();
}

export function dayjsPairToDate(
  value: DayjsPair | null | undefined,
): [Date | null, Date | null] | null | undefined {
  if (value == null) return value;
  return [dayjsToDate(value[0]) ?? null, dayjsToDate(value[1]) ?? null];
}

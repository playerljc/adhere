import type { Dayjs } from 'dayjs';
import '../util/setupDayjs';
export declare const DEFAULT_DATE_FORMAT = "L LTS";
export declare const DEFAULT_TIME_FORMAT = "LTS";
export type TimestampUnit = 'milliseconds' | 'seconds';
export type PickerFormat = string | ((value: Dayjs) => string) | Array<string | ((value: Dayjs) => string)> | {
    format?: string;
    type?: string;
} | null | undefined;
export type DayjsPair = [Dayjs | null, Dayjs | null];
/**
 * expandLocalizedFormat
 * @description 把 L / LT / LTS 展开成当前语言的具体格式。长 token 优先，方括号内的字面量保持不变。
 */
export declare function expandLocalizedFormat(format: string): string;
/**
 * resolveParseFormat
 * @description 入站解析用的格式。函数格式无法反解，回退到组件默认格式。
 */
export declare function resolveParseFormat(format: PickerFormat, fallback: string): string;
/**
 * parseDayjs
 * @description null / undefined 原样返回。时间格式先补上当天日期，避免 dayjs(undefined) 变成当前时间。
 */
export declare function parseDayjs(value: unknown, format: PickerFormat, fallback: string): Dayjs | null | undefined;
/**
 * formatDayjs
 * @description 函数格式直接调用；其余按展开后的格式输出，保证能被 parseDayjs 读回。
 */
export declare function formatDayjs(value: Dayjs, format: PickerFormat, fallback: string): string;
export declare function parseDayjsPair(value: unknown, format: PickerFormat, fallback: string): DayjsPair | null | undefined;
export declare function formatDayjsPair(value: Array<Dayjs | null | undefined> | null | undefined, format: PickerFormat, fallback: string): [string | null, string | null] | null;
export declare function toDateParts(value: Dayjs): {
    year: number;
    quarter: number;
    month: number;
    week: number;
    day: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    date: number;
    hour: number;
    minute: number;
    second: number;
};
export declare function toTimeParts(value: Dayjs): {
    hour: number;
    minute: number;
    second: number;
};
export declare function normalizeTimestampType(type?: string | null): TimestampUnit;
export declare function normalizeRangeTypes(type?: unknown): [TimestampUnit, TimestampUnit];
export declare function parseTimestamp(value: unknown, type: TimestampUnit): Dayjs | null | undefined;
export declare function formatTimestamp(value: Dayjs, type: TimestampUnit): number;
export declare function parseTimestampPair(value: unknown, types: [TimestampUnit, TimestampUnit]): DayjsPair | null | undefined;
export declare function formatTimestampPair(value: Array<Dayjs | null | undefined> | null | undefined, types: [TimestampUnit, TimestampUnit]): [number | null, number | null] | null;

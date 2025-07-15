import { DateValue, LocaleType } from './types';
/**
 * 设置全局国际化语言
 * @param locale - 国际化语言代码
 */
export declare const setGlobalLocale: (locale: LocaleType) => void;
/**
 * 获取全局国际化语言
 * @returns 当前全局国际化语言
 */
export declare const getGlobalLocale: () => LocaleType;
/**
 * 验证日期值是否有效
 * @param value - 日期值
 * @returns 是否为有效日期
 */
export declare const isValidDate: (value: DateValue) => boolean;
/**
 * 安全地格式化日期
 * @param value - 日期值
 * @param format - 格式字符串
 * @param locale - 国际化语言
 * @returns 格式化后的日期字符串
 */
export declare const safeFormatDate: (value: DateValue, format?: string, locale?: LocaleType) => string;
/**
 * 获取相对时间字符串
 * @param value - 日期值
 * @param locale - 国际化语言
 * @param now - 是否使用当前时间作为参考点
 * @param type - 相对时间类型 ('fromNow' | 'toNow')
 * @returns 相对时间字符串
 */
export declare const getRelativeTime: (value: DateValue, locale?: LocaleType, now?: boolean, type?: "fromNow" | "toNow") => string;
/**
 * 解析字典格式化字符串
 * @param dict - 字典值
 * @param split1 - 第一个分隔符
 * @param split2 - 第二个分隔符
 * @returns 格式化字符串
 */
export declare const parseDictFormat: (dict: any, split1?: string, split2?: string) => string;

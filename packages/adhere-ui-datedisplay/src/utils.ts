import dayjs from 'dayjs';
import { DateValue, LocaleType } from './types';

// 全局国际化设置
let globalLocale: LocaleType = 'zh';

/**
 * 设置全局国际化语言
 * @param locale - 国际化语言代码
 */
export const setGlobalLocale = (locale: LocaleType): void => {
  globalLocale = dayjs.locale(locale);
};

/**
 * 获取全局国际化语言
 * @returns 当前全局国际化语言
 */
export const getGlobalLocale = (): LocaleType => {
  return globalLocale;
};

/**
 * 验证日期值是否有效
 * @param value - 日期值
 * @returns 是否为有效日期
 */
export const isValidDate = (value: DateValue): boolean => {
  if (!value) return false;
  return dayjs(value).isValid();
};

/**
 * 安全地格式化日期
 * @param value - 日期值
 * @param format - 格式字符串
 * @param locale - 国际化语言
 * @returns 格式化后的日期字符串
 */
export const safeFormatDate = (value: DateValue, format?: string, locale?: LocaleType): string => {
  if (!isValidDate(value)) return '';
  
  const targetLocale = locale ?? globalLocale;
  const dayjsInstance = dayjs(value).locale(targetLocale);
  
  return format ? dayjsInstance.format(format) : dayjsInstance.format();
};

/**
 * 获取相对时间字符串
 * @param value - 日期值
 * @param locale - 国际化语言
 * @param now - 是否使用当前时间作为参考点
 * @param type - 相对时间类型 ('fromNow' | 'toNow')
 * @returns 相对时间字符串
 */
export const getRelativeTime = (
  value: DateValue,
  locale?: LocaleType,
  now = false,
  type: 'fromNow' | 'toNow' = 'fromNow'
): string => {
  if (!isValidDate(value)) return '';

  const targetLocale = locale ?? globalLocale;
  const dayjsInstance = dayjs(value).locale(targetLocale);

  return type === 'fromNow' 
    ? dayjsInstance.fromNow(now)
    : dayjsInstance.toNow(now);
};

/**
 * 解析字典格式化字符串
 * @param dict - 字典值
 * @param split1 - 第一个分隔符
 * @param split2 - 第二个分隔符
 * @returns 格式化字符串
 */
export const parseDictFormat = (
  dict: any,
  split1: string = '-',
  split2: string = ':'
): string => {
  if (typeof dict === 'function') {
    return dict(split1, split2);
  }
  return dict || '';
}; 
import Components from './DateDisplay';
import {
  DateValue,
  LocaleType,
  BaseDateDisplayProps,
  DateDisplayProps,
  RelativeTimeDisplayProps,
  DictDateDisplayProps,
  DictFormatFunction,
  DateDisplayComponents,
  LocalizationFormat,
} from './types';
import {
  setGlobalLocale,
  getGlobalLocale,
  isValidDate,
  safeFormatDate,
  getRelativeTime,
  parseDictFormat,
} from './utils';

// 导出所有类型
export type {
  DateValue,
  LocaleType,
  BaseDateDisplayProps,
  DateDisplayProps,
  RelativeTimeDisplayProps,
  DictDateDisplayProps,
  DictFormatFunction,
  DateDisplayComponents,
  LocalizationFormat,
};

// 导出工具函数
export {
  setGlobalLocale,
  getGlobalLocale,
  isValidDate,
  safeFormatDate,
  getRelativeTime,
  parseDictFormat,
};

// 导出组件
export default Components;

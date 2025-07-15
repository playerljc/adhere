import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import 'dayjs/locale/en';
import 'dayjs/locale/pt';
import 'dayjs/locale/zh';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isoWeek from 'dayjs/plugin/isoWeek';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { memo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Resource from '@baifendian/adhere-util-resource';

import {
  BaseDateDisplayProps,
  DateDisplayComponents,
  DateDisplayProps,
  DictDateDisplayProps,
  LocalizationFormat,
  RelativeTimeDisplayProps,
} from './types';
import {
  getRelativeTime,
  isValidDate,
  parseDictFormat,
  safeFormatDate,
  setGlobalLocale,
} from './utils';

// 扩展 dayjs 插件
dayjs.extend(LocalizedFormat);
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);

// dayjs 中 formats 和 locale 的文档地址
// https://day.js.org/docs/zh-CN/display/format#list-of-localized-formats
// https://day.js.org/docs/zh-CN/plugin/advanced-format

/**
 * 本地化格式列表
 */
const LOCALIZATION_FORMATS: readonly LocalizationFormat[] = [
  'LT',
  'LTS',
  'L',
  'LL',
  'LLL',
  'LLLL',
  'l',
  'll',
  'lll',
  'llll',
  'L LTS',
  'L LT',
  'l LTS',
  'l LT',
] as const;

/**
 * 组件集合
 */
const Components: DateDisplayComponents = {
  dayjs,

  /**
   * 设置全局国际化语言
   * @param locale - 国际化语言代码
   */
  setGlobalLocale,
} as DateDisplayComponents;

/**
 * 动态生成基于字典的日期显示组件
 * 这些组件不支持国际化
 */
Object.keys(Resource.Dict.handlers)
  .filter((dictName) => /^ResourceMomentFormat\d+/gim.test(dictName))
  .forEach((key) => {
    const name = key.substring('ResourceMomentFormat'.length);
    const componentName = `DateDisplay${name}`;

    /**
     * 字典格式化日期显示组件
     */
    const DictDateDisplayComponent = memo<DictDateDisplayProps>(
      ({ value, split1 = '-', split2 = ':', errorUI = null }) => {
        const dict = Resource.Dict.value[key]?.value;

        if (!isValidDate(value)) {
          return errorUI;
        }

        const formatString = parseDictFormat(dict, split1, split2);

        return (
          <ConditionalRender conditional={!!value} noMatch={() => errorUI}>
            {() => dayjs(value).format(formatString)}
          </ConditionalRender>
        );
      },
    );

    /**
     * 字典格式化日期显示组件的字符串方法
     */
    (DictDateDisplayComponent as any).toString = ({
      value,
      split1 = '-',
      split2 = ':',
    }: DictDateDisplayProps): string => {
      const dict = Resource.Dict.value[key]?.value;

      if (!isValidDate(value)) return '';

      const formatString = parseDictFormat(dict, split1, split2);
      return dayjs(value).format(formatString);
    };

    Components[componentName] = DictDateDisplayComponent;
  });

/**
 * 相对时间显示组件 - 从指定时间到现在
 * 返回现在到当前实例的相对时间
 */
const DateDisplayFromNow = memo<RelativeTimeDisplayProps>(({ value, locale, now = false }) => {
  if (!isValidDate(value)) return null;

  return (
    <ConditionalRender conditional={!!value}>
      {() => getRelativeTime(value, locale, now, 'fromNow')}
    </ConditionalRender>
  );
});

/**
 * DateDisplayFromNow 的字符串方法
 */
(DateDisplayFromNow as any).toString = ({
  value,
  locale,
  now = false,
}: RelativeTimeDisplayProps): string => {
  return getRelativeTime(value, locale, now, 'fromNow');
};

/**
 * 相对时间显示组件 - 从现在到指定时间
 * 返回当前实例到现在的相对时间
 */
const DateDisplayToNow = memo<RelativeTimeDisplayProps>(({ value, locale, now = false }) => {
  if (!isValidDate(value)) return null;

  return (
    <ConditionalRender conditional={!!value}>
      {() => getRelativeTime(value, locale, now, 'toNow')}
    </ConditionalRender>
  );
});

/**
 * DateDisplayToNow 的字符串方法
 */
(DateDisplayToNow as any).toString = ({
  value,
  locale,
  now = false,
}: RelativeTimeDisplayProps): string => {
  return getRelativeTime(value, locale, now, 'toNow');
};

/**
 * 基础日期显示组件
 * 支持自定义格式的日期显示
 */
const DateDisplay = memo<DateDisplayProps>(({ value, locale, format }) => {
  if (!isValidDate(value)) return null;

  return (
    <ConditionalRender conditional={!!value}>
      {() => safeFormatDate(value, format, locale)}
    </ConditionalRender>
  );
});

/**
 * DateDisplay 的字符串方法
 */
(DateDisplay as any).toString = ({ value, locale, format }: DateDisplayProps): string => {
  return safeFormatDate(value, format, locale);
};

// 将组件添加到集合中
Components.DateDisplayFromNow = DateDisplayFromNow;
Components.DateDisplayToNow = DateDisplayToNow;
Components.DateDisplay = DateDisplay;

/**
 * 动态生成本地化格式的日期显示组件
 */
LOCALIZATION_FORMATS.forEach((format) => {
  const componentName = `DateDisplay${format.replace(/\s+/g, '')}`;

  Components[componentName] = memo<BaseDateDisplayProps>((props) => (
    <DateDisplay {...props} format={format} />
  ));
});

export default Components;

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
import React, { ReactNode, memo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Resource from '@baifendian/adhere-util-resource';

dayjs.extend(LocalizedFormat);
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);
// dayjs中formats和locale的文档地址
// https://day.js.org/docs/zh-CN/display/format#list-of-localized-formats
// https://day.js.org/docs/zh-CN/plugin/advanced-format

let globalLocal = 'zh';

const localization = [
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
];

const Components = {
  dayjs,
  /**
   * setGlobalLocal
   * @description 全局设置国际化
   * @param {string} _local 国际化
   */
  setGlobalLocal: (_local) => {
    globalLocal = dayjs.locale(_local);
  },
};

/**
 * 字典的组件
 * 这个不支持国际化
 */
Object.keys(Resource.Dict.handlers)
  .filter((dictName) => /^ResourceMomentFormat\d+/gim.test(dictName))
  .forEach((key) => {
    const name = key.substring('ResourceMomentFormat'.length);

    Components[`DateDisplay${name}`] = memo<{
      value?: any;
      split1?: string;
      split2?: string;
      errorUI?: ReactNode | null;
    }>(({ value, split1 = '-', split2 = ':', errorUI = null }) => {
      const dict = Resource.Dict.value[key].value;

      return (
        <ConditionalRender conditional={!!value} noMatch={() => errorUI}>
          {() => dayjs(value).format(dict instanceof Function ? dict(split1, split2) : dict)}
        </ConditionalRender>
      );
    });

    Components[`DateDisplay${name}`].toString = ({ value, split1 = '-', split2 = ':' }) => {
      const dict = Resource.Dict.value[key].value;

      return !!value
        ? dayjs(value).format(dict instanceof Function ? dict(split1, split2) : dict)
        : '';
    };
  });

/**
 * DateDisplayFromNow
 * @constructor
 * @classdesc 返回现在到当前实例的相对时间
 */
Components[`DateDisplayFromNow`] = memo<{
  value?: any;
  locale?: string;
  now?: boolean;
}>(({ value, locale, now = false }) => (
  <ConditionalRender conditional={!!value}>
    {() =>
      dayjs(value)
        ?.locale?.(globalLocal ?? locale)
        ?.fromNow?.(now)
    }
  </ConditionalRender>
));

Components[`DateDisplayFromNow`].toString = ({ value, locale, now = false }) =>
  !!value
    ? dayjs(value)
        .locale(globalLocal ?? locale)
        .fromNow(now)
    : '';

/**
 * DateDisplayToNow
 * @constructor
 * @classdesc 返回当前实例到现在的相对时间
 */
Components[`DateDisplayToNow`] = memo<{
  value?: any;
  locale?: string;
  now?: boolean;
}>(({ value, locale, now = false }) => (
  <ConditionalRender conditional={!!value}>
    {() =>
      dayjs(value)
        .locale(globalLocal ?? locale)
        .toNow(now)
    }
  </ConditionalRender>
));

Components[`DateDisplayToNow`].toString = ({ value, locale, now = false }) =>
  !!value
    ? dayjs(value)
        .locale(globalLocal ?? locale)
        .toNow(now)
    : '';

/**
 * DateDisplay
 * @constructor
 */
Components[`DateDisplay`] = memo<{
  value?: any;
  locale?: string;
  format?: string;
}>(({ value, locale, format }) => {
  const targetLocale = locale ?? globalLocal;

  const targetFormat = format;

  return (
    <ConditionalRender conditional={!!value}>
      {() => dayjs(value).locale(targetLocale).format(targetFormat)}
    </ConditionalRender>
  );
});

Components[`DateDisplay`].toString = ({ value, locale, format }) => {
  const targetLocale = locale ?? globalLocal;

  return !!value ? dayjs(value).locale(targetLocale).format(format) : '';
};

///////////////////////////////////////////////////////////////////////////////////////
localization.reduce((result, local) => {
  result[`DateDisplay${local.replace(' ', '')}`] = memo<{
    value: any;
    locale?: string;
  }>((props) => <Components.DateDisplay {...props} format={local} />);

  return result;
}, Components);

export default Components;

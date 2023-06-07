import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import 'dayjs/locale/en';
import 'dayjs/locale/pt';
import 'dayjs/locale/zh';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, { ReactNode, memo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Resource from '@baifendian/adhere-util-resource';

dayjs.extend(LocalizedFormat);
dayjs.extend(relativeTime);

const customLocaleFormats = {
  zh: {
    Q: 'MM/DD',
    q: 'M/D',
  },
  en: {
    Q: 'DD/MM',
    q: 'D/M',
  },
  pt: {
    Q: 'DD/MM',
    q: 'D/M',
  },
  ar: {
    Q: 'MMMM/D',
  },
};

const keys = Object.keys(Resource.Dict.handlers).filter((dictName) =>
  dictName.startsWith('ResourceMomentFormat'),
);

let globalLocal = 'zh';

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
  /**
   * setCustomLocaleFormats
   * @description 设置自定义本地化显示
   * @param {object} formats
   */
  setCustomLocaleFormats: (formats) => {
    return {
      ...customLocaleFormats,
      ...(formats ?? {}),
    };
  },
};

// 字典的组件
keys.forEach((key) => {
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
        .locale(globalLocal ?? locale)
        .fromNow(now)
    }
  </ConditionalRender>
));

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

  // @ts-ignore
  const targetFormat = customLocaleFormats?.[targetLocale]?.[format] ?? format;

  return (
    <ConditionalRender conditional={!!value}>
      {() => dayjs(value).locale(targetLocale).format(targetFormat)}
    </ConditionalRender>
  );
});

export default Components;

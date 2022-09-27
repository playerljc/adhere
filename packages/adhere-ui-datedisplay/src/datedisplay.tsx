import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/pt';
import 'dayjs/locale/zh-cn';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, { ReactNode, memo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Resource from '@baifendian/adhere-util-resource';

dayjs.extend(LocalizedFormat);
dayjs.extend(relativeTime);

const keys = Object.keys(Resource.Dict.handlers).filter((dictName) =>
  dictName.startsWith('ResourceMomentFormat'),
);

const Components = {
  dayjs,
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
}>(({ value, locale = 'zh-cn', now = false }) => (
  <ConditionalRender conditional={!!value}>
    {() => dayjs(value).locale(locale).fromNow(now)}
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
}>(({ value, locale = 'zh-cn', now = false }) => (
  <ConditionalRender conditional={!!value}>
    {() => dayjs(value).locale(locale).toNow(now)}
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
}>(({ value, locale = 'zh-cn', format }) => {
  return (
    <ConditionalRender conditional={!!value}>
      {() => dayjs(value).locale(locale).format(format)}
    </ConditionalRender>
  );
});

// 本地
['LT', 'LTS', 'L', 'LL', 'LLL', 'LLLL', 'l', 'll', 'lll', 'llll'].forEach((format) => {
  Components[`DateDisplay${format}`] = memo((props) => {
    const Com = Components['DateDisplay'];

    return <Com {...props} format={format} />;
  });
});

export default Components;

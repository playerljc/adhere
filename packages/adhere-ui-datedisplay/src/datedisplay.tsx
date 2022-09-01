import React from 'react';
import dayjs from 'dayjs';
import { ConditionalRender, Resource } from '@baifendian/adhere';

import 'dayjs/locale/zh-cn';
import 'dayjs/locale/pt';
import 'dayjs/locale/en';

import relativeTime from 'dayjs/plugin/relativeTime';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

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

  Components[`DateDisplay${name}`] = ({ value, split1 = '-', split2 = ':', errorUI = null }) => {
    const dict = Resource.Dict.value[key].value;

    return (
      <ConditionalRender conditional={!!value} noMatch={() => errorUI}>
        {() => dayjs(value).format(dict instanceof Function ? dict(split1, split2) : dict)}
      </ConditionalRender>
    );
  };
});

/**
 * DateDisplayFromNow
 * @constructor
 * @classdesc 返回现在到当前实例的相对时间
 */
Components[`DateDisplayFromNow`] = ({ value, locale = 'zh-cn', now = false }) => (
  <ConditionalRender conditional={!!value}>
    {() => dayjs(value).locale(locale).fromNow(now)}
  </ConditionalRender>
);

/**
 * DateDisplayToNow
 * @constructor
 * @classdesc 返回当前实例到现在的相对时间
 */
Components[`DateDisplayToNow`] = ({ value, locale = 'zh-cn', now = false }) => (
  <ConditionalRender conditional={!!value}>
    {() => dayjs(value).locale(locale).toNow(now)}
  </ConditionalRender>
);

/**
 * DateDisplay
 * @constructor
 */
Components[`DateDisplay`] = ({ value, locale = 'zh-cn', format }) => {
  return (
    <ConditionalRender conditional={!!value}>
      {() => dayjs(value).locale(locale).format(format)}
    </ConditionalRender>
  );
};

// 本地
const formats = ['LT', 'LTS', 'L', 'LL', 'LLL', 'LLLL', 'l', 'll', 'lll', 'llll'];
formats.forEach((format) => {
  Components[`DateDisplay${format}`] = (props) => {
    const Com = Components['DateDisplay'];

    return <Com {...props} format={format} />;
  };
});

export default Components;

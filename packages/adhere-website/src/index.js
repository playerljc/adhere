import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider as AdhereConfigProvider, Resource, Util } from '@baifendian/adhere';

import DictConfig from '@/config/dict/dict.config';
import Router from '@/lib/Router';

import 'nprogress/nprogress.css';

import '@baifendian/adhere/lib/css.less';

import './index.less';

// 配置字典
DictConfig();

// 获取当前语言
const lang = Util.getLang();

Router().then((routerConfig) => {
  ReactDOM.createRoot(document.getElementById('app')).render(
    <ConfigProvider locale={Resource.Dict.value.LocalsAntd.value[lang]}>
      <AdhereConfigProvider
        intl={{
          lang,
          locales: {
            en_US: require('./locales/en_US').default,
            zh_CN: require('./locales/zh_CN').default,
            pt_PT: require('./locales/pt_PT').default,
          },
        }}
      >
        {() => routerConfig}
      </AdhereConfigProvider>
    </ConfigProvider>,
  );
});

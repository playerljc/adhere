import { ConfigProvider as AntdConfigProvider } from 'antd';
import { ConfigProvider as AntdMobileConfigProvider } from 'antd-mobile';
import 'antd-mobile/es/global';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider as AdhereConfigProvider, Resource } from '@baifendian/adhere';

import { antdThemeToCssVariable } from './theme';

import 'antd/dist/reset.css';
import 'font-awesome/css/font-awesome.min.css';

import '@baifendian/adhere-ui-configprovider/es/index.less';
import '@baifendian/adhere/lib/css.less';

export default ({
  children,
  lang = 'zh_CN',
  locales = {
    en_US: [],
    zh_CN: [],
    pt_PT: [],
  },
  theme = {},
  curTheme = 'default',
}) => {
  ReactDOM.createRoot(document.getElementById('app')).render(
    <AntdConfigProvider locale={Resource.Dict.value.LocalsAntd.value[lang]}>
      <AntdMobileConfigProvider locale={zhCN}>
        <AdhereConfigProvider
          intl={{
            lang,
            locales,
          }}
          onIntlInit={() => {
            antdThemeToCssVariable(curTheme);
          }}
          theme={theme}
        >
          {() => children}
        </AdhereConfigProvider>
      </AntdMobileConfigProvider>
    </AntdConfigProvider>,
  );
};

import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider as AdhereConfigProvider, Resource } from '@baifendian/adhere';

import { antdThemeToCssVariable } from './theme';

import 'antd/dist/reset.css';
import 'font-awesome/css/font-awesome.min.css';

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
    <ConfigProvider locale={Resource.Dict.value.LocalsAntd.value[lang]}>
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
    </ConfigProvider>,
  );
};

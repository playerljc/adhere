import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider as AdhereConfigProvider, Resource, Util } from '@baifendian/adhere';

import DictConfig from '@/config/dict/dict.config';
import Router from '@/lib/Router';

import 'nprogress/nprogress.css';

import '@baifendian/adhere/lib/css.less';

// import '@baifendian/adhere/lib/index.less';
import './index.less';

let theme = {
  primaryColor: '#1890ff',
};

/**
 * render
 */
function render() {
  root.render(
    <ConfigProvider
      // direction={direction}
      theme={{
        token: {
          colorPrimary: theme.primaryColor,
          colorLink: theme.primaryColor,
        },
      }}
      locale={Resource.Dict.value.LocalsAntd.value[lang]}
    >
      <AdhereConfigProvider
        intl={{
          lang,
          locales: {
            en_US: require('./locales/en_US').default,
            zh_CN: require('./locales/zh_CN').default,
            pt_PT: require('./locales/pt_PT').default,
          },
        }}
        theme={theme}
        onIntlInit={() => {
          Router().then((routerConfig) => {
            RouterConfig = routerConfig;
            render();
          });
        }}
      >
        {() => (
          <div>
            <button
              onClick={() => {
                theme = {
                  primaryColor: 'red',
                };
                render();
              }}
            >
              changeAdhereTheme
            </button>
            {RouterConfig}
          </div>
        )}
      </AdhereConfigProvider>
    </ConfigProvider>,
  );
}

// 配置字典
DictConfig();

// 获取当前语言
const lang = Util.getLang();

let RouterConfig;

const root = ReactDOM.createRoot(document.getElementById('app'));

render();

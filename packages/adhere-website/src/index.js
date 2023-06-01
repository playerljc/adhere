import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider as AdhereConfigProvider, Dict, Resource, Util } from '@baifendian/adhere';

import DictConfig from '@/config/dict/dict.config';
import Router from '@/lib/Router';

import SelfUtil from './util';

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
      direction={direction}
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
          locales: Array.from(Object.values(Dict.value.SystemLang.value)).reduce((pre, cur) => {
            pre[cur.code] = cur.module;
            return pre;
          }, {}),
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

SelfUtil.initDirection();

const direction = SelfUtil.getDirection();

// 获取当前语言
const lang = Util.getLang();

let RouterConfig;

const root = ReactDOM.createRoot(document.getElementById('app'));

render();

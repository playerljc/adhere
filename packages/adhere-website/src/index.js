import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider as AdhereConfigProvider, Dict, Resource, Util } from '@baifendian/adhere';

import DictConfig from '@/config/dict/dict.config';
import Router from '@/lib/Router';
import { getThemeValue, setTheme } from '@/lib/Theme/Util';

import SelfUtil from './util';

import 'nprogress/nprogress.css';

import '@baifendian/adhere/lib/css.less';

// import '@baifendian/adhere/lib/index.less';
import './index.less';

/**
 * render
 */
export function render() {
  const themeValue = getThemeValue();

  root.render(
    <ConfigProvider
      direction={direction}
      theme={{
        token: {
          colorPrimary: themeValue['common-primary-color'],
          colorLink: themeValue['common-primary-color'],
          colorPrimaryBg: themeValue['common-color-primary-bg'],
          colorPrimaryBgHover: themeValue['common-color-primary-bg-hover'],
          colorPrimaryBorder: themeValue['common-color-primary-border'],
          colorPrimaryBorderHover: themeValue['common-color-primary-border-hover'],
          colorPrimaryHover: themeValue['common-color-primary-hover'],
          colorPrimaryActive: themeValue['common-color-primary-active'],
          colorPrimaryTextHover: themeValue['common-color-primary-text-hover'],
          colorPrimaryText: themeValue['common-color-primary-text'],
          colorPrimaryTextActive: themeValue['common-color-primary-text-active'],
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
        theme={{
          primaryColor: themeValue['common-primary-color'],
        }}
        onIntlInit={() => {
          Router().then((routerConfig) => {
            RouterConfig = routerConfig;
            render();
          });
        }}
      >
        {() => RouterConfig}
      </AdhereConfigProvider>
    </ConfigProvider>,
  );
}

// 配置字典
DictConfig();

setTheme('default');

SelfUtil.initDirection();

const direction = SelfUtil.getDirection();

// 获取当前语言
const lang = Util.getLang();

let RouterConfig;

const root = ReactDOM.createRoot(document.getElementById('app'));

render();

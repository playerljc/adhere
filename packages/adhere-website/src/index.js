import { useUpdateEffect } from 'ahooks';
import { App, ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  ConfigProvider as AdhereConfigProvider,
  Dict,
  MessageDialog,
  Resource,
  Util,
} from '@baifendian/adhere';

import DictConfig from '@/config/dict/dict.config';
import Router from '@/lib/Router';
import { getThemeValue, setTheme } from '@/lib/Theme/Util';

import SelfUtil from './util';

import 'nprogress/nprogress.css';

import '@baifendian/adhere/lib/css.less';

// import '@baifendian/adhere/lib/index.less';
import styles from './index.less';

function initMessageDialog(params) {
  MessageDialog.setAntdConfigProviderProps(params);
}

function Root() {
  const themeValue = getThemeValue();

  const configProviderProps = {
    direction,
    theme: {
      token: {
        colorPrimary: themeValue.token['common-primary-color'],
        colorLink: themeValue.token['common-primary-color'],
      },
      algorithm: themeValue.algorithm,
    },
    locale: Resource.Dict.value.LocalsAntd.value[lang],
  };

  useUpdateEffect(() => {
    initMessageDialog({ ...configProviderProps });
  });

  return (
    <ConfigProvider {...configProviderProps}>
      <App className={styles.App}>
        <AdhereConfigProvider
          intl={{
            lang,
            locales: Array.from(Object.values(Dict.value.SystemLang.value)).reduce((pre, cur) => {
              pre[cur.code] = cur.module;
              return pre;
            }, {}),
          }}
          theme={{
            colorPrimary: themeValue.token['common-primary-color'],
            colorTextBase: themeValue.mapToken.colorTextBase,
            colorBgBase: themeValue.mapToken.colorBgBase,
            colorBorderBase: themeValue.mapToken.colorBorder,
            colorSplitBase: themeValue.mapToken.colorSplit,
            fontSizeBase: `${themeValue.mapToken.fontSize}px`,
            borderRadiusBase: `${themeValue.mapToken.borderRadius}px`,
            lineWidth: `${themeValue.mapToken.lineWidth}px`,
            lintType: themeValue.mapToken.lineType,
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
      </App>
    </ConfigProvider>
  );
}

/**
 * render
 */
export function render() {
  root.render(<Root />);
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

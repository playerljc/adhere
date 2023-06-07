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
import themeToken, { getThemeValue, setTheme } from '@/lib/Theme/Util';

import SelfUtil from './util';

import 'nprogress/nprogress.css';

import '@baifendian/adhere/lib/css.less';

// import '@baifendian/adhere/lib/index.less';
import styles from './index.less';

let root;
let RouterConfig;
let lang;
let direction;

/**
 * initMessageDialog
 * @description 初始化messageDialog
 * @param params configProviderProps
 */
function initMessageDialog(params) {
  MessageDialog.setAntdConfigProviderProps(params);
}

/**
 * Root
 * @return {JSX.Element}
 * @constructor
 */
function Root() {
  const themeValue = getThemeValue();

  const colorPrimary = themeToken.getCommonPrimaryColor();

  const configProviderProps = {
    direction,
    theme: {
      token: {
        colorPrimary,
        colorLink: colorPrimary,
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
            colorPrimary,
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
 * @description render
 */
function render() {
  root.render(<Root />);
}

(function () {
  // 配置字典
  DictConfig();

  // 设置缺省主题
  setTheme('default');

  // 设置方向
  SelfUtil.initDirection();

  // 获取方向
  direction = SelfUtil.getDirection();

  // 获取当前语言
  lang = Util.getLang();

  // 设置root
  root = ReactDOM.createRoot(document.getElementById('app'));

  // render
  render();
})();

export { render };

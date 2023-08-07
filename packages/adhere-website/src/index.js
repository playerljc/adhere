import { useUpdateEffect } from 'ahooks';
import { App, ConfigProvider } from 'antd';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import {
  ConfigProvider as AdhereConfigProvider,
  DateDisplay,
  Dict,
  Emitter,
  MessageDialog,
  Preferences,
  Resource,
  Util,
} from '@baifendian/adhere';

import DictConfig from '@/config/dict/dict.config';
import Router from '@/lib/Router';
import themeToken, { getThemeValue, selectTheme } from '@/lib/Theme/Util';

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
 * Application
 * @return {JSX.Element}
 * @constructor
 */
function Application() {
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

  useEffect(() => {
    function SystemThemeChange() {
      render();
    }

    Emitter.on('SystemThemeChange', SystemThemeChange);

    return () => {
      Emitter.remove('SystemThemeChange', SystemThemeChange);
    };
  }, []);

  return (
    <ConfigProvider {...configProviderProps}>
      <App className={styles.App}>
        <AdhereConfigProvider
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
          intl={{
            lang,
            locales: Array.from(Object.values(Dict.value.SystemLang.value)).reduce((pre, cur) => {
              pre[cur.code] = cur.module;
              return pre;
            }, {}),
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
  root.render(<Application />);
}

(function () {
  // 配置字典
  DictConfig();

  // 设置方向
  SelfUtil.initDirection();

  // 设置缺省主题
  selectTheme(Preferences.getStringByLocal('theme') ?? 'default');

  // 初始化方向[ltr | rtl]
  SelfUtil.initDirection();

  // 获取方向
  direction = SelfUtil.getDirection();

  // 获取当前语言
  lang = Util.getLang();

  // 初始化dayjs的国际化
  DateDisplay.setGlobalLocal(Dict.value.SystemLang.value[lang].dayjsCode);

  // 设置root
  root = ReactDOM.createRoot(document.getElementById('app'));

  // render
  render();
})();

export { render };

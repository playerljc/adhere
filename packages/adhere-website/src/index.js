import { useUpdateEffect } from 'ahooks';
import { App } from 'antd';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import {
  StyleProvider,
  legacyLogicalPropertiesTransformer,
  px2remTransformer,
} from '@ant-design/cssinjs';
import {
  AdapterScreen,
  ConfigProvider as AdhereConfigProvider,
  ContextMenu,
  Dict,
  Emitter,
  MessageDialog,
  Notification,
  Popup,
  Preferences,
  Util,
} from '@baifendian/adhere';
import { ConfigProvider } from '@baifendian/adhere-ui-anthoc';

import DictConfig from '@/config/dict/dict.config';
import Router from '@/lib/Router';
import themeToken, { getThemeValue, selectTheme } from '@/lib/Theme/Util';

import SelfUtil from './util';

import 'nprogress/nprogress.css';

import '@baifendian/adhere-ui-anthoc/lib/index.less';
import '@baifendian/adhere/lib/css.less';

import styles from './index.less';

// 配置字典
DictConfig();

// 调用initial之前的设置
(function () {
  [
    // dayjs的设置
    () => {
      dayjs.extend(utc);
      dayjs.extend(timezone);
    },
  ].forEach((r) => r());
})();

if (SelfUtil.isUseMedia()) {
  // 适配REM
  AdapterScreen.flexible();

  // 适配minSize
  AdapterScreen.setPageMinSizeToCSS(document.getElementById('app'));
}

let root;
let RouterConfig;
let lang;
let direction;

/**
 * Application
 * @return {JSX.Element}
 * @constructor
 */
function Application() {
  const themeValue = getThemeValue();

  const colorPrimary = themeToken.getCommonPrimaryColor();

  const media = {
    isUseMedia: SelfUtil.isUseMedia(),
    designWidth: 192,
  };

  const antDesignConfigProviderProps = {
    direction,
    theme: {
      token: {
        colorPrimary,
        colorLink: colorPrimary,
      },
      algorithm: themeValue.algorithm,
    },
    locale: Dict.value.SystemLang.value[lang].antd,
  };

  const styleProviderProps = {
    transformers: [
      legacyLogicalPropertiesTransformer,
      media.isUseMedia &&
        px2remTransformer({
          rootValue: 192,
        }),
    ].filter((c) => !!c),
  };

  const locales = {
    [lang]: [
      ...Dict.value.SystemLang.value[lang].adhere,
      ...Dict.value.SystemLang.value[lang].module,
    ],
    [Dict.value.SystemDefaultLang.value]: [
      ...Dict.value.SystemLang.value[Dict.value.SystemDefaultLang.value].adhere,
      ...Dict.value.SystemLang.value[Dict.value.SystemDefaultLang.value].module,
    ],
  };

  const adhereProviderProps = {
    theme: {
      colorPrimary,
      colorTextBase: themeValue.mapToken.colorTextBase,
      colorBgBase: themeValue.mapToken.colorBgBase,
      colorBorderBase: themeValue.mapToken.colorBorder,
      colorSplitBase: themeValue.mapToken.colorSplit,
      fontSizeBase: `${Util.pxToRem(themeValue.mapToken.fontSize, media.designWidth, media)}`,
      borderRadiusBase: `${Util.pxToRem(
        themeValue.mapToken.borderRadius,
        media.designWidth,
        media,
      )}`,
      lineWidth: `${Util.pxToRem(themeValue.mapToken.lineWidth, media.designWidth, media)}`,
      lintType: themeValue.mapToken.lineType,
    },
    intl: {
      lang,
      locales,
    },
    onIntlInit: () => {
      Router().then((routerConfig) => {
        RouterConfig = routerConfig;
        render();
      });
    },
    media,
  };

  function renderToFragmentWrapper(children) {
    return (
      <ConfigProvider {...antDesignConfigProviderProps}>
        <StyleProvider {...styleProviderProps}>
          <AdhereConfigProvider {...adhereProviderProps} onIntlInit={() => {}} isUseWrapper={false}>
            {children}
          </AdhereConfigProvider>
        </StyleProvider>
      </ConfigProvider>
    );
  }

  function renderToWrapper(children) {
    return (
      <ConfigProvider {...antDesignConfigProviderProps}>
        <StyleProvider {...styleProviderProps}>
          <App className={styles.App}>
            <AdhereConfigProvider {...adhereProviderProps}>{children}</AdhereConfigProvider>
          </App>
        </StyleProvider>
      </ConfigProvider>
    );
  }

  useUpdateEffect(() => {
    MessageDialog.setRenderToWrapper(renderToFragmentWrapper);
    Popup.setRenderToWrapper(renderToFragmentWrapper);
    ContextMenu.setRenderToWrapper(renderToFragmentWrapper);
    Notification.setRenderToWrapper(renderToFragmentWrapper);
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

  return renderToWrapper(() => RouterConfig);
}

/**
 * render
 * @description render
 */
function render() {
  root.render(<Application />);
}

(function () {
  // 设置方向
  SelfUtil.initDirection();

  // 设置缺省主题
  selectTheme(Preferences.getStringByLocal('theme') ?? 'default');

  // 获取方向
  direction = SelfUtil.getDirection();

  // 获取当前语言
  lang = SelfUtil.getLang();

  // 初始化dayjs的国际化
  // DateDisplay.setGlobalLocal(Dict.value.SystemLang.value[lang].dayjsCode);
  Object.keys(Dict.value.SystemLang.value).forEach((_key) => {
    Dict.value.SystemLang.value[_key].dayjs();
  });

  // 设置root
  root = ReactDOM.createRoot(document.getElementById('app'));

  // render
  render();
})();

export { render };

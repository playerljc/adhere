import { useUpdateEffect } from 'ahooks';
import { App } from 'antd';
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
  DateDisplay,
  Dict,
  Emitter,
  MessageDialog,
  Notification,
  Popup,
  Preferences,
  Resource,
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

if (SelfUtil.isUseMedia()) {
  // 适配REM
  AdapterScreen.flexible();
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

  const antDesignConfigProviderProps = {
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

  const styleProviderProps = {
    transformers: [
      legacyLogicalPropertiesTransformer,
      SelfUtil.isUseMedia() &&
        px2remTransformer({
          rootValue: 192,
        }),
    ].filter((c) => !!c),
  };

  const adhereProviderProps = {
    theme: {
      colorPrimary,
      colorTextBase: themeValue.mapToken.colorTextBase,
      colorBgBase: themeValue.mapToken.colorBgBase,
      colorBorderBase: themeValue.mapToken.colorBorder,
      colorSplitBase: themeValue.mapToken.colorSplit,
      fontSizeBase: `${themeValue.mapToken.fontSize}px`,
      borderRadiusBase: `${themeValue.mapToken.borderRadius}px`,
      lineWidth: `${themeValue.mapToken.lineWidth}px`,
      lintType: themeValue.mapToken.lineType,
    },
    intl: {
      lang,
      locales: Array.from(Object.values(Dict.value.SystemLang.value)).reduce((pre, cur) => {
        pre[cur.code] = cur.module;
        return pre;
      }, {}),
    },
    onIntlInit: () => {
      Router().then((routerConfig) => {
        RouterConfig = routerConfig;
        render();
      });
    },
    media: {
      isUseMedia: SelfUtil.isUseMedia(),
      designWidth: 192,
    },
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

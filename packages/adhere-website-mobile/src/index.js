import '@/lib/Mobile';

import { useUpdateEffect } from 'ahooks';
import { App } from 'antd';
import { ConfigProvider as AntdMobileConfigProvider } from 'antd-mobile';
import 'antd-mobile/es/global';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import React from 'react';
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
  MessageDialog,
  Notification,
  Popup,
  Util,
} from '@baifendian/adhere';
import { ConfigProvider as AntdConfigProvider } from '@baifendian/adhere-ui-anthoc';

import DictConfig from '@/config/dict/dict.config';
import Router from '@/lib/Router';

import SelfUtil from './util';

import '@baifendian/adhere-mobile-ui-anthoc/lib/index.less';
import '@baifendian/adhere-ui-anthoc/lib/index.less';
import '@baifendian/adhere/lib/css.less';

import styles from './index.less';

// if (SelfUtil.isUseMedia()) {
//   // 适配REM
//   AdapterScreen.flexible();
// }

const rem = window.document.body.clientWidth / 10;
document.documentElement.style.fontSize = rem + 'px';

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
  const adhereProviderConfig = {
    theme: {},
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
      designWidth: 37.5,
    },
  };

  const styleProviderProps = {
    transformers: [
      legacyLogicalPropertiesTransformer,
      SelfUtil.isUseMedia() &&
        px2remTransformer({
          rootValue: 37.5,
        }),
    ].filter((c) => !!c),
  };

  useUpdateEffect(() => {
    MessageDialog.setRenderToWrapper(renderToFragmentWrapper);
    Popup.setRenderToWrapper(renderToFragmentWrapper);
    ContextMenu.setRenderToWrapper(renderToFragmentWrapper);
    Notification.setRenderToWrapper(renderToFragmentWrapper);
  });

  function renderToFragmentWrapper(children) {
    return (
      <AntdConfigProvider>
        <StyleProvider {...styleProviderProps}>
          <AntdMobileConfigProvider locale={zhCN}>
            <AdhereConfigProvider
              {...adhereProviderConfig}
              onIntlInit={() => {}}
              isUseWrapper={false}
            >
              {children}
            </AdhereConfigProvider>
          </AntdMobileConfigProvider>
        </StyleProvider>
      </AntdConfigProvider>
    );
  }

  function renderToWrapper(children) {
    return (
      <AntdConfigProvider>
        <StyleProvider {...styleProviderProps}>
          <App className={styles.App}>
            <AntdMobileConfigProvider locale={zhCN}>
              <AdhereConfigProvider {...adhereProviderConfig}>{children}</AdhereConfigProvider>
            </AntdMobileConfigProvider>
          </App>
        </StyleProvider>
      </AntdConfigProvider>
    );
  }

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

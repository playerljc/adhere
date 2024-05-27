/**
 * 否是通过mobile变量来判断
 * fastclick是否需要载入
 * amfe-flexible是否需要载入
 * postcss中的pxtorem插件是否需要载入
 */
import { ConfigProvider as AntdConfigProvider } from 'antd';
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
  ConfigProvider as AdhereConfigProvider,
  Browsersniff,
  ContextMenu,
  MessageDialog,
  Notification,
  Popup,
  Resource,
} from '@baifendian/adhere';

import { antdThemeToCssVariable } from './theme';
import { isUseMedia } from './util';

import 'antd/dist/reset.css';
import 'font-awesome/css/font-awesome.min.css';

import '@baifendian/adhere-ui-configprovider/es/index.less';
import '@baifendian/adhere/lib/css.less';

let timerRef = null;

// app载入移动端样式;
document.getElementById('app').classList.add('mobile');

// fastclick
import('react-fastclick').then((initReactFastclick) => initReactFastclick.default());

// ios端input失去焦点界面不返回
if (Browsersniff.iSOSiOS()) {
  document.addEventListener('focusin', (e) => {
    if (
      e &&
      e.target &&
      e.target.tagName &&
      ['input', 'textarea'].includes(e.target.tagName.toLowerCase())
    ) {
      clearTimeout(timerRef);
    }
  });

  document.addEventListener('focusout', (e) => {
    if (
      e &&
      e.target &&
      e.target.tagName &&
      ['input', 'textarea'].includes(e.target.tagName.toLowerCase())
    ) {
      timerRef = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  });
}

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
  const styleProviderProps = {
    transformers: [
      legacyLogicalPropertiesTransformer,
      isUseMedia() &&
        px2remTransformer({
          rootValue: 37.5,
        }),
    ].filter((c) => !!c),
  };

  const antDesignConfigProviderProps = {
    locale: Resource.Dict.value.LocalsAntd.value[lang],
  };

  function renderToFragmentWrapper(children) {
    return (
      <AntdConfigProvider {...antDesignConfigProviderProps}>
        <StyleProvider {...styleProviderProps}>
          <AntdMobileConfigProvider locale={zhCN}>
            <AdhereConfigProvider
              intl={{
                lang,
                locales,
              }}
              onIntlInit={() => {
                antdThemeToCssVariable(curTheme);
              }}
              theme={theme}
              media={{
                isUseMedia: isUseMedia(),
                designWidth: 37.5,
              }}
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
      <AntdConfigProvider {...antDesignConfigProviderProps}>
        <StyleProvider {...styleProviderProps}>
          <AntdMobileConfigProvider locale={zhCN}>
            <AdhereConfigProvider
              intl={{
                lang,
                locales,
              }}
              onIntlInit={() => {
                antdThemeToCssVariable(curTheme);
              }}
              theme={theme}
              media={{
                isUseMedia: isUseMedia(),
                designWidth: 37.5,
              }}
            >
              {children}
            </AdhereConfigProvider>
          </AntdMobileConfigProvider>
        </StyleProvider>
      </AntdConfigProvider>
    );
  }

  MessageDialog.setRenderToWrapper(renderToFragmentWrapper);
  Popup.setRenderToWrapper(renderToFragmentWrapper);
  ContextMenu.setRenderToWrapper(renderToFragmentWrapper);
  Notification.setRenderToWrapper(renderToFragmentWrapper);

  ReactDOM.createRoot(document.getElementById('app')).render(renderToWrapper(() => children));
};

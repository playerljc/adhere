/**
 * 否是通过mobile变量来判断
 * fastclick是否需要载入
 * amfe-flexible是否需要载入
 * postcss中的pxtorem插件是否需要载入
 */
import { ConfigProvider as AntdMobileConfigProvider } from 'antd-mobile';
import 'antd-mobile/es/global';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  StyleProvider,
  legacyLogicalPropertiesTransformer,
  px2remTransformer,
} from '@ant-design/cssinjs';
import { ConfigProvider as AntdConfigProvider } from '@baifendian/adhere-ui-anthoc';
import AdhereConfigProvider from '@baifendian/adhere-ui-configprovider';
import ContextMenu from '@baifendian/adhere-ui-contextmenu';
import MessageDialog from '@baifendian/adhere-ui-messagedialog';
import Notification from '@baifendian/adhere-ui-notification';
import Popup from '@baifendian/adhere-ui-popup';
import Browsersniff from '@baifendian/adhere-util-browsersniff';

import intl from './intl';
import { antdThemeToCssVariable } from './theme';
import { isUseMedia } from './util';

import 'antd/dist/reset.css';
import 'font-awesome/css/font-awesome.min.css';

import '@baifendian/adhere-ui-configprovider/es/index.less';
import '@baifendian/adhere-ui-css/lib/css.less';

let timerRef = null;

const rem = window.document.body.clientWidth / 10;
document.documentElement.style.fontSize = rem + 'px';

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

export default ({ children, lang = 'zh_CN', locales, theme = {}, curTheme = 'default' }) => {
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
    locale: intl[lang].antd,
  };

  function renderToFragmentWrapper(children) {
    return (
      <AntdConfigProvider {...antDesignConfigProviderProps}>
        <StyleProvider {...styleProviderProps}>
          <AntdMobileConfigProvider locale={intl[lang].adhereMobile}>
            <AdhereConfigProvider
              intl={{
                lang,
                locales: {
                  zh_CN: {
                    ...intl.zh_CN.adhere,
                    ...(locales?.zh_CN ?? {}),
                  },
                  en_US: {
                    ...intl.en_US.adhere,
                    ...(locales?.en_US ?? {}),
                  },
                  pt_PT: {
                    ...intl.pt_PT.adhere,
                    ...(locales?.pt_PT ?? {}),
                  },
                },
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
          <AntdMobileConfigProvider locale={intl[lang].adhereMobile}>
            <AdhereConfigProvider
              intl={{
                lang,
                locales: {
                  zh_CN: {
                    ...intl.zh_CN.adhere,
                    ...(locales?.zh_CN ?? {}),
                  },
                  en_US: {
                    ...intl.en_US.adhere,
                    ...(locales?.en_US ?? {}),
                  },
                  pt_PT: {
                    ...intl.pt_PT.adhere,
                    ...(locales?.pt_PT ?? {}),
                  },
                },
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

  Object.keys(intl).forEach((key) => {
    intl[key].dayjs();
  });

  MessageDialog.setRenderToWrapper(renderToFragmentWrapper);
  Popup.setRenderToWrapper(renderToFragmentWrapper);
  ContextMenu.setRenderToWrapper(renderToFragmentWrapper);
  Notification.setRenderToWrapper(renderToFragmentWrapper);

  ReactDOM.createRoot(document.getElementById('app')).render(renderToWrapper(() => children));
};

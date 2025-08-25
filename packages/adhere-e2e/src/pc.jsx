import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  StyleProvider,
  legacyLogicalPropertiesTransformer,
  px2remTransformer,
} from '@ant-design/cssinjs';
import { ConfigProvider } from '@baifendian/adhere-ui-anthoc';
import AdhereConfigProvider from '@baifendian/adhere-ui-configprovider';
import ContextMenu from '@baifendian/adhere-ui-contextmenu';
import MessageDialog from '@baifendian/adhere-ui-messagedialog';
import Notification from '@baifendian/adhere-ui-notification';
import Popup from '@baifendian/adhere-ui-popup';

import intl from './intl';
import { antdThemeToCssVariable } from './theme';
import { initDirection, isUseMedia } from './util';

import 'antd/dist/reset.css';
import 'font-awesome/css/font-awesome.min.css';

import '@baifendian/adhere-ui-configprovider/es/index.less';
import '@baifendian/adhere-ui-css/lib/css.less';

export default ({
  children,
  lang = 'zh_CN',
  locales,
  theme = {},
  curTheme = 'default',
  direction = 'ltr',
}) => {
  initDirection(direction);

  const styleProviderProps = {
    transformers: [
      legacyLogicalPropertiesTransformer,
      isUseMedia() &&
        px2remTransformer({
          rootValue: 192,
        }),
    ].filter((c) => !!c),
  };

  const antDesignConfigProviderProps = {
    locale: intl[lang].antd,
    getPopupContainer: () => document.body,
  };

  function renderToFragmentWrapper(children) {
    return (
      <ConfigProvider {...antDesignConfigProviderProps}>
        <StyleProvider {...styleProviderProps}>
          <AdhereConfigProvider
            intl={{
              lang,
              locales: {
                zh_CN: [...intl.zh_CN.adhere, ...(locales?.zh_CN ?? [])],
                en_US: [...intl.en_US.adhere, ...(locales?.en_US ?? [])],
                pt_PT: [...intl.pt_PT.adhere, ...(locales?.pt_PT ?? [])],
              },
            }}
            theme={theme}
            media={{
              isUseMedia: isUseMedia(),
              designWidth: 192,
            }}
            isUseWrapper={false}
            onIntlInit={() => {
              antdThemeToCssVariable(curTheme);
            }}
          >
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
          <AdhereConfigProvider
            intl={{
              lang,
              locales: {
                zh_CN: [...intl.zh_CN.adhere, ...(locales?.zh_CN ?? [])],
                en_US: [...intl.en_US.adhere, ...(locales?.en_US ?? [])],
                pt_PT: [...intl.pt_PT.adhere, ...(locales?.pt_PT ?? [])],
              },
            }}
            theme={theme}
            media={{
              isUseMedia: isUseMedia(),
              designWidth: 192,
            }}
            onIntlInit={() => {
              antdThemeToCssVariable(curTheme);
            }}
          >
            {children}
          </AdhereConfigProvider>
        </StyleProvider>
      </ConfigProvider>
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

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
import Resource from '@baifendian/adhere-util-resource';

import { antdThemeToCssVariable } from './theme';
import { isUseMedia } from './util';

import 'antd/dist/reset.css';
import 'font-awesome/css/font-awesome.min.css';

import '@baifendian/adhere-ui-configprovider/es/index.less';
import '@baifendian/adhere-ui-css/lib/css.less';

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
          rootValue: 192,
        }),
    ].filter((c) => !!c),
  };

  const antDesignConfigProviderProps = {
    locale: Resource.Dict.value.LocalsAntd.value[lang],
  };

  function renderToFragmentWrapper(children) {
    return (
      <ConfigProvider {...antDesignConfigProviderProps}>
        <StyleProvider {...styleProviderProps}>
          <AdhereConfigProvider
            intl={{
              lang,
              locales,
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
              locales,
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

  MessageDialog.setRenderToWrapper(renderToFragmentWrapper);
  Popup.setRenderToWrapper(renderToFragmentWrapper);
  ContextMenu.setRenderToWrapper(renderToFragmentWrapper);
  Notification.setRenderToWrapper(renderToFragmentWrapper);

  ReactDOM.createRoot(document.getElementById('app')).render(renderToWrapper(() => children));
};

import { ConfigProvider } from 'antd';
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
  Resource,
} from '@baifendian/adhere';

import { antdThemeToCssVariable } from './theme';

import 'antd/dist/reset.css';
import 'font-awesome/css/font-awesome.min.css';

import '@baifendian/adhere-ui-configprovider/es/index.less';
import '@baifendian/adhere/lib/css.less';

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
  AdapterScreen.detectZoom();

  const styleProviderProps = {
    transformers: [
      /**
       * 为了统一 LTR 和 RTL 样式，Ant Design 使用了 CSS 逻辑属性。例如原 margin-left 使用 margin-inline-start 代替，使其在 LTR 和 RTL 下都为起始位置间距。如果你需要兼容旧版浏览器（如 360 浏览器、QQ 浏览器 等等），可以通过 @ant-design/cssinjs 的 StyleProvider 配置 transformers 将其转换
       */
      legacyLogicalPropertiesTransformer,
      /**
       * REM转换
       */
      px2remTransformer({
        rootValue: 192,
      }),
    ],
  };

  ReactDOM.createRoot(document.getElementById('app')).render(
    <ConfigProvider locale={Resource.Dict.value.LocalsAntd.value[lang]}>
      <StyleProvider {...styleProviderProps}>
        <AdhereConfigProvider
          intl={{
            lang,
            locales,
          }}
          onIntlInit={() => {
            antdThemeToCssVariable(curTheme);
          }}
          theme={theme}
        >
          {() => children}
        </AdhereConfigProvider>
      </StyleProvider>
    </ConfigProvider>,
  );
};

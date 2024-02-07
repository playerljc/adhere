import { useUpdateEffect } from 'ahooks';
import { App } from 'antd';
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
import { ConfigProvider } from '@baifendian/adhere-ui-anthoc';

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

// import { ConfigProvider, DatePicker, Space, Typography } from 'antd';
// import en from 'antd/es/date-picker/locale/en_US';
// import enUS from 'antd/es/locale/en_US';
// import dayjs from 'dayjs';
// import buddhistEra from 'dayjs/plugin/buddhistEra';
// import React from 'react';
// import { createRoot } from 'react-dom/client';
//
// dayjs.extend(buddhistEra);
//
// const { Title } = Typography;
//
// const buddhistLocale = {
//   ...en,
//   lang: {
//     ...en.lang,
//     fieldDateFormat: 'YYYY/MM/DD',
//     fieldDateTimeFormat: 'YYYY/MM/DD HH:mm:ss',
//     yearFormat: 'BBBB',
//     cellYearFormat: 'BBBB',
//   },
// };
//
// // ConfigProvider level locale
// const globalBuddhistLocale = {
//   ...enUS,
//   DatePicker: {
//     ...enUS.DatePicker,
//     lang: buddhistLocale.lang,
//   },
// };
//
// const defaultValue = dayjs('2024-01-01');
//
// const App = () => {
//   const onChange = (_, dateStr) => {
//     console.log('onChange:', dateStr);
//   };
//
//   return (
//     <Space direction="vertical">
//       <Title level={4}>By locale props</Title>
//       <DatePicker defaultValue={defaultValue} locale={buddhistLocale} onChange={onChange} />
//       <DatePicker
//         defaultValue={defaultValue}
//         showTime
//         locale={buddhistLocale}
//         onChange={onChange}
//       />
//
//       <Title level={4}>By ConfigProvider</Title>
//       <ConfigProvider locale={globalBuddhistLocale}>
//         <Space direction="vertical">
//           <DatePicker defaultValue={defaultValue} onChange={onChange} />
//           <DatePicker defaultValue={defaultValue} showTime onChange={onChange} />
//         </Space>
//       </ConfigProvider>
//     </Space>
//   );
// };
//
// createRoot(document.getElementById('app')).render(<App />);

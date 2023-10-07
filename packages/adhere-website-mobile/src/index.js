import { ConfigProvider as AntdConfigProvider, App } from 'antd';
import { ConfigProvider as AntdMobileConfigProvider } from 'antd-mobile';
import 'antd-mobile/es/global';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  ConfigProvider as AdhereConfigProvider,
  DateDisplay,
  Dict,
  Util,
} from '@baifendian/adhere';

import DictConfig from '@/config/dict/dict.config';
import Router from '@/lib/Router';

import SelfUtil from './util';

import '@baifendian/adhere/lib/css.less';

import styles from './index.less';

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
  return (
    <AntdConfigProvider>
      <App className={styles.App}>
        <AntdMobileConfigProvider locale={zhCN}>
          <AdhereConfigProvider
            theme={{}}
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
        </AntdMobileConfigProvider>
      </App>
    </AntdConfigProvider>
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

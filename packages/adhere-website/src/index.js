import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { Intl, Dict, Util } from '@baifendian/adhere';

import Router from '@/lib/Router';
import DictConfig from '@/config/dict.config';

// import 'antd/dist/antd.less';
import './index.less';

// 配置字典
DictConfig();

// 获取当前语言
const lang = Util.getLang();

// moment的国际化
Dict.value.SystemMomentLocals.value[lang]();

// 初始化国际化
Intl.init({
  currentLocale: lang,
}).then(() => {
  Router().then((routerConfig) => {
    ReactDOM.render(
      <ConfigProvider locale={Dict.value.SystemAntdLocals.value[lang]}>
        {routerConfig}
      </ConfigProvider>,
      document.getElementById('app'),
    );
  });
});

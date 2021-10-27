import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { Intl, Util, Resource } from '@baifendian/adhere';

import Router from '@/lib/Router';
import DictConfig from '@/config/dict.config';

import 'antd/dist/antd.less';
import '@baifendian/adhere/lib/css.less';
import './index.less';

// 配置字典
DictConfig();

// 获取当前语言
const lang = Util.getLang();

Resource.Dict.value.LocalsMoment.value[lang]();

// 初始化国际化
Intl.init({
  currentLocale: lang,
}).then(() => {
  Router().then((routerConfig) => {
    ReactDOM.render(
      <ConfigProvider locale={Resource.Dict.value.LocalsAntd.value[lang]}>
        {routerConfig}
      </ConfigProvider>,
      document.getElementById('app'),
    );
  });
});

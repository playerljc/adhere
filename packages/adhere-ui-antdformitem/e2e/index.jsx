import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider as AdhereConfigProvider, Resource } from '@baifendian/adhere';

import DictConfig from '@/dict';

// import AntFormItemNormalize from './AntFormItemNormalize';
import 'antd/dist/reset.css';
import 'font-awesome/css/font-awesome.min.css';

import '@baifendian/adhere/lib/css.less';

// 配置字典
DictConfig();

import('./FormItemGeneratorToDict').then((Module) => {
  const Component = Module.default;

  ReactDOM.createRoot(document.getElementById('app')).render(
    <ConfigProvider locale={Resource.Dict.value.LocalsAntd.value['zh_CN']}>
      <AdhereConfigProvider
        intl={{
          lang: 'zh_CN',
          locales: {
            en_US: [],
            zh_CN: [],
            pt_PT: [],
          },
        }}
      >
        {() => {
          // return <AntFormItemNormalize />
          return <Component />;
        }}
      </AdhereConfigProvider>
    </ConfigProvider>,
  );
});

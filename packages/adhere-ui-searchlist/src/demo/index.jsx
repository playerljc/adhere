import { ConfigProvider } from 'antd';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider as AdhereConfigProvider, Resource } from '@baifendian/adhere';

import DictConfig from './config/dict/dict.config';

import '../index.less';

// 配置字典
DictConfig();

const List = lazy(() =>
  import(/* webpackChunkName: "conditionalrender" */ './ProStateSearchList.jsx'),
);

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
      {() => (
        <div style={{ display: 'flex', width: 700, height: 700 }}>
          <Suspense fallback={<div>loading</div>}>
            <List />
          </Suspense>
        </div>
      )}
    </AdhereConfigProvider>
  </ConfigProvider>,
);

import { ConfigProvider } from 'antd';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider as AdhereConfigProvider, Resource } from '@baifendian/adhere';

import DictConfig from './config/dict/dict.config';

import 'antd/dist/reset.css';
import 'font-awesome/css/font-awesome.min.css';

import '@baifendian/adhere/lib/css.less';

import '../src/index.less';

// 配置字典
DictConfig();

const ProSearchStateTableImpl = lazy(() =>
  import(/* webpackChunkName: "conditionalrender" */ './proRowDragSortSearchTable.jsx'),
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
        <div style={{ display: 'flex', height: 700 }}>
          <Suspense fallback={<div>loading</div>}>
            <ProSearchStateTableImpl pagination={true} />
          </Suspense>
        </div>
      )}
    </AdhereConfigProvider>
  </ConfigProvider>,
);

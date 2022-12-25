import { ConfigProvider } from 'antd';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

import AdhereConfigProvider from '@baifendian/adhere-ui-configprovider';
import Resource from '@baifendian/adhere-util-resource';

import DictConfig from './config/dict/dict.config';

import '../index.less';
import './index.less';

// 配置字典
DictConfig();

const ProSearchStateTableImpl = lazy(
  // @ts-ignore
  () => import(/* webpackChunkName: "conditionalrender" */ './proRowDragSortSearchTable.jsx'),
);

ReactDOM.render(
  <ConfigProvider locale={Resource.Dict.value.LocalsAntd.value['zh_CN']}>
    <AdhereConfigProvider
      // @ts-ignore
      intl={{
        lang: 'zh_CN',
        locales: {},
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
  document.getElementById('app'),
);

import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider as AdhereConfigProvider, Resource } from '@baifendian/adhere';

import FormDesign from './FormDesign';

// import GridLayout from './GridLayout';
import 'antd/dist/reset.css';
import 'font-awesome/css/font-awesome.min.css';

import '@baifendian/adhere/lib/css.less';

import './index.less';

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
        return <FormDesign />;
      }}
    </AdhereConfigProvider>
  </ConfigProvider>,
);

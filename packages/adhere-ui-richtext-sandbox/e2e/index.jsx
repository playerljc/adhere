import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider as AdhereConfigProvider, Resource } from '@baifendian/adhere';

// import ReactQuill from './reactquill';
import WangEditor from './wangeditor';

import 'antd/dist/reset.css';
import 'font-awesome/css/font-awesome.min.css';

import '@baifendian/adhere/lib/css.less';

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
        return <WangEditor />;
      }}
    </AdhereConfigProvider>
  </ConfigProvider>,
);

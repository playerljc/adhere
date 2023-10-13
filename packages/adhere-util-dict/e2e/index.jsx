import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import DictConfig from './dict';
import Test from './test';

import 'antd/dist/reset.css';
import 'font-awesome/css/font-awesome.min.css';

import '@baifendian/adhere/lib/css.less';

DictConfig();

import('./test').then((Module) => {
  const Test = Module.default;

  e2e.PC({
    children: <Test />,
  });
});

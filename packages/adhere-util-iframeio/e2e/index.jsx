import React from 'react';

import e2e from '@baifendian/adhere-e2e';
import { browserConfig } from '@ctsj/router';

import Client from './app/client';
import Server from './app/server';

import 'antd/dist/reset.css';
import 'font-awesome/css/font-awesome.min.css';

import '@baifendian/adhere/lib/css.less';

e2e.PC({
  children: browserConfig(
    [
      {
        path: '/',
        redirect: '/client',
      },
      {
        path: '/client',
        component: Client,
      },
      {
        path: '/server',
        component: Server,
      },
    ],
    () => {},
  ),
});

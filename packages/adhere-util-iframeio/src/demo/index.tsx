import React from 'react';
import ReactDOM from 'react-dom';

import { browserConfig } from '@ctsj/router';

import Client from './client';
import Server from './server';

import 'antd/dist/antd.min.css';

ReactDOM.render(
  browserConfig(
    [
      {
        path: '/',
        redirect: '/client',
      },
      {
        path: '/client',
        //
        component: Client,
      },
      {
        path: '/server',
        //
        component: Server,
      },
    ],
    () => {},
  ),
  document.getElementById('app'),
);

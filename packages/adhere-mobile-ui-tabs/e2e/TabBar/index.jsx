import React from 'react';

import { browserConfig } from '@ctsj/router';

import Home from './Home';
import Message from './Message';
import PersonalCenter from './PersonalCenter';
import TabBar from './TabBar';
import Todo from './Todo';

const config = [
  {
    path: '/',
    component: TabBar,
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/todo',
        component: Todo,
      },
      {
        path: '/message',
        component: Message,
      },
      {
        path: '/personalcenter',
        component: PersonalCenter,
      },
    ],
  },
];

const Router = browserConfig(config);

export default () => Router;

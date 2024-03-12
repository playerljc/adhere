import { Badge } from 'antd-mobile';
import { AppOutline, MessageFill, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';
import React from 'react';

import MobileTabs from '../../src';

import '../../src/index.less';

const { TabBar } = MobileTabs;

export default ({ children }) => (
  <TabBar
    className="TabBarWrap"
    items={[
      {
        key: '/home',
        title: '首页',
        icon: <AppOutline />,
        badge: Badge.dot,
      },
      {
        key: '/todo',
        title: '待办',
        icon: <UnorderedListOutline />,
        badge: '5',
      },
      {
        key: '/message',
        title: '消息',
        icon: <MessageFill />,
        badge: '99+',
      },
      {
        key: '/personalcenter',
        title: '我的',
        icon: <UserOutline />,
      },
    ]}
  >
    {children}
  </TabBar>
);

import { Badge } from 'antd-mobile';
import { AppOutline, MessageFill, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';
import React from 'react';

import { MobileTabs } from '@baifendian/adhere';

import styles from '../../index.less';

const { TabBar } = MobileTabs;

export default ({ children }) => (
  <TabBar
    className={styles.TabBarWrap}
    items={[
      {
        key: '/adhere/component/ui/tabs/p2/home',
        title: '首页',
        icon: <AppOutline />,
        badge: Badge.dot,
      },
      {
        key: '/adhere/component/ui/tabs/p2/todo',
        title: '待办',
        icon: <UnorderedListOutline />,
        badge: '5',
      },
      {
        key: '/adhere/component/ui/tabs/p2/message',
        title: '消息',
        icon: <MessageFill />,
        badge: '99+',
      },
      {
        key: '/adhere/component/ui/tabs/p2/personalcenter',
        title: '我的',
        icon: <UserOutline />,
      },
    ]}
  >
    {children}
  </TabBar>
);

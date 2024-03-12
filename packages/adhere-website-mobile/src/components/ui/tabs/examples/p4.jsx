import React from 'react';

import { MobileTabs } from '@baifendian/adhere';

const { JumboTabs } = MobileTabs;

export default () => (
  <JumboTabs
    defaultActiveKey="1"
    items={[
      {
        key: '1',
        title: 'Espresso',
        description: '描述文案',
        children: '1',
      },
      {
        key: '2',
        title: 'Coffee Latte',
        description: '描述文案',
        children: '2',
      },
      {
        key: '3',
        title: 'Cappuccino',
        description: '描述文案',
        children: '3',
      },
      {
        key: '4',
        title: 'Americano',
        description: '描述文案',
        children: '4',
      },
      {
        key: '5',
        title: 'Flat White',
        description: '描述文案',
        children: '5',
      },
      {
        key: '6',
        title: 'Caramel Macchiato',
        description: '描述文案',
        children: '6',
      },
      {
        key: '7',
        title: 'Cafe Mocha',
        description: '描述文案',
        children: '7',
      },
    ]}
  />
);

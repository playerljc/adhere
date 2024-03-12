import React from 'react';

import { MobileTabs } from '@baifendian/adhere';

const { CapsuleTabs } = MobileTabs;

export default () => (
  <CapsuleTabs
    defaultActiveKey="1"
    items={[
      {
        key: '1',
        title: 'Espresso',
        children: '1',
      },
      {
        key: '2',
        title: 'Coffee Latte',
        children: '2',
      },
      {
        key: '3',
        title: 'Cappuccino',
        children: '3',
      },
      {
        key: '4',
        title: 'Americano',
        children: '4',
      },
      {
        key: '5',
        title: 'Flat White',
        children: '5',
      },
      {
        key: '6',
        title: 'Caramel Macchiato',
        children: '6',
      },
      {
        key: '7',
        title: 'Cafe Mocha',
        children: '7',
      },
    ]}
  />
);

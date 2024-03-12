import React from 'react';

import { MobileTabs } from '@baifendian/adhere';

const { CapsuleTabs } = MobileTabs;

export default () => (
  <CapsuleTabs
    items={[
      {
        key: 'fruits',
        title: '水果',
        children: '菠萝',
      },
      {
        key: 'vegetables',
        title: '蔬菜',
        children: '西红柿',
      },
      {
        key: 'animals',
        title: '动物',
        children: '蚂蚁',
      },
    ]}
  />
);

import React from 'react';

import { MobileTabs } from '@baifendian/adhere';

const { JumboTabs } = MobileTabs;

export default () => (
  <JumboTabs
    items={[
      {
        key: 'fruits',
        description: '描述文案',
        title: '水果',
        children: '菠萝',
      },
      {
        key: 'vegetables',
        title: '蔬菜',
        description: '描述文案',
        children: '西红柿',
      },
      {
        key: 'animals',
        title: '动物',
        description: '描述文案',
        children: '蚂蚁',
      },
    ]}
  />
);

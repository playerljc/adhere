import React from 'react';

import MobileTabs from '../src';

import '../src/index.less';

const { JumboTabs } = MobileTabs;

export default () => (
  <JumboTabs
    items={[
      {
        key: 'fruits',
        description: '描述文案',
        title: '水果',
        children: <div>菠萝</div>,
      },
      {
        key: 'vegetables',
        title: '蔬菜',
        description: '描述文案',
        children: <div>西红柿</div>,
      },
      {
        key: 'animals',
        title: '动物',
        description: '描述文案',
        children: <div>蚂蚁</div>,
      },
    ]}
  />
);

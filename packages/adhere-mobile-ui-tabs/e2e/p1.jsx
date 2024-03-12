import React from 'react';

import MobileTabs from '../src';

import '../src/index.less';

const { CapsuleTabs } = MobileTabs;

export default () => (
  <CapsuleTabs
    items={[
      {
        key: 'fruits',
        title: '水果',
        children: <div>菠萝</div>,
      },
      {
        key: 'vegetables',
        title: '蔬菜',
        children: <div>西红柿</div>,
      },
      {
        key: 'animals',
        title: '动物',
        children: <div>蚂蚁</div>,
      },
    ]}
  />
);

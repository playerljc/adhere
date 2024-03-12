import React from 'react';

import MobileTabs from '../src';

import '../src/index.less';

const { SideTabs } = MobileTabs;

export default () => (
  <SideTabs
    activeKey="1"
    items={Array.from({ length: 6 })
      .fill(0)
      .map((item, _index) => ({
        key: `${_index + 1}`,
        title: `选项卡${_index + 1}`,
        children: <div>{_index + 1}</div>,
      }))}
  />
);

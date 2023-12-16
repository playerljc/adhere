import React from 'react';

import { MobileTabs } from '@baifendian/adhere';

const { SideTabs } = MobileTabs;

export default () => (
  <SideTabs activeKey="1">
    {Array.from({ length: 6 })
      .fill(0)
      .map((item, _index) => (
        <SideTabs.Tab key={`${_index + 1}`} title={`选项卡${_index + 1}`}>
          {_index + 1}
        </SideTabs.Tab>
      ))}
  </SideTabs>
);

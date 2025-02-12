import React from 'react';

import { MobileTabs } from '@baifendian/adhere';

const { Tabs } = MobileTabs;

export default () => (
  <Tabs>
    <Tabs.Tab title="水果" key="fruits">
      菠萝
    </Tabs.Tab>
    <Tabs.Tab title="蔬菜" key="vegetables">
      西红柿
    </Tabs.Tab>
    <Tabs.Tab title="动物" key="animals">
      蚂蚁
    </Tabs.Tab>
  </Tabs>
);

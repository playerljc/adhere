import React from 'react';

import { MobileTabs } from '@baifendian/adhere';

const { JumboTabs } = MobileTabs;

export default () => (
  <JumboTabs>
    <JumboTabs.Tab title="水果" description="描述文案" key="fruits">
      菠萝
    </JumboTabs.Tab>
    <JumboTabs.Tab title="蔬菜" description="描述文案" key="vegetables">
      西红柿
    </JumboTabs.Tab>
    <JumboTabs.Tab title="动物" description="描述文案" key="animals">
      蚂蚁
    </JumboTabs.Tab>
  </JumboTabs>
);

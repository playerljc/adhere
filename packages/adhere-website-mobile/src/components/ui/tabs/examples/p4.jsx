import React from 'react';

import { MobileTabs } from '@baifendian/adhere';

const { JumboTabs } = MobileTabs;

export default () => (
  <JumboTabs defaultActiveKey="1">
    <JumboTabs.Tab title="Espresso" description="描述文案" key="1">
      1
    </JumboTabs.Tab>
    <JumboTabs.Tab title="Coffee Latte" description="描述文案" key="2">
      2
    </JumboTabs.Tab>
    <JumboTabs.Tab title="Cappuccino" description="描述文案" key="3">
      3
    </JumboTabs.Tab>
    <JumboTabs.Tab title="Americano" description="描述文案" key="4">
      4
    </JumboTabs.Tab>
    <JumboTabs.Tab title="Flat White" description="描述文案" key="5">
      5
    </JumboTabs.Tab>
    <JumboTabs.Tab title="Caramel Macchiato" description="描述文案" key="6">
      6
    </JumboTabs.Tab>
    <JumboTabs.Tab title="Cafe Mocha" description="描述文案" key="7">
      7
    </JumboTabs.Tab>
  </JumboTabs>
);

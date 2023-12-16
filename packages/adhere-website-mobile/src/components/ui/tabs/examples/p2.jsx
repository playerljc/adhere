import React from 'react';

import { MobileTabs } from '@baifendian/adhere';

const { CapsuleTabs } = MobileTabs;

export default () => (
  <CapsuleTabs defaultActiveKey="1">
    <CapsuleTabs.Tab title="Espresso" key="1">
      1
    </CapsuleTabs.Tab>
    <CapsuleTabs.Tab title="Coffee Latte" key="2">
      2
    </CapsuleTabs.Tab>
    <CapsuleTabs.Tab title="Cappuccino" key="3">
      3
    </CapsuleTabs.Tab>
    <CapsuleTabs.Tab title="Americano" key="4">
      4
    </CapsuleTabs.Tab>
    <CapsuleTabs.Tab title="Flat White" key="5">
      5
    </CapsuleTabs.Tab>
    <CapsuleTabs.Tab title="Caramel Macchiato" key="6">
      6
    </CapsuleTabs.Tab>
    <CapsuleTabs.Tab title="Cafe Mocha" key="7">
      7
    </CapsuleTabs.Tab>
  </CapsuleTabs>
);

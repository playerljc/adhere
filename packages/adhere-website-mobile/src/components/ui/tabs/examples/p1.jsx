import React from 'react';

import { MobileTabs } from '@baifendian/adhere';

const { CapsuleTabs } = MobileTabs;

export default () => (
  <CapsuleTabs>
    <CapsuleTabs.Tab title="水果" key="fruits">
      菠萝
    </CapsuleTabs.Tab>
    <CapsuleTabs.Tab title="蔬菜" key="vegetables">
      西红柿
    </CapsuleTabs.Tab>
    <CapsuleTabs.Tab title="动物" key="animals">
      蚂蚁
    </CapsuleTabs.Tab>
  </CapsuleTabs>
);

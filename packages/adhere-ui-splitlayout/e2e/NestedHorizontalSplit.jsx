import React from 'react';

import { FlexLayout, Space } from '@baifendian/adhere';

import SplitLayout from '../src/index';

import 'antd/dist/reset.css';

import '../src/index.less';
import './index.less';

const { Fixed, Auto } = FlexLayout;

export default () => (
  <div>
    {/*<FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
      <Fixed style={{ width: 30 }} />
      <SplitLayout />
      <Auto />
    </FlexLayout>

    <Space size={30} />*/}

    <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
      <Auto />

      <SplitLayout />

      <Fixed style={{ width: 450 }}>
        <FlexLayout direction="horizontal" style={{ height: 200 }}>
          <Auto />

          <SplitLayout />

          <Fixed style={{ width: 50 }} />
        </FlexLayout>
      </Fixed>
    </FlexLayout>

    {/*<Space size={30} />

    <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
      <Fixed style={{ height: 30 }} />
      <SplitLayout style={{ width: 'auto' }} />
      <Auto />
    </FlexLayout>

    <Space size={30} />

    <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
      <Auto />
      <SplitLayout style={{ width: 'auto' }} />
      <Fixed style={{ height: 30 }} />
    </FlexLayout>*/}
  </div>
);

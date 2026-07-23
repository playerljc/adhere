import React from 'react';

import { FlexLayout, Space } from '@baifendian/adhere';

import SplitLayout from '../src/index';

import 'antd/dist/reset.css';

import '../src/index.less';
import './index.less';

const { Fixed, Auto } = FlexLayout;

export default () => (
  <>
    <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
      <Fixed style={{ width: 120, background: '#e6f4ff' }}>Left Fixed</Fixed>
      <SplitLayout />
      <Auto style={{ background: '#f6ffed' }}>Right Auto</Auto>
    </FlexLayout>

    <Space size={30} />

    <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
      <Auto style={{ background: '#f6ffed' }}>Left Auto</Auto>
      <SplitLayout />
      <Fixed style={{ width: 120, background: '#e6f4ff' }}>Right Fixed</Fixed>
    </FlexLayout>

    <Space size={30} />

    <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
      <Fixed style={{ height: 48, background: '#e6f4ff' }}>Top Fixed</Fixed>
      <SplitLayout style={{ width: 'auto' }} />
      <Auto style={{ background: '#f6ffed' }}>Bottom Auto</Auto>
    </FlexLayout>

    <Space size={30} />

    <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
      <Auto style={{ background: '#f6ffed' }}>Top Auto</Auto>
      <SplitLayout style={{ width: 'auto' }} />
      <Fixed style={{ height: 48, background: '#e6f4ff' }}>Bottom Fixed</Fixed>
    </FlexLayout>
  </>
);

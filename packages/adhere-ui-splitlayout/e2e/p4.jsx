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
      <Fixed style={{ width: 30 }} />
      <SplitLayout minSize="20%" maxSize="50%" />
      <Auto />
    </FlexLayout>

    <Space size={30} />

    <FlexLayout style={{ height: 400, border: '1px solid #ccc' }}>
      <Fixed style={{ height: 30 }} />
      <SplitLayout minSize="20%" maxSize="50%" style={{ width: 'auto' }} />
      <Auto />
    </FlexLayout>
  </>
);

import React from 'react';

import { FlexLayout, Space, SplitLayout } from '@baifendian/adhere';

const { Fixed, Auto } = FlexLayout;

export default () => (
  <>
    <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
      <Fixed style={{ width: 30 }} />
      <SplitLayout />
      <Auto />
    </FlexLayout>

    <Space size={30} />

    <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
      <Auto />
      <SplitLayout />
      <Fixed style={{ width: 30 }} />
    </FlexLayout>

    <Space size={30} />

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
    </FlexLayout>
  </>
);

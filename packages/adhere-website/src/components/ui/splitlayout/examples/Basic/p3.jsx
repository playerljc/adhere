import React from 'react';

import { FlexLayout, Space, SplitLayout } from '@baifendian/adhere';

const { Fixed, Auto } = FlexLayout;

export default () => (
  <>
    <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
      <Fixed style={{ width: 30 }} />

      <SplitLayout />

      <Auto>
        <FlexLayout>
          <Fixed style={{ height: 30 }} />

          <SplitLayout style={{ width: 'auto' }} />

          <Auto />

          <SplitLayout style={{ width: 'auto' }} />

          <Fixed style={{ height: 30 }} />
        </FlexLayout>
      </Auto>

      <SplitLayout />

      <Fixed style={{ width: 30 }} />
    </FlexLayout>

    <Space size={30} />

    <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
      <Fixed style={{ height: 30 }} />

      <SplitLayout style={{ width: 'auto' }} />

      <Auto>
        <FlexLayout direction="horizontal">
          <Fixed style={{ width: 30 }} />

          <SplitLayout />

          <Auto />

          <SplitLayout />

          <Fixed style={{ width: 30 }} />
        </FlexLayout>
      </Auto>

      <SplitLayout style={{ width: 'auto' }} />

      <Fixed style={{ height: 30 }} />
    </FlexLayout>

    <Space size={30} />

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
  </>
);

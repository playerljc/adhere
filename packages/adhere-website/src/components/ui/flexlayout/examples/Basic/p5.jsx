import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

const { VerticalFlexLayout } = FlexLayout;

export default () => {
  return (
    <VerticalFlexLayout
      style={{ width: '100%', height: 300, border: '1px solid #ccc' }}
      topStyle={{ borderBottom: '1px solid #ccc', height: 80 }}
      bottomStyle={{ borderTop: '1px solid #ccc', height: 80 }}
      renderTop={<div>Top</div>}
      renderMain={<div>Main</div>}
      renderBottom={<div>Bottom</div>}
    />
  );
};

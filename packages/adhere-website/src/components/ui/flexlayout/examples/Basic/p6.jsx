import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

const { VerticalFlexLayout, HorizontalFlexLayout } = FlexLayout;

export default () => {
  return (
    <HorizontalFlexLayout
      style={{ width: '100%', border: '1px solid #ccc' }}
      leftStyle={{ borderRight: '1px solid #ccc', width: 100 }}
      rightStyle={{ borderLeft: '1px solid #ccc', width: 100 }}
      renderLeft={<div>Left</div>}
      renderMain={
        <VerticalFlexLayout
          style={{ width: '100%', height: 300 }}
          topStyle={{ borderBottom: '1px solid #ccc', height: 80 }}
          bottomStyle={{ borderTop: '1px solid #ccc', height: 80 }}
          renderTop={<div>Top</div>}
          renderMain={<div>Main</div>}
          renderBottom={<div>Bottom</div>}
        />
      }
      renderRight={<div>Right</div>}
    />
  );
};

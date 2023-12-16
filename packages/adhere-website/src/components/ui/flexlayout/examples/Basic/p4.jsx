import React from 'react';

import { FlexLayout } from '@baifendian/adhere';

const { HorizontalFlexLayout } = FlexLayout;

export default () => {
  return (
    <HorizontalFlexLayout
      style={{ width: '100%', height: 300, border: '1px solid #ccc' }}
      leftStyle={{ borderRight: '1px solid #ccc', width: 100 }}
      rightStyle={{ borderLeft: '1px solid #ccc', width: 100 }}
      renderLeft={<div>Left</div>}
      renderMain={<div>Main</div>}
      renderRight={<div>Right</div>}
    />
  );
};

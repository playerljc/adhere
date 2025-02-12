import React from 'react';

import FlexLayout from '../src/index';

import '../src/index.less';

export default () => {
  return (
    <div style={{ height: 500 }}>
      <FlexLayout.SpaceBetween style={{ height: '100%' }} direction="vertical">
        <div>111</div>

        <div>111</div>

        <div>111</div>
      </FlexLayout.SpaceBetween>
    </div>
  );
};

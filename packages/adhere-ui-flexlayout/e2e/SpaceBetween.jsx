import React from 'react';

import FlexLayout from '../src/index';

import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div className="wrap">
      <FlexLayout.SpaceBetween style={{ height: '100%', border: '1px solid #d9d9d9' }} direction="vertical">
        <div className="region">Item A</div>
        <div className="region">Item B</div>
        <div className="region">Item C</div>
      </FlexLayout.SpaceBetween>
    </div>
  );
};

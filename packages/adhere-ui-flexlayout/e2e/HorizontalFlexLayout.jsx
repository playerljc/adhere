import React from 'react';

import FlexLayout from '../src/index';

import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div className="wrap">
      <FlexLayout.HorizontalFlexLayout
        style={{ height: '100%', border: '1px solid #d9d9d9' }}
        leftStyle={{ borderRight: '1px solid #d9d9d9', width: 140 }}
        rightStyle={{ borderLeft: '1px solid #d9d9d9', width: 140 }}
        renderLeft={<div className="panel">Left</div>}
        renderMain={<div className="panel">Main</div>}
        renderRight={<div className="panel">Right</div>}
      />
    </div>
  );
};

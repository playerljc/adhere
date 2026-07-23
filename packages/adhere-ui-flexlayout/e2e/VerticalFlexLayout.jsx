import React from 'react';

import FlexLayout from '../src/index';

import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div className="wrap">
      <FlexLayout.VerticalFlexLayout
        style={{ height: '100%', border: '1px solid #d9d9d9' }}
        topStyle={{ borderBottom: '1px solid #d9d9d9' }}
        bottomStyle={{ borderTop: '1px solid #d9d9d9' }}
        renderTop={<div className="region">Top</div>}
        renderMain={<div className="panel">Main</div>}
        renderBottom={<div className="region">Bottom</div>}
      />
    </div>
  );
};

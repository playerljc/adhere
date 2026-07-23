import React from 'react';

import FlexLayout from '../src/index';

import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div className="wrap">
      <FlexLayout direction="vertical" style={{ height: '100%' }}>
        <FlexLayout.Fixed span={8}>
          <div className="region" style={{ height: '100%' }}>
            span=8
          </div>
        </FlexLayout.Fixed>
        <FlexLayout.Fixed span={8}>
          <div className="region" style={{ height: '100%' }}>
            span=8
          </div>
        </FlexLayout.Fixed>
        <FlexLayout.Fixed span={8}>
          <div className="region" style={{ height: '100%' }}>
            span=8
          </div>
        </FlexLayout.Fixed>
      </FlexLayout>
    </div>
  );
};

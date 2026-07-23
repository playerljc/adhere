import React from 'react';

import FlexLayout from '../src/index';

import '../src/index.less';
import './index.less';

const { Fixed, Auto } = FlexLayout;

export default () => {
  return (
    <div className="wrap">
      <FlexLayout direction="vertical" style={{ height: '100%', border: '1px solid #d9d9d9' }}>
        <Fixed>
          <div className="region">Top</div>
        </Fixed>
        <Auto>
          <FlexLayout direction="horizontal" style={{ height: '100%' }}>
            <Fixed>
              <div className="region" style={{ height: '100%', width: 120 }}>
                Left
              </div>
            </Fixed>
            <Auto>
              <div className="panel">Center</div>
            </Auto>
            <Fixed>
              <div className="region" style={{ height: '100%', width: 120 }}>
                Right
              </div>
            </Fixed>
          </FlexLayout>
        </Auto>
        <Fixed>
          <div className="region">Bottom</div>
        </Fixed>
      </FlexLayout>
    </div>
  );
};

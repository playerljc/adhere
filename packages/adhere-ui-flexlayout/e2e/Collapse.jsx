import React from 'react';

import FlexLayout from '../src/index';

import '../src/index.less';
import './index.less';

const { Fixed, Auto } = FlexLayout;

export default () => {
  return (
    <div className="wrap">
      <FlexLayout direction="horizontal" style={{ height: '100%' }} gutter={16}>
        <Fixed
          span={5}
          fit
          collapseDirection="L"
          trigger={(collapsed, defaultTrigger) => defaultTrigger}
        >
          <div className="panel" style={{ overflow: 'auto' }}>
            Left（可折叠）
          </div>
        </Fixed>

        <Auto fit>
          <FlexLayout direction="vertical" gutter={16} style={{ height: '100%' }}>
            <Fixed
              span={4}
              fit
              collapseDirection="T"
              trigger={(collapsed, defaultTrigger) => defaultTrigger}
            >
              <div className="panel">Top（可折叠）</div>
            </Fixed>

            <Auto>
              <div className="panel">Center</div>
            </Auto>

            <Fixed
              span={4}
              fit
              collapseDirection="B"
              trigger={(collapsed, defaultTrigger) => defaultTrigger}
            >
              <div className="panel">Bottom（可折叠）</div>
            </Fixed>
          </FlexLayout>
        </Auto>

        <Fixed
          span={5}
          fit
          collapseDirection="R"
          trigger={(collapsed, defaultTrigger) => defaultTrigger}
        >
          <div className="panel" style={{ overflow: 'auto' }}>
            Right（可折叠）
          </div>
        </Fixed>
      </FlexLayout>
    </div>
  );
};

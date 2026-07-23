import React from 'react';

import FlexLayout from '../src/index';

import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div className="wrap">
      <FlexLayout direction="vertical" style={{ height: '100%' }}>
        <FlexLayout.Auto
          style={{
            background: '#e6f4ff',
            padding: 16,
            boxSizing: 'border-box',
            overflowY: 'auto',
          }}
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <p key={index}>Auto 区域内容 {index + 1}</p>
          ))}
        </FlexLayout.Auto>

        <FlexLayout.Fixed style={{ background: '#fff1f0', padding: 16 }}>固定底部</FlexLayout.Fixed>
      </FlexLayout>
    </div>
  );
};

import React from 'react';

import FlexLayout from '../src/index';

import 'antd/dist/reset.css';

import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div style={{ height: 500 }}>
      <FlexLayout
        style={{ height: '100%' }}
        // gutter={[vVgutters[vVgutterKey], vGutters[vGutterKey]]}
        direction="vertical"
      >
        <FlexLayout.Fixed span={8}>333</FlexLayout.Fixed>

        <FlexLayout.Fixed span={8}>333</FlexLayout.Fixed>

        <FlexLayout.Fixed span={8}>333</FlexLayout.Fixed>
      </FlexLayout>
    </div>
  );
};

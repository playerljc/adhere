import React from 'react';

import FlexLayout from '../src/index';

import '../src/index.less';

const { Fixed, Auto } = FlexLayout;

export default () => (
  <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed>
      <div
        style={{
          padding: '15px 20px',
          borderBottom: '1px solid #ccc',
          textAlign: 'center',
        }}
      >
        Top
      </div>
    </Fixed>
    <Auto style={{ justifyContent: 'center', alignItems: 'center' }}>Center</Auto>
    <Fixed>
      <div
        style={{
          padding: '15px 20px',
          borderTop: '1px solid #ccc',
          textAlign: 'center',
        }}
      >
        Bottom
      </div>
    </Fixed>
  </FlexLayout>
);

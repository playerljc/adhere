import React from 'react';
import ReactDOM from 'react-dom';

import FlexLayout from '../index';

const { Fixed, Auto } = FlexLayout;

ReactDOM.render(
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
  </FlexLayout>,
  document.getElementById('app'),
);

import React from 'react';

import Ellipsis from '../src/index';
import { LONG_CONTENT, demoBoxStyle } from './data';

import '../src/index.less';

export default () => {
  return (
    <div style={{ ...demoBoxStyle, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        wrapLines=2：
        <Ellipsis wrap wrapLines={2}>
          {LONG_CONTENT}
        </Ellipsis>
      </div>
      <div>
        wrapLines=3：
        <Ellipsis wrap wrapLines={3}>
          {LONG_CONTENT}
        </Ellipsis>
      </div>
    </div>
  );
};

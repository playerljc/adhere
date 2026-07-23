import React from 'react';

import Ellipsis from '../src/index';
import { LONG_CONTENT, demoBoxStyle } from './data';

import '../src/index.less';

export default () => {
  return (
    <div style={demoBoxStyle}>
      <Ellipsis
        wrap
        wrapLines={2}
        tooltipMaxLength={40}
        tooltipMore={<span style={{ color: '#1677ff', cursor: 'pointer' }}>展开</span>}
        tooltipClose={<span style={{ color: '#1677ff', cursor: 'pointer' }}>收起</span>}
      >
        {LONG_CONTENT}
      </Ellipsis>
    </div>
  );
};

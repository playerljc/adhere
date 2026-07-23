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
        dangerouslySetInnerHTML={{
          __html: `<strong>摘要：</strong>${LONG_CONTENT}`,
        }}
      />
    </div>
  );
};

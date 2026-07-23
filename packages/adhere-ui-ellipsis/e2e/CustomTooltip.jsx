import React from 'react';

import Ellipsis from '../src/index';
import { LONG_TITLE, demoBoxStyle } from './data';

import '../src/index.less';

export default () => {
  return (
    <div style={demoBoxStyle}>
      <Ellipsis isUseNativeTooltip={false} tooltip={LONG_TITLE}>
        {LONG_TITLE}
      </Ellipsis>
    </div>
  );
};

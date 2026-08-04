import React from 'react';

import Glass from '../src/index';

import '../src/index.less';
import './GlassGrid.less';

export default () => {
  return (
    <div className="Wrapper">
      {Array.from({ length: 10 }).map((_, index) => (
        <Glass
          className="Glass"
          autoHeight={false}
          borderRadius={30}
          borderWidth={3}
          strongColorAlpha={0.6}
          lightColorAlpha={0.1}
          mediumColorAlpha={0.7}
          corners={{
            leftTop: 'dark',
            rightTop: 'light',
            rightBottom: 'dark',
            leftBottom: 'light',
          }}
        >
          {Array.from({ length: 50 }).map((_, index) => (
            <p>111</p>
          ))}
        </Glass>
      ))}
    </div>
  );
};

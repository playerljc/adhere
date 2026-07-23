import React from 'react';

import Glass from '../src/index';

import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div className="scene center">
      <Glass
        style={{ width: 360 }}
        autoHeight
        borderRadius={24}
        borderWidth={2}
        borderColor="#fff"
        boxInnerStyle={{ backdropFilter: 'blur(2px)' }}
      >
        <div className="content" style={{ height: 'auto' }}>
          <h3 style={{ marginTop: 0 }}>autoHeight</h3>
          {Array.from({ length: 8 }).map((_, index) => (
            <p key={index}>内容行 {index + 1} — 高度随内容撑开。</p>
          ))}
        </div>
      </Glass>
    </div>
  );
};

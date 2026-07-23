import React from 'react';

import Glass from '../src/index';

import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div className="scene center">
      <Glass
        className="panel"
        autoHeight={false}
        borderRadius={30}
        borderWidth={3}
        borderColor="#fff"
        boxInnerStyle={{ backdropFilter: 'blur(2px)' }}
      >
        <div className="content">
          <h3 style={{ marginTop: 0 }}>Glass</h3>
          <p>默认角配置与白色边框。</p>
          <p>空格键以外的交互：这是基础展示面板。</p>
        </div>
      </Glass>
    </div>
  );
};

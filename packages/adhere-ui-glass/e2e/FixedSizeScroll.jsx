import React from 'react';

import Glass from '../src/index';

import '../src/index.less';
import './FixedSizeScroll.less';

export default () => {
  return (
    <div className="Wrapper">
      <Glass
        className="Glass"
        autoHeight={false}
        borderRadius={30}
        borderWidth={3}
        borderColor="gray"
        strongColorAlpha={0.6}
        lightColorAlpha={0.1}
        mediumColorAlpha={0.7}
        corners={{
          leftTop: 'dark',
          rightTop: 'light',
          rightBottom: 'dark',
          leftBottom: 'light',
        }}
        boxInnerStyle={{
          backdropFilter: 'blur(1px)',
        }}
      >
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
      </Glass>
    </div>
  );
};

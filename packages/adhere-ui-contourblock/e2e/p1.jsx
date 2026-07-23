import React from 'react';

import ContourBlock from '../src/index';

import '../src/index.less';
import './index.less';

/**
 * 基本使用
 */
export default () => {
  return (
    <div className="ContourBlockE2E-basic">
      <ContourBlock style={{ border: '1px solid #ccc' }} />
    </div>
  );
};

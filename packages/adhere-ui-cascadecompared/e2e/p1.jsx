import React from 'react';

import CascadeCompared from '../src/index';

import '../src/index.less';
import { getIndicator, getMaster } from './mock';

import './index.less';

/**
 * 基本使用
 */
export default () => {
  return (
    <div className="CascadeComparedE2E-wrapper">
      <CascadeCompared indicator={getIndicator()} master={getMaster()} />
    </div>
  );
};

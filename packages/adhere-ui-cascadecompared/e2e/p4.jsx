import { Button } from 'antd';
import React, { useRef } from 'react';

import CascadeCompared from '../src/index';

import '../src/index.less';
import { COLUMN_COUNT, getIndicator, getMaster } from './mock';

import './index.less';

/**
 * 滚动到指定列
 */
export default () => {
  const ref = useRef();

  return (
    <>
      <div className="CascadeComparedE2E-toolbar">
        <Button
          type="primary"
          onClick={() => {
            ref.current?.scrollToByColumn(1);
          }}
        >
          滚动到第一列
        </Button>
        <Button
          onClick={() => {
            ref.current?.scrollToByColumn(COLUMN_COUNT - 1);
          }}
        >
          滚动到最后一列
        </Button>
      </div>

      <div className="CascadeComparedE2E-wrapper">
        <CascadeCompared ref={ref} indicator={getIndicator()} master={getMaster()} />
      </div>
    </>
  );
};

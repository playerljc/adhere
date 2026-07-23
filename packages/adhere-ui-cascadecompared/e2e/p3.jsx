import { Button } from 'antd';
import React, { useRef } from 'react';

import CascadeCompared from '../src/index';

import '../src/index.less';
import { GROUP_COUNT, getIndicator, getMaster } from './mock';

import './index.less';

/**
 * 通过索引滚动
 */
export default () => {
  const ref = useRef();
  const lastIndex = GROUP_COUNT - 1;

  return (
    <>
      <div className="CascadeComparedE2E-toolbar">
        <Button
          type="primary"
          onClick={() => {
            ref.current?.scrollToByIndex(lastIndex, 0);
          }}
        >
          滚动到底部(无动画)
        </Button>
        <Button
          onClick={() => {
            ref.current?.scrollToByIndex(lastIndex);
          }}
        >
          滚动到底部(有动画)
        </Button>
        <Button
          onClick={() => {
            ref.current?.scrollToByIndex(0);
          }}
        >
          回到顶部
        </Button>
      </div>

      <div className="CascadeComparedE2E-wrapper">
        <CascadeCompared ref={ref} indicator={getIndicator()} master={getMaster()} />
      </div>
    </>
  );
};

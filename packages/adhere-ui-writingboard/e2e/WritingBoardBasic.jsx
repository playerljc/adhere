import React, { useRef } from 'react';

import WritingBoard from '../src/index';

import '../src/index.less';
import './index.less';

export default () => {
  const ref = useRef();

  return (
    <div
      style={{
        position: 'relative',
        height: 360,
        overflowY: 'hidden',
        border: '1px solid #ccc',
        margin: 16,
      }}
    >
      <WritingBoard ref={ref} defaultMode="free" defaultLineWidth={2} defaultStrokeStyle="#000" />
    </div>
  );
};

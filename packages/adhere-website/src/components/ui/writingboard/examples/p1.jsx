import React, { useRef } from 'react';

import { WritingBoard } from '@baifendian/adhere';

export default () => {
  const ref = useRef();

  return (
    <div
      style={{
        position: 'relative',
        height: 300,
        overflowY: 'hidden',
        border: '1px solid #ccc',
      }}
    >
      <div style={{ height: '100%' }} ref={ref}>
        <WritingBoard />
      </div>
    </div>
  );
};

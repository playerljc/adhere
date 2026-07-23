import React from 'react';

import Split from '../src/index';

import '../src/index.less';

export default () => {
  return (
    <div
      style={{
        padding: 16,
        height: 120,
        display: 'flex',
        alignItems: 'stretch',
        border: '1px dashed #ccc',
      }}
    >
      <div style={{ background: '#e6f4ff', padding: '0 8px' }}>A</div>
      <Split direction="horizontal" size={24} horizontalFit />
      <div
        style={{
          background: '#f6ffed',
          padding: '0 8px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        B (Split horizontalFit)
      </div>
      <Split direction="horizontal" size={24} horizontalFit />
      <div style={{ background: '#fff7e6', padding: '0 8px' }}>C</div>
    </div>
  );
};

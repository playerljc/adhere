import React from 'react';

import { Spin } from '@baifendian/adhere';

import ASync from '../async';

export default () => (
  <ASync
    renderNormalLoading={({ children, loading }) => {
      return (
        <div style={{ position: 'relative' }}>
          {children}
          <Spin text="处理中..." spinning={loading} />
        </div>
      );
    }}
  />
);

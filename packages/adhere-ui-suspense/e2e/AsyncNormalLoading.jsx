import React from 'react';

import Spin from '@baifendian/adhere-ui-spin';

import SuspenseAsyncTable from './SuspenseAsyncTable';

import '@baifendian/adhere-ui-spin/es/index.less';

import '../src/index.less';

export default () => (
  <SuspenseAsyncTable
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

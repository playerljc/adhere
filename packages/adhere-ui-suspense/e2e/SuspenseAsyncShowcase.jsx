import React from 'react';

import Spin from '@baifendian/adhere-ui-spin';

import Async from './SuspenseAsyncTable';
import Sync from './SuspenseSyncTable';
import Table from './SuspenseClassTable';

import '@baifendian/adhere-ui-spin/es/index.less';

import '../src/index.less';

export default () => (
  // <Table
  //   renderNormalLoading={({ children, loading }) => {
  //     return (
  //       <div style={{ position: 'relative' }}>
  //         {children}
  //         <Spin text="处理中..." spinning={loading} />
  //       </div>
  //     );
  //   }}
  // />

  <Async
  // renderNormalLoading={({ children, loading }) => {
  //   return (
  //     <div style={{ position: 'relative' }}>
  //       {children}
  //       <Spin text="处理中..." spinning={loading} />
  //     </div>
  //   );
  // }}
  />

  /*<Sync
    renderNormalLoading={({ children, loading }) => {
      return (
        <div style={{ position: 'relative' }}>
          {children}
          <Spin text="处理中..." spinning={loading} />
        </div>
      );
    }}
  />*/
);

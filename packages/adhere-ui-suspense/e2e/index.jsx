import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import AsyncNormalLoading from './AsyncNormalLoading';
import CustomFirstLoading from './FirstLoading/CustomFirstLoading';
import SuspenseAsyncShowcase from './SuspenseAsyncShowcase';
import SuspenseAsyncTable from './SuspenseAsyncTable';
import SuspenseClassTable from './SuspenseClassTable';
import SuspenseSyncTable from './SuspenseSyncTable';
import SyncRenderEmpty from './SyncRenderEmpty';

import './index.less';

e2e.PC({
  // children: <SuspenseAsyncShowcase />,
  // children: <SuspenseSyncTable />,
  // children: <SuspenseAsyncTable />,
  // children: <SuspenseClassTable />,
  // children: <AsyncNormalLoading />,
  // children: <SyncRenderEmpty />,
  children: <CustomFirstLoading />,
});

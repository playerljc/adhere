import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import PullRefreshBasic from './PullRefreshBasic';
import PullRefreshCallbacks from './PullRefreshCallbacks';
import PullRefreshCustom from './PullRefreshCustom';
import PullRefreshManual from './PullRefreshManual';

import './index.less';

e2e.PC({
  // children: <PullRefreshManual />,
  // children: <PullRefreshCustom />,
  children: <PullRefreshCallbacks />,
  // children: <PullRefreshBasic />,
});

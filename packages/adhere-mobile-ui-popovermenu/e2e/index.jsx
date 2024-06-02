import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Normal from './Normal';
import SildBar from './SildBar';
import Tabs from './Tabs';

import '@baifendian/adhere-e2e/es/index.less';

e2e.Mobile({
  children: <Tabs />,
});

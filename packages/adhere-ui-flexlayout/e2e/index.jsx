import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Normal from './Normal';
import RefTest from './refTest';
import Test from './test';
import Trblc from './trblc';
import VSpan from './vSpan';

import './index.less';

e2e.PC({
  children: <VSpan />,
});

import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Test from './test';

import '@baifendian/adhere-e2e/es/index.less';

e2e.Mobile({
  children: <Test />,
});

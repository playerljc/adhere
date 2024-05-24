import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Custom from './Custom';
import Form from './Form';
import Normal from './Normal';

import '@baifendian/adhere-e2e/es/index.less';

import './index.less';

e2e.Mobile({
  children: <Normal />,
});

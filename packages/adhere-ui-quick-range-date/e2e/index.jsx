import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Custom from './Custom';
import Form from './Form';
import Normal from './Normal';

import './index.less';

e2e.PC({
  children: <Form />,
});

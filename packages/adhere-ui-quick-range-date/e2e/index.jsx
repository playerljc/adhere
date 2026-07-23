import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Custom from './Custom';
import Form from './Form';
import FutureRanges from './FutureRanges';
import LabelsAndProps from './LabelsAndProps';
import Normal from './Normal';
import UtilsDemo from './UtilsDemo';

import './index.less';

e2e.PC({
  // children: <Custom />,
  // children: <Form />,
  // children: <FutureRanges />,
  // children: <LabelsAndProps />,
  // children: <UtilsDemo />,
  children: <Normal />,
});

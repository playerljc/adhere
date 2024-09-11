import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import DrawingBoard from './DrawingBoard';
import Cropping from './cropping';

import './index.less';

e2e.PC({
  children: <Cropping />,
});

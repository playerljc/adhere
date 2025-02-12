import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Normal from './Normal';
import Resizable from './Resizable';
import Scroll from './Scroll';
import UseItemsProps from './UseItemsProps';

import '../src/index.less';

e2e.PC({
  children: <Resizable />,
});

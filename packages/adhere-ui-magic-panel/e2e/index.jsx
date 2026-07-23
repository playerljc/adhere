import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Clip from './Clip';
import ClipCircle from './ClipCircle';
import ClipPathConverter from './ClipPathConverter';
import Irregular from './Irregular';
import Normal from './Normal';
import OnChange from './OnChange';
import Resizable from './Resizable';
import ScreenCard from './ScreenCard';
import Scroll from './Scroll';
import UseItemsProps from './UseItemsProps';

import '../src/index.less';

e2e.PC({
  children: <Clip />,
});

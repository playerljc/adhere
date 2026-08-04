import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import GetValueUtil from './GetValueUtil';
import GroupHorizontalFragment from './GroupHorizontalFragment';
import GroupHorizontalVertical from './GroupHorizontalVertical';
import SpaceHorizontal from './SpaceHorizontal';
import SpaceHorizontalFit from './SpaceHorizontalFit';
import SpaceSize from './SpaceSize';
import SpaceVertical from './SpaceVertical';

e2e.PC({
  // children: <SpaceHorizontal />,
  // children: <SpaceVertical />,
  // children: <SpaceSize />,
  // children: <GroupHorizontalVertical />,
  // children: <SpaceHorizontalFit />,
  children: <GetValueUtil />,
  // children: <GroupHorizontalFragment />,
});

import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import GetValueUtil from './GetValueUtil';
import GroupHorizontalFragment from './GroupHorizontalFragment';
import GroupHorizontalVertical from './GroupHorizontalVertical';
import SplitHorizontal from './SplitHorizontal';
import SplitHorizontalFit from './SplitHorizontalFit';
import SplitSize from './SplitSize';
import SplitVertical from './SplitVertical';

e2e.PC({
  // children: <SplitHorizontal />,
  // children: <SplitVertical />,
  // children: <SplitSize />,
  // children: <GroupHorizontalVertical />,
  // children: <SplitHorizontalFit />,
  // children: <GetValueUtil />,
  children: <GroupHorizontalFragment />,
});

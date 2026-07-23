import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import BasicHorizontalVertical from './BasicHorizontalVertical';
import DragCallbacks from './DragCallbacks';
import LCSplitLayout from './LCSplitLayout';
import MinMaxSize from './MinMaxSize';
import MultiPaneBothDirections from './MultiPaneBothDirections';
import NestedCrossSplit from './NestedCrossSplit';
import NestedHorizontalSplit from './NestedHorizontalSplit';
import TBLCRSplitLayout from './TBLCRSplitLayout';
import TCBSplitLayout from './TCBSplitLayout';

import './index.less';

e2e.PC({
  // children: <BasicHorizontalVertical />,
  // children: <MultiPaneBothDirections />,
  // children: <NestedCrossSplit />,
  // children: <MinMaxSize />,
  // children: <TCBSplitLayout />,
  // children: <LCSplitLayout />,
  // children: <TBLCRSplitLayout />,
  // children: <DragCallbacks />,
  children: <NestedHorizontalSplit />,
});

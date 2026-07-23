import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import ListShowBeforeAfter from './ListShowBeforeAfter';
import SwipeOutBasic from './SwipeOutBasic';
import SwipeOutCallbacks from './SwipeOutCallbacks';
import SwipeOutCustomStyle from './SwipeOutCustomStyle';
import SwipeOutVertical from './SwipeOutVertical';

e2e.PC({
  // children: <SwipeOutBasic />,
  // children: <SwipeOutVertical />,
  // children: <SwipeOutCallbacks />,
  // children: <SwipeOutCustomStyle />,
  children: <ListShowBeforeAfter />,
});

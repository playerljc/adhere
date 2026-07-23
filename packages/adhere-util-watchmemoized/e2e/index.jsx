import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import CreateMemoFun from './CreateMemoFun';
import CreateMemoFunAsync from './CreateMemoFunAsync';
import RaceCompareModes from './RaceCompareModes';
import WatchAll from './WatchAll';
import WatchCreate from './WatchCreate';

e2e.PC({
  // children: <WatchAll />,
  // children: <WatchCreate />,
  // children: <CreateMemoFun />,
  // children: <CreateMemoFunAsync />,
  children: <RaceCompareModes />,
});

import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import SpinBasic from './SpinBasic';
import SpinNoText from './SpinNoText';
import SpinSizeAndToggle from './SpinSizeAndToggle';
import SpinSizes from './SpinSizes';
import SpinZIndex from './SpinZIndex';

e2e.PC({
  // children: <SpinBasic />,
  // children: <SpinNoText />,
  // children: <SpinSizes />,
  // children: <SpinZIndex />,
  children: <SpinSizeAndToggle />,
});

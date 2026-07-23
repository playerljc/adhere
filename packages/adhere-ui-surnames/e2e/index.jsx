import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import CustomClassStyle from './CustomClassStyle';
import ScrollToAndCallbacks from './ScrollToAndCallbacks';
import ScrollToAnimation from './ScrollToAnimation';
import SurnamesRightLeft from './SurnamesRightLeft';
import SurnamesTopBottom from './SurnamesTopBottom';

e2e.PC({
  // children: <SurnamesTopBottom />,
  // children: <ScrollToAnimation />,
  // children: <ScrollToAndCallbacks />,
  // children: <CustomClassStyle />,
  children: <SurnamesRightLeft />,
});

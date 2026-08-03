import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import CarParamsStickup from './CarParamsStickup';
import CustomClassStyle from './CustomClassStyle';
import OnChangeAndRefresh from './OnChangeAndRefresh';
import ScrollToByHeaderEl from './ScrollToByHeaderEl';
import ScrollToByIndex from './ScrollToByIndex';

e2e.PC({
  // children: <ScrollToByIndex />,
  // children: <OnChangeAndRefresh />,
  children: <ScrollToByHeaderEl />,
  // children: <CustomClassStyle />,
  // children: <CarParamsStickup />,
});

import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import ScrollLoadCustomRender from './ScrollLoadCustomRender';
import ScrollLoadDisabled from './ScrollLoadDisabled';
import ScrollLoadEmpty from './ScrollLoadEmpty';
import ScrollLoadError from './ScrollLoadError';
import ScrollLoadInfiniteList from './ScrollLoadInfiniteList';
import ScrollLoadRefApi from './ScrollLoadRefApi';

e2e.PC({
  // children: <ScrollLoadEmpty />,
  // children: <ScrollLoadError />,
  // children: <ScrollLoadCustomRender />,
  // children: <ScrollLoadRefApi />,
  // children: <ScrollLoadDisabled />,
  children: <ScrollLoadInfiniteList />,
});

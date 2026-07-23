import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import BackOnly from './BackOnly';
import HistoryBackBasic from './HistoryBackBasic';
import StackHelpers from './StackHelpers';

e2e.PC({
  children: <HistoryBackBasic />,
});

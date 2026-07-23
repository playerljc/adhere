import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import ConditionalRenderBasic from './ConditionalRenderBasic';
import ConditionalRenderNoMatch from './ConditionalRenderNoMatch';
import ConditionalRenderShow from './ConditionalRenderShow';
import ConditionalRenderStatic from './ConditionalRenderStatic';
import ConditionalRenderVisibility from './ConditionalRenderVisibility';
import DealUtil from './DealUtil';

e2e.PC({
  // children: <ConditionalRenderNoMatch />,
  // children: <ConditionalRenderShow />,
  // children: <ConditionalRenderVisibility />,
  // children: <ConditionalRenderStatic />,
  // children: <DealUtil />,
  children: <ConditionalRenderBasic />,
});

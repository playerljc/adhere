import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import OverlayCallbacks from './OverlayCallbacks';
import OverlayDirections from './OverlayDirections';
import OverlayLeft from './OverlayLeft';
import PushLeftRight from './PushLeftRight';
import RevolvingLeftRight from './RevolvingLeftRight';

e2e.PC({
  // children: <OverlayDirections />,
  // children: <PushLeftRight />,
  // children: <RevolvingLeftRight />,
  // children: <OverlayCallbacks />,
  children: <OverlayLeft />,
});

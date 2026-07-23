import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import All from './All';
import Count from './Count';
import DispatchEvent from './DispatchEvent';
import EventsInstance from './EventsInstance';
import OnTriggerRemove from './OnTriggerRemove';
import Once from './Once';
import Race from './Race';
import TriggerWithParams from './TriggerWithParams';

e2e.PC({
  // children: <TriggerWithParams />,
  // children: <DispatchEvent />,
  // children: <Once />,
  // children: <All />,
  // children: <Race />,
  // children: <Count />,
  // children: <EventsInstance />,
  children: <OnTriggerRemove />,
});

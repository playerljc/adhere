import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Test from './test';
import Use from './use';
import UseFirst from './useFirst';
import UseForceUpdate from './useForceUpdate';
import UseFormTabs from './useFormTabs';
import UseHistoryBack from './useHistoryBack';
import UseItemsRef from './useItemsRef';
import UseLatestState from './useLatestState';
import UsePrevious from './usePrevious';
import UsePropToState from './usePropToState';
import UseSafeRef from './useSafeRef';
import UseSetState from './useSetState';
import UseTriggerQuery from './useTriggerQuery';

e2e.PC({
  children: <UseItemsRef />,
});

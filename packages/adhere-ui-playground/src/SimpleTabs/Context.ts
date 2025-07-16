import React from 'react';

import { TabContextValue } from '../types';

export const TabContext = React.createContext<TabContextValue>({
  activeKey: '',
});

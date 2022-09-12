import React from 'react';

import { AnchorNavigationContextValue } from './types';

export const AnchorNavigationContext = React.createContext<AnchorNavigationContextValue>({
  scrollEl: null,
});

import React from 'react';

import { ContextMenuContext } from './types';

/**
 * ProviderContext
 */
export const ProviderContext = React.createContext<ContextMenuContext>({
  config: {},
  el: null,
});

import React from 'react';

import { ContextMenuContext } from './types';

/**
 * ProviderContext
 */
export const ProviderContext = React.createContext<ContextMenuContext>({
  config: {
    x: 0,
    y: 0,
    width: 0,
    maskClosable: true,
  },
  el: null,
});

import React from 'react';

import type { ContextType } from './types';

/**
 * FlexContext
 * @type {React.Context<{store: {}}>}
 */
export const FlexContext = React.createContext<ContextType>({
  direction: 'vertical',
  gutter: 0,
});

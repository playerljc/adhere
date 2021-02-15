import React from 'react';

/**
 * FlexContext
 * @type {React.Context<{store: {}}>}
 */
export const FlexContext = React.createContext({
  direction: 'vertical',
});

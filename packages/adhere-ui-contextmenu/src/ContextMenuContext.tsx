import React from 'react';

/**
 * ProviderContext
 * @type {React.Context<{config: {}}>}
 */
export const ProviderContext = React.createContext({
  config: {},
  el: null,
});

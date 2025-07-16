import React from 'react';

import { CodeBoxContextValue } from './types';

export const CodeBoxContext = React.createContext<CodeBoxContextValue>({
  activeAnchor: '',
});

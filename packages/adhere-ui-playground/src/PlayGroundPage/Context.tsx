import React from 'react';

import { PlayGroundPageContextValue } from '../types';

export const PlayGroundPageContext = React.createContext<PlayGroundPageContextValue>({
  scrollEl: null,
});

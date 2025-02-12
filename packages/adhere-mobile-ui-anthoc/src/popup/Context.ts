import React from 'react';

import type { PopupTriggerContext } from '../types';

export default React.createContext<PopupTriggerContext>({
  close: () => {},
});

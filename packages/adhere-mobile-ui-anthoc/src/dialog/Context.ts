import React from 'react';

import type { DialogTriggerContext } from '../types';

export default React.createContext<DialogTriggerContext>({
  close: () => {},
});

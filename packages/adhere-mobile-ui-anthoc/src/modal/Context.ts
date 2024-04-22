import React from 'react';

import type { ModalTriggerContext } from '../types';

export default React.createContext<ModalTriggerContext>({
  close: () => {},
});

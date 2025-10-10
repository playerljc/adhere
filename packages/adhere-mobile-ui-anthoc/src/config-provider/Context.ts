import React from 'react';

import type { InternalConfigProviderProps } from './types';

export default React.createContext<InternalConfigProviderProps['theme']>(
  {} as InternalConfigProviderProps['theme'],
);

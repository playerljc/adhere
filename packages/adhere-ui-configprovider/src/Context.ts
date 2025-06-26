import { createContext } from 'react';

import type { ConfigProviderContext } from './types';

export const Context = createContext<ConfigProviderContext>({} as ConfigProviderContext);

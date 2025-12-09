import { createContext } from 'react';

import type { DesignContextType } from '../types';

export const DesignContext = createContext<DesignContextType>({} as DesignContextType);

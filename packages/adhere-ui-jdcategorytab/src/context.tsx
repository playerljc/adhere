import React, { createContext } from 'react';

import type { JdCategoryTabContext } from './types';

/**
 * JdCategoryContext
 */
export const JdCategoryContext = createContext<JdCategoryTabContext>({
  activeKey: '',
});

import React from 'react';

import type { IFormDesignProvider } from '../types/FormDesignTypes';

export const FormDesignContext = React.createContext<IFormDesignProvider>({
  setDataSource() {
    return Promise.resolve();
  },
  setWidgetActiveKey() {
    return Promise.resolve();
  },
  getWidgetActiveKey() {
    return '';
  },
});

export const FormDesignProvider = FormDesignContext.Provider;

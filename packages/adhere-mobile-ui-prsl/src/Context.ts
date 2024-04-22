import React from 'react';

import { PRSLContext } from './types';

export default React.createContext<PRSLContext>({
  isUseSelectionMode: () => false,
  getRowKey: () => 'id',
  getOptionSelectedRowKeys: () => [],
  selectionChange: (_checked: boolean) => {},
  selectionAllChange: (_checkAll: boolean) => {},
  getDatasourceLength: () => 0,
  getSelectionMultiple: () => true,
});

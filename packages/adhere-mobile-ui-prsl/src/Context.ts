import React from 'react';

import { PRSLContext } from './types';

export default React.createContext<PRSLContext>({
  isUseSelectionMode: () => false,
  isUseDNDMode: () => false,
  isUseNormalMode: () => true,
  getRowKey: () => 'id',
  getOptionSelectedRowKeys: () => [],
  selectionChange: (_checked: boolean) => {},
  selectionAllChange: (_checkAll: boolean) => {},
  getDatasourceLength: () => 0,
  getSelectionMultiple: () => true,
  getIndexByIdFormOptionDataSource: () => -1,
  getDndDragHandle: () => null,
});

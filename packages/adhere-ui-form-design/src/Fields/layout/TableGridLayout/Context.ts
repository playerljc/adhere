import { createContext } from 'react';

import type { TableGridLayoutProps } from '@baifendian/adhere-ui-tablegridlayout';

export interface TableGridLayoutContext {
  fieldProps: TableGridLayoutProps;
}

export const TableGridLayoutContext = createContext<TableGridLayoutContext>(
  {} as TableGridLayoutContext,
);

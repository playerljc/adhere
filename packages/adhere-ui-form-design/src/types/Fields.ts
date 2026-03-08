import type { TableGridLayoutProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import type { DesignValue } from './Design';

export interface InternalTableGridLayout extends TableGridLayoutProps {
  id: string;
  // terminal: Terminal;
  children?: DesignValue[];
  // items: DesignProps['items'];
  // activeFieldId: string | null | undefined;
  // onActiveFieldById: (id: string) => void;
}

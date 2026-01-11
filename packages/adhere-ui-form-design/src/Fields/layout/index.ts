import Intl from '@baifendian/adhere-util-intl';

import type { DesignItem, ToolBoxGroup } from '../../types';
import { define as defineTableGridLayout } from './TableGridLayout';

const TableGridLayout = defineTableGridLayout();

export function install(): {
  toolBox: ToolBoxGroup['items'];
  designItems: DesignItem[];
} {
  return {
    toolBox: [
      {
        type: TableGridLayout.type,
        label: Intl.get('table_grid_layout'),
        searchLabel: Intl.get('table_grid_layout'),
        tooltip: Intl.get('table_grid_layout'),
      },
    ],
    designItems: [TableGridLayout],
  };
}

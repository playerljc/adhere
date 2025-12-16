import Intl from '@baifendian/adhere-util-intl';

import type { DesignItem, ToolBoxOption } from '../../types';
import { define as defineTableGridLayout } from './TableGridLayout';

const TableGridLayout = defineTableGridLayout();

export function install(): {
  toolBox: ToolBoxOption;
  designItems: DesignItem[];
} {
  return {
    toolBox: [
      {
        id: 'layout',
        label: Intl.get('layout'),
        tooltip: Intl.get('layout'),
        items: [
          {
            type: TableGridLayout.type,
            label: Intl.get('table_grid_layout'),
            searchLabel: Intl.get('table_grid_layout'),
            tooltip: Intl.get('table_grid_layout'),
          },
        ],
      },
    ],
    designItems: [TableGridLayout],
  };
}

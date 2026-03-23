import Intl from '@baifendian/adhere-util-intl';

import type { DesignItem, ToolBoxGroup } from '../../types';
import { define as defineFlexLayout } from './FlexLayout';
import { define as defineTableGridLayout } from './TableGridLayout';

const TableGridLayout = defineTableGridLayout();
const FlexLayout = defineFlexLayout();
export function install(): {
  toolBox: ToolBoxGroup['items'];
  designItems: DesignItem[];
} {
  return {
    toolBox: [
      {
        type: FlexLayout.type,
        label: Intl.get('flex_layout'),
        searchLabel: Intl.get('flex_layout'),
        tooltip: Intl.get('flex_layout'),
      },
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

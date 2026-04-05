import { CreditCardOutlined, InsertRowBelowOutlined, LayoutOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';
import React from 'react';

import type { DesignItem, ToolBoxGroup } from '../../types';
import { define as defineCardLayout } from './Card';
import { define as defineFlexLayout } from './FlexLayout';
import { define as defineTableGridLayout } from './TableGridLayout';

const TableGridLayout = defineTableGridLayout();
const FlexLayout = defineFlexLayout();
const CardLayout = defineCardLayout();
export function install(): {
  toolBox: ToolBoxGroup['items'];
  designItems: DesignItem[];
} {
  return {
    toolBox: [
      {
        type: FlexLayout.type,
        icon: React.createElement(LayoutOutlined),
        label: Intl.get('flex_layout'),
        searchLabel: Intl.get('flex_layout'),
        tooltip: Intl.get('flex_layout'),
      },
      {
        type: TableGridLayout.type,
        icon: React.createElement(InsertRowBelowOutlined),
        label: Intl.get('table_grid_layout'),
        searchLabel: Intl.get('table_grid_layout'),
        tooltip: Intl.get('table_grid_layout'),
      },
      {
        type: CardLayout.type,
        icon: React.createElement(CreditCardOutlined),
        label: Intl.get('card_layout'),
        searchLabel: Intl.get('card_layout'),
        tooltip: Intl.get('card_layout'),
      },
    ],
    designItems: [TableGridLayout, CardLayout],
  };
}

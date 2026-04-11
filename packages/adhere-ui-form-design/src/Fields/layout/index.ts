import React from 'react';

import {
  CreditCardOutlined,
  InsertRowBelowOutlined,
  LayoutOutlined,
  OrderedListOutlined,
} from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import type { DesignItem, ToolBoxGroup } from '../../types';
import { define as defineCardLayout } from './Card';
import { define as defineFlexLayout } from './FlexLayout';
import { define as defineTableGridLayout } from './TableGridLayout';
import { define as defineStepsLayout } from './Steps';
import { define as defineTabsLayout } from './Tabs';

const TableGridLayout = defineTableGridLayout();
const FlexLayout = defineFlexLayout();
const CardLayout = defineCardLayout();
const TabsLayout = defineTabsLayout();
const StepsLayout = defineStepsLayout();

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
      {
        type: TabsLayout.type,
        icon: React.createElement(LayoutOutlined),
        label: Intl.get('tabs_layout'),
        searchLabel: Intl.get('tabs_layout'),
        tooltip: Intl.get('tabs_layout'),
      },
      {
        type: StepsLayout.type,
        icon: React.createElement(OrderedListOutlined),
        label: Intl.get('steps_layout'),
        searchLabel: Intl.get('steps_layout'),
        tooltip: Intl.get('steps_layout'),
      },
    ],
    designItems: [FlexLayout, TableGridLayout, CardLayout, TabsLayout, StepsLayout],
  };
}

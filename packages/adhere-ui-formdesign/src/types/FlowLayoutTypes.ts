import { ReactNode } from 'react';

import { LayoutWidgetProps } from './WidgetTypes';

export interface FlowLayoutProps extends LayoutWidgetProps {}

export interface FlowLayoutItemProps {
  children?: ReactNode;
}

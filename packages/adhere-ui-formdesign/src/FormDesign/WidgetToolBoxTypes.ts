import type { ReactNode } from 'react';

import type { GroupType, Type } from './WidgetTypes';

/*阶段*/
export enum Stage {
  INIT = 'INIT',
  DRAGGING = 'DRAGGING',
  DRAGEND = 'DRAGEND',
}

/**
 * WidgetToolBoxType
 */
export interface WidgetToolBoxType {
  groupType?: GroupType;
  type?: Type;
  name?: string;
  Stage?: Stage;
  renderInit?: () => ReactNode;
  renderDragging?: () => ReactNode;
  renderDragend?: () => ReactNode;
}

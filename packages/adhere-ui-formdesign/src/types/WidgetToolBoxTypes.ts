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
  // 分组的类型
  groupType?: GroupType;
  // Widget类型
  type?: Type;
  // ToolBox的name
  name?: string;
  // ToolBox的icon路径
  iconPath?: string;
  // ToolBox所在的阶段
  Stage?: Stage;
  // ToolBox的初始化渲染
  renderInit?: () => ReactNode;
  // ToolBox拖动时候的渲染
  renderDragging?: () => ReactNode;
}

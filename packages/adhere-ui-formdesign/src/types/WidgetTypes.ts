import { ReactNode } from 'react';

import Widget from '../Widget';
import LayoutWidget from '../Widget/LayoutWidget';
import WidgetProperty from '../WidgetProperty/WidgetProperty';
import { ComponentProps } from './CommonTypes';
import { DWidgetProperty } from './WidgetPropertyTypes';
import { WidgetToolBoxDNDInitProps } from './WidgetToolBoxDNDInitProps';

/* 分组类型 */
export enum GroupType {
  LAYOUT = 'LAYOUT',
  CONTAINER = 'CONTAINER',
  BASE = 'BASE',
  ADVANCED = 'ADVANCED',
}

/**
 * WidgetType
 * @description Widget的枚举
 */
export const WidgetType = {
  // 布局
  FLOW_LAYOUT: 'FLOW_LAYOUT',
  INLINE_LAYOUT: 'INLINE_LAYOUT',
  FLEX_LAYOUT: 'FLEX_LAYOUT',
  GRID_LAYOUT: 'GRID_LAYOUT',
  TABS_LAYOUT: 'TABS_LAYOUT',
  CARD_LAYOUT: 'CARD_LAYOUT',
  COLLAPSE_LAYOUT: 'COLLAPSE_LAYOUT',
  SPACE: 'SPACE',
  SPLIT: 'SPLIT',

  // 容器
  DYNAMIC_TABLE: 'DYNAMIC_TABLE',
  DYNAMIC_GROUP: 'DYNAMIC_GROUP',

  // 基本
  GROUP: 'GROUP',
  INPUT: 'INPUT',
  TEXT_AREA: 'TEXT_AREA',
  NUMBER: 'NUMBER',
};

/*小部件类型*/
export type Type = keyof typeof WidgetType | string;

// 拖拽对象 - WIDGET
export const DND_SOURCE_WIDGET = 'WIDGET';
// 拖拽对象 - TOOL_BOX
export const DND_SOURCE_TOOL_BOX = 'TOOL_BOX';

/**
 * DWidget
 * @description 数据
 */
export interface DWidget {
  id: string;
  type: Type;
  groupType: GroupType;
  propertys: DWidgetProperty[];
}

/**
 * IWidget
 * @description 接口
 */
export interface IWidget {
  readonly id: string;
  readonly type: Type;
  readonly groupType: GroupType;
  propertys: WidgetProperty[];
  render(children?: ReactNode): ReactNode;
  render(): ReactNode;
  renderDesign(children: ReactNode): ReactNode;
  renderDesign(): ReactNode;
  getId(): string;
  getType(): Type;
  getPropertys(): WidgetProperty[];
}

/**
 * DLayoutWidget
 * @description 数据
 */
export interface DLayoutWidget extends DWidget {
  widgets: Array<DWidget | DLayoutWidget>;
}

/**
 * ILayoutWidget
 * @description 接口
 */
export interface ILayoutWidget extends IWidget {
  widgets: Array<Widget | LayoutWidget>;
  getWidgets(): Array<Widget | LayoutWidget>;
}

export interface WidgetProps extends ComponentProps {
  id: string;
  type: Type;
  groupType: GroupType;
  propertys: WidgetProperty[];
}

export interface LayoutWidgetProps extends WidgetProps {
  widgets: Array<Widget | LayoutWidget>;
}

export interface DNDLayoutWidgetProps extends LayoutWidgetProps {}

export interface IDNDLayoutWidgetContext {
  isOverCurrent: boolean;
  toolboxDropWithWidget(
    toolbox: WidgetToolBoxDNDInitProps,
    widget: WidgetProps | LayoutWidgetProps,
  );
  widgetDropWithWidget(
    sourceWidget: WidgetProps | LayoutWidgetProps,
    targetWidget: WidgetProps | LayoutWidgetProps,
  );
  copyWidget(widget: WidgetProps);
  deleteWidget(widget: WidgetProps);
}

export interface IDNDWidgetContext {}

export interface DNDWidgetProps extends WidgetProps {
  children?: ReactNode;
}

export interface WidgetDNDHelpProps extends WidgetProps {}

export interface LayoutWidgetDNDHelpProps extends LayoutWidgetProps {}

export interface WidgetHoverHighlightHelpProps extends WidgetProps {}

export interface LayoutWidgetHoverHighlightHelpProps extends LayoutWidgetProps {}

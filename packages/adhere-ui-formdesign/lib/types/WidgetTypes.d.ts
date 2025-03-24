import { ReactNode } from 'react';
import Widget from '../Widget';
import LayoutWidget from '../Widget/LayoutWidget';
import WidgetProperty from '../WidgetProperty/WidgetProperty';
import { ComponentProps } from './CommonTypes';
import { DWidgetProperty } from './WidgetPropertyTypes';
import { WidgetToolBoxDNDInitProps } from './WidgetToolBoxDNDInitProps';
export declare enum GroupType {
    LAYOUT = "LAYOUT",
    CONTAINER = "CONTAINER",
    BASE = "BASE",
    ADVANCED = "ADVANCED"
}
/**
 * WidgetType
 * @description Widget的枚举
 */
export declare const WidgetType: {
    FLOW_LAYOUT: string;
    INLINE_LAYOUT: string;
    FLEX_LAYOUT: string;
    GRID_LAYOUT: string;
    TABS_LAYOUT: string;
    CARD_LAYOUT: string;
    COLLAPSE_LAYOUT: string;
    SPACE: string;
    SPLIT: string;
    DYNAMIC_TABLE: string;
    DYNAMIC_GROUP: string;
    GROUP: string;
    INPUT: string;
    TEXT_AREA: string;
    NUMBER: string;
};
export type Type = keyof typeof WidgetType | string;
export declare const DND_SOURCE_WIDGET = "WIDGET";
export declare const DND_SOURCE_TOOL_BOX = "TOOL_BOX";
/**
 * DWidget
 * @description 数据
 */
export interface DWidget {
    id: string;
    type: Type;
    groupType: GroupType;
    properties: DWidgetProperty[];
}
/**
 * IWidget
 * @description 接口
 */
export interface IWidget {
    readonly id: string;
    readonly type: Type;
    readonly groupType: GroupType;
    properties: WidgetProperty[];
    render(children?: ReactNode): ReactNode;
    render(): ReactNode;
    renderDesign(children: ReactNode): ReactNode;
    renderDesign(): ReactNode;
    getId(): string;
    getType(): Type;
    getProperties(): WidgetProperty[];
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
    properties: WidgetProperty[];
}
export interface LayoutWidgetProps extends WidgetProps {
    widgets: Array<Widget | LayoutWidget>;
}
export interface DNDLayoutWidgetProps extends LayoutWidgetProps {
}
export interface IDNDLayoutWidgetContext {
    isOverCurrent: boolean;
    toolboxDropWithWidget(toolbox: WidgetToolBoxDNDInitProps, widget: WidgetProps | LayoutWidgetProps): any;
    widgetDropWithWidget(sourceWidget: WidgetProps | LayoutWidgetProps, targetWidget: WidgetProps | LayoutWidgetProps): any;
    copyWidget(widget: WidgetProps): any;
    deleteWidget(widget: WidgetProps): any;
}
export interface IDNDWidgetContext {
}
export interface DNDWidgetProps extends WidgetProps {
    children?: ReactNode;
}
export interface WidgetDNDHelpProps extends WidgetProps {
}
export interface LayoutWidgetDNDHelpProps extends LayoutWidgetProps {
}
export interface WidgetHoverHighlightHelpProps extends WidgetProps {
}
export interface LayoutWidgetHoverHighlightHelpProps extends LayoutWidgetProps {
}

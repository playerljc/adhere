import type { ReactNode } from 'react';
import type { GroupType, Type } from './WidgetTypes';
export declare enum Stage {
    INIT = "INIT",
    DRAGGING = "DRAGGING",
    DRAGEND = "DRAGEND"
}
/**
 * WidgetToolBoxType
 */
export interface WidgetToolBoxType {
    groupType?: GroupType;
    type?: Type;
    name?: string;
    iconPath?: string;
    Stage?: Stage;
    renderInit?: () => ReactNode;
    renderDragging?: () => ReactNode;
}

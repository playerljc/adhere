import Widget from '../Widget';
import LayoutWidget from '../Widget/LayoutWidget';
import { WidgetComposite } from '../types/WidgetToolBoxManagerTypes';
import { WidgetToolBoxType } from '../types/WidgetToolBoxTypes';
import type { GroupType } from '../types/WidgetTypes';
import { Type } from '../types/WidgetTypes';
/**
 * registerWidget
 * @description 注册一个Widget
 * @param {Type} _type widget类型
 * @param {number} _sort 排序
 * @param {WidgetToolBox} _widgetToolBox widget的toolBox
 * @param {Widget} _widgetClass widget的Class
 */
export declare function registerWidget<T extends typeof Widget | typeof LayoutWidget>(_type: Type, _sort: number, _widgetToolBox: WidgetToolBoxType, _widgetClass: T): void;
export declare function getWidgetToolBoxByType(type: Type): WidgetToolBoxType | undefined;
export declare function getAllWidgetToolBox(): WidgetComposite[];
export declare function getWidgetToolBoxByGroupType(groupType: GroupType): WidgetToolBoxType[];
export declare function getWidgetClassByType(type: Type): import("../types/WidgetTypes").IWidget | import("../types/WidgetTypes").ILayoutWidget | undefined;
export declare function getGroups(): GroupType[];

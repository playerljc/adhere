import Widget from '../Widget';
import FlowLayoutWidget from '../Widget/FlowLayout';
import InputWidget from '../Widget/Input';
import LayoutWidget from '../Widget/LayoutWidget';
import { WidgetComposite } from '../types/WidgetToolBoxManagerTypes';
import { WidgetToolBoxType } from '../types/WidgetToolBoxTypes';
import type { GroupType } from '../types/WidgetTypes';
import { Type, WidgetType } from '../types/WidgetTypes';
import FlwLayoutToolBox from './FlowLayout';
import InputToolBox from './Input';

// 存储所有的WidgetToolBox定义
const widgetToolBox: Map<Type, WidgetComposite> = new Map<Type, WidgetComposite>();

registerWidget(WidgetType.INPUT, 1, InputToolBox, InputWidget);
registerWidget(WidgetType.FLOW_LAYOUT, 2, FlwLayoutToolBox, FlowLayoutWidget);

/**
 * registerWidget
 * @description 注册一个Widget
 * @param {Type} _type widget类型
 * @param {number} _sort 排序
 * @param {WidgetToolBox} _widgetToolBox widget的toolBox
 * @param {Widget} _widgetClass widget的Class
 */
export function registerWidget<T extends typeof Widget | typeof LayoutWidget>(
  _type: Type,
  _sort: number,
  _widgetToolBox: WidgetToolBoxType,
  _widgetClass: T,
) {
  widgetToolBox.set(_type, {
    type: _type,
    sort: _sort,
    toolBox: _widgetToolBox,
    widgetClass: _widgetClass,
  });

  WidgetType[_type] = _type;
}

export function getWidgetToolBoxByType(type: Type) {
  return widgetToolBox.get(type)?.toolBox;
}

export function getAllWidgetToolBox() {
  return Array.from<WidgetComposite>(widgetToolBox.values())
    .sort((t1, t2) => (t1.sort > t2.sort ? 1 : t1.sort === t1.sort ? 0 : -1))
    .filter((t) => t.toolBox);
}

export function getWidgetToolBoxByGroupType(groupType: GroupType) {
  return Array.from<WidgetComposite>(widgetToolBox.values())
    .filter((t) => t.toolBox.groupType === groupType)
    .map((t) => t.toolBox);
}

export function getWidgetClassByType(type: Type) {
  return widgetToolBox?.get?.(type)?.widgetClass;
}

export function getGroups() {
  return Array.from(
    Array.from<WidgetComposite>(widgetToolBox.values()).reduce<Set<GroupType>>((result, wc) => {
      result.add(wc.toolBox.groupType as GroupType);

      return result;
    }, new Set<GroupType>()),
  );
}

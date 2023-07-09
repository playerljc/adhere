// import Intl from '@baifendian/adhere-util-intl';
import { GroupType } from '../types/WidgetTypes';

// 分组类型
const widgetToolBoxGroup: Map<GroupType, string> = new Map<GroupType, string>([
  [GroupType.LAYOUT, '布局字段' /*Intl.v('布局字段')*/],
  [GroupType.CONTAINER, '容器字段' /*Intl.v('容器字段')*/],
  [GroupType.BASE, '基础字段' /*Intl.v('基础字段')*/],
  [GroupType.ADVANCED, '高级字段' /*Intl.v('高级字段')*/],
]);
export function registerGroup(type: GroupType, name: string) {
  widgetToolBoxGroup.set(type, name);
}
export function getGroupNameByType(type: GroupType) {
  return widgetToolBoxGroup.get(type);
}
export function getNames() {
  return Array.from(widgetToolBoxGroup.values());
}
export function getTypes() {
  return Array.from(widgetToolBoxGroup.keys());
}

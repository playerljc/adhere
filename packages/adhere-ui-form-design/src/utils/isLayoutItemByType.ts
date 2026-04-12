import { values } from '../Dict';

export function isLayoutItemByType(type: string) {
  return values.LayoutItemsType?.value?.includes(type);
}

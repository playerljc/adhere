import { values } from '../Dict';

export function isLayoutItem(type: string) {
  return values.LayoutItemsType?.value?.includes(type);
}

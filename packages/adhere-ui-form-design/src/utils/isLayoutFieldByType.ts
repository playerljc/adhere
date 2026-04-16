import { values } from '../Dict';

export function isLayoutFieldByType(type: string) {
  return values.LayoutFieldTypes?.value?.includes(type);
}

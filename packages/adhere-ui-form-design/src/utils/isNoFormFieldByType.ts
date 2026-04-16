import { values } from '../Dict';

export function isNoFormFieldByType(type: string) {
  return values.NoFormFieldTypes?.value?.includes(type);
}

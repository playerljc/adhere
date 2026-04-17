import { values } from '../Dict';

export function isContainerFieldByType(type: string) {
  return values.ContainerFieldTypes?.value?.includes(type);
}

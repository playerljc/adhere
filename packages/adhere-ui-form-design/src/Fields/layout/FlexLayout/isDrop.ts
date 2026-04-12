import { isLayoutItemByType } from '../../../utils';

/**
 * isDrop
 * @description FlayLayout只能放置容器
 * @param originType
 */
export function isDrop(originType: string): boolean {
  return isLayoutItemByType(originType) as boolean;
}

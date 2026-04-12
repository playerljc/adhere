import { isLayoutItemByType } from '../../../utils';

/**
 * isDrop
 * @description TableGridLayout只能放置控件(除了容器之外的)
 * @param originType
 */
export function isDrop(originType: string): boolean {
  return !isLayoutItemByType(originType) as boolean;
}

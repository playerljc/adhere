import { TYPE as TableGridLayoutType } from '../Fields/layout/TableGridLayout/constant';
import { isLayoutItem } from './isLayoutItem';

/**
 * isDragEnd
 * @description 是否可以放置
 * @param {string} activeType
 * @param {string} overType
 * @return {boolean}
 */
export function isDragEnd({ activeType, overType }: { activeType: string; overType: string }) {
  // active是控件, over不是TableGridLayout
  if (!isLayoutItem(activeType) && overType !== TableGridLayoutType) {
    return false;
  }

  if (activeType === TableGridLayoutType && overType === TableGridLayoutType) {
    return false;
  }

  return true;
}

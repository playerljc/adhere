import { TYPE as TableGridLayoutType } from '../Fields/layout/TableGridLayout/constant';
import { isLayoutItem } from './isLayoutItem';

/**
 * isDragEnd
 * @description 是否可以放置
 * @param overId
 * @param activeType
 * @param overType
 * @return {boolean}
 */
export function isDragEnd({
  activeType,
  overType,
}: {
  overId: string;
  activeType: string;
  overType: string;
}): boolean {
  // active是普通控件 over是TableGridLayoutType布局
  if (!isLayoutItem(activeType) && isLayoutItem(overType) && overType === TableGridLayoutType) {
    return true;
  }

  if (isLayoutItem(activeType) && isLayoutItem(overType) && overType !== TableGridLayoutType) {
    return true;
  }

  // // active 是普通控件时, overId是跟容器时返回false
  // if (!isLayoutItem(activeType) && isRootFieldId(overId)) return false;
  //
  // // active 是普通控件时，over 必须是可接收子项的布局容器
  // if (!isLayoutItem(activeType) && !isLayoutItem(overType)) {
  //   return false;
  // }

  if (activeType === TableGridLayoutType && overType === TableGridLayoutType) {
    return false;
  }

  return false;
}

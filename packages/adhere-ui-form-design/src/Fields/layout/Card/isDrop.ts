import { isLayoutFieldByType, isNoFormFieldByType } from '../../../utils';

/**
 * isDrop
 * @description Card只能放置容器
 * @param originType
 */
export function isDrop(originType: string): boolean {
  return (
    (isLayoutFieldByType(originType) as boolean) || (isNoFormFieldByType(originType) as boolean)
  );
}

import type { DesignValue } from '../types';

/**
 * 把 DesignValueProps.children（(DesignValue | DesignValue[])[]）拍平成一维数组
 */
export default function normalizeDesignChildren(
  children: (DesignValue | DesignValue[])[] | undefined,
  options?: {
    /**
     * 为 true 时：children 为空/不存在则返回 undefined
     * 为 false 时：children 为空/不存在则返回 []
     */
    returnUndefinedIfEmpty?: boolean;
  },
): DesignValue[] | undefined {
  const returnUndefinedIfEmpty = options?.returnUndefinedIfEmpty ?? false;

  if (!children || children.length === 0) {
    return returnUndefinedIfEmpty ? undefined : [];
  }

  const result: DesignValue[] = [];

  for (const item of children) {
    if (Array.isArray(item)) {
      result.push(...item);
    } else if (item) {
      result.push(item);
    }
  }

  if (result.length === 0) {
    return returnUndefinedIfEmpty ? undefined : [];
  }

  return result;
}


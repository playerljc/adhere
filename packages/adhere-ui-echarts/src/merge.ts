import merge from 'lodash.merge';

/**
 * 深度合并函数
 * @description 基于 lodash.merge 的深度对象合并工具
 * @template T - 目标对象类型
 * @template U - 源对象类型
 * @param target - 目标对象
 * @param sources
 * @returns 合并后的对象
 *
 * @example
 * ```typescript
 * const obj1 = { a: 1, b: { c: 2 } };
 * const obj2 = { b: { d: 3 }, e: 4 };
 * const result = merge(obj1, obj2);
 * // result: { a: 1, b: { c: 2, d: 3 }, e: 4 }
 * ```
 */
function deepMerge<T extends object>(
  target: T,
  ...sources: Array<Partial<T> | undefined | null>
): T {
  const validSources = sources.filter(
    (source): source is Partial<T> => source != null && typeof source === 'object',
  );

  return merge(target, ...validSources);
}

export default deepMerge;

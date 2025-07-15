import type { ProxyTarget } from './types';
/**
 * NotNull工具函数
 * 创建一个代理对象，确保所有属性访问都不会返回null/undefined
 *
 * @param target - 要处理的目标对象或数组
 * @returns 代理后的对象或数组
 *
 * @example
 * ```typescript
 * import NotNull from '@baifendian/adhere-util-notnull';
 *
 * // 基本用法
 * const safeObj = NotNull({});
 * safeObj.user.profile.name = 'John'; // 自动创建嵌套对象
 *
 * // 数组用法
 * const safeArr = NotNull([]);
 * safeArr[0] = { data: {} };
 * safeArr[0].data.value = 123; // 自动创建嵌套对象
 *
 * // 处理现有对象
 * const existingObj = NotNull({ user: { name: 'John' } });
 * existingObj.user.age = 25; // 不会覆盖现有属性
 * ```
 */
export default function NotNull<T extends ProxyTarget>(target: T): T;

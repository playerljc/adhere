import Util from '@baifendian/adhere-util';

import type { ProxyHandler, ProxyTarget } from './types';

/**
 * 创建代理对象，确保所有属性都不为null/undefined
 * @param target - 要代理的目标对象或数组
 * @returns 代理后的对象或数组，所有空值属性都会被初始化为空对象
 *
 * @example
 * ```typescript
 * const obj = createProxy({});
 * obj.a.b.c = 1; // 不会报错，会自动创建嵌套对象
 *
 * const arr = createProxy([]);
 * arr[0] = {}; // 数组元素也会被代理
 * ```
 */
function createProxy(target: ProxyTarget): ProxyTarget {
  // 如果目标为空，初始化为空对象
  if (Util.isEmpty(target)) {
    target = {};
  }

  // 只有对象和数组才能进行代理
  if (!Util.isObject(target) && !Util.isArray(target)) {
    return target;
  }

  // 创建代理处理器
  const handler: ProxyHandler = {
    /**
     * 获取属性时的处理
     * @param target - 目标对象
     * @param property - 属性名
     * @param receiver - 代理对象
     * @returns 属性值，如果为空则返回代理后的空对象
     */
    get(target: ProxyTarget, property: string | number | symbol, receiver: any): any {
      let value = target[property];

      // 如果属性值为空，初始化为空对象并创建代理
      if (Util.isEmpty(value)) {
        value = {};
        target[property] = createProxy(value);
      }

      return Reflect.get(target, property, receiver);
    },

    /**
     * 设置属性时的处理
     * @param target - 目标对象
     * @param property - 属性名
     * @param value - 要设置的值
     * @param receiver - 代理对象
     * @returns 是否设置成功
     */
    set(
      target: ProxyTarget,
      property: string | number | symbol,
      value: any,
      receiver: any,
    ): boolean {
      // 如果设置的值为空，初始化为空对象
      if (Util.isEmpty(value)) {
        value = {};
      }

      // 处理数组类型
      if (Util.isArray(target)) {
        return handleArraySet(target, property, value, receiver);
      }

      // 处理对象类型
      if (Util.isObject(target)) {
        value = createProxy(value);
      }

      return Reflect.set(target, property, value, receiver);
    },
  };

  // 创建代理对象
  const proxy = new Proxy(target, handler);

  // 递归处理目标对象的所有现有属性
  initializeExistingProperties(target);

  return proxy;
}

/**
 * 处理数组的set操作
 * @param target - 数组目标
 * @param property - 属性名（索引）
 * @param value - 要设置的值
 * @param receiver - 代理对象
 * @returns 是否设置成功
 */
function handleArraySet(
  target: any[],
  property: string | number | symbol,
  value: any,
  receiver: any,
): boolean {
  const srcLength = target.length;
  let result = Reflect.set(target, property, value, receiver);
  const targetLength = target.length;

  // 根据数组长度变化判断操作类型
  if (targetLength > srcLength) {
    // 数组添加操作
    if (Util.isObject(value) || Util.isArray(value)) {
      value = createProxy(value);
      result = Reflect.set(target, property, value, receiver);
    }
  } else if (targetLength === srcLength) {
    // 数组修改操作
    if (Util.isObject(value) || Util.isArray(value)) {
      value = createProxy(value);
      result = Reflect.set(target, property, value, receiver);
    }
  }
  // 删除操作不需要特殊处理

  return result;
}

/**
 * 初始化目标对象的现有属性，为所有对象和数组属性创建代理
 * @param target - 目标对象
 */
function initializeExistingProperties(target: ProxyTarget): void {
  for (const property in target) {
    const objItem = target[property];

    if (Util.isObject(objItem) || Util.isArray(objItem)) {
      target[property] = createProxy(objItem);
    }
  }
}

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
export default function NotNull<T extends ProxyTarget>(target: T): T {
  return createProxy(target) as T;
}

import type { AopCallback, DecoratorDescriptor, DecoratorProperty, DecoratorTarget } from './types';

/**
 * AOP装饰器 - 在方法执行前后添加钩子函数
 * 
 * 该装饰器实现了面向切面编程（AOP）的概念，允许在方法执行前和执行后
 * 添加自定义的逻辑处理。
 * 
 * @param before - 方法执行前的钩子函数，返回false可以阻止方法执行
 * @param after - 方法执行后的钩子函数
 * @returns 装饰器函数
 * 
 * @example
 * ```typescript
 * class MyClass {
 *   @Aop(
 *     // before钩子
 *     function() {
 *       console.log('方法执行前');
 *       return true; // 返回true允许方法执行，返回false阻止执行
 *     },
 *     // after钩子
 *     function() {
 *       console.log('方法执行后');
 *     }
 *   )
 *   myMethod() {
 *     console.log('方法执行中');
 *   }
 * }
 * ```
 */
export default function Aop(before?: AopCallback, after?: AopCallback) {
  return function (
    target: DecoratorTarget,
    property: DecoratorProperty,
    descriptor: DecoratorDescriptor
  ): DecoratorDescriptor {
    const { value } = descriptor;

    descriptor.value = function (...args: any[]): any {
      let result: any = null;

      try {
        let shouldExecute = true;

        // 执行before钩子
        if (before && typeof before === 'function') {
          const beforeResult = before.call(this);
          shouldExecute = beforeResult !== false;
        }

        // 如果before钩子允许执行，则执行原方法
        if (shouldExecute) {
          result = value.apply(this, args);
        }

        // 执行after钩子
        if (after && typeof after === 'function') {
          after.call(this);
        }
      } catch (error) {
        console.error(`AOP装饰器执行出错 [${String(property)}]:`, error);
      }

      return result;
    };

    return descriptor;
  };
}

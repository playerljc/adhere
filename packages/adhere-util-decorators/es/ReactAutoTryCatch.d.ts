import type { AutoTryCatchCallback, DecoratorDescriptor, DecoratorProperty, DecoratorTarget } from './types';
/**
 * AutoTryCatch - 自动加入try/catch的装饰器
 *
 * 该装饰器会自动为被装饰的方法添加try/catch错误处理，
 * 当方法执行出错时会调用指定的回调函数处理错误。
 *
 * @param callback - 错误处理回调函数，当方法执行出错时会被调用
 * @returns 装饰器函数
 *
 * @example
 * ```typescript
 * class MyClass {
 *   @AutoTryCatch((error) => {
 *     console.error('方法执行出错:', error);
 *   })
 *   async riskyMethod() {
 *     // 可能出错的方法
 *     throw new Error('Something went wrong');
 *   }
 * }
 * ```
 */
export default function AutoTryCatch(callback?: AutoTryCatchCallback): (target: DecoratorTarget, property: DecoratorProperty, descriptor: DecoratorDescriptor) => DecoratorDescriptor;

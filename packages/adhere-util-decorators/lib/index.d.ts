import ReactAop from './ReactAop';
import ReactAutoTryCatch from './ReactAutoTryCatch';
import ReactErrorBoundaries from './ReactErrorBoundaries';
/**
 * adhere-util-decorators 工具包
 *
 * 提供了一系列React装饰器工具，包括：
 * - ReactErrorBoundaries: React错误边界高阶组件
 * - ReactAop: AOP装饰器，支持方法执行前后的钩子函数
 * - ReactAutoTryCatch: 自动try-catch装饰器
 *
 * @example
 * ```typescript
 * import { ReactErrorBoundaries, ReactAop, ReactAutoTryCatch } from '@baifendian/adhere-util-decorators';
 *
 * // 使用错误边界
 * const SafeComponent = ReactErrorBoundaries(MyComponent);
 *
 * // 使用AOP装饰器
 * class MyClass {
 *   @ReactAop(
 *     () => console.log('before'),
 *     () => console.log('after')
 *   )
 *   myMethod() {}
 * }
 *
 * // 使用自动try-catch
 * class MyClass {
 *   @ReactAutoTryCatch((error) => console.error(error))
 *   riskyMethod() {}
 * }
 * ```
 */
declare const _default: {
    ReactErrorBoundaries: typeof ReactErrorBoundaries;
    ReactAop: typeof ReactAop;
    ReactAutoTryCatch: typeof ReactAutoTryCatch;
};
export default _default;
export type { IReactErrorBoundariesState, SharedProps, ReactComponent, AopCallback, AopBeforeCallback, AopAfterCallback, AutoTryCatchCallback, DecoratorDescriptor, DecoratorTarget, DecoratorProperty } from './types';
export { default as ReactErrorBoundaries } from './ReactErrorBoundaries';
export { default as ReactAop } from './ReactAop';
export { default as ReactAutoTryCatch } from './ReactAutoTryCatch';

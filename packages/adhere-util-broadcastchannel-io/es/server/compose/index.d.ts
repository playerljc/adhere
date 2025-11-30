import type { Middleware } from '../../types';
import type Context from '../../Context';
/**
 * Compose
 * @description 将多个中间件函数组合成一个函数，按顺序执行
 * @param {Middleware[]} middlewares 中间件数组
 * @returns {(ctx: Context, next?: () => Promise<void> | void) => Promise<void>} 组合后的中间件函数
 */
declare function Compose(middlewares: Middleware[]): (ctx: Context, next?: () => Promise<void> | void) => Promise<void>;
export default Compose;

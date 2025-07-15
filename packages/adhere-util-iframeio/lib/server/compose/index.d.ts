import type { Middleware } from '../../types';
import type Context from '../../Context';
/**
 * 组合中间件函数
 * @description 将多个中间件函数组合成一个函数，按顺序执行
 * @param middlewares - 中间件数组
 * @returns 组合后的中间件函数
 */
declare function Compose(middlewares: Middleware[]): (ctx: Context, next?: () => Promise<void> | void) => Promise<void>;
export default Compose;

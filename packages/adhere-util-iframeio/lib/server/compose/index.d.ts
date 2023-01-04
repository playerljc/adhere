import type { MiddleWare } from '../../types';
/**
 * Compose
 * @description 组合中间件
 * @param middleWares
 * @constructor
 */
declare function Compose(middleWares: MiddleWare[]): (ctx: any, next?: () => Promise<void> | void) => Promise<void>;
export default Compose;

import type { Middleware } from '../../types';
/**
 * 路由类
 * @class Router
 * @description 用于管理路由和控制器
 */
declare class Router {
    /** 控制器映射表 */
    controllers: Map<string, Middleware>;
    /**
     * controller
     * @description 添加控制器
     * @param {string} path 路由路径
     * @param {Middleware} middleware 中间件函数
     * @returns {this} 返回当前实例，支持链式调用
     */
    controller(path: string, middleware: Middleware): this;
    /**
     * routers
     * @description 获取所有的中间件
     * @returns {Middleware[]} 中间件数组
     */
    routers(): Middleware[];
}
export default Router;

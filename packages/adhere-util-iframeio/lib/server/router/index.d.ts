import type { MiddleWare } from '../../types';
/**
 * Router
 * @class Router
 * @classdesc 路由
 */
declare class Router {
    controllers: Map<string, MiddleWare>;
    /**
     * controller
     * @description 添加控制器
     * @param path
     * @param middleWare
     */
    controller(path: string, middleWare: MiddleWare): this;
    /**
     * routers
     * @description 获取所有的中间件
     */
    routers(): MiddleWare[];
}
export default Router;

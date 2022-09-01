import type { MiddleWare } from '../../types';

/**
 * Router
 * @class Router
 * @classdesc 路由
 */
class Router {
  controllers: Map<string, MiddleWare> = new Map<string, MiddleWare>();

  /**
   * controller
   * @description 添加控制器
   * @param path
   * @param middleWare
   */
  controller(path: string, middleWare: MiddleWare): this {
    this.controllers.set(path, (ctx, next) => {
      if (path === ctx.getRequest().getPathname()) {
        middleWare(ctx, next);
        return;
      }

      next && next();
    });

    return this;
  }

  /**
   * routers
   * @description 获取所有的中间件
   */
  routers(): MiddleWare[] {
    return Array.from(this.controllers.values());
  }
}

export default Router;

import type { Middleware } from '../../types';

/**
 * 路由类
 * @class Router
 * @description 用于管理路由和控制器
 */
class Router {
  /** 控制器映射表 */
  controllers: Map<string, Middleware> = new Map<string, Middleware>();

  /**
   * 添加控制器
   * @param path - 路由路径
   * @param middleware - 中间件函数
   * @returns this - 返回当前实例，支持链式调用
   */
  controller(path: string, middleware: Middleware): this {
    this.controllers.set(path, (ctx, next) => {
      if (path === ctx.getRequest().getPathname()) {
        middleware(ctx, next);
        return;
      }

      next && next();
    });

    return this;
  }

  /**
   * 获取所有的中间件
   * @returns Middleware[] - 中间件数组
   */
  routers(): Middleware[] {
    return Array.from(this.controllers.values());
  }
}

export default Router;

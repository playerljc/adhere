import type Request from './Request';
import type Response from './Response';
import type { ContextOptions } from './types';

/**
 * 上下文对象类
 * @class Context
 * @description 用于在中间件之间传递请求和响应对象
 */
class Context {
  /** 请求对象 */
  private readonly request: Request;
  /** 响应对象 */
  readonly response: Response;

  /**
   * 构造函数
   * @param options - 上下文选项
   */
  constructor(options: ContextOptions) {
    this.request = options.request;
    this.response = options.response;
  }

  /**
   * 获取请求对象
   * @returns 请求对象
   */
  getRequest(): Request {
    return this.request;
  }

  /**
   * 获取响应对象
   * @returns 响应对象
   */
  getResponse(): Response {
    return this.response;
  }
}

export default Context;

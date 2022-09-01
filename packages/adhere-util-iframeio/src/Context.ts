import type { ContextOptions } from './types';
import type Request from './Request';
import type Response from './Response';

/**
 * Context
 * @class Context
 * @classdesc 上下文对象
 */
class Context {
  private readonly request: Request;
  private readonly response: Response;

  constructor(options: ContextOptions) {
    this.request = options.request;
    this.response = options.response;
  }

  getRequest() {
    return this.request;
  }

  getResponse() {
    return this.response;
  }
}

export default Context;

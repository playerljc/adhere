import type Request from './Request';
import type Response from './Response';
import type { ContextOptions } from './types';
/**
 * 上下文对象类
 * @class Context
 * @description 用于在中间件之间传递请求和响应对象
 */
declare class Context {
    /** 请求对象 */
    private readonly request;
    /** 响应对象 */
    readonly response: Response;
    /**
     * constructor
     * @description 构造函数
     * @param {ContextOptions} options 上下文选项
     */
    constructor(options: ContextOptions);
    /**
     * getRequest
     * @description 获取请求对象
     * @returns {Request} 请求对象
     */
    getRequest(): Request;
    /**
     * getResponse
     * @description 获取响应对象
     * @returns {Response} 响应对象
     */
    getResponse(): Response;
}
export default Context;

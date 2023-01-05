import type Request from './Request';
import type Response from './Response';
import type { ContextOptions } from './types';
/**
 * Context
 * @class Context
 * @classdesc 上下文对象
 */
declare class Context {
    private readonly request;
    private readonly response;
    constructor(options: ContextOptions);
    getRequest(): Request;
    getResponse(): Response;
}
export default Context;

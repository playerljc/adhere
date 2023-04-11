import type { MiddleWare } from '../types';
/**
 * Server
 * @class Server
 * @classdesc iframe postMessage 服务端
 */
declare class Server {
    private readonly whitelist;
    private readonly source;
    private readonly sourceOrigin;
    private middleWareQueue;
    constructor(whitelist: string[] | undefined, source: MessageEventSource, sourceOrigin: string);
    /**
     * onMessage
     * @description 接收到消息
     * @param evt
     */
    private onMessage;
    /**
     * middleWareQueueReduce
     * @description 对中间件进行迭代
     * @private
     * @param ctx 上下文对象
     */
    private middleWareQueueReduce;
    /**
     * service
     * @description 具体的请求处理
     * @param {MessageEvent} evt
     * @param {any} data
     * @private
     */
    private service;
    /**
     * start
     * @description 启动服务
     */
    start(): Promise<void>;
    /**
     * close
     * @description 关闭服务
     */
    close(): Promise<void>;
    /**
     * use
     * @description 添加中间件
     * @param middleWare
     */
    use(middleWare: MiddleWare | MiddleWare[]): this;
}
export default Server;

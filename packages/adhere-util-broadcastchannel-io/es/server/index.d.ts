import type { Middleware } from '../types';
/**
 * BroadCastChannel postMessage 服务端类
 * @class Server
 * @description 服务提供接口的Class
 */
declare class Server {
    /** 通信句柄对象 */
    protected bc: BroadcastChannel | undefined;
    /** 白名单pathname列表 */
    private readonly whitelist;
    /** 创建服务的 */
    private readonly origin;
    /** 中间件队列 */
    private middleWareQueue;
    /**
     * 构造函数
     * @param whitelist - 白名单域名列表
     * @param origin - 源pathname
     */
    constructor(whitelist: string[] | undefined, origin: string);
    /**
     * 消息处理函数
     * @param evt - 消息事件
     */
    private onMessage;
    /**
     * 对中间件进行迭代
     * @param ctx - 上下文对象
     * @returns Promise<void>
     */
    private middleWareQueueReduce;
    /**
     * 具体的请求处理
     * @param data - 消息数据
     */
    private service;
    /**
     * 启动服务
     * @returns Promise<void>
     */
    start(): Promise<void>;
    /**
     * 关闭服务
     * @returns Promise<void>
     */
    close(): Promise<void>;
    /**
     * 添加中间件
     * @param middleWare - 中间件函数或中间件数组
     * @returns this - 返回当前实例，支持链式调用
     */
    use(middleWare: Middleware | Middleware[]): this;
}
export default Server;

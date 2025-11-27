import type { Middleware } from '../types';
/**
 * iframe postMessage 服务端类
 * @class Server
 * @description 用于处理iframe通信中的服务端逻辑
 */
declare class Server {
    /** 白名单域名列表 */
    private readonly whitelist;
    /** 源窗口对象 */
    private readonly source;
    /** 源域名 */
    private readonly sourceOrigin;
    /** 中间件队列 */
    private middleWareQueue;
    /**
     * 构造函数
     * @param whitelist - 白名单域名列表
     * @param source - 源窗口对象
     * @param sourceOrigin - 源域名
     */
    constructor(whitelist: string[] | undefined, source: MessageEventSource, sourceOrigin: string);
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
     * @param evt - 消息事件
     * @param data - 消息数据
     */
    private service;
    /**
     * keepAlive
     * @description 心跳的接口
     * @private
     */
    private keepAlive;
    /**
     * 启动服务
     * @param {{
     *   // 是否开启KeepAlive
     *   startKeepAlive?: boolean;
     * }}
     * @returns Promise<void>
     */
    start({ startKeepAlive }: {
        startKeepAlive?: boolean;
    }): Promise<void>;
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

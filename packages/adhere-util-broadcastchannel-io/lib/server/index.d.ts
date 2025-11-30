import Context from '../Context';
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
     * constructor
     * @description 构造函数
     * @param {string[]} whitelist 白名单域名列表
     * @param {string} origin 源pathname
     */
    constructor(whitelist: string[] | undefined, origin: string);
    /**
     * onMessage
     * @description 消息处理函数
     * @param {Event} evt 消息事件
     * @returns {void}
     */
    private onMessage;
    /**
     * middleWareQueueReduce
     * @description 对中间件进行迭代
     * @param {Context} ctx 上下文对象
     * @returns {Promise<void>}
     */
    private middleWareQueueReduce;
    /**
     * service
     * @description 具体的请求处理
     * @param {MessageEventData} data 消息数据
     * @returns {void}
     */
    private service;
    /**
     * keepAlive
     * @description 心跳的接口
     * @private
     * @returns {Router}
     */
    private keepAlive;
    /**
     * accept
     * @description 接受连接成功回调注册
     * @private
     * @param {(ctc: Context, next?: () => Promise<void> | void) => void} [cb] 回调
     * @returns {void}
     */
    accept(cb?: (ctc: Context, next?: () => Promise<void> | void) => void): void;
    /**
     * start
     * @description 启动服务
     * @param {{startKeepAlive?: boolean}} options 启动选项
     * @returns {Promise<void>}
     */
    start({ startKeepAlive }: {
        startKeepAlive?: boolean;
    }): Promise<void>;
    /**
     * close
     * @description 关闭服务
     * @returns {Promise<void>}
     */
    close(): Promise<void>;
    /**
     * use
     * @description 添加中间件
     * @param {Middleware | Middleware[]} middleWare 中间件函数或中间件数组
     * @returns {this} 返回当前实例，支持链式调用
     */
    use(middleWare: Middleware | Middleware[]): this;
}
export default Server;

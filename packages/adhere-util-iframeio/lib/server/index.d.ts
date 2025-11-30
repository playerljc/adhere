import Context from '../Context';
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
     * @param {MessageEvent} evt 消息事件
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

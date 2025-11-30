import Response from '../Response';
import type { SendOptions } from '../types';
/**
 * 客户端发送消息类
 * @class Fetch
 * @description 用于在iframe通信中发送请求并处理响应
 */
declare class Fetch {
    /** 发送方的window对象 */
    private readonly source;
    /** 发送方的origin */
    private readonly origin;
    /**
     * constructor
     * @description 构造函数
     * @param {MessageEventSource} source 源窗口对象
     * @param {string} origin 源域名
     */
    constructor(source: MessageEventSource, origin: string);
    /**
     * send
     * @description 发送请求
     * @param {MessageEventSource} targetWindow 目标窗口对象
     * @param {string} targetOrigin 目标域名
     * @param {string} pathname 请求路径
     * @param {SendOptions} [options] 发送选项
     * @returns {Promise<Response>} 响应对象
     */
    private send;
    /**
     * get
     * @description GET请求
     * @param {MessageEventSource} targetWindow 目标窗口对象
     * @param {string} targetOrigin 目标域名
     * @param {string} pathname 请求路径
     * @param {SendOptions} [options] 发送选项
     * @returns {Promise<Response>} 响应对象
     */
    get(targetWindow: MessageEventSource, targetOrigin: string, pathname: string, options?: SendOptions): Promise<Response>;
    /**
     * put
     * @description PUT请求
     * @param {MessageEventSource} targetWindow 目标窗口对象
     * @param {string} targetOrigin 目标域名
     * @param {string} pathname 请求路径
     * @param {SendOptions} [options] 发送选项
     * @returns {Promise<Response>} 响应对象
     */
    put(targetWindow: MessageEventSource, targetOrigin: string, pathname: string, options?: SendOptions): Promise<Response>;
    /**
     * delete
     * @description DELETE请求
     * @param {MessageEventSource} targetWindow 目标窗口对象
     * @param {string} targetOrigin 目标域名
     * @param {string} pathname 请求路径
     * @param {SendOptions} [options] 发送选项
     * @returns {Promise<Response>} 响应对象
     */
    delete(targetWindow: MessageEventSource, targetOrigin: string, pathname: string, options?: SendOptions): Promise<Response>;
    /**
     * ping
     * @description 发送ping请求
     * @param {MessageEventSource} targetWindow 目标窗口对象
     * @param {string} targetOrigin 目标域名
     * @param {() => void} success 成功的回调
     * @param {() => void} error 失败的回调
     * @param {Omit<SendOptions, 'timeOut'> & { interval?: number }} [options] 附加参数
     * @returns {void}
     */
    ping(targetWindow: MessageEventSource, targetOrigin: string, success: () => void, error: () => void, options?: Omit<SendOptions, 'timeOut'> & {
        interval?: number;
    }): void;
    /**
     * accept
     * @description 发送链接成功的请求
     * @param {MessageEventSource} targetWindow 目标窗口对象
     * @param {string} targetOrigin 目标域名
     * @param {SendOptions} [options] 发送选项
     * @returns {Promise<Response>} 响应对象
     */
    accept(targetWindow: MessageEventSource, targetOrigin: string, options?: SendOptions): Promise<Response>;
}
export default Fetch;

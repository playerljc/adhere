import Response from '../Response';
import type { SendOptions } from '../types';
/**
 * 客户端发送消息类
 * @class Fetch
 * @description 用于在iframe通信中发送请求并处理响应
 */
declare class Fetch {
    /** 发送方 */
    private readonly origin;
    /** 通信句柄对象 */
    protected bc: BroadcastChannel | undefined;
    /**
     * constructor
     * @description 构造函数
     * @param {string} origin 源域名
     */
    constructor(origin: string);
    /**
     * send
     * @description 发送请求
     * @param {string[]} targetOrigin 接收方
     * @param {string} pathname 接口地址
     * @param {SendOptions} [options] 发送选项
     * @returns {Promise<Response>} 响应对象
     */
    private send;
    /**
     * get
     * @description GET请求
     * @param {string[]} targetOrigin 目标域名
     * @param {string} pathname 请求路径
     * @param {SendOptions} [options] 发送选项
     * @returns {Promise<Response>} 响应对象
     */
    get(targetOrigin: string[], pathname: string, options?: SendOptions): Promise<Response>;
    /**
     * put
     * @description PUT请求
     * @param {string[]} targetOrigin 目标域名
     * @param {string} pathname 请求路径
     * @param {SendOptions} [options] 发送选项
     * @returns {Promise<Response>} 响应对象
     */
    put(targetOrigin: string[], pathname: string, options?: SendOptions): Promise<Response>;
    /**
     * delete
     * @description DELETE请求
     * @param {string[]} targetOrigin 目标域名
     * @param {string} pathname 请求路径
     * @param {SendOptions} [options] 发送选项
     * @returns {Promise<Response>} 响应对象
     */
    delete(targetOrigin: string[], pathname: string, options?: SendOptions): Promise<Response>;
    /**
     * ping
     * @description 发送ping请求
     * @param {string[]} targetOrigin 目标域名
     * @param {() => void} success 成功的回调
     * @param {() => void} error 失败的回调
     * @param {Omit<SendOptions, 'timeOut'> & { interval?: number }} [options] 附加参数
     * @returns {void}
     */
    ping(targetOrigin: string[], success: () => void, error: () => void, options?: Omit<SendOptions, 'timeOut'> & {
        interval?: number;
    }): void;
    /**
     * accept
     * @description 发送链接成功的请求
     * @param {string[]} targetOrigin 目标域名
     * @param {SendOptions} [options] 发送选项
     * @returns {Promise<Response>} 响应对象
     */
    accept(targetOrigin: string[], options?: SendOptions): Promise<Response>;
}
export default Fetch;

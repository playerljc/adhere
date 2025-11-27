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
     * 构造函数
     * @param source - 源窗口对象
     * @param origin - 源域名
     */
    constructor(source: MessageEventSource, origin: string);
    /**
     * 发送请求
     * @param targetWindow - 目标窗口对象
     * @param targetOrigin - 目标域名
     * @param pathname - 请求路径
     * @param options - 发送选项
     * @returns Promise<Response> 响应对象
     */
    private send;
    /**
     * GET请求
     * @param targetWindow - 目标窗口对象
     * @param targetOrigin - 目标域名
     * @param pathname - 请求路径
     * @param options - 发送选项
     * @returns Promise<Response> 响应对象
     */
    get(targetWindow: MessageEventSource, targetOrigin: string, pathname: string, options?: SendOptions): Promise<Response>;
    /**
     * PUT请求
     * @param targetWindow - 目标窗口对象
     * @param targetOrigin - 目标域名
     * @param pathname - 请求路径
     * @param options - 发送选项
     * @returns Promise<Response> 响应对象
     */
    put(targetWindow: MessageEventSource, targetOrigin: string, pathname: string, options?: SendOptions): Promise<Response>;
    /**
     * DELETE请求
     * @param targetWindow - 目标窗口对象
     * @param targetOrigin - 目标域名
     * @param pathname - 请求路径
     * @param options - 发送选项
     * @returns Promise<Response> 响应对象
     */
    delete(targetWindow: MessageEventSource, targetOrigin: string, pathname: string, options?: SendOptions): Promise<Response>;
    /**
     * 发送ping请求
     * @param targetWindow - 目标窗口对象
     * @param targetOrigin - 目标域名
     * @param success - 成功的回调
     * @param error - 失败的回调
     * @param options - 附加参数
     */
    ping(targetWindow: MessageEventSource, targetOrigin: string, success: () => void, error: () => void, options?: Omit<SendOptions, 'timeOut'> & {
        interval?: number;
    }): void;
}
export default Fetch;

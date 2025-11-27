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
     * 构造函数
     * @param origin - 源域名
     */
    constructor(origin: string);
    /**
     * 发送请求
     * @param targetOrigin - 接收方
     * @param pathname - 接口地址
     * @param options - 发送选项
     * @returns Promise<Response> 响应对象
     */
    private send;
    /**
     * GET请求
     * @param targetOrigin - 目标域名
     * @param pathname - 请求路径
     * @param options - 发送选项
     * @returns Promise<Response> 响应对象
     */
    get(targetOrigin: string[], pathname: string, options?: SendOptions): Promise<Response>;
    /**
     * PUT请求
     * @param targetOrigin - 目标域名
     * @param pathname - 请求路径
     * @param options - 发送选项
     * @returns Promise<Response> 响应对象
     */
    put(targetOrigin: string[], pathname: string, options?: SendOptions): Promise<Response>;
    /**
     * DELETE请求
     * @param targetOrigin - 目标域名
     * @param pathname - 请求路径
     * @param options - 发送选项
     * @returns Promise<Response> 响应对象
     */
    delete(targetOrigin: string[], pathname: string, options?: SendOptions): Promise<Response>;
    /**
     * 发送ping请求
     * @param targetOrigin - 目标域名
     * @param success - 成功的回调
     * @param error - 失败的回调
     * @param options - 附加参数
     */
    ping(targetOrigin: string[], success: () => void, error: () => void, options?: Omit<SendOptions, 'timeOut'> & {
        interval?: number;
    }): void;
}
export default Fetch;

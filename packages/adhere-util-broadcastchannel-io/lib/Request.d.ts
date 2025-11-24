import type { RequestOptions, StateCode } from './types';
/**
 * 请求对象类
 * @class Request
 * @description 用于处理iframe通信中的请求数据
 */
declare class Request {
    /** 请求ID */
    private requestId;
    /** 请求路径 */
    private pathname;
    /** 请求头 */
    private readonly headers;
    /** 状态码 */
    private statusCode;
    /** 状态消息 */
    private stateMessage;
    /** 请求体 */
    private body;
    /**
     * 构造函数
     * @param options - 请求选项
     */
    constructor(options: RequestOptions);
    /**
     * 获取请求头
     * @returns 请求头的副本
     */
    getHeaders(): Record<string, string>;
    /**
     * 获取请求体
     * @returns 请求体数据
     */
    getBody(): any;
    /**
     * 获取状态码
     * @returns 状态码
     */
    getStatusCode(): StateCode;
    /**
     * 获取状态消息
     * @returns 状态消息
     */
    getStatusMessage(): string;
    /**
     * 获取请求路径
     * @returns 请求路径
     */
    getPathname(): string;
    /**
     * 获取请求ID
     * @returns 请求ID
     */
    getRequestId(): string;
    /**
     * 设置请求头
     * @param key - 请求头键名
     * @param value - 请求头值
     */
    setHeader(key: string, value: string): void;
    /**
     * 设置请求体
     * @param body - 请求体数据
     */
    setBody(body: any): void;
    /**
     * 设置状态码
     * @param statusCode - 状态码
     */
    setStatusCode(statusCode: StateCode): void;
    /**
     * 设置状态消息
     * @param statusMessage - 状态消息
     */
    setStatusMessage(statusMessage: string): void;
    /**
     * 设置请求路径
     * @param pathname - 请求路径
     */
    setPathname(pathname: string): void;
    /**
     * 设置请求ID
     * @param requestId - 请求ID
     */
    setRequestId(requestId: string): void;
}
export default Request;

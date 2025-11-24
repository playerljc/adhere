import type { ResponseOptions, StateCode } from './types';
/**
 * 响应对象类
 * @class Response
 * @description 用于处理iframe通信中的响应数据
 */
declare class Response {
    /** 请求ID */
    private requestId;
    /** 响应头 */
    private readonly headers;
    /** 状态码 */
    private statusCode;
    /** 状态消息 */
    private stateMessage;
    /** 响应体 */
    private body;
    /**
     * 构造函数
     * @param options - 响应选项
     */
    constructor(options: ResponseOptions);
    /**
     * 设置响应头
     * @param key - 响应头键名
     * @param value - 响应头值
     */
    setHeader(key: string, value: string): void;
    /**
     * 获取响应头
     * @returns 响应头的副本
     */
    getHeaders(): Record<string, string>;
    /**
     * 获取响应体
     * @returns 响应体数据
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
     * 获取请求ID
     * @returns 请求ID
     */
    getRequestId(): string;
    /**
     * 设置响应体
     * @param body - 响应体数据
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
     * 设置请求ID
     * @param requestId - 请求ID
     */
    setRequestId(requestId: string): void;
}
export default Response;

import type { Headers, MessageEventData, ResponseOptions, StateCode } from './types';
/**
 * 响应对象类
 * @class Response
 * @description 用于处理iframe通信中的响应数据
 */
declare class Response {
    /** 请求ID */
    private requestId;
    /** 请求类型 */
    private type;
    /** 响应头 */
    private headers;
    /** 状态码 */
    private statusCode;
    /** 状态消息 */
    private stateMessage;
    /** 响应体 */
    private body;
    /**
     * constructor
     * @description 构造函数
     * @param {ResponseOptions} options 响应选项
     */
    constructor(options: ResponseOptions);
    /**
     * setHeader
     * @description 设置响应头
     * @param {string} key 响应头键名
     * @param {string} value 响应头值
     * @returns {void}
     */
    setHeader(key: string, value: string): void;
    /**
     * getHeaders
     * @description 获取响应头
     * @returns {Headers} 响应头的副本
     */
    getHeaders(): Headers;
    /**
     * getBody
     * @description 获取响应体
     * @returns {any} 响应体数据
     */
    getBody(): any;
    /**
     * getStatusCode
     * @description 获取状态码
     * @returns {StateCode} 状态码
     */
    getStatusCode(): StateCode;
    /**
     * getStatusMessage
     * @description 获取状态消息
     * @returns {string} 状态消息
     */
    getStatusMessage(): string;
    /**
     * getRequestId
     * @description 获取请求ID
     * @returns {string} 请求ID
     */
    getRequestId(): string;
    /**
     * getType
     * @description 获取请求类型
     * @returns {MessageEventData['type']} 请求类型
     */
    getType(): "request" | "response";
    /**
     * setBody
     * @description 设置响应体
     * @param {any} body 响应体数据
     * @returns {void}
     */
    setBody(body: any): void;
    /**
     * setStatusCode
     * @description 设置状态码
     * @param {StateCode} statusCode 状态码
     * @returns {void}
     */
    setStatusCode(statusCode: StateCode): void;
    /**
     * setStatusMessage
     * @description 设置状态消息
     * @param {string} statusMessage 状态消息
     * @returns {void}
     */
    setStatusMessage(statusMessage: string): void;
    /**
     * setRequestId
     * @description 设置请求ID
     * @param {string} requestId 请求ID
     * @returns {void}
     */
    setRequestId(requestId: string): void;
    /**
     * setType
     * @description 设置请求类型
     * @param {MessageEventData['type']} type 请求类型
     * @returns {void}
     */
    setType(type: MessageEventData['type']): void;
}
export default Response;

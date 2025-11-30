import type { Headers, MessageEventData, RequestOptions, StateCode } from './types';
/**
 * 请求对象类
 * @class Request
 * @description 用于处理iframe通信中的请求数据
 */
declare class Request {
    /** 请求ID */
    private requestId;
    /** 请求类型 */
    private type;
    /** 请求路径 */
    private pathname;
    /** 请求头 */
    private headers;
    /** 状态码 */
    private statusCode;
    /** 状态消息 */
    private stateMessage;
    /** 请求体 */
    private body;
    /**
     * constructor
     * @description 构造函数
     * @param {RequestOptions} options 请求选项
     */
    constructor(options: RequestOptions);
    /**
     * getHeaders
     * @description 获取请求头
     * @returns {Headers} 请求头的副本
     */
    getHeaders(): Headers;
    /**
     * getBody
     * @description 获取请求体
     * @returns {any} 请求体数据
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
     * getPathname
     * @description 获取请求路径
     * @returns {string} 请求路径
     */
    getPathname(): string;
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
     * setHeader
     * @description 设置请求头
     * @param {string} key 请求头键名
     * @param {string} value 请求头值
     * @returns {void}
     */
    setHeader(key: string, value: string): void;
    /**
     * setBody
     * @description 设置请求体
     * @param {any} body 请求体数据
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
     * setPathname
     * @description 设置请求路径
     * @param {string} pathname 请求路径
     * @returns {void}
     */
    setPathname(pathname: string): void;
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
export default Request;

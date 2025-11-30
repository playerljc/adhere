import type { Headers, MessageEventData, ResponseOptions, StateCode } from './types';

/**
 * 响应对象类
 * @class Response
 * @description 用于处理iframe通信中的响应数据
 */
class Response {
  /** 请求ID */
  private requestId: string = '';

  /** 请求类型 */
  private type: MessageEventData['type'] = 'request';

  /** 响应头 */
  private readonly headers: Headers = {};

  /** 状态码 */
  private statusCode: StateCode = 0;

  /** 状态消息 */
  private stateMessage: string = '';

  /** 响应体 */
  private body: any = null;

  /**
   * constructor
   * @description 构造函数
   * @param {ResponseOptions} options 响应选项
   */
  constructor(options: ResponseOptions) {
    this.requestId = options.requestId;
    this.type = options.type;
    this.headers = options.headers ?? {};
    this.statusCode = options.statusCode || 0;
    this.stateMessage = options.stateMessage || '';
    this.body = options.body;
  }

  /**
   * setHeader
   * @description 设置响应头
   * @param {string} key 响应头键名
   * @param {string} value 响应头值
   * @returns {void}
   */
  setHeader(key: string, value: string): void {
    this.headers[key] = value;
  }

  /**
   * getHeaders
   * @description 获取响应头
   * @returns {Headers} 响应头的副本
   */
  getHeaders(): Headers {
    return { ...this.headers };
  }

  /**
   * getBody
   * @description 获取响应体
   * @returns {any} 响应体数据
   */
  getBody(): any {
    return this.body;
  }

  /**
   * getStatusCode
   * @description 获取状态码
   * @returns {StateCode} 状态码
   */
  getStatusCode(): StateCode {
    return this.statusCode;
  }

  /**
   * getStatusMessage
   * @description 获取状态消息
   * @returns {string} 状态消息
   */
  getStatusMessage(): string {
    return this.stateMessage;
  }

  /**
   * getRequestId
   * @description 获取请求ID
   * @returns {string} 请求ID
   */
  getRequestId(): string {
    return this.requestId;
  }

  /**
   * getType
   * @description 获取请求类型
   * @returns {MessageEventData['type']} 请求类型
   */
  getType() {
    return this.type;
  }

  /**
   * setBody
   * @description 设置响应体
   * @param {any} body 响应体数据
   * @returns {void}
   */
  setBody(body: any): void {
    this.body = body;
  }

  /**
   * setStatusCode
   * @description 设置状态码
   * @param {StateCode} statusCode 状态码
   * @returns {void}
   */
  setStatusCode(statusCode: StateCode): void {
    this.statusCode = statusCode;
  }

  /**
   * setStatusMessage
   * @description 设置状态消息
   * @param {string} statusMessage 状态消息
   * @returns {void}
   */
  setStatusMessage(statusMessage: string): void {
    this.stateMessage = statusMessage;
  }

  /**
   * setRequestId
   * @description 设置请求ID
   * @param {string} requestId 请求ID
   * @returns {void}
   */
  setRequestId(requestId: string): void {
    this.requestId = requestId;
  }

  /**
   * setType
   * @description 设置请求类型
   * @param {MessageEventData['type']} type 请求类型
   * @returns {void}
   */
  setType(type: MessageEventData['type']) {
    this.type = type;
  }
}

export default Response;

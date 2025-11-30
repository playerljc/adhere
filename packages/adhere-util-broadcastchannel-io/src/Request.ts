import { v4 } from 'uuid';

import type { Headers, MessageEventData, RequestOptions, StateCode } from './types';

/**
 * 请求对象类
 * @class Request
 * @description 用于处理iframe通信中的请求数据
 */
class Request {
  /** 请求ID */
  private requestId: string = v4();

  /** 请求类型 */
  private type: MessageEventData['type'] = 'request';

  /** 请求路径 */
  private pathname: string = '';

  /** 请求头 */
  private headers: Headers = {};

  /** 状态码 */
  private statusCode: StateCode = 0;

  /** 状态消息 */
  private stateMessage: string = '';

  /** 请求体 */
  private body: any = null;

  /**
   * constructor
   * @description 构造函数
   * @param {RequestOptions} options 请求选项
   */
  constructor(options: RequestOptions) {
    this.type = options.type;
    this.pathname = options.pathname;
    this.headers = options.headers ?? {};
    this.statusCode = options.statusCode || 0;
    this.stateMessage = options.stateMessage || '';
    this.body = options.body;
  }

  /**
   * getHeaders
   * @description 获取请求头
   * @returns {Headers} 请求头的副本
   */
  getHeaders(): Headers {
    return { ...this.headers };
  }

  /**
   * getBody
   * @description 获取请求体
   * @returns {any} 请求体数据
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
   * getPathname
   * @description 获取请求路径
   * @returns {string} 请求路径
   */
  getPathname(): string {
    return this.pathname;
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
   * setHeader
   * @description 设置请求头
   * @param {string} key 请求头键名
   * @param {string} value 请求头值
   * @returns {void}
   */
  setHeader(key: string, value: string): void {
    this.headers[key] = value;
  }

  /**
   * setBody
   * @description 设置请求体
   * @param {any} body 请求体数据
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
   * setPathname
   * @description 设置请求路径
   * @param {string} pathname 请求路径
   * @returns {void}
   */
  setPathname(pathname: string): void {
    this.pathname = pathname;
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

export default Request;

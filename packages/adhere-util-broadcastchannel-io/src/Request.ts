import { v4 } from 'uuid';

import type { Headers, RequestOptions, StateCode } from './types';

/**
 * 请求对象类
 * @class Request
 * @description 用于处理iframe通信中的请求数据
 */
class Request {
  /** 请求ID */
  private requestId: string = v4();

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
   * 构造函数
   * @param options - 请求选项
   */
  constructor(options: RequestOptions) {
    this.pathname = options.pathname;
    this.headers = options.headers ?? {};
    this.statusCode = options.statusCode || 0;
    this.stateMessage = options.stateMessage || '';
    this.body = options.body;
  }

  /**
   * 获取请求头
   * @returns 请求头的副本
   */
  getHeaders(): Headers {
    return { ...this.headers };
  }

  /**
   * 获取请求体
   * @returns 请求体数据
   */
  getBody(): any {
    return this.body;
  }

  /**
   * 获取状态码
   * @returns 状态码
   */
  getStatusCode(): StateCode {
    return this.statusCode;
  }

  /**
   * 获取状态消息
   * @returns 状态消息
   */
  getStatusMessage(): string {
    return this.stateMessage;
  }

  /**
   * 获取请求路径
   * @returns 请求路径
   */
  getPathname(): string {
    return this.pathname;
  }

  /**
   * 获取请求ID
   * @returns 请求ID
   */
  getRequestId(): string {
    return this.requestId;
  }

  /**
   * 设置请求头
   * @param key - 请求头键名
   * @param value - 请求头值
   */
  setHeader(key: string, value: string): void {
    this.headers[key] = value;
  }

  /**
   * 设置请求体
   * @param body - 请求体数据
   */
  setBody(body: any): void {
    this.body = body;
  }

  /**
   * 设置状态码
   * @param statusCode - 状态码
   */
  setStatusCode(statusCode: StateCode): void {
    this.statusCode = statusCode;
  }

  /**
   * 设置状态消息
   * @param statusMessage - 状态消息
   */
  setStatusMessage(statusMessage: string): void {
    this.stateMessage = statusMessage;
  }

  /**
   * 设置请求路径
   * @param pathname - 请求路径
   */
  setPathname(pathname: string): void {
    this.pathname = pathname;
  }

  /**
   * 设置请求ID
   * @param requestId - 请求ID
   */
  setRequestId(requestId: string): void {
    this.requestId = requestId;
  }
}

export default Request;

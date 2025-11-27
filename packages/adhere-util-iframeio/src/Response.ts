import type { Headers, ResponseOptions, StateCode } from './types';

/**
 * 响应对象类
 * @class Response
 * @description 用于处理iframe通信中的响应数据
 */
class Response {
  /** 请求ID */
  private requestId: string = '';

  /** 响应头 */
  private readonly headers: Headers = {};

  /** 状态码 */
  private statusCode: StateCode = 0;

  /** 状态消息 */
  private stateMessage: string = '';

  /** 响应体 */
  private body: any = null;

  /**
   * 构造函数
   * @param options - 响应选项
   */
  constructor(options: ResponseOptions) {
    this.requestId = options.requestId;
    this.headers = options.headers ?? {};
    this.statusCode = options.statusCode || 0;
    this.stateMessage = options.stateMessage || '';
    this.body = options.body;
  }

  /**
   * 设置响应头
   * @param key - 响应头键名
   * @param value - 响应头值
   */
  setHeader(key: string, value: string): void {
    this.headers[key] = value;
  }

  /**
   * 获取响应头
   * @returns 响应头的副本
   */
  getHeaders(): Headers {
    return { ...this.headers };
  }

  /**
   * 获取响应体
   * @returns 响应体数据
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
   * 获取请求ID
   * @returns 请求ID
   */
  getRequestId(): string {
    return this.requestId;
  }

  /**
   * 设置响应体
   * @param body - 响应体数据
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
   * 设置请求ID
   * @param requestId - 请求ID
   */
  setRequestId(requestId: string): void {
    this.requestId = requestId;
  }
}

export default Response;

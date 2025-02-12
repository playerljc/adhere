import type { ResponseOptions, stateCode } from './types';

/**
 * Response
 * @class Response
 * @classdesc 响应对象
 */
class Response {
  private requestId: string = '';

  private readonly headers: {
    [prop: string]: string;
  } = {};

  private statusCode: stateCode = 0;

  private stateMessage: string = '';

  private body: any = null;

  constructor(options: ResponseOptions) {
    this.requestId = options.requestId;
    this.headers = options.headers ?? {};
    this.statusCode = options.statusCode || 0;
    this.stateMessage = options.stateMessage || '';
    this.body = options.body;
  }

  /**
   * setHeader
   * @description 设置header
   * @param {string} key
   * @param {string} value
   */
  setHeader(key: string, value: string) {
    this.headers[key] = value;
  }

  getHeaders() {
    return { ...this.headers };
  }

  getBody() {
    return this.body;
  }

  getStatusCode() {
    return this.statusCode;
  }

  getStatusMessage() {
    return this.stateMessage;
  }

  getRequestId() {
    return this.requestId;
  }

  /**
   * setBody
   * @param {any} body
   */
  setBody(body) {
    this.body = body;
  }

  /**
   * setStatusCode
   * @param {number} statusCode
   */
  setStatusCode(statusCode) {
    this.statusCode = statusCode;
  }

  /**
   * setStatusMessage
   * @param {string} statusMessage
   */
  setStatusMessage(statusMessage) {
    this.stateMessage = statusMessage;
  }

  /**
   * setRequestId
   * @param {string} requestId
   */
  setRequestId(requestId) {
    this.requestId = requestId;
  }
}

export default Response;

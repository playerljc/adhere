import { v4 } from 'uuid';

import type { RequestOptions, stateCode } from './types';

/**
 * Request
 * @class Request
 * @classdesc 请求对象
 */
class Request {
  private requestId: string = v4();

  private pathname: string = '';

  private readonly headers: {
    [prop: string]: string;
  } = {};

  private statusCode: stateCode = 0;

  private stateMessage: string = '';

  private body: any = null;

  constructor(options: RequestOptions) {
    this.pathname = options.pathname;
    this.headers = options.headers || {};
    this.statusCode = options.statusCode || 0;
    this.stateMessage = options.stateMessage || '';
    this.body = options.body;
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

  getPathname() {
    return this.pathname;
  }

  getRequestId() {
    return this.requestId;
  }

  setHeader(key: string, value: string) {
    this.headers[key] = value;
  }

  setBody(body) {
    this.body = body;
  }

  setStatusCode(statusCode) {
    this.statusCode = statusCode;
  }

  setStatusMessage(statusMessage) {
    this.stateMessage = statusMessage;
  }

  setPathname(pathname) {
    this.pathname = pathname;
  }

  setRequestId(requestId) {
    this.requestId = requestId;
  }
}

export default Request;

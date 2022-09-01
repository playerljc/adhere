import type { stateCode, RequestOptions } from './types';
/**
 * Request
 * @class Request
 * @classdesc 请求对象
 */
declare class Request {
    private requestId;
    private pathname;
    private readonly headers;
    private statusCode;
    private stateMessage;
    private body;
    constructor(options: RequestOptions);
    getHeaders(): {
        [x: string]: string;
    };
    getBody(): any;
    getStatusCode(): stateCode;
    getStatusMessage(): string;
    getPathname(): string;
    getRequestId(): string;
    setHeader(key: string, value: string): void;
    setBody(body: any): void;
    setStatusCode(statusCode: any): void;
    setStatusMessage(statusMessage: any): void;
    setPathname(pathname: any): void;
    setRequestId(requestId: any): void;
}
export default Request;

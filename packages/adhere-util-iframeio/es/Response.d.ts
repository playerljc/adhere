import type { ResponseOptions, stateCode } from './types';
/**
 * Response
 * @class Response
 * @classdesc 响应对象
 */
declare class Response {
    private requestId;
    private readonly headers;
    private statusCode;
    private stateMessage;
    private body;
    constructor(options: ResponseOptions);
    /**
     * setHeader
     * @description 设置header
     * @param {string} key
     * @param {string} value
     */
    setHeader(key: string, value: string): void;
    getHeaders(): {
        [x: string]: string;
    };
    getBody(): any;
    getStatusCode(): stateCode;
    getStatusMessage(): string;
    getRequestId(): string;
    /**
     * setBody
     * @param {any} body
     */
    setBody(body: any): void;
    /**
     * setStatusCode
     * @param {number} statusCode
     */
    setStatusCode(statusCode: any): void;
    /**
     * setStatusMessage
     * @param {string} statusMessage
     */
    setStatusMessage(statusMessage: any): void;
    /**
     * setRequestId
     * @param {string} requestId
     */
    setRequestId(requestId: any): void;
}
export default Response;

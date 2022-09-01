import type { stateCode, ResponseOptions } from './types';
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
    setHeader(key: string, value: string): void;
    getHeaders(): {
        [x: string]: string;
    };
    getBody(): any;
    getStatusCode(): stateCode;
    getStatusMessage(): string;
    getRequestId(): string;
    setBody(body: any): void;
    setStatusCode(statusCode: any): void;
    setStatusMessage(statusMessage: any): void;
    setRequestId(requestId: any): void;
}
export default Response;

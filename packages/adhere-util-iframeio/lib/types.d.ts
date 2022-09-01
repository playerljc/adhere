import type Context from './Context';
import Request from './Request';
import Response from './Response';
export declare type stateCode = 0 | 200 | 404 | 500;
export declare type ContextOptions = {
    request: Request;
    response: Response;
};
export declare type MiddleWare = (ctx: Context, next?: () => Promise<void> | void) => Promise<void> | void;
export declare type SendOptions = {
    data: any;
    headers: {
        [prop: string]: string;
    };
};
export declare type RequestOptions = {
    pathname: string;
    headers?: {
        [prop: string]: string;
    };
    statusCode?: stateCode;
    stateMessage?: string;
    body?: any;
};
export declare type ResponseOptions = {
    requestId: string;
    headers: {
        [prop: string]: string;
    };
    statusCode: stateCode;
    stateMessage: string;
    body: any;
};

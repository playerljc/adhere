interface timeout {
    (e: ProgressEvent<XMLHttpRequestEventTarget> | null): void;
}
interface loadstart {
    (e: ProgressEvent<XMLHttpRequestEventTarget> | null): void;
}
interface progress {
    (e: ProgressEvent<XMLHttpRequestEventTarget> | null): void;
}
interface abort {
    (e: ProgressEvent<XMLHttpRequestEventTarget> | null): void;
}
interface error {
    (e: ProgressEvent<XMLHttpRequestEventTarget> | null): void;
}
interface load {
    (e: ProgressEvent<XMLHttpRequestEventTarget> | null): void;
}
interface loadend {
    (e: ProgressEvent<XMLHttpRequestEventTarget> | null): void;
}
interface onBeforeResponse {
    (): void;
}
/**
 * interceptor - 拦截器接口定义
 * @interface
 */
interface interceptor {
    (params: {
        status?: number;
        statusText?: string;
        response?: any;
        responseText: string;
    }): void;
}
/**
 * IConfig
 * @interface IConfig
 * @classdesc 构造函数配置对象(缺省的配置)
 */
export interface IConfig {
    onTimeout?: timeout;
    onLoadsStart?: loadstart;
    onProgress?: progress;
    onAbort?: abort;
    onError?: error;
    onLoad?: load;
    onLoadend?: loadend;
    timeout?: number;
    withCredentials?: boolean;
    interceptor: interceptor;
}
/**
 * ISendArg
 * @interface ISendArg
 * @classdesc get|post|path|put|delete的方法参数
 */
export interface ISendArg extends IConfig {
    path: string;
    headers: object;
    data?: {
        form?: HTMLFormElement;
        data: object;
    } | object;
    mock: boolean;
    loading: {
        show: boolean;
        text: string;
        el: HTMLElement;
    };
    onBeforeResponse: onBeforeResponse;
    dataKey: string;
    messageKey: string;
    codeKey: number | string;
    codeSuccess: number;
    showWarn: boolean;
}
/**
 * ISendPrepareArg
 * @interface ISendPrepareArg
 * @classdesc sendPrepare的参数
 */
export interface ISendPrepareArg extends ISendArg {
    method: 'get' | 'post' | 'put' | 'path' | 'delete';
}
export {};

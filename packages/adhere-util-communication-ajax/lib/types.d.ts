/**
 * IConfig
 * @interface IConfig
 * @classdesc 构造函数配置对象(缺省的配置)
 */
export interface IConfig {
    /**
     * 在预设时间内没有接收到响应时触发。
     * 也可以使用 ontimeout 属性。
     */
    onTimeout?: (e: ProgressEvent<XMLHttpRequestEventTarget> | null) => void;
    /**
     * 接收到响应数据时触发。
     * 也可以使用 onloadstart 属性。
     */
    onLoadsStart?: (e: ProgressEvent<XMLHttpRequestEventTarget> | null) => void;
    /**
     * 当请求接收到更多数据时，周期性地触发。
     * 也可以使用 onprogress 属性。
     */
    onProgress?: (e: ProgressEvent<XMLHttpRequestEventTarget> | null) => void;
    /**
     * 当 request 被停止时触发，例如当程序调用 XMLHttpRequest.abort() 时。
     * 也可以使用 onabort 属性。
     */
    onAbort?: (e: ProgressEvent<XMLHttpRequestEventTarget> | null) => void;
    /**
     * 当 request 遭遇错误时触发。
     * 也可以使用 onerror 属性
     */
    onError?: (e: ProgressEvent<XMLHttpRequestEventTarget> | null) => void;
    /**
     * XMLHttpRequest请求成功完成时触发。
     * 也可以使用 onload 属性.
     */
    onLoad?: (e: ProgressEvent<XMLHttpRequestEventTarget> | null) => void;
    /**
     * 当请求结束时触发, 无论请求成功 ( load) 还是失败 (abort 或 error)。
     * 也可以使用 onloadend 属性。
     */
    onLoadend?: (e: ProgressEvent<XMLHttpRequestEventTarget> | null) => void;
    timeout?: number;
    withCredentials?: boolean;
    /**
     * interceptor - 拦截器接口定义
     * @interface
     */
    interceptor: (params: {
        status?: number;
        statusText?: string;
        response?: any;
        responseText: string;
    }) => void;
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
    onBeforeResponse: () => void;
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

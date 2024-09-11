import type { IConfig, ISendArg, RequestInterceptor, ResponseInterceptor, SendResult } from './types';
/**
 * Interceptors
 * @description 拦截器
 */
declare class Interceptors {
    protected requestInterceptors: Set<RequestInterceptor>;
    protected responseInterceptors: Set<ResponseInterceptor>;
    /**
     * addRequest
     * @description 添加一个请求拦截器
     * @param handler
     */
    addRequest(handler: RequestInterceptor | RequestInterceptor[]): Set<RequestInterceptor>;
    /**
     * addResponse
     * @description 添加一个响应拦截器
     * @param handler
     */
    addResponse(handler: ResponseInterceptor): Set<ResponseInterceptor>;
    /**
     * remove
     * @description 删除拦截器
     * @param handler
     */
    remove(handler: RequestInterceptor | ResponseInterceptor): void;
    /**
     * requestReducer
     * @description 对请求参数进行拦截器处理
     * @param params
     */
    requestReducer(params: ISendArg): ISendArg;
    /**
     * responseReducer
     * @description 对响应参数进行拦截器处理
     * @param params
     */
    responseReducer(params: Parameters<ResponseInterceptor>[0]): {
        show: boolean;
        terminal: string;
        data: any;
        indicator: any;
        xhr: XMLHttpRequest;
    };
}
/**
 * Ajax
 * @class Ajax
 * @classdesc Ajax
 */
declare class Ajax {
    /**
     * 超时时间(10分钟)
     */
    static TIMEOUT: number;
    /**
     * 状态成功代码
     */
    static STATUS_SUCCESS_CODES: number[];
    /**
     * 状态重定向代码
     */
    static STATUS_REDIRECT_CODES: number[];
    /**
     * 代理被创建，但尚未调用 open() 方法。
     */
    static READY_STATE_UNSENT: number;
    /**
     * open() 方法已经被调用
     */
    static READY_STATE_OPENED: number;
    /**
     * send() 方法已经被调用，并且头部和状态已经可获得
     */
    static READY_STATE_HEADERS_RECEIVED: number;
    /**
     * 下载中； responseText 属性已经包含部分数据
     */
    static READY_STATE_LOADING: number;
    /**
     * 下载操作已完成
     */
    static READY_STATE_DONE: number;
    static CONTENT_TYPE_APPLICATION_JSON: string;
    static CONTENT_TYPE_MULTIPART_FORM_DATA: string;
    static CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED: string;
    static CONTENT_TYPE_TEXT_XML: string;
    static CONTENT_TYPE_APPLICATION_XML: string;
    static CONTENT_TYPE_TEXT_PLAIN: string;
    static interceptors: Interceptors;
    protected baseURL: string;
    protected systemManagerBaseURL: string;
    protected config: IConfig;
    /**
     * constructor
     * @param baseURL
     * @param systemManagerBaseURL
     * @param config
     */
    constructor(baseURL: string, systemManagerBaseURL: string, config: IConfig);
    /**
     * get
     * @param data
     * @param arg
     */
    get(this: Ajax, { data, ...arg }: ISendArg): SendResult;
    /**
     * post
     * @param params
     */
    post(this: Ajax, params: ISendArg): SendResult;
    /**
     * path
     * @param params
     */
    path(this: Ajax, params: ISendArg): SendResult;
    /**
     * put
     * @param params
     */
    put(this: Ajax, params: ISendArg): SendResult;
    /**
     * delete
     * @param params
     */
    delete(this: Ajax, params: ISendArg): SendResult;
}
export default Ajax;

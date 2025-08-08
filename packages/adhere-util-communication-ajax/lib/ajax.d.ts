import { HttpStatusCode, IConfig, ISendArg, RequestInterceptor, ResponseInterceptor, SendResult } from './types';
/**
 * 拦截器管理类
 * @description 用于管理请求和响应拦截器
 */
declare class Interceptors {
    /** 请求拦截器容器 */
    protected requestInterceptors: Set<RequestInterceptor>;
    /** 响应拦截器容器 */
    protected responseInterceptors: Set<ResponseInterceptor>;
    /**
     * 添加一个或多个请求拦截器
     * @param handler - 请求拦截器函数或函数数组
     * @returns 拦截器集合
     */
    addRequest(handler: RequestInterceptor | RequestInterceptor[]): Set<RequestInterceptor>;
    /**
     * 添加一个或多个响应拦截器
     * @param handler - 响应拦截器函数或函数数组
     * @returns 拦截器集合
     */
    addResponse(handler: ResponseInterceptor | ResponseInterceptor[]): Set<ResponseInterceptor>;
    /**
     * 删除拦截器
     * @param handler - 要删除的拦截器函数
     */
    remove(handler: RequestInterceptor | ResponseInterceptor): void;
    /**
     * 对请求参数进行拦截器处理
     * @param params - 请求参数
     * @returns 处理后的请求参数
     */
    requestReducer(params: ISendArg): ISendArg;
    /**
     * 对响应参数进行拦截器处理
     * @param params - 响应参数
     * @returns 处理后的响应参数
     */
    responseReducer(params: Parameters<ResponseInterceptor>[0]): ReturnType<ResponseInterceptor>;
}
/**
 * Ajax类
 * @description 提供HTTP请求功能的Ajax类，支持拦截器、Loading、错误处理等功能
 */
declare class Ajax {
    /** 超时时间(10分钟) */
    static readonly TIMEOUT: number;
    /** 状态成功代码 */
    static readonly STATUS_SUCCESS_CODES: readonly HttpStatusCode[];
    /** 状态重定向代码 */
    static readonly STATUS_REDIRECT_CODES: readonly HttpStatusCode[];
    /** 代理被创建，但尚未调用 open() 方法 */
    static readonly READY_STATE_UNSENT = 0;
    /** open() 方法已经被调用 */
    static readonly READY_STATE_OPENED = 1;
    /** send() 方法已经被调用，并且头部和状态已经可获得 */
    static readonly READY_STATE_HEADERS_RECEIVED = 2;
    /** 下载中； responseText 属性已经包含部分数据 */
    static readonly READY_STATE_LOADING = 3;
    /** 下载操作已完成 */
    static readonly READY_STATE_DONE = 4;
    /** Content-Type: application/json */
    static readonly CONTENT_TYPE_APPLICATION_JSON: "application/json";
    /** Content-Type: multipart/form-data */
    static readonly CONTENT_TYPE_MULTIPART_FORM_DATA: "multipart/form-data";
    /** Content-Type: application/x-www-form-urlencoded */
    static readonly CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED: "application/x-www-form-urlencoded";
    /** Content-Type: text/xml */
    static readonly CONTENT_TYPE_TEXT_XML: "text/xml";
    /** Content-Type: application/xml */
    static readonly CONTENT_TYPE_APPLICATION_XML: "application/xml";
    /** Content-Type: text/plain */
    static readonly CONTENT_TYPE_TEXT_PLAIN: "text/plain";
    /** 拦截器实例 */
    readonly interceptors: Interceptors;
    /** 基础URL */
    protected readonly baseURL: string;
    /** 系统管理基础URL */
    protected readonly systemManagerBaseURL: string;
    /** 配置对象 */
    protected readonly config: IConfig;
    /**
     * 构造函数
     * @param baseURL - 基础URL
     * @param systemManagerBaseURL - 系统管理基础URL
     * @param config - 配置对象
     */
    constructor(baseURL: string, systemManagerBaseURL: string, config: IConfig);
    /**
     * GET请求
     * @param params - 请求参数
     * @returns 请求结果
     */
    get(this: Ajax, { data, ...arg }: ISendArg): SendResult;
    /**
     * POST请求
     * @param params - 请求参数
     * @returns 请求结果
     */
    post(this: Ajax, params: ISendArg): SendResult;
    /**
     * PATCH请求
     * @param params - 请求参数
     * @returns 请求结果
     */
    patch(this: Ajax, params: ISendArg): SendResult;
    /**
     * PUT请求
     * @param params - 请求参数
     * @returns 请求结果
     */
    put(this: Ajax, params: ISendArg): SendResult;
    /**
     * DELETE请求
     * @param params - 请求参数
     * @returns 请求结果
     */
    delete(this: Ajax, params: ISendArg): SendResult;
}
export default Ajax;

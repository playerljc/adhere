import { HttpStatusCode, IConfig, ISendArg, RequestInterceptor, ResponseInterceptor, SendResult } from './types';
/**
 * 拦截器管理类
 * @description 用于管理请求和响应拦截器
 */
declare class Interceptors {
    /** 请求拦截器容器 */
    protected requestInterceptors: Map<string, RequestInterceptor>;
    /** 响应拦截器容器 */
    protected responseInterceptors: Map<string, ResponseInterceptor>;
    /**
     * 添加一个请求拦截器
     * @param key - 拦截器标识
     * @param handler - 请求拦截器函数
     * @returns 拦截器集合
     */
    addRequest(key: string, handler: RequestInterceptor): Map<string, RequestInterceptor>;
    /**
     * 添加一个响应拦截器
     * @param key - 拦截器标识
     * @param handler - 响应拦截器函数
     * @returns 拦截器集合
     */
    addResponse(key: string, handler: ResponseInterceptor): Map<string, ResponseInterceptor>;
    /**
     * removeRequestInterceptor
     * @description 删除请求拦截器
     * @param {string} key - 要删除的拦截器key
     */
    removeRequestInterceptor(key: string): void;
    /**
     * removeResponseInterceptor
     * @description 删除响应拦截器
     * @param {string} key - 要删除的拦截器key
     */
    removeResponseInterceptor(key: string): void;
    /**
     * 返回所有已注册的请求拦截器 key 列表
     * @description 供 retry 的 keys 白名单计算使用
     */
    getRequestInterceptorKeys(): string[];
    /**
     * 对请求参数进行拦截器处理
     * @param params - 请求参数
     * @returns 处理后的请求参数
     */
    requestReducer(params: ISendArg): Promise<ISendArg>;
    /**
     * 对响应参数进行拦截器处理
     * @param params - 响应参数
     * @returns 处理后的响应参数
     */
    responseReducer(params: Parameters<ResponseInterceptor>[0]): Promise<Awaited<ReturnType<ResponseInterceptor>>>;
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
    /** 防抖请求缓存 **/
    readonly debounceRequestCache: Map<string, SendResult>;
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
     * debounceRequest
     * @description 防抖请求方法，用于避免重复的相同请求
     * @param method
     * @param requestFn - 请求函数，接收请求参数并返回请求结果
     * @param options - 可选配置项
     * @param options.filterData - 用于过滤请求数据的函数，返回处理后的数据用于生成缓存键
     * @param options.filterHeaders - 用于过滤请求头的函数，返回处理后的请求头用于生成缓存键
     * @returns 返回一个异步函数，该函数接收请求参数并返回防抖后的请求结果
     * @protected
     */
    protected debounceRequest(method: string, requestFn: (params: ISendArg) => Promise<SendResult>, options?: {
        filterData?: ISendArg['debounceFilterData'];
        filterHeaders?: ISendArg['debounceFilterHeaders'];
    }): (this: Ajax, params: ISendArg) => Promise<SendResult>;
    /**
     * GET请求
     * @param params - 请求参数
     * @returns 请求结果
     */
    protected getCore(this: Ajax, { data, ...arg }: ISendArg): Promise<SendResult>;
    /**
     * POST请求
     * @param params - 请求参数
     * @returns 请求结果
     */
    protected postCore(this: Ajax, params: ISendArg): Promise<SendResult>;
    /**
     * PATCH请求
     * @param params - 请求参数
     * @returns 请求结果
     */
    protected patchCore(this: Ajax, params: ISendArg): Promise<SendResult>;
    /**
     * PUT请求
     * @param params - 请求参数
     * @returns 请求结果
     */
    protected putCore(this: Ajax, params: ISendArg): Promise<SendResult>;
    /**
     * DELETE请求
     * @param params - 请求参数
     * @returns 请求结果
     */
    protected deleteCore(this: Ajax, params: ISendArg): Promise<SendResult>;
    /**
     * GET请求
     * @param {ISendArg} params - 请求参数
     * @param {boolean} [params.enableDebounce=true] - 是否启用防抖
     * @param {Function} [params.debounceFilterData] - 防抖时用于过滤data的函数
     * @param {Function} [params.debounceFilterHeaders] - 防抖时用于过滤headers的函数
     * @returns {Promise<SendResult>} 请求结果
     */
    get(this: Ajax, { enableDebounce, debounceFilterData, debounceFilterHeaders, ...arg }: ISendArg): Promise<SendResult>;
    /**
     * POST请求
     * @param {ISendArg} params - 请求参数
     * @param {boolean} [params.enableDebounce=true] - 是否启用防抖
     * @param {Function} [params.debounceFilterData] - 防抖时用于过滤data的函数
     * @param {Function} [params.debounceFilterHeaders] - 防抖时用于过滤headers的函数
     * @returns {Promise<SendResult>} 请求结果
     */
    post(this: Ajax, { enableDebounce, debounceFilterData, debounceFilterHeaders, ...arg }: ISendArg): Promise<SendResult>;
    /**
     * PATCH请求
     * @param {ISendArg} params - 请求参数
     * @param {boolean} [params.enableDebounce=true] - 是否启用防抖
     * @param {Function} [params.debounceFilterData] - 防抖时用于过滤data的函数
     * @param {Function} [params.debounceFilterHeaders] - 防抖时用于过滤headers的函数
     * @returns {Promise<SendResult>} 请求结果
     */
    patch(this: Ajax, { enableDebounce, debounceFilterData, debounceFilterHeaders, ...arg }: ISendArg): Promise<SendResult>;
    /**
     * PUT请求
     * @param {ISendArg} params - 请求参数
     * @param {boolean} [params.enableDebounce=true] - 是否启用防抖
     * @param {Function} [params.debounceFilterData] - 防抖时用于过滤data的函数
     * @param {Function} [params.debounceFilterHeaders] - 防抖时用于过滤headers的函数
     * @returns {Promise<SendResult>} 请求结果
     */
    put(this: Ajax, { enableDebounce, debounceFilterData, debounceFilterHeaders, ...arg }: ISendArg): Promise<SendResult>;
    /**
     * DELETE请求
     * @param {ISendArg} params - 请求参数
     * @param {boolean} [params.enableDebounce=true] - 是否启用防抖
     * @param {Function} [params.debounceFilterData] - 防抖时用于过滤data的函数
     * @param {Function} [params.debounceFilterHeaders] - 防抖时用于过滤headers的函数
     * @returns {Promise<SendResult>} 请求结果
     */
    delete(this: Ajax, { enableDebounce, debounceFilterData, debounceFilterHeaders, ...arg }: ISendArg): Promise<SendResult>;
}
export default Ajax;

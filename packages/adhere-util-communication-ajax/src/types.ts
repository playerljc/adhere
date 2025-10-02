import { Size } from '@baifendian/adhere-ui-globalindicator/es/types';

/**
 * HTTP状态码类型
 */
export type HttpStatusCode =
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 421
  | 422
  | 423
  | 424
  | 425
  | 426
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511;

/**
 * 终端类型
 */
export type TerminalType = 'pc' | 'mobile';

/**
 * HTTP请求方法类型
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * HTTP请求方法类型（小写）
 */
export type Method = Lowercase<HttpMethod>;

/**
 * XMLHttpRequest响应类型
 */
export type ResponseType = XMLHttpRequestResponseType;

/**
 * 内容类型常量
 */
export const CONTENT_TYPES = {
  APPLICATION_JSON: 'application/json',
  MULTIPART_FORM_DATA: 'multipart/form-data',
  APPLICATION_X_WWW_FORM_URLENCODED: 'application/x-www-form-urlencoded',
  TEXT_XML: 'text/xml',
  APPLICATION_XML: 'application/xml',
  TEXT_PLAIN: 'text/plain',
} as const;

/**
 * 内容类型
 */
export type ContentType = (typeof CONTENT_TYPES)[keyof typeof CONTENT_TYPES];

/**
 * 事件处理器类型
 */
export type EventHandler = (e: ProgressEvent<XMLHttpRequestEventTarget> | null) => void;

/**
 * 拦截器参数接口
 */
export interface InterceptorParams {
  /** HTTP状态码 */
  status?: HttpStatusCode;
  /** HTTP状态文本 */
  statusText?: string;
  /** 响应数据 */
  response?: any;
  /** 响应文本 */
  responseText: string;
}

/**
 * 拦截器函数类型
 */
export type InterceptorFunction = (params: InterceptorParams) => void;

/**
 * 自定义JSON序列化函数类型
 */
export type CustomJSONStringify = (this: any, key: string, value: any) => any;

/**
 * Loading配置接口
 */
export interface LoadingConfig {
  /** 是否显示遮罩 */
  show: boolean;
  /** 遮罩的内容 */
  text: string;
  /** 遮罩的元素 */
  el: HTMLElement;
  /** 层级 */
  zIndex: number;
  /** 大小 */
  size: Size;
  /** 终端类型 */
  terminal?: TerminalType;
}

/**
 * 表单数据接口
 */
export interface FormDataConfig {
  /** HTML表单对象(仅当Content-Type为multipart/form-data时生效) */
  form: HTMLFormElement;
  /** 表单数据 */
  data: Record<string, any>;
}

/**
 * 请求数据类型
 */
export type RequestData = FormDataConfig | Record<string, any> | string;

/**
 * 构造函数配置对象接口
 * @description 定义Ajax类的默认配置选项
 */
export interface IConfig {
  /**
   * 在预设时间内没有接收到响应时触发
   * @param e - 超时事件对象
   */
  onTimeout?: EventHandler;

  /**
   * 接收到响应数据时触发
   * @param e - 加载开始事件对象
   */
  onLoadsStart?: EventHandler;

  /**
   * 当请求接收到更多数据时，周期性地触发
   * @param e - 进度事件对象
   */
  onProgress?: EventHandler;

  /**
   * 当 request 被停止时触发，例如当程序调用 XMLHttpRequest.abort() 时
   * @param e - 中止事件对象
   */
  onAbort?: EventHandler;

  /**
   * 当 request 遭遇错误时触发
   * @param e - 错误事件对象
   */
  onError?: EventHandler;

  /**
   * XMLHttpRequest请求成功完成时触发
   * @param e - 加载完成事件对象
   */
  onLoad?: EventHandler;

  /**
   * 当请求结束时触发, 无论请求成功 ( load) 还是失败 (abort 或 error)
   * @param e - 加载结束事件对象
   */
  onLoadend?: EventHandler;

  /** 请求超时时间(毫秒) */
  timeout?: number;

  /** 是否携带跨域凭证 */
  withCredentials?: boolean;

  /**
   * 全局拦截器
   * @description 用于处理HTTP状态码的拦截器函数
   * @param params - 拦截器参数对象
   */
  interceptor: InterceptorFunction;

  /** 是否支持mock数据 */
  mock?: boolean;

  /** Loading配置 */
  loading?: Partial<LoadingConfig>;

  /** 响应前的回调函数 */
  onBeforeResponse?: () => void;

  /** 数据属性键名 */
  dataKey?: string;

  /** 消息属性键名 */
  messageKey?: string;

  /** 业务状态码属性键名 */
  codeKey?: string;

  /** 业务成功状态码 */
  codeSuccess?: number;

  /** 在code不等于成功码时是否显示警告消息 */
  showWarn?: boolean;

  /** 响应数据类型 */
  responseType?: ResponseType;

  /**
   * 自定义JSON序列化函数
   * @description 用于自定义发送数据时的JSON.stringify处理
   * @param this - 当前上下文
   * @param key - 属性键名
   * @param value - 属性值
   * @returns 处理后的值
   */
  customSendJSONStringify?: CustomJSONStringify;
}

/**
 * 请求参数接口
 * @description 定义GET、POST、PUT、PATCH、DELETE方法的通用参数
 */
export interface ISendArg extends Partial<IConfig> {
  /** 请求的相对地址 */
  path?: string;

  /** 请求头对象 */
  headers?: Record<string, string>;

  /** 请求数据 */
  data?: RequestData;

  /** Method **/
  method?: Method;

  /** 接口防抖开关 **/
  enableDebounce?: boolean;

  /** debounceFilterData 对防抖的data进行过滤 **/
  debounceFilterData?: (data: RequestData) => RequestData;

  /** debounceFilterHeaders 对防抖的header进行过滤 **/
  debounceFilterHeaders?: (headers: ISendArg['headers']) => ISendArg['headers'];
}

/**
 * 请求准备参数接口
 * @description sendPrepare函数的参数类型
 */
export interface ISendPrepareArg extends ISendArg {
  /** HTTP请求方法 */
  method: Method;
}

/**
 * 请求准备结果类型
 */
export interface Prepare {
  /** XMLHttpRequest对象 */
  xhr?: XMLHttpRequest | null;
  /** 内容类型 */
  contentType?: string | null;
  interceptorsConfig?: ISendArg;
}

/**
 * 发送结果类型
 */
export interface SendResult extends Prepare {
  /** Promise对象 */
  promise: Promise<any>;
}

/**
 * 请求拦截器类型
 */
export type RequestInterceptor = (params: ISendArg) => ISendArg | Promise<ISendArg>;

/**
 * 响应拦截器参数接口
 */
export interface ResponseInterceptorParams extends ISendArg {
  response: XMLHttpRequest['response'];
  responseText: XMLHttpRequest['responseText'];
  responseXML: XMLHttpRequest['responseXML'];
}

export interface ResponseInterceptorReturn extends ISendArg {
  response: XMLHttpRequest['response'];
  responseText: XMLHttpRequest['responseText'];
  responseXML: XMLHttpRequest['responseXML'];
}

/**
 * 响应拦截器类型
 */
export type ResponseInterceptor =
  (params: ResponseInterceptorParams) => ResponseInterceptorReturn | Promise<ResponseInterceptorReturn>;

export type ResolveDataParams = {
  /** 是否显示loading */
  show: boolean;
  /** 指示器实例 */
  indicator: any;
  /** 终端类型 */
  terminal: string;
  xhr: XMLHttpRequest;
  data: any;
};

/**
 * 业务配置接口
 */
export interface BusinessConfig {
  /** 数据属性键名 */
  dataKey: string;
  /** 消息属性键名 */
  messageKey: string;
  /** 业务状态码属性键名 */
  codeKey: string;
  /** 业务成功状态码 */
  codeSuccess: number;
  /** 在code不等于成功码时是否显示警告消息 */
  showWarn: boolean;
}

/**
 * Loading配置接口
 */
export interface LoadingParams {
  /** 是否显示loading */
  show: boolean;
  /** 指示器实例 */
  indicator: any;
  /** 终端类型 */
  terminal: string;
}

/**
 * 事件处理参数接口
 */
export interface EventHandlerParams {
  /** XMLHttpRequest对象 */
  xhr: XMLHttpRequest;
  /** 拦截器函数 */
  interceptor: InterceptorFunction;
  /** Loading配置 */
  loading: LoadingParams;
  /** 业务配置 */
  business: BusinessConfig;
  /** Promise resolve函数 */
  resolve: (value: any) => void;
  /** Promise reject函数 */
  reject: (reason?: any) => void;
  /** interceptorsConfig **/
  interceptorsConfig?: ISendArg;
}

/**
 * 发送参数获取参数接口
 */
export interface SendParamsConfig {
  /** 数据 */
  data: any;
  /** 内容类型 */
  contentType: string;
  /** 自定义JSON序列化函数 */
  customSendJSONStringify?: CustomJSONStringify;
}

/**
 * 响应数据解析结果接口
 */
export interface ResolveDataResult {
  /** 响应数据 */
  data: any;
  /** XMLHttpRequest对象 */
  xhr: XMLHttpRequest;
  /** 隐藏指示器函数 */
  hideIndicator?: () => void;
}

/**
 * XHR事件初始化参数接口
 */
export interface XhrEventsConfig {
  /** XMLHttpRequest对象 */
  xhr: XMLHttpRequest;
  /** 事件配置 */
  events: IConfig;
  /** Promise reject函数 */
  reject: (reason?: any) => void;
}

/**
 * 准备函数参数接口
 */
export interface PrepareFunctionParams {
  /** 解析函数 */
  resolve: (value: any) => void;
  /** 拒绝函数 */
  reject: (reason?: any) => void;
}

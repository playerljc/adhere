import { notification } from 'antd';



import MobileGlobalIndicator from '@baifendian/adhere-mobile-ui-globalindicator';
import GlobalIndicator from '@baifendian/adhere-ui-globalindicator';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';



import { CONTENT_TYPES, EventHandlerParams, FormDataConfig, HttpStatusCode, IConfig, ISendArg, ISendPrepareArg, Method, Prepare, PrepareFunctionParams, RequestInterceptor, ResolveDataParams, ResolveDataResult, ResponseInterceptor, ResponseInterceptorReturn, RetryOptions, SendParamsConfig, SendResult, XhrEventsConfig } from './types';
import { combineUrls, generateCacheKey } from './utils';


/** 是否触发过402状态码 */
let trigger402 = false;

/** notification的节流时间(毫秒) */
const NOTIFICATION_THROTTLING_TIME = 300;

/** 错误信息处理器 */
let errorInfoHandler: string | number | NodeJS.Timeout | null | undefined;
/** 警告信息处理器 */
let warnInfoHandler: string | number | NodeJS.Timeout | null | undefined;

/**
 * 拦截器管理类
 * @description 用于管理请求和响应拦截器
 */
class Interceptors {
  /** 请求拦截器容器 */
  protected requestInterceptors = new Map<string, RequestInterceptor>();

  /** 响应拦截器容器 */
  protected responseInterceptors = new Map<string, ResponseInterceptor>();

  /**
   * 添加一个请求拦截器
   * @param key - 拦截器标识
   * @param handler - 请求拦截器函数
   * @returns 拦截器集合
   */
  addRequest(key: string, handler: RequestInterceptor): Map<string, RequestInterceptor> {
    this.requestInterceptors.set(key, handler);
    return this.requestInterceptors;
  }

  /**
   * 添加一个响应拦截器
   * @param key - 拦截器标识
   * @param handler - 响应拦截器函数
   * @returns 拦截器集合
   */
  addResponse(key: string, handler: ResponseInterceptor): Map<string, ResponseInterceptor> {
    this.responseInterceptors.set(key, handler);
    return this.responseInterceptors;
  }

  /**
   * removeRequestInterceptor
   * @description 删除请求拦截器
   * @param {string} key - 要删除的拦截器key
   */
  removeRequestInterceptor(key: string): void {
    if (this.requestInterceptors.has(key)) {
      this.requestInterceptors.delete(key);
    }
  }

  /**
   * removeResponseInterceptor
   * @description 删除响应拦截器
   * @param {string} key - 要删除的拦截器key
   */
  removeResponseInterceptor(key: string): void {
    if (this.responseInterceptors.has(key)) {
      this.responseInterceptors.delete(key);
    }
  }

  /**
   * 返回所有已注册的请求拦截器 key 列表
   * @description 供 retry 的 keys 白名单计算使用
   */
  getRequestInterceptorKeys(): string[] {
    return Array.from(this.requestInterceptors.keys());
  }

  /**
   * 对请求参数进行拦截器处理
   * @param params - 请求参数
   * @returns 处理后的请求参数
   */
  async requestReducer(params: ISendArg): Promise<ISendArg> {
    let result = params;

    // 掠过请求拦截器的keys
    const skipRequestInterceptors = result.skipRequestInterceptors ?? [];

    // 所有的请求拦截器keys
    const keys = this.requestInterceptors.keys();

    for (const key of Array.from(keys)) {
      // 没掠过的才执行
      if (!skipRequestInterceptors.includes(key)) {
        // 顺序等待每个拦截器（支持同步与异步返回）
        result = await (this.requestInterceptors.get(key) as RequestInterceptor)(result);
      }
    }

    return result;
  }

  /**
   * 对响应参数进行拦截器处理
   * @param params - 响应参数
   * @returns 处理后的响应参数
   */
  async responseReducer(
    params: Parameters<ResponseInterceptor>[0],
  ): Promise<Awaited<ReturnType<ResponseInterceptor>>> {
    let result: any = params;

    // 掠过响应拦截器的keys
    const skipResponseInterceptors = result.skipResponseInterceptors ?? [];

    // 所有的响应拦截器keys
    const keys = this.responseInterceptors.keys();

    for (const key of Array.from(keys)) {
      // 没掠过的才执行
      if (!skipResponseInterceptors.includes(key)) {
        // 顺序等待每个拦截器（支持同步与异步返回）
        result = await (this.responseInterceptors.get(key) as ResponseInterceptor)(result);
      }
    }
    return result;
  }
}

/**
 * Ajax类
 * @description 提供HTTP请求功能的Ajax类，支持拦截器、Loading、错误处理等功能
 */
class Ajax {
  /** 超时时间(10分钟) */
  static readonly TIMEOUT = 1000 * 1000;

  /** 状态成功代码 */
  static readonly STATUS_SUCCESS_CODES: readonly HttpStatusCode[] = [
    200, 201, 202, 203, 204, 205, 206, 207, 208, 226,
  ];

  /** 状态重定向代码 */
  static readonly STATUS_REDIRECT_CODES: readonly HttpStatusCode[] = [
    300, 301, 302, 303, 304, 305, 306, 307, 308,
  ];

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
  static readonly CONTENT_TYPE_APPLICATION_JSON = CONTENT_TYPES.APPLICATION_JSON;

  /** Content-Type: multipart/form-data */
  static readonly CONTENT_TYPE_MULTIPART_FORM_DATA = CONTENT_TYPES.MULTIPART_FORM_DATA;

  /** Content-Type: application/x-www-form-urlencoded */
  static readonly CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED =
    CONTENT_TYPES.APPLICATION_X_WWW_FORM_URLENCODED;

  /** Content-Type: text/xml */
  static readonly CONTENT_TYPE_TEXT_XML = CONTENT_TYPES.TEXT_XML;

  /** Content-Type: application/xml */
  static readonly CONTENT_TYPE_APPLICATION_XML = CONTENT_TYPES.APPLICATION_XML;

  /** Content-Type: text/plain */
  static readonly CONTENT_TYPE_TEXT_PLAIN = CONTENT_TYPES.TEXT_PLAIN;

  /** 拦截器实例 */
  readonly interceptors = new Interceptors();

  /** 防抖请求缓存 **/
  readonly debounceRequestCache = new Map<string, SendResult>();

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
  constructor(baseURL: string, systemManagerBaseURL: string, config: IConfig) {
    this.baseURL = baseURL || '';
    this.systemManagerBaseURL = systemManagerBaseURL || '';
    this.config = config ?? {};
  }

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
  protected debounceRequest(
    method: string,
    requestFn: (params: ISendArg) => Promise<SendResult>,
    options?: {
      filterData?: ISendArg['debounceFilterData'];
      filterHeaders?: ISendArg['debounceFilterHeaders'];
    },
  ) {
    const self = this;

    return async function (this: Ajax, params: ISendArg): Promise<SendResult> {
      console.log('debounceRequest======', params);

      // 生成请求唯一标识
      const requestKey = await generateCacheKey({
        url: combineUrls(self.baseURL, params.path),
        method,
        body: options?.filterData ? options?.filterData?.(params?.data ?? {}) : params?.data ?? {},
        headers: options?.filterHeaders
          ? options?.filterHeaders(params?.headers ?? {})
          : params?.headers ?? {},
      });

      console.log('debounceRequestCache', self.debounceRequestCache);

      console.log('requestKey', requestKey);

      // 检查是否有相同的请求正在进行
      if (self.debounceRequestCache.has(requestKey)) {
        console.log('有');

        // 返回已存在的请求对象
        return self.debounceRequestCache.get(requestKey) as SendResult;
      }

      console.log('没有');

      /**
       * 关键：先占位写入缓存，避免并发竞态窗口
       * - 如果在 requestFn 的 await 期间又来了相同 requestKey 的调用，应当直接复用同一个 SendResult
       */
      let resolveOuter!: (value: any) => void;
      let rejectOuter!: (reason?: any) => void;

      const outerPromise = new Promise((resolve, reject) => {
        resolveOuter = resolve;
        rejectOuter = reject;
      });

      const result: SendResult = {
        promise: outerPromise,
        xhr: null,
        contentType: '',
        interceptorsConfig: undefined,
      };

      self.debounceRequestCache.set(requestKey, result);

      try {
        const real = await requestFn(params);

        // 让调用方能拿到 xhr/contentType/interceptorsConfig 等信息
        result.xhr = real.xhr ?? null;
        result.contentType = real.contentType ?? '';
        result.interceptorsConfig = real.interceptorsConfig;

        // 统一完成后清缓存（无论成功失败）
        real.promise
          .finally(() => {
            console.log('delete', requestKey);
            self.debounceRequestCache.delete(requestKey);
          })
          .then(resolveOuter, rejectOuter);
      } catch (e) {
        console.log('delete', requestKey);
        self.debounceRequestCache.delete(requestKey);
        rejectOuter(e);
      }

      return result;
    };
  }

  /**
   * GET请求
   * @param params - 请求参数
   * @returns 请求结果
   */
  protected async getCore(this: Ajax, { data, ...arg }: ISendArg): Promise<SendResult> {
    const self = this;

    let resolveFn: (value: any) => void;
    let rejectFn: (reason?: any) => void;

    const promise = new Promise((resolve, reject) => {
      resolveFn = resolve;
      rejectFn = reject;
    });

    const prepare = await sendPrepare.call(
      self,
      {
        // 默认配置
        ...getDefaultConfig.call(self),
        // 用户构造函数传的配置
        ...self.config,
        method: 'get',
        // get方法传的参数
        ...arg,
      },
      {
        resolve: resolveFn!,
        reject: rejectFn!,
      },
    );

    const { xhr } = prepare;
    if (xhr) {
      xhr.send(null);
    }

    return {
      ...prepare,
      promise,
    };
  }

  /**
   * POST请求
   * @param params - 请求参数
   * @returns 请求结果
   */
  protected postCore(this: Ajax, params: ISendArg): Promise<SendResult> {
    return Promise.resolve(complexRequest.call(this, 'post', params));
  }

  /**
   * PATCH请求
   * @param params - 请求参数
   * @returns 请求结果
   */
  protected patchCore(this: Ajax, params: ISendArg): Promise<SendResult> {
    return Promise.resolve(complexRequest.call(this, 'patch', params));
  }

  /**
   * PUT请求
   * @param params - 请求参数
   * @returns 请求结果
   */
  protected putCore(this: Ajax, params: ISendArg): Promise<SendResult> {
    return Promise.resolve(complexRequest.call(this, 'put', params));
  }

  /**
   * DELETE请求
   * @param params - 请求参数
   * @returns 请求结果
   */
  protected deleteCore(this: Ajax, params: ISendArg): Promise<SendResult> {
    return Promise.resolve(complexRequest.call(this, 'delete', params));
  }

  /**
   * GET请求
   * @param {ISendArg} params - 请求参数
   * @param {boolean} [params.enableDebounce=true] - 是否启用防抖
   * @param {Function} [params.debounceFilterData] - 防抖时用于过滤data的函数
   * @param {Function} [params.debounceFilterHeaders] - 防抖时用于过滤headers的函数
   * @returns {Promise<SendResult>} 请求结果
   */
  get(
    this: Ajax,
    { enableDebounce = true, debounceFilterData, debounceFilterHeaders, ...arg }: ISendArg,
  ): Promise<SendResult> {
    // console.log('get', arg, enableDebounce);
    // console.log('get', arg.path, Util.isIPv4(arg.path!));

    const call =
      typeof arg.path === 'string' /*&& Util.isIPv4(arg.path)*/ && enableDebounce
        ? this.debounceRequest('get', this.getCore.bind(this), {
            filterData: debounceFilterData,
            filterHeaders: debounceFilterHeaders,
          })
        : this.getCore;

    return call.call(this, arg);
  }

  /**
   * POST请求
   * @param {ISendArg} params - 请求参数
   * @param {boolean} [params.enableDebounce=true] - 是否启用防抖
   * @param {Function} [params.debounceFilterData] - 防抖时用于过滤data的函数
   * @param {Function} [params.debounceFilterHeaders] - 防抖时用于过滤headers的函数
   * @returns {Promise<SendResult>} 请求结果
   */
  post(
    this: Ajax,
    { enableDebounce = true, debounceFilterData, debounceFilterHeaders, ...arg }: ISendArg,
  ): Promise<SendResult> {
    const call =
      typeof arg.path === 'string' /*&& Util.isIPv4(arg.path)*/ && enableDebounce
        ? this.debounceRequest('post', this.postCore.bind(this), {
            filterData: debounceFilterData,
            filterHeaders: debounceFilterHeaders,
          })
        : this.postCore;

    return call.call(this, arg);
  }

  /**
   * PATCH请求
   * @param {ISendArg} params - 请求参数
   * @param {boolean} [params.enableDebounce=true] - 是否启用防抖
   * @param {Function} [params.debounceFilterData] - 防抖时用于过滤data的函数
   * @param {Function} [params.debounceFilterHeaders] - 防抖时用于过滤headers的函数
   * @returns {Promise<SendResult>} 请求结果
   */
  patch(
    this: Ajax,
    { enableDebounce = true, debounceFilterData, debounceFilterHeaders, ...arg }: ISendArg,
  ): Promise<SendResult> {
    const call =
      typeof arg.path === 'string' /*&& Util.isIPv4(arg.path)*/ && enableDebounce
        ? this.debounceRequest('patch', this.patchCore.bind(this), {
            filterData: debounceFilterData,
            filterHeaders: debounceFilterHeaders,
          })
        : this.patchCore;

    return call.call(this, arg);
  }

  /**
   * PUT请求
   * @param {ISendArg} params - 请求参数
   * @param {boolean} [params.enableDebounce=true] - 是否启用防抖
   * @param {Function} [params.debounceFilterData] - 防抖时用于过滤data的函数
   * @param {Function} [params.debounceFilterHeaders] - 防抖时用于过滤headers的函数
   * @returns {Promise<SendResult>} 请求结果
   */
  put(
    this: Ajax,
    { enableDebounce = true, debounceFilterData, debounceFilterHeaders, ...arg }: ISendArg,
  ): Promise<SendResult> {
    const call =
      typeof arg.path === 'string' /*&& Util.isIPv4(arg.path)*/ && enableDebounce
        ? this.debounceRequest('put', this.putCore.bind(this), {
            filterData: debounceFilterData,
            filterHeaders: debounceFilterHeaders,
          })
        : this.putCore;

    return call.call(this, arg);
  }

  /**
   * DELETE请求
   * @param {ISendArg} params - 请求参数
   * @param {boolean} [params.enableDebounce=true] - 是否启用防抖
   * @param {Function} [params.debounceFilterData] - 防抖时用于过滤data的函数
   * @param {Function} [params.debounceFilterHeaders] - 防抖时用于过滤headers的函数
   * @returns {Promise<SendResult>} 请求结果
   */
  delete(
    this: Ajax,
    { enableDebounce = true, debounceFilterData, debounceFilterHeaders, ...arg }: ISendArg,
  ): Promise<SendResult> {
    const call =
      typeof arg.path === 'string' /*&& Util.isIPv4(arg.path)*/ && enableDebounce
        ? this.debounceRequest('delete', this.deleteCore.bind(this), {
            filterData: debounceFilterData,
            filterHeaders: debounceFilterHeaders,
          })
        : this.deleteCore;

    return call.call(this, arg);
  }
}

/**
 * 显示错误提示信息
 * @param title - 错误标题
 * @param message - 错误消息
 */
function errorInfo(title: string, message: string): void {
  if (errorInfoHandler) {
    clearTimeout(errorInfoHandler);
    errorInfoHandler = null;
  }

  errorInfoHandler = setTimeout(() => {
    notification.error({
      title,
      description: message,
    });
  }, NOTIFICATION_THROTTLING_TIME);
}

/**
 * 显示警告提示信息
 * @param title - 警告标题
 * @param message - 警告消息
 */
function warnInfo(title: string, message: string): void {
  if (warnInfoHandler) {
    clearTimeout(warnInfoHandler);
    warnInfoHandler = null;
  }

  warnInfoHandler = setTimeout(() => {
    notification.warning({
      title,
      description: message,
    });
  }, NOTIFICATION_THROTTLING_TIME);
}

/**
 * 创建XMLHttpRequest对象
 * @returns XMLHttpRequest实例
 */
function createXHR(): XMLHttpRequest {
  return new XMLHttpRequest();
}

/**
 * 获取默认配置
 * @returns 默认配置对象
 */
function getDefaultConfig(this: Ajax): IConfig {
  return {
    timeout: Ajax.TIMEOUT,
    withCredentials: true,
    onLoad: () => {},
    onLoadsStart: () => {},
    onLoadend: () => {},
    onProgress: () => {},
    // 超时处理
    onTimeout: () => {
      warnInfo(Intl.get('hint'), Intl.get('request_timeout'));
    },
    // 取消处理
    onAbort: () => {
      warnInfo(Intl.get('hint'), Intl.get('request_aborted'));
    },
    // 错误处理
    onError: () => {
      errorInfo(Intl.get('hint'), Intl.get('request_error'));
    },
    // 拦截器
    interceptor: ({ status }) => {
      switch (status) {
        case 401:
          deal401.call(this);
          break;
        case 402:
          deal402.call(this);
          break;
        default:
          errorInfo(Intl.get('hint'), Intl.get('request_no_response'));
          break;
      }
    },
    mock: false,
    // loading配置
    loading: {
      // 是否显示遮罩
      show: false,
      // 遮罩的内容
      text: '',
      // 遮罩的元素
      el: document.body,
      zIndex: 19999,
      size: 'default',
    },
    onBeforeResponse: () => {},
    dataKey: 'data',
    messageKey: 'message',
    codeKey: 'code',
    codeSuccess: 200,
    showWarn: true,
    responseType: '',
  };
}

/**
 * 初始化XHR事件监听器
 * @param config - XHR事件配置
 */
function initXhrEvents({ xhr, events, reject }: XhrEventsConfig): void {
  const { onTimeout, onLoadsStart, onProgress, onAbort, onError, onLoad, onLoadend } = events;

  if (onTimeout) {
    xhr.addEventListener('timeout', function (event: ProgressEvent<XMLHttpRequestEventTarget>) {
      onTimeout(event);
      reject(event);
    });
  }

  if (onAbort) {
    xhr.addEventListener('abort', function (event: ProgressEvent<XMLHttpRequestEventTarget>) {
      onAbort(event);
      reject(event);
    });
  }

  if (onError) {
    xhr.addEventListener('error', function (event: ProgressEvent<XMLHttpRequestEventTarget>) {
      onError(event);
      reject(event);
    });
  }

  if (onLoadsStart) {
    xhr.addEventListener('loadstart', onLoadsStart);
  }

  if (onProgress) {
    xhr.addEventListener('progress', onProgress);
  }

  if (onLoad) {
    xhr.addEventListener('load', onLoad);
  }

  if (onLoadend) {
    xhr.addEventListener('loadend', onLoadend);
  }
}

/**
 * 根据 RetryOptions 计算最终发送参数
 * - 处理 override 合并
 * - 将 keys 白名单转换为 skipRequestInterceptors 黑名单
 */
function buildRetryParams(
  ajaxInstance: Ajax,
  base: ISendArg | undefined,
  options: RetryOptions | undefined,
): ISendArg {
  const override = options?.override;
  const next: ISendArg = {
    ...(base ?? {}),
    ...(override ?? {}),
    headers: {
      ...((base?.headers ?? {}) as any),
      ...(override?.headers ?? {}),
    },
  };

  const keys = options?.useRequestInterceptors?.keys;
  if (keys) {
    // keys 白名单：排除不在白名单里的请求拦截器 key
    const allKeys = ajaxInstance.interceptors.getRequestInterceptorKeys();
    const skipKeys = allKeys.filter((k) => !keys.includes(k));
    next.skipRequestInterceptors = [...(next.skipRequestInterceptors ?? []), ...skipKeys];
  }

  return next;
}

/**
 * 专供响应过滤器内部使用的 retry 工厂
 * @description 返回的 retry 结果结构与 ResponseInterceptorReturn 一致，可在过滤器中直接 return
 */
function createResponseInterceptorRetry(
  ajaxInstance: Ajax,
  retryParams?: {
    rawParams?: ISendArg;
    finalParams?: ISendArg;
  },
): (options?: RetryOptions) => Promise<ResponseInterceptorReturn> {
  return async (options) => {
    const useRequestInterceptors = options?.useRequestInterceptors?.enabled ?? false;
    const base = useRequestInterceptors ? retryParams?.rawParams : retryParams?.finalParams;
    const nextParams = buildRetryParams(ajaxInstance, base, options);

    let sendResult: SendResult;

    if (useRequestInterceptors) {
      sendResult = await rawRequestWithRequestInterceptors.call(ajaxInstance, nextParams);
    } else {
      sendResult = await rawRequestWithoutRequestInterceptors.call(
        ajaxInstance,
        nextParams,
        retryParams?.rawParams ?? nextParams,
      );
    }

    // 等待请求完成（response 过滤器链全部跑完后 resolve/reject）
    const resolved = await sendResult.promise;

    // 重试请求若带 loading 遮罩，resolve 后需主动关闭，否则遮罩会一直挂着
    resolved?.hideIndicator?.();

    const xhr = sendResult.xhr as XMLHttpRequest;
    const responseType = xhr?.responseType ?? '';
    const canAccessText = responseType === '' || responseType === 'text';
    const canAccessXML = responseType === '' || responseType === 'document';

    return {
      ...nextParams,
      ...(sendResult.interceptorsConfig ?? {}),
      headers: transformStringHeadersToObject(xhr?.getAllResponseHeaders?.() ?? ''),
      response: xhr?.response ?? null,
      responseText: canAccessText ? (xhr?.responseText ?? '') : '',
      responseXML: canAccessXML ? (xhr?.responseXML ?? null) : null,
      xhr,
      retry: createResponseInterceptorRetry(ajaxInstance, {
        rawParams: retryParams?.rawParams,
        finalParams: sendResult.interceptorsConfig,
      }),
    };
  };
}

/**
 * 解析响应数据
 * @returns 解析后的数据对象
 * @param ajaxInstance
 * @param params
 */
function createRetry(
  ajaxInstance: Ajax,
  params?: {
    /** requestReducer 之前的“原始参数”（含 method） */
    rawParams?: ISendArg;
    /** requestReducer 之后的“最终参数”（含 method） */
    finalParams?: ISendArg;
  },
): (options?: RetryOptions) => Promise<SendResult> {
  return (options) => {
    const useRequestInterceptors = options?.useRequestInterceptors?.enabled ?? false;
    const base = useRequestInterceptors ? params?.rawParams : params?.finalParams;
    const nextParams = buildRetryParams(ajaxInstance, base, options);

    if (useRequestInterceptors) {
      // 直接走内部发送通道，不经过 debounceRequest，保证返回值结构与 false 分支一致
      return rawRequestWithRequestInterceptors.call(ajaxInstance, nextParams);
    }

    return rawRequestWithoutRequestInterceptors.call(
      ajaxInstance,
      nextParams,
      // 让"不走请求拦截器"的请求也能继续携带 raw/final，用于后续 retry 切换策略
      params?.rawParams ?? nextParams,
    );
  };
}

function resolveData(this: Ajax, params: ResolveDataParams): ResolveDataResult {
  // 调用response拦截器
  const { show, terminal, data, indicator, xhr, interceptorsConfig, rawInterceptorsConfig } =
    params;

  const targetGlobalIndicator = getGlobalIndicator(terminal);

  return {
    ...{ xhr, data },
    ...(show ? { hideIndicator: () => targetGlobalIndicator.hide(indicator) } : {}),
    retry: createRetry(this, { rawParams: rawInterceptorsConfig, finalParams: interceptorsConfig }),
  };
}

function transformStringHeadersToObject(stringHeaders: string) {
  // 可以将字符串转换为对象便于操作
  const headersObj = {};
  const headersArray: string[] = stringHeaders.split('\n');

  headersArray.forEach((header) => {
    const [name, value] = header.split(': ');
    if (name && value) {
      headersObj[name] = value;
    }
  });

  return headersObj;
}

async function prepareWithInterceptorsConfig(
  this: Ajax,
  interceptorsConfig: ISendArg,
  { resolve, reject }: PrepareFunctionParams,
  rawInterceptorsConfig?: ISendArg,
): Promise<Prepare> {
  const {
    // get|post|patch|put|delete方法独有
    method,
    path,
    headers,
    // 数据
    data,
    // 业务参数
    mock,
    loading,
    // 下面是后端返回的三组值
    dataKey = 'data',
    messageKey = 'message',
    codeKey = 'code',
    codeSuccess = 200,
    showWarn = true,
    ...curConfig // timeout && withCredentials && events
  } = interceptorsConfig as ISendArg & { method?: Method };

  if (!method) {
    reject(new Error('Invalid request method for retry'));
    return { xhr: null, contentType: '' };
  }

  let indicator: any;

  const defaultLoadingText = `${Intl.get('loading')}...`;

  const {
    show = false,
    text = defaultLoadingText,
    el = document.body,
    terminal = 'pc',
  } = (loading ?? {}) as any;

  const targetGlobalIndicator = getGlobalIndicator(terminal);

  // 显示loading
  if (show) {
    indicator = targetGlobalIndicator.show(el || document.body, text || defaultLoadingText);
  }

  // 如果是mock数据
  if (mock) {
    setTimeout(() => {
      if (show) {
        resolve({
          data: path,
          hideIndicator: () => {
            targetGlobalIndicator.hide(indicator);
          },
        });
      } else {
        resolve(path);
      }
    }, 200);

    return { xhr: null, contentType: '' };
  }

  const { baseURL, config } = this;

  const configWithDefaults = Object.assign(
    // 默认的属性
    getDefaultConfig.call(this),
    config,
    curConfig,
  ) as IConfig;

  const { timeout, withCredentials, responseType, interceptor, ...events } = configWithDefaults;

  // xhr
  const xhr = createXHR();

  // open
  xhr.open(method, baseURL ? `${baseURL}/${path}` : path!, true);

  // timeout
  xhr.timeout = timeout!;

  // withCredentials
  xhr.withCredentials = withCredentials!;

  // responseType
  xhr.responseType = responseType || '';

  let contentType: string;

  // requestHeaders - 在open之后
  /** 如果用户设置了header **/
  if (!Util.isEmpty(headers) && Util.isObject(headers)) {
    // 不是get请求且如果用户没有定义Content-type 则默认添加application/json
    if (!('Content-Type' in headers)) {
      if (!isMultipartFormData(data)) {
        headers['Content-Type'] = `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`;
      }
    }

    contentType = headers['Content-Type'] ?? '';

    for (const header in headers) {
      xhr.setRequestHeader(header, headers[header]);
    }
  } else {
    /**
     * 用户没有设置header,会根据data初始化header
     */
    if (!Util.isEmpty(data) && Util.isRef(data) && !['get', 'GET'].includes(method)) {
      if (!isMultipartFormData(data)) {
        contentType = `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`;
        xhr.setRequestHeader('Content-Type', `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`);
      } else {
        contentType = Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA;
      }
    } else {
      contentType = `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`;
      xhr.setRequestHeader('Content-Type', `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`);
    }
  }

  // events
  initXhrEvents({ xhr, events: { ...events, interceptor }, reject });

  // onreadystatechange
  xhr.onreadystatechange = onreadystatechange.bind(this, {
    xhr,
    interceptor,
    loading: {
      show,
      terminal,
      indicator,
    },
    business: {
      dataKey,
      messageKey,
      codeKey,
      codeSuccess,
      showWarn,
    },
    rawInterceptorsConfig,
    interceptorsConfig,
    resolve,
    reject,
  });

  return {
    xhr,
    contentType,
    interceptorsConfig,
  };
}

/**
 * 走请求过滤器、但不经过 debounceRequest 的内部发送通道（专供 retry 使用）
 */
async function rawRequestWithRequestInterceptors(
  this: Ajax,
  rawParams: ISendArg,
): Promise<SendResult> {
  let resolveFn: (value: any) => void;
  let rejectFn: (reason?: any) => void;

  const promise = new Promise((resolve, reject) => {
    resolveFn = resolve;
    rejectFn = reject;
  });

  const prepare = await sendPrepare.call(
    this,
    {
      ...getDefaultConfig.call(this),
      ...this.config,
      ...(rawParams as ISendPrepareArg),
    },
    {
      resolve: resolveFn!,
      reject: rejectFn!,
    },
  );

  const { xhr, contentType, interceptorsConfig } = prepare;

  if (xhr) {
    const method = (rawParams.method ?? '') as Method;
    if (method === 'get') {
      xhr.send(null);
    } else {
      xhr.send(
        getSendParams({
          data: interceptorsConfig?.data,
          contentType: contentType!,
          customSendJSONStringify: rawParams.customSendJSONStringify,
        }),
      );
    }
  }

  return {
    ...prepare,
    promise,
  };
}

async function rawRequestWithoutRequestInterceptors(
  this: Ajax,
  interceptorsConfig: ISendArg,
  rawInterceptorsConfig?: ISendArg,
): Promise<SendResult> {
  let resolveFn: (value: any) => void;
  let rejectFn: (reason?: any) => void;

  const promise = new Promise((resolve, reject) => {
    resolveFn = resolve;
    rejectFn = reject;
  });

  const prepare = await prepareWithInterceptorsConfig.call(
    this,
    interceptorsConfig,
    {
      resolve: resolveFn!,
      reject: rejectFn!,
    },
    rawInterceptorsConfig ?? interceptorsConfig,
  );

  const { xhr, contentType } = prepare;

  if (xhr) {
    const method = (interceptorsConfig.method ?? '') as Method;
    if (method === 'get') {
      xhr.send(null);
    } else {
      xhr.send(
        getSendParams({
          data: interceptorsConfig?.data,
          contentType: contentType!,
          customSendJSONStringify: interceptorsConfig?.customSendJSONStringify,
        }),
      );
    }
  }

  return {
    ...prepare,
    promise,
  };
}

/**
 * onreadystatechange事件处理
 * @param params - 事件处理参数
 */
async function onreadystatechange(
  this: Ajax,
  {
    xhr,
    interceptor,
    loading: { show, indicator, terminal },
    business: { messageKey, codeKey, codeSuccess, showWarn },
    resolve,
    reject,
    rawInterceptorsConfig,
    interceptorsConfig,
  }: EventHandlerParams,
): Promise<void> {
  const targetGlobalIndicator = getGlobalIndicator(terminal);

  // readyState === 4
  if (xhr.readyState === Ajax.READY_STATE_DONE) {
    try {
      /** 根据responseType安全获取响应数据 **/
      const responseType = xhr.responseType || '';
      const canAccessText = responseType === '' || responseType === 'text';
      const canAccessXML = responseType === '' || responseType === 'document';

      /** 调用response过滤器 **/
      const {
        response,
        responseXML,
        responseText,
        xhr: finalXhr,
      } = await this.interceptors.responseReducer({
        ...interceptorsConfig,
        headers: transformStringHeadersToObject(xhr.getAllResponseHeaders()),
        response: xhr.response,
        responseText: canAccessText ? xhr.responseText : '',
        responseXML: canAccessXML ? xhr.responseXML : null,
        retry: createResponseInterceptorRetry(this, {
          rawParams: rawInterceptorsConfig,
          finalParams: interceptorsConfig,
        }),
        xhr,
      });

      /**
       * 优先使用响应过滤器返回的 xhr（拦截器内调用 retry 后会替换为新请求的 xhr）
       * 若过滤器未替换则回退到原始 xhr
       */
      const effectiveXhr = finalXhr ?? xhr;

      // status success
      if ((effectiveXhr.status >= 200 && effectiveXhr.status < 300) || effectiveXhr.status === 304) {
        // 获取contentType
        const contentType = effectiveXhr.getResponseHeader('Content-type') || '';

        /** response ContentType是application/json **/
        if (contentType.indexOf(Ajax.CONTENT_TYPE_APPLICATION_JSON) !== -1) {
          /** 只有application/json才进行三大值的判断 **/
          const jsonObj = JSON.parse(responseText);

          if (showWarn && codeKey in jsonObj && jsonObj[codeKey] !== codeSuccess) {
            warnInfo(Intl.get('hint'), jsonObj[messageKey]);
          }

          resolve(
            resolveData.call(this, {
              show,
              terminal,
              data: jsonObj,
              indicator,
              xhr: effectiveXhr,
              rawInterceptorsConfig,
              interceptorsConfig,
            }),
          );
        }
        //
        else if (
          /** response ContentType是xml **/
          contentType === Ajax.CONTENT_TYPE_TEXT_XML ||
          contentType === Ajax.CONTENT_TYPE_APPLICATION_XML
        ) {
          resolve(
            resolveData.call(this, {
              show,
              terminal,
              data: responseXML,
              indicator,
              xhr: effectiveXhr,
              rawInterceptorsConfig,
              interceptorsConfig,
            }),
          );
        }
        //
        else {
          /** response ContentType是其他 **/
          resolve(
            resolveData.call(this, {
              show,
              terminal,
              data: response,
              indicator,
              xhr: effectiveXhr,
              rawInterceptorsConfig,
              interceptorsConfig,
            }),
          );
        }
      }
      // status error
      else {
        // 3xx, 4xx, 5xx

        // 拦截器
        interceptor({
          status: effectiveXhr.status as HttpStatusCode,
          statusText: effectiveXhr.statusText,
          response,
          responseText,
        });

        // catch
        reject({
          status: effectiveXhr.status,
          statusText: effectiveXhr.statusText,
          response,
          responseText,
          retry: createRetry(this, {
            rawParams: rawInterceptorsConfig,
            finalParams: interceptorsConfig,
          }),
        });

        // 取消遮罩
        if (show && indicator) {
          targetGlobalIndicator.hide(indicator);
        }
      }
    } catch (error) {
      // 处理 responseReducer 或其他异步操作中的异常
      reject(error);

      // 取消遮罩
      if (show && indicator) {
        targetGlobalIndicator.hide(indicator);
      }

      // 显示错误提示
      errorInfo(Intl.get('hint'), (error as Error)?.message || Intl.get('request_error'));
    }
  }
}

/**
 * 判断是否为multipart/form-data格式
 * @param data - 数据对象
 * @returns 是否为multipart/form-data格式
 */
function isMultipartFormData(data: any): data is FormDataConfig {
  return (
    data &&
    'form' in data &&
    'data' in data &&
    !Util.isEmpty(data.form) &&
    !Util.isEmpty(data.data) &&
    data.form instanceof HTMLFormElement
  );
}

/**
 * 获取全局指示器
 * @param terminal - 终端类型
 * @returns 全局指示器实例
 */
function getGlobalIndicator(
  terminal: string,
): typeof GlobalIndicator | typeof MobileGlobalIndicator {
  if (terminal === 'pc') return GlobalIndicator;
  return MobileGlobalIndicator;
}

/**
 * send前的准备工作
 * @param params - 准备参数
 * @param resolve
 * @param reject
 * @param promiseHandlers - Promise处理器
 * @returns 准备结果
 */
async function sendPrepare(
  this: Ajax,
  {
    // 当前方法独有
    method,
    ...params
  }: ISendPrepareArg,
  { resolve, reject }: PrepareFunctionParams,
): Promise<Prepare> {
  let interceptorsConfig: ISendArg;
  const rawInterceptorsConfig: ISendArg = {
    ...params,
    method,
  };

  try {
    /** 调用request拦截器，返回新的interceptorsConfig **/
    interceptorsConfig = await this.interceptors.requestReducer({
      ...params,
      method,
    });
  } catch (error) {
    // 处理 requestReducer 中的异常
    reject(error);

    // 显示错误提示
    errorInfo(Intl.get('hint'), (error as Error)?.message || Intl.get('request_error'));

    return { xhr: null, contentType: '' };
  }

  return prepareWithInterceptorsConfig.call(
    this,
    {
      ...interceptorsConfig,
      method,
    },
    { resolve, reject },
    rawInterceptorsConfig,
  );
}

/**
 * 获取发送参数
 * @param config - 发送参数配置
 * @returns 发送参数
 */
function getSendParams({
  data,
  contentType = '',
  customSendJSONStringify,
}: SendParamsConfig): string | FormData | null {
  /**
   * application/json
   * 如果contentType是application/json
   */
  if (contentType.startsWith(Ajax.CONTENT_TYPE_APPLICATION_JSON)) {
    // 是对象类型则转换
    if (Util.isRef(data)) {
      if (customSendJSONStringify) {
        return JSON.stringify(data, customSendJSONStringify);
      }
      return JSON.stringify(data);
    }
  }

  /**
   * application/x-www-form-urlencoded
   */
  if (contentType.startsWith(Ajax.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED)) {
    // 是对象类型则转换
    if (Util.isObject(data)) {
      return Array.from(Object.keys(data))
        .map((k) => `${k}=${encodeURIComponent(String(data[k]))}`)
        .join('&');
    }
  }

  /**
   * multipart/form-data
   */
  if (Util.isObject(data) && isMultipartFormData(data)) {
    const formData = new FormData(data.form);

    Array.from(Object.keys(data.data)).forEach(function (k) {
      // 获取值
      const value = data.data[k];

      // 如果值是函数
      if (typeof value === 'function') {
        formData.append(k, String(value()));
      }
      // 如果值是数组
      else if (Array.isArray(value)) {
        value.forEach((_value) => {
          formData.append(k, _value);
        });
      }
      // 正常的情况
      else {
        formData.append(k, value);
      }
    });

    return formData;
  }

  /**
   * text/plain
   */
  if (contentType.startsWith(Ajax.CONTENT_TYPE_TEXT_PLAIN)) {
    if (Util.isString(data)) return data;
    if (Util.isObject(data)) {
      if (customSendJSONStringify) {
        return JSON.stringify(data, customSendJSONStringify);
      }
      return JSON.stringify(data);
    }
  }

  return data?.toString?.() || null;
}

/**
 * 复杂请求处理
 * @param method - 请求方法
 * @param params - 请求参数
 * @returns 请求结果
 */
async function complexRequest(this: Ajax, method: Method, params: ISendArg): Promise<SendResult> {
  let resolveFn: (value: any) => void;
  let rejectFn: (reason?: any) => void;

  const promise = new Promise((resolve, reject) => {
    resolveFn = resolve;
    rejectFn = reject;
  });

  const prepare = await sendPrepare.call(
    this,
    {
      // 缺省的
      ...getDefaultConfig.call(this),
      // 构造函数给的
      ...this.config,
      method,
      // 方法传的
      ...params,
    },
    {
      resolve: resolveFn!,
      reject: rejectFn!,
    },
  );

  const { xhr, contentType, interceptorsConfig } = prepare;
  if (xhr) {
    xhr.send(
      getSendParams({
        data: interceptorsConfig?.data,
        contentType: contentType!,
        customSendJSONStringify: params.customSendJSONStringify,
      }),
    );
  }

  return {
    ...prepare,
    promise,
  };
}

/**
 * 处理401状态码
 * @description 处理未授权状态码，重定向到登录页面
 */
function deal401(this: Ajax): void {
  // 像top发送消息
  if (typeof window === 'undefined') return;

  if (window.top && window.top !== window) {
    window.top.postMessage('http_status_401', '*');
  }
  if (trigger402) {
    return;
  }

  window.location.href = Util.casUrl({
    baseUrl: this.systemManagerBaseURL,
    enterUrl: window.location.href,
    defaultLocal: 'zh_CN',
  });
}

/**
 * 处理402状态码
 * @description 处理支付要求状态码，重定向到支付页面
 */
function deal402(this: Ajax): void {
  trigger402 = true;

  if (typeof window === 'undefined') return;

  if (window.parent && window.parent !== window) {
    window.parent.postMessage('http_status_402', '*');
    return;
  }

  window.location.href = Util.casLogoutUrl({
    baseUrl: this.systemManagerBaseURL,
    enterUrl: window.location.href,
    params: '&code=402',
  });
}

export default Ajax;

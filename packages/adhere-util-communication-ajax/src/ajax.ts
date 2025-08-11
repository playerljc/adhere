import { notification } from 'antd';

import MobileGlobalIndicator from '@baifendian/adhere-mobile-ui-globalindicator';
import GlobalIndicator from '@baifendian/adhere-ui-globalindicator';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';

import {
  EventHandlerParams,
  FormDataConfig,
  HttpStatusCode,
  IConfig,
  ISendArg,
  ISendPrepareArg,
  Method,
  Prepare,
  PrepareFunctionParams,
  RequestInterceptor,
  ResolveDataParams,
  ResolveDataResult,
  ResponseInterceptor,
  SendParamsConfig,
  SendResult,
  XhrEventsConfig,
} from './types';
import { CONTENT_TYPES } from './types';

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
  protected requestInterceptors = new Set<RequestInterceptor>();

  /** 响应拦截器容器 */
  protected responseInterceptors = new Set<ResponseInterceptor>();

  /**
   * 添加一个或多个请求拦截器
   * @param handler - 请求拦截器函数或函数数组
   * @returns 拦截器集合
   */
  addRequest(handler: RequestInterceptor | RequestInterceptor[]): Set<RequestInterceptor> {
    if (Array.isArray(handler)) {
      handler.forEach((_handler) => {
        this.requestInterceptors.add(_handler);
      });
      return this.requestInterceptors;
    }

    this.requestInterceptors.add(handler);
    return this.requestInterceptors;
  }

  /**
   * 添加一个或多个响应拦截器
   * @param handler - 响应拦截器函数或函数数组
   * @returns 拦截器集合
   */
  addResponse(handler: ResponseInterceptor | ResponseInterceptor[]): Set<ResponseInterceptor> {
    if (Array.isArray(handler)) {
      handler.forEach((_handler) => {
        this.responseInterceptors.add(_handler);
      });
      return this.responseInterceptors;
    }

    this.responseInterceptors.add(handler);
    return this.responseInterceptors;
  }

  /**
   * 删除拦截器
   * @param handler - 要删除的拦截器函数
   */
  remove(handler: RequestInterceptor | ResponseInterceptor): void {
    if (this.requestInterceptors.has(handler as RequestInterceptor)) {
      this.requestInterceptors.delete(handler as RequestInterceptor);
    } else if (this.responseInterceptors.has(handler as ResponseInterceptor)) {
      this.responseInterceptors.delete(handler as ResponseInterceptor);
    }
  }

  /**
   * 对请求参数进行拦截器处理
   * @param params - 请求参数
   * @returns 处理后的请求参数
   */
  requestReducer(params: ISendArg): ISendArg {
    return Array.from(this.requestInterceptors).reduce((result, interceptor) => {
      return interceptor(result);
    }, params);
  }

  /**
   * 对响应参数进行拦截器处理
   * @param params - 响应参数
   * @returns 处理后的响应参数
   */
  responseReducer(params: Parameters<ResponseInterceptor>[0]): ReturnType<ResponseInterceptor> {
    return Array.from(this.responseInterceptors).reduce((result, interceptor) => {
      return interceptor(result);
    }, params);
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
   * GET请求
   * @param params - 请求参数
   * @returns 请求结果
   */
  get(this: Ajax, { data, ...arg }: ISendArg): SendResult {
    let prepare: Prepare = {};

    const promise = new Promise((resolve, reject) => {
      prepare = sendPrepare.call(
        this,
        {
          // 默认配置
          ...getDefaultConfig.call(this),
          // 用户构造函数传的配置
          ...this.config,
          method: 'get',
          // get方法传的参数
          ...arg,
        },
        {
          resolve,
          reject,
        },
      );

      const { xhr } = prepare;

      if (xhr) {
        xhr.send(null);
      }
    });

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
  post(this: Ajax, params: ISendArg): SendResult {
    return complexRequest.call(this, 'post', params);
  }

  /**
   * PATCH请求
   * @param params - 请求参数
   * @returns 请求结果
   */
  patch(this: Ajax, params: ISendArg): SendResult {
    return complexRequest.call(this, 'patch', params);
  }

  /**
   * PUT请求
   * @param params - 请求参数
   * @returns 请求结果
   */
  put(this: Ajax, params: ISendArg): SendResult {
    return complexRequest.call(this, 'put', params);
  }

  /**
   * DELETE请求
   * @param params - 请求参数
   * @returns 请求结果
   */
  delete(this: Ajax, params: ISendArg): SendResult {
    return complexRequest.call(this, 'delete', params);
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
      message: title,
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
      message: title,
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
 * 解析响应数据
 * @param params - 响应参数
 * @returns 解析后的数据对象
 */
function resolveData(this: Ajax, params: ResolveDataParams): ResolveDataResult {
  // 调用response拦截器
  const { show, terminal, data, indicator, xhr } = params;

  const targetGlobalIndicator = getGlobalIndicator(terminal);

  return {
    ...{ xhr, data },
    ...(show ? { hideIndicator: () => targetGlobalIndicator.hide(indicator) } : {}),
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

/**
 * onreadystatechange事件处理
 * @param params - 事件处理参数
 */
function onreadystatechange(
  this: Ajax,
  {
    xhr,
    interceptor,
    loading: { show, indicator, terminal },
    business: { messageKey, codeKey, codeSuccess, showWarn },
    resolve,
    reject,
    interceptorsConfig,
  }: EventHandlerParams,
): void {
  const targetGlobalIndicator = getGlobalIndicator(terminal);

  // readyState === 4
  if (xhr.readyState === Ajax.READY_STATE_DONE) {
    /** 调用response过滤器 **/
    const { response, responseXML, responseText } = this.interceptors.responseReducer({
      ...interceptorsConfig,
      headers: transformStringHeadersToObject(xhr.getAllResponseHeaders()),
      response: xhr.response,
      responseText: xhr.responseText,
      responseXML: xhr.responseXML,
    });

    // status success
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      // 获取contentType
      const contentType = xhr.getResponseHeader('Content-type') || '';

      /** response ContentType是application/json **/
      if (contentType.indexOf(Ajax.CONTENT_TYPE_APPLICATION_JSON) !== -1) {
        /** 只有application/json才进行三大值的判断 **/
        const jsonObj = JSON.parse(responseText);

        if (showWarn && codeKey in jsonObj && jsonObj[codeKey] !== codeSuccess) {
          warnInfo(Intl.get('hint'), jsonObj[messageKey]);
        }

        resolve(resolveData.call(this, { show, terminal, data: jsonObj, indicator, xhr }));
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
            xhr,
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
            xhr,
          }),
        );
      }
    }
    // status error
    else {
      // 3xx, 4xx, 5xx

      // 拦截器
      interceptor({
        status: xhr.status as HttpStatusCode,
        statusText: xhr.statusText,
        response,
        responseText,
      });

      // catch
      reject({
        status: xhr.status,
        statusText: xhr.statusText,
        response,
        responseText,
      });

      // 取消遮罩
      if (show && indicator) {
        targetGlobalIndicator.hide(indicator);
      }
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
function sendPrepare(
  this: Ajax,
  {
    // 当前方法独有
    method,
    ...params
  }: ISendPrepareArg,
  { resolve, reject }: PrepareFunctionParams,
): Prepare {
  let indicator: any;

  /** 调用request拦截器，返回新的interceptorsConfig **/
  const interceptorsConfig = this.interceptors.requestReducer({
    ...params,
    method,
  });

  const {
    // get|post|patch|put|delete方法独有
    path,
    headers,
    // 数据
    data,
    // 业务参数
    mock,
    loading,
    onBeforeResponse,
    // 下面是后端返回的三组值
    dataKey = 'data',
    messageKey = 'message',
    codeKey = 'code',
    codeSuccess = 200,
    showWarn = true,
    ...curConfig // timeout && withCredentials && events
  } = interceptorsConfig;

  const defaultLoadingText = `${Intl.get('loading')}...`;

  const {
    show = false,
    text = defaultLoadingText,
    el = document.body,
    zIndex = 19999,
    size = 'default',
    terminal = 'pc',
  } = loading!;

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
  xhr.open(method, `${baseURL}/${path}`, true);

  // timeout
  xhr.timeout = timeout!;

  // withCredentials
  xhr.withCredentials = withCredentials!;

  // responseType
  xhr.responseType = responseType || '';

  let contentType = '';

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
    interceptorsConfig,
    resolve,
    reject,
  });

  // return
  return {
    xhr,
    contentType,
    interceptorsConfig,
  };
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
          formData.append(k, String(_value));
        });
      }
      // 正常的情况
      else {
        formData.append(k, String(value));
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
function complexRequest(this: Ajax, method: Method, params: ISendArg): SendResult {
  let prepare: Prepare = {};

  const promise = new Promise((resolve, reject) => {
    prepare = sendPrepare.call(
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
        resolve,
        reject,
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
  });

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

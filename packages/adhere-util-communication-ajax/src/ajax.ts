import { notification } from 'antd';

import MobileGlobalIndicator from '@baifendian/adhere-mobile-ui-globalindicator';
import GlobalIndicator from '@baifendian/adhere-ui-globalindicator';
import Util from '@baifendian/adhere-util';
import intl from '@baifendian/adhere-util-intl';

import type { IConfig, ISendArg, ISendPrepareArg, Method, Prepare, SendResult } from './types';

// 是否触发过402
let trigger402 = false;

// notification的节流时间(毫秒)
const notificationThrottlingTime = 300;

let errorInfoHandler: string | number | NodeJS.Timeout | null | undefined;
let warnInfoHandler: string | number | NodeJS.Timeout | null | undefined;

/**
 * Ajax
 * @class Ajax
 * @classdesc Ajax
 */
class Ajax {
  /**
   * 超时时间(10分钟)
   */
  static TIMEOUT = 1000 * 1000;

  /**
   * 状态成功代码
   */
  static STATUS_SUCCESS_CODES = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226];

  /**
   * 状态重定向代码
   */
  static STATUS_REDIRECT_CODES = [300, 301, 302, 303, 304, 305, 306, 307, 308];

  /**
   * 代理被创建，但尚未调用 open() 方法。
   */
  static READY_STATE_UNSENT = 0;

  /**
   * open() 方法已经被调用
   */
  static READY_STATE_OPENED = 1;

  /**
   * send() 方法已经被调用，并且头部和状态已经可获得
   */
  static READY_STATE_HEADERS_RECEIVED = 2;

  /**
   * 下载中； responseText 属性已经包含部分数据
   */
  static READY_STATE_LOADING = 3;

  /**
   * 下载操作已完成
   */
  static READY_STATE_DONE = 4;

  static CONTENT_TYPE_APPLICATION_JSON = 'application/json';

  static CONTENT_TYPE_MULTIPART_FORM_DATA = 'multipart/form-data';

  static CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED = 'application/x-www-form-urlencoded';

  static CONTENT_TYPE_TEXT_XML = 'text/xml';

  static CONTENT_TYPE_APPLICATION_XML = 'application/xml';

  static CONTENT_TYPE_TEXT_PLAIN = 'text/plain';

  protected baseURL: string;

  protected systemManagerBaseURL: string;

  protected config: IConfig;

  /**
   * constructor
   * @param baseURL
   * @param systemManagerBaseURL
   * @param config
   */
  constructor(baseURL: string, systemManagerBaseURL: string, config: IConfig) {
    this.baseURL = baseURL || '';

    this.systemManagerBaseURL = systemManagerBaseURL || '';

    this.config = config ?? {};
  }

  /**
   * get
   * @param data
   * @param arg
   */
  get(this: Ajax, { data, ...arg }: ISendArg): SendResult {
    let prepare: Prepare = {};

    const promise = new Promise((resolve, reject) => {
      prepare = sendPrepare.call(
        this,
        {
          // 默认的
          ...getDefaultConfig.call(this),
          // 用户构造函数传的
          ...this.config,
          method: 'get',
          // get传的
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
   * post
   * @param params
   */
  post(this: Ajax, params: ISendArg): SendResult {
    return complexRequest.call(this, 'post', params);
  }

  /**
   * path
   * @param params
   */
  path(this: Ajax, params: ISendArg): SendResult {
    return complexRequest.call(this, 'path', params);
  }

  /**
   * put
   * @param params
   */
  put(this: Ajax, params: ISendArg): SendResult {
    return complexRequest.call(this, 'put', params);
  }

  /**
   * delete
   * @param params
   */
  delete(this: Ajax, params: ISendArg): SendResult {
    return complexRequest.call(this, 'delete', params);
  }
}

/**
 * errorInfo - 错误的提示
 * @param title
 * @param message
 */
function errorInfo(title: string, message: string) {
  if (errorInfoHandler) {
    clearTimeout(errorInfoHandler);
    errorInfoHandler = null;
  }

  errorInfoHandler = setTimeout(() => {
    notification.error({
      message: title,
      description: message,
    });
  }, notificationThrottlingTime);
}

/**
 * warnInfo - 警告的提示
 * @param title
 * @param message
 */
function warnInfo(title: string, message: string) {
  if (warnInfoHandler) {
    clearTimeout(warnInfoHandler);
    warnInfoHandler = null;
  }

  warnInfoHandler = setTimeout(() => {
    notification.warning({
      message: title,
      description: message,
    });
  }, notificationThrottlingTime);
}

/**
 * createXHR - 创建一个XHR对象
 * @return XMLHttpRequest
 */
function createXHR() {
  return new XMLHttpRequest();
}

/**
 * getDefaultConfig - 返回构造函数config的默认值
 * @return IConfig
 */
function getDefaultConfig(this: Ajax): IConfig {
  return {
    timeout: Ajax.TIMEOUT,
    withCredentials: true,
    onLoad: () => {},
    onLoadsStart: () => {},
    onLoadend: () => {},
    onProgress: () => {},
    // 超时
    onTimeout: () => {
      warnInfo(intl.v('提示'), intl.v('请求超时'));
    },
    // 取消
    onAbort: () => {
      warnInfo(intl.v('提示'), intl.v('请求终止'));
    },
    // 发生错误
    onError: () => {
      errorInfo(intl.v('提示'), intl.v('请求发生错误'));
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
          errorInfo(intl.v('提示'), intl.v('已提出请求，但未收到任何回复'));
          break;
      }
    },
    mock: false,
    // loading的配置
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
 * initXhrEvents - 初始化XHR的事件
 * @param xhr
 * @param events
 * @param reject
 */
function initXhrEvents({ xhr, events, reject }) {
  const { onTimeout, onLoadsStart, onProgress, onAbort, onError, onLoad, onLoadend } = events;

  if (onTimeout) {
    xhr.addEventListener('timeout', function (...params: any) {
      onTimeout(...(params ?? {}));
      reject(...(params ?? {}));
    });
  }

  if (onAbort) {
    xhr.addEventListener('abort', function (...params: any) {
      onAbort(...(params ?? {}));
      reject(...(params ?? {}));
    });
  }

  if (onError) {
    xhr.addEventListener('error', function (...params: any) {
      onError(...(params ?? {}));
      reject(...(params ?? {}));
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
 * resolveData - onreadystatechange中resolve的数据
 * @param show
 * @param terminal
 * @param data
 * @param indicator
 * @param xhr
 */
function resolveData({ show, terminal, data, indicator, xhr }): {
  data: any;
  xhr: XMLHttpRequest;
  hideIndicator?: () => void;
} {
  const targetGlobalIndicator = getGlobalIndicator(terminal);

  return {
    ...{ xhr, data },
    ...(show ? { hideIndicator: () => targetGlobalIndicator.hide(indicator) } : {}),
  };
}

/**
 * onreadystatechange - onreadystatechange的处理
 * @param xhr
 * @param interceptor
 * @param show
 * @param indicator
 * @param terminal
 * @param messageKey
 * @param codeKey
 * @param codeSuccess
 * @param showWarn
 * @param resolve
 * @param reject
 */
function onreadystatechange({
  xhr,
  interceptor,
  loading: { show, indicator, terminal },
  business: { messageKey, codeKey, codeSuccess, showWarn },
  resolve,
  reject,
}) {
  // const { status, readyState, statusText, response, responseText } = xhr;

  const targetGlobalIndicator = getGlobalIndicator(terminal);

  // readyState === 4
  if (xhr.readyState === Ajax.READY_STATE_DONE) {
    // status success
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      // 获取contentType
      const contentType = xhr.getResponseHeader('Content-type');

      // response ContentType是application/json
      if (contentType.indexOf(Ajax.CONTENT_TYPE_APPLICATION_JSON) !== -1) {
        // 只有application/json才进行三大值的判断
        const jsonObj = JSON.parse(xhr.responseText);

        if (showWarn && codeKey in jsonObj && jsonObj[codeKey] !== codeSuccess) {
          warnInfo(intl.v('提示'), jsonObj[messageKey]);
        }

        resolve(resolveData({ show, terminal, data: jsonObj, indicator, xhr }));
      }
      // response ContentType是xml
      else if ([Ajax.CONTENT_TYPE_TEXT_XML, Ajax.CONTENT_TYPE_TEXT_XML].includes(contentType)) {
        resolve(
          resolveData({
            show,
            terminal,
            data: xhr.responseXML,
            indicator,
            xhr,
          }),
        );
      }
      // response ContentType是其他
      else {
        resolve(
          resolveData({
            show,
            terminal,
            data: xhr.response,
            indicator,
            xhr,
          }),
        );
      }
    }
    // status error
    else {
      // 3xx
      // 4xx
      // 5xx

      // 拦截器
      interceptor({
        status: xhr.status,
        statusText: xhr.statusText,
        response: xhr.response,
        responseText: xhr.responseText,
      });

      // catch
      // if (xhr.status)
      reject({
        status: xhr.status,
        statusText: xhr.statusText,
        response: xhr.response,
        responseText: xhr.responseText,
      });

      // 取消遮罩
      if (show && indicator) {
        targetGlobalIndicator.hide(indicator);
      }
    }
  }
}

/**
 * isMultipartFormData
 * @description 是否是上传
 * @param data
 */
function isMultipartFormData(data: any) {
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
 * getGlobalIndicator
 * @param terminal
 */
function getGlobalIndicator(terminal: string) {
  if (terminal === 'pc') return GlobalIndicator;

  return MobileGlobalIndicator;
}

/**
 * sendPrepare - send前的准备
 */
function sendPrepare(
  this: Ajax,
  {
    // 当前方法独有
    method,

    // get|post|path|put|delete方法独有
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

    // curConfig
    ...curConfig // timeout && withCredentials && events
  }: ISendPrepareArg,
  { resolve, reject },
): Prepare {
  let indicator;

  const defaultLoadingText = `${intl.v('加载中')}...`;

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
    indicator = targetGlobalIndicator.show(
      el || document.body,
      text || defaultLoadingText,
      zIndex,
      size,
    );
  }

  // 如果是mock数据
  if (mock) {
    setTimeout(() => {
      if (show) {
        resolve({
          data: path,
          hideIndicator: () => {
            targetGlobalIndicator.hide(indicator as any);
          },
        });
      } else {
        resolve(path);
      }
    }, 200);

    return { xhr: null, contentType: '' };
  }

  const { baseURL, config } = this;

  const { timeout, withCredentials, responseType, interceptor, ...events } = Object.assign(
    // 默认的属性
    getDefaultConfig.call(this),
    config,
    curConfig,
  );

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
  // 如果用户设置了header
  if (!Util.isEmpty(headers) && Util.isObject(headers)) {
    // 不是get请求且如果用户没有定义Content-type 则默认添加application/json
    if (!('Content-Type' in headers)) {
      if (!isMultipartFormData(data)) {
        headers['Content-Type'] = `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`;
      }
      // console.log('设置了header，但是没有设置Content-Type', Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA);
    }

    contentType = headers['Content-Type'] ?? '';

    for (const header in headers) {
      xhr.setRequestHeader(header, headers[header]);
    }
  } else {
    // 用户没有设置header
    // 会根据data初始化heeader
    if (!Util.isEmpty(data) && Util.isRef(data) && method !== ('get' || 'GET')) {
      if (!isMultipartFormData(data)) {
        // console.log('默认设置Content-Type', `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`);
        contentType = `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`;
        xhr.setRequestHeader('Content-Type', `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`);
      } else {
        // console.log('有formData不需要设置Content-Type');
        contentType = Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA;
      }
    }
  }
  // 默认Content-Type
  // else {
  //   xhr.setRequestHeader('Content-Type', `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`);
  // }

  // events
  initXhrEvents({ xhr, events, reject });

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
    resolve,
    reject,
  });

  // return
  return {
    xhr,
    contentType,
  };
}

/**
 * getSendParams
 * @param data
 * @param contentType
 * @param customSendJSONStringify
 */
function getSendParams({ data, contentType = '', customSendJSONStringify }) {
  // 四种Content-Type的处理(也就是send的参数)

  // application/json
  // "{}"

  // application/x-www-form-urlencoded
  // key1=1&key2=2&key3=3&key4=4&key5=5

  // multipart/form-data
  // FormData

  // console.log('getSendParams', data, contentType);

  /**
   * application/json
   */
  if (contentType.startsWith(Ajax.CONTENT_TYPE_APPLICATION_JSON) && Util.isRef(data)) {
    // console.log('数据需要被转换成JSON字符串', JSON.stringify(data));
    if (customSendJSONStringify) {
      return JSON.stringify(data, customSendJSONStringify);
    }
    return JSON.stringify(data);
  }

  /**
   * application/x-www-form-urlencoded
   */
  if (
    contentType.startsWith(Ajax.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED) &&
    Util.isObject(data)
  ) {
    // console.log('application/x-www-form-urlencoded转换', JSON.stringify(data));
    return Array.from(Object.keys(data))
      .map((k) => `${k}=${encodeURIComponent(data[k])}`)
      .join('&');
  }

  /**
   * multipart/form-data
   */
  if (
    /*contentType.startsWith(Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA) &&*/
    Util.isObject(data) &&
    isMultipartFormData(data)
  ) {
    // console.log('multipart/form-data转换');
    // console.log('form', data.form);

    const formData = new FormData(data.form);

    Array.from(Object.keys(data.data)).forEach(function (k) {
      // 获取值
      const value = data.data[k];

      // 如果值是函数
      if (value instanceof Function) {
        formData.append(k, value());
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
      // let target = value;

      // // 如果值是函数
      // if (value instanceof Function) {
      //   target = value();
      // }
      //
      // let params = [k];
      //
      // if (Array.isArray(target)) {
      //   params = [...params, ...target];
      // } else {
      //   params = [...params, target];
      // }
      //
      // // @ts-ignore
      // formData.append(...params);
      // console.log(k, data.data[k]);
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

  return data?.toString?.();
}

/**
 * complexRequest - 复杂的请求
 * @param method
 * @param params
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

    const { xhr, contentType } = prepare;

    if (xhr) {
      xhr.send(
        getSendParams.call(this, {
          data: params.data,
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
 * deal401
 */
function deal401(this: Ajax) {
  // 像top发送消息
  if (typeof window === 'undefined') return;

  if (window.top && window.top !== window) {
    window.top.postMessage('http_status_401', '*');
  }
  if (trigger402) {
    return false;
  }

  window.location.href = Util.casUrl({
    baseUrl: this.systemManagerBaseURL,
    enterUrl: window.location.href,
    defaultLocal: 'zh_CN',
  });
}

/**
 * deal402
 */
function deal402(this: Ajax) {
  trigger402 = true;

  if (typeof window === 'undefined') return;

  if (window.parent && window.parent !== window) {
    window.parent.postMessage('http_status_402', '*');
    return false;
  }

  window.location.href = Util.casLogoutUrl({
    baseUrl: this.systemManagerBaseURL,
    enterUrl: window.location.href,
    params: '&code=402',
  });
}

export default Ajax;

import { notification } from 'antd';
import Util from '@baifendian/adhere-util';
import intl from '@baifendian/adhere-util-intl';
import GlobalIndicator from '@baifendian/adhere-ui-globalindicator';

import { IConfig, ISendArg, ISendPrepareArg } from './types';

// 是否触发过402
let trigger402 = false;

/**
 * errorInfo - 错误的提示
 * @param title
 * @param message
 */
function errorInfo(title, message) {
  notification.error({
    message: title,
    description: message,
  });
}

/**
 * warnInfo - 警告的提示
 * @param title
 * @param message
 */
function warnInfo(title, message) {
  notification.warn({
    message: title,
    description: message,
  });
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
function getDefaultConfig(): IConfig {
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
          // @ts-ignore
          deal401.call(this);
          break;
        case 402:
          // @ts-ignore
          deal402.call(this);
          break;
      }
    },
  };
}

/**
 * initXhrEvents - 初始化XHR的事件
 * @param xhr
 * @param events
 */
function initXhrEvents(xhr, events) {
  const { onTimeout, onLoadsStart, onProgress, onAbort, onError, onLoad, onLoadend } = events;

  // events

  if (onTimeout) {
    xhr.addEventListener('timeout', onTimeout);
  }

  if (onLoadsStart) {
    xhr.addEventListener('loadstart', onLoadsStart);
  }

  if (onProgress) {
    xhr.addEventListener('progress', onProgress);
  }

  if (onAbort) {
    xhr.addEventListener('abort', onAbort);
  }

  if (onError) {
    xhr.addEventListener('error', onError);
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
 * @param data
 * @param indicator
 */
function resolveData({ show, data, indicator }): boolean | { data: any; hideIndicator: Function } {
  return show
    ? {
        data,
        hideIndicator: () => {
          GlobalIndicator.hide(indicator);
        },
      }
    : data;
}

/**
 * onreadystatechange - onreadystatechange的处理
 * @param xhr
 * @param interceptor
 * @param show
 * @param indicator
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
  loading: { show, indicator },
  business: { messageKey, codeKey, codeSuccess, showWarn },
  resolve,
  reject,
}) {
  const { status, readyState, statusText, response, responseText } = xhr;

  // readyState === 4
  if (readyState === Ajax.READY_STATE_DONE) {
    // status success
    if ((status >= 200 && status < 300) || status === 304) {
      // 获取contentType
      const contentType = xhr.getResponseHeader('Content-type');

      // response ContentType是application/json
      if (contentType.indexOf(Ajax.CONTENT_TYPE_APPLICATION_JSON) !== -1) {
        // 只有application/json才进行三大值的判断
        const jsonObj = JSON.parse(xhr.responseText);

        if (showWarn && jsonObj[codeKey] !== codeSuccess) {
          warnInfo(intl.v('提示'), jsonObj[messageKey]);
        }

        resolve(resolveData({ show, data: jsonObj, indicator }));
      }
      // response ContentType是xml
      else if ([Ajax.CONTENT_TYPE_TEXT_XML, Ajax.CONTENT_TYPE_TEXT_XML].includes(contentType)) {
        resolve(resolveData({ show, data: xhr.responseXML, indicator }));
      }
      // response ContentType是其他
      else {
        resolve(resolveData({ show, data: xhr.response, indicator }));
      }
    }
    // status error
    else {
      // 3xx
      // 4xx
      // 5xx

      errorInfo(intl.v('提示'), intl.v('已提出请求，但未收到任何回复'));

      // 拦截器
      interceptor({
        status,
        statusText,
        response,
        responseText,
      });

      // catch
      if (status)
        reject({
          status,
          statusText,
          response,
          responseText,
        });

      // 取消遮罩
      if (show && indicator) {
        GlobalIndicator.hide(indicator);
      }
    }
  }
}

/**
 * sendPrepare - send前的准备
 */
function sendPrepare(
  this: any,
  {
    // 当前方法独有
    method,

    // get|post|path|put|delete方法独有
    path,
    headers,
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
): XMLHttpRequest | null {
  let indicator;

  const defaultLoadingText = `${intl.v('加载中')}...`;

  const { show = false, text = defaultLoadingText, el = document.body } = loading;

  // 显示loading
  if (show) {
    indicator = GlobalIndicator.show(el || document.body, text || defaultLoadingText);
  }

  if (mock) {
    setTimeout(() => {
      if (show) {
        resolve({
          data: path,
          hideIndicator: () => {
            GlobalIndicator.hide(indicator);
          },
        });
      } else {
        resolve(path);
      }
    }, 200);

    return null;
  }

  const { baseURL, config } = this;

  const { timeout, withCredentials, interceptor, ...events } = Object.assign(
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
  xhr.timeout = timeout;

  // withCredentials
  xhr.withCredentials = withCredentials;

  // requestHeaders
  if (!Util.isEmpty(headers) && Util.isObject(headers)) {
    // 如果用户没有定义Content-type 则默认添加application/json
    if (!('Content-type' in headers)) {
      headers['Content-Type'] = `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`;
    }

    for (const header in headers) {
      xhr.setRequestHeader(header, headers[header]);
    }
  }
  // 默认Content-Type
  else {
    xhr.setRequestHeader('Content-Type', `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`);
  }

  // events
  initXhrEvents(xhr, events);

  // onreadystatechange
  xhr.onreadystatechange = onreadystatechange.bind(this, {
    xhr,
    interceptor,
    loading: {
      show,
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
  return xhr;
}

/**
 * getSendParams
 * @param data
 * @param contentType
 */
function getSendParams({ data, contentType }) {
  contentType = contentType || '';

  // 四种Content-Type的处理(也就是send的参数)

  // application/json
  // "{}"

  // application/x-www-form-urlencoded
  // key1=1&key2=2&key3=3&key4=4&key5=5

  // multipart/form-data
  // FormData

  // application/json
  if (contentType.indexOf(Ajax.CONTENT_TYPE_APPLICATION_JSON) === 0 && Util.isObject(data)) {
    return JSON.stringify(data);
  }

  // application/x-www-form-urlencoded
  if (
    contentType.indexOf(Ajax.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED) === 0 &&
    Util.isObject(data)
  ) {
    return Array.from(Object.keys(data))
      .map((k) => encodeURIComponent(`${k}=${data[k]}`))
      .join('&');
  }

  // multipart/form-data
  if (contentType.indexOf(Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA) === 0 && Util.isObject(data)) {
    const formData = new FormData(data.form);

    Array.from(Object.keys(data)).forEach(function (k) {
      formData.set(k, data[k]);
    });

    return formData;
  }
}

/**
 * complexRequest - 复杂的请求
 * @param method
 * @param data
 * @param arg
 */
function complexRequest(method: string, { data, ...arg }: ISendArg) {
  return new Promise((resolve, reject) => {
    const xhr = sendPrepare.call(
      // @ts-ignore
      this,
      {
        // @ts-ignore
        method,
        ...arg,
      },
      {
        resolve,
        reject,
      },
    );

    if (xhr) {
      // @ts-ignore
      xhr.send(getSendParams.call(this, { data, contentType: arg.headers['Content-type'] }));
    }
  });
}

/**
 * deal401
 */
function deal401() {
  // 像top发送消息
  if (window.top && window.top !== window) {
    window.top.postMessage('http_status_401', '*');
  }
  if (trigger402) {
    return false;
  }

  window.location.href = Util.casUrl({
    // @ts-ignore
    baseUrl: this.systemManagerBaseUrl,
    enterUrl: window.location.href,
  });
}

/**
 * deal402
 */
function deal402() {
  trigger402 = true;

  if (window.parent && window.parent !== window) {
    window.parent.postMessage('http_status_402', '*');
    return false;
  }

  window.location.href = Util.casLogoutUrl({
    // @ts-ignore
    baseUrl: this.systemManagerBaseUrl,
    enterUrl: window.location.href,
    params: '&code=402',
  });
}

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

  private baseURL: string;

  private systemManagerBaseURL: string;

  private config: IConfig;

  /**
   * constructor
   * @param baseURL
   * @param systemManagerBaseURL
   * @param config
   */
  constructor(baseURL: string, systemManagerBaseURL: string, config: IConfig) {
    this.baseURL = baseURL;

    this.systemManagerBaseURL = systemManagerBaseURL;

    this.config = config;
  }

  /**
   * get
   * @param data
   * @param arg
   */
  get({ data, ...arg }: ISendArg) {
    return new Promise((resolve, reject) => {
      const xhr = sendPrepare.call(
        this,
        {
          method: 'get',
          ...arg,
        },
        {
          resolve,
          reject,
        },
      );

      if (xhr) {
        xhr.send(null);
      }
    });
  }

  /**
   * post
   * @param params
   */
  post(params: ISendArg) {
    return complexRequest('post', params);
  }

  /**
   * path
   * @param params
   */
  path(params: ISendArg) {
    return complexRequest('path', params);
  }

  /**
   * put
   * @param params
   */
  put(params: ISendArg) {
    return complexRequest('put', params);
  }

  /**
   * delete
   * @param params
   */
  delete(params: ISendArg) {
    return complexRequest('delete', params);
  }
}

export default Ajax;

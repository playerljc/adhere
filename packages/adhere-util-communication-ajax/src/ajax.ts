import { notification } from 'antd';
// @ts-ignore
import Util from '@baifendian/adhere-util';
import intl from '@baifendian/adhere-util-intl';
import GlobalIndicator from '@baifendian/adhere-ui-globalindicator';

import { IConfig, ISendArg, ISendPrepareArg } from './types';

// 是否触发过402
let trigger402 = false;

// notification的节流时间(毫秒)
const notificationThrottlingTime = 2000;

let errorInfoHandler;
let warnInfoHandler;

/**
 * errorInfo - 错误的提示
 * @param title
 * @param message
 */
function errorInfo(title, message) {
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
function warnInfo(title, message) {
  if (warnInfoHandler) {
    clearTimeout(warnInfoHandler);
    warnInfoHandler = null;
  }

  warnInfoHandler = setTimeout(() => {
    notification.warn({
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
function getDefaultConfig(): IConfig & {
  loading: {
    // 是否显示遮罩
    show: boolean;
    // 遮罩的内容
    text: string;
    // 遮罩的元素
    el: HTMLElement;
  };
} {
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
    // loading的配置
    loading: {
      // 是否显示遮罩
      show: false,
      // 遮罩的内容
      text: '',
      // 遮罩的元素
      el: document.body,
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
): {
  xhr: XMLHttpRequest | null;
  contentType: string | null;
} {
  let indicator;

  const defaultLoadingText = `${intl.v('加载中')}...`;

  const { show = false, text = defaultLoadingText, el = document.body } = loading;

  // 显示loading
  if (show) {
    indicator = GlobalIndicator.show(el || document.body, text || defaultLoadingText);
  }

  // 如果是mock数据
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

    return { xhr: null, contentType: '' };
  }

  // @ts-ignore
  const { baseURL, config } = this;

  const { timeout, withCredentials, interceptor, ...events } = Object.assign(
    // 默认的属性
    // @ts-ignore
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

  let contentType = '';

  // requestHeaders - 在open之后
  // 如果用户设置了header
  if (!Util.isEmpty(headers) && Util.isObject(headers)) {
    // 不是get请求且如果用户没有定义Content-type 则默认添加application/json
    if (!('Content-type' in headers) && method !== ('get' || 'GET')) {
      headers['Content-Type'] = `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`;
      contentType = headers['Content-Type'];
      console.log('设置了header，但是没有设置Content-Type', Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA);
    }

    for (const header in headers) {
      xhr.setRequestHeader(header, headers[header]);
    }
  } else {
    // 用户没有设置header
    // 会根据data初始化heeader
    if (!Util.isEmpty(data) && Util.isRef(data) && method !== ('get' || 'GET')) {
      if (
        !(
          'form' in data &&
          'data' in data &&
          !Util.isEmpty(data.form) &&
          !Util.isEmpty(data.data) &&
          data.form instanceof HTMLFormElement
        )
      ) {
        console.log('默认设置Content-Type', `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`);
        contentType = `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`;
        xhr.setRequestHeader('Content-Type', `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`);
      } else {
        console.log('有formData不需要设置Content-Type');
        contentType = Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA;
      }
    }
  }
  // 默认Content-Type
  // else {
  //   xhr.setRequestHeader('Content-Type', `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`);
  // }

  // events
  initXhrEvents(xhr, events);

  // onreadystatechange
  // @ts-ignore
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
  return {
    xhr,
    contentType,
  };
}

/**
 * getSendParams
 * @param data
 * @param contentType
 */
function getSendParams({ data, contentType }) {
  // @ts-ignore
  contentType = contentType || '';

  // 四种Content-Type的处理(也就是send的参数)

  // application/json
  // "{}"

  // application/x-www-form-urlencoded
  // key1=1&key2=2&key3=3&key4=4&key5=5

  // multipart/form-data
  // FormData

  console.log('getSendParams', data, contentType);

  // application/json
  if (contentType.indexOf(Ajax.CONTENT_TYPE_APPLICATION_JSON) === 0 && Util.isRef(data)) {
    console.log('数据需要被转换成JSON字符串', JSON.stringify(data));
    return JSON.stringify(data);
  }

  // application/x-www-form-urlencoded
  if (
    contentType.indexOf(Ajax.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED) === 0 &&
    Util.isObject(data)
  ) {
    console.log('application/x-www-form-urlencoded转换', JSON.stringify(data));
    return Array.from(Object.keys(data))
      .map((k) => encodeURIComponent(`${k}=${data[k]}`))
      .join('&');
  }

  // multipart/form-data
  if (contentType.indexOf(Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA) === 0 && Util.isObject(data)) {
    console.log('multipart/form-data转换');
    console.log('form', data.form);

    const formData = new FormData(data.form);

    Array.from(Object.keys(data.data)).forEach(function (k) {
      formData.append(k, data.data[k]);
      console.log(k, data.data[k]);
    });

    return formData;
  }
}

/**
 * complexRequest - 复杂的请求
 * @param method
 * @param params
 */
function complexRequest(method: string, params: ISendArg) {
  return new Promise((resolve, reject) => {
    const { xhr, contentType } = sendPrepare.call(
      // @ts-ignore
      this,
      {
        // @ts-ignore
        ...getDefaultConfig.call(this),
        // @ts-ignore
        method,
        ...params,
      },
      {
        resolve,
        reject,
      },
    );

    if (xhr) {
      xhr.send(
        // @ts-ignore
        getSendParams.call(this, {
          data: params.data,
          contentType,
        }),
      );
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
    baseUrl: this.systemManagerBaseURL,
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
    baseUrl: this.systemManagerBaseURL,
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
    this.baseURL = baseURL || '';

    this.systemManagerBaseURL = systemManagerBaseURL || '';

    this.config = config || {};
  }

  /**
   * get
   * @param data
   * @param arg
   */
  get({ data, ...arg }: ISendArg) {
    return new Promise((resolve, reject) => {
      const { xhr } = sendPrepare.call(
        this,
        {
          ...getDefaultConfig.call(this),
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
    return complexRequest.call(this, 'post', params);
  }

  /**
   * path
   * @param params
   */
  path(params: ISendArg) {
    return complexRequest.call(this, 'path', params);
  }

  /**
   * put
   * @param params
   */
  put(params: ISendArg) {
    return complexRequest.call(this, 'put', params);
  }

  /**
   * delete
   * @param params
   */
  delete(params: ISendArg) {
    return complexRequest.call(this, 'delete', params);
  }
}

export default Ajax;

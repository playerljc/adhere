import { Size } from '@baifendian/adhere-ui-globalindicator/es/types';

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
  // 全局的拦截器
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

  /* 下面是业务上的封装属性 */
  // 是否支持mock数据
  mock?: boolean;
  // loading的配置
  loading?: {
    // 是否显示遮罩
    show: boolean;
    // 遮罩的内容
    text: string;
    // 遮罩的元素
    el: HTMLElement;
    // 层级
    zIndex: number;
    // 大小
    size: Size;
    // 终端
    terminal?: 'PC' | 'Mobile';
  };
  // 和后端定义的三大业务key
  onBeforeResponse?: () => void;
  // 数据属性
  dataKey?: string;
  // 消息属性
  messageKey?: string;
  // 业务code属性
  codeKey?: number | string;
  // 业务code成功属性
  codeSuccess?: number;
  // 在code不等于200的时候是否使出message的warn
  showWarn?: boolean;
  // 数据的类型
  responseType?: XMLHttpRequestResponseType;
  // 自定义发送的数据需要进行JSON.stringify的时候的自定义处理
  customSendJSONStringify?: (this: any, key: string, value: any) => any;
}

/**
 * ISendArg
 * @interface ISendArg
 * @classdesc get|post|path|put|delete的方法参数
 */
export interface ISendArg extends IConfig {
  // 请求的地址(相对的地址)
  path: string;
  // 请求的头
  headers: object;
  // 请求的数据
  data?:
    | {
        // html表单对象(只有当requestHeader中的Content-Type为MulitPart-FormData才生效)
        form?: HTMLFormElement;
        // 数据
        data: object;
      }
    | object;
}

/**
 * ISendPrepareArg
 * @interface ISendPrepareArg
 * @classdesc sendPrepare的参数
 */
export interface ISendPrepareArg extends ISendArg {
  // 支持的method枚举
  method: Method;
}

export type Method = 'get' | 'post' | 'put' | 'path' | 'delete';

export type Prepare = {
  xhr?: XMLHttpRequest | null;
  contentType?: string | null;
};

export type SendResult = Prepare & {
  promise: Promise<any>;
};

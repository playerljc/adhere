interface timeout {
  (e: ProgressEvent<XMLHttpRequestEventTarget> | null): void;
}

interface loadstart {
  (e: ProgressEvent<XMLHttpRequestEventTarget> | null): void;
}

interface progress {
  (e: ProgressEvent<XMLHttpRequestEventTarget> | null): void;
}

interface abort {
  (e: ProgressEvent<XMLHttpRequestEventTarget> | null): void;
}

interface error {
  (e: ProgressEvent<XMLHttpRequestEventTarget> | null): void;
}

interface load {
  (e: ProgressEvent<XMLHttpRequestEventTarget> | null): void;
}

interface loadend {
  (e: ProgressEvent<XMLHttpRequestEventTarget> | null): void;
}

interface onBeforeResponse {
  (): void;
}

/**
 * interceptor - 拦截器接口定义
 * @interface
 */
interface interceptor {
  (params: { status?: number; statusText?: string; response?: any; responseText: string }): void;
}

/**
 * IConfig
 * @interface IConfig
 * @classdesc 构造函数配置对象(缺省的配置)
 */
export interface IConfig {
  onTimeout?: timeout;
  onLoadsStart?: loadstart;
  onProgress?: progress;
  onAbort?: abort;
  onError?: error;
  onLoad?: load;
  onLoadend?: loadend;
  timeout?: number;
  withCredentials?: boolean;
  // 全局的拦截器
  interceptor: interceptor;
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

  /* 下面是业务上的封装属性 */
  // 是否支持mock数据
  mock: boolean;
  // loading的配置
  loading: {
    // 是否显示遮罩
    show: boolean;
    // 遮罩的内容
    text: string;
    // 遮罩的元素
    el: HTMLElement;
  };
  // 和后端定义的三大业务key
  onBeforeResponse: onBeforeResponse;
  // 数据属性
  dataKey: string;
  // 消息属性
  messageKey: string;
  // 业务code属性
  codeKey: number | string;
  // 业务code成功属性
  codeSuccess: number;
  // 在code不等于200的时候是否使出message的warn
  showWarn: boolean;
}

/**
 * ISendPrepareArg
 * @interface ISendPrepareArg
 * @classdesc sendPrepare的参数
 */
export interface ISendPrepareArg extends ISendArg {
  // 支持的method枚举
  method: 'get' | 'post' | 'put' | 'path' | 'delete';
}

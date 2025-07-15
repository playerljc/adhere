// import Util from '@baifendian/adhere-util';
import { ERROR_MESSAGE, OK_MESSAGE } from '../Constant';
import Context from '../Context';
import Request from '../Request';
import Response from '../Response';
import type { Middleware, MessageEventData } from '../types';
import Compose from './compose';

/**
 * iframe postMessage 服务端类
 * @class Server
 * @description 用于处理iframe通信中的服务端逻辑
 */
class Server {
  /** 白名单域名列表 */
  private readonly whitelist: string[];
  /** 源窗口对象 */
  private readonly source: MessageEventSource;
  /** 源域名 */
  private readonly sourceOrigin: string;
  /** 中间件队列 */
  private middleWareQueue: Middleware[] = [];

  /**
   * 构造函数
   * @param whitelist - 白名单域名列表
   * @param source - 源窗口对象
   * @param sourceOrigin - 源域名
   */
  constructor(whitelist: string[] = [], source: MessageEventSource, sourceOrigin: string) {
    this.whitelist = whitelist;
    this.source = source;
    this.sourceOrigin = sourceOrigin;
    this.onMessage = this.onMessage.bind(this);
  }

  /**
   * 消息处理函数
   * @param evt - 消息事件
   */
  private onMessage(evt: Event): void {
    try {
      const messageEvent = evt as MessageEvent;
      const data: MessageEventData = JSON.parse(messageEvent.data);

      // 略掉不是白名单中的请求，或没有request的请求
      if (
        !this.whitelist.includes(messageEvent.origin) ||
        !messageEvent.source ||
        data === null ||
        data === undefined ||
        typeof data !== 'object' ||
        !('requestId' in data) ||
        data.requestId === null ||
        data.requestId === undefined ||
        data.requestId === ''
      ) {
        return;
      }

      if (data.type === 'response') {
        return;
      }

      this.service(messageEvent, data);
    } catch (e) {
      console.warn('处理消息失败:', e);
    }
  }

  /**
   * 对中间件进行迭代
   * @param ctx - 上下文对象
   * @returns Promise<void>
   */
  private middleWareQueueReduce(ctx: Context): Promise<void> {
    const middleWareCompose = Compose(this.middleWareQueue);
    return middleWareCompose(ctx);
  }

  /**
   * 具体的请求处理
   * @param evt - 消息事件
   * @param data - 消息数据
   */
  private service(evt: MessageEvent, data: MessageEventData): void {
    // 设置request的statusCode和statusMessage
    const request = new Request({
      pathname: data.pathname || '',
      headers: data.headers || {},
      statusCode: 200,
      stateMessage: OK_MESSAGE,
      body: data.body,
      type: 'request',
    });
    request.setRequestId(data.requestId);
    request.setStatusCode(200);
    request.setStatusMessage(OK_MESSAGE);

    // 如果中间件为空
    if (!this.middleWareQueue.length) {
      return;
    }

    // 如果中间件队列不为空则创建上下文对象
    const context = new Context({
      request,
      response: new Response({
        requestId: request.getRequestId(),
        statusCode: 0,
        stateMessage: ERROR_MESSAGE,
        headers: {
          pathname: request.getPathname(),
          date: new Date().toString(),
          origin: this.sourceOrigin,
          referer: this.source instanceof Window ? (this.source as Window).location.href : '',
        },
        body: null,
        type: 'response',
      }),
    });

    this.middleWareQueueReduce(context).then(() => {
      // 返回响应
      try {
        // @ts-ignore - postMessage方法在MessageEventSource上可能不存在
        evt?.source?.postMessage?.(JSON.stringify(context.getResponse()), evt.origin);
      } catch (e) {
        console.error('发送响应失败:', e);
      }
    });
  }

  /**
   * 启动服务
   * @returns Promise<void>
   */
  start(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.source.addEventListener('message', this.onMessage);
      resolve();
    });
  }

  /**
   * 关闭服务
   * @returns Promise<void>
   */
  close(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.source.removeEventListener('message', this.onMessage);
      resolve();
    });
  }

  /**
   * 添加中间件
   * @param middleWare - 中间件函数或中间件数组
   * @returns this - 返回当前实例，支持链式调用
   */
  use(middleWare: Middleware | Middleware[]): this {
    if (Array.isArray(middleWare)) {
      this.middleWareQueue.push(...middleWare);
    } else {
      this.middleWareQueue.push(middleWare);
    }

    return this;
  }
}

export default Server;

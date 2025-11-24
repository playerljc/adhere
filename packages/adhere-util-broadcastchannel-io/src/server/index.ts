import { CHANNEL_NAME, ERROR_MESSAGE, OK_MESSAGE } from '../Constant';
import Context from '../Context';
import Request from '../Request';
import Response from '../Response';
import type { MessageEventData, Middleware } from '../types';
import Compose from './compose';

/**
 * BroadCastChannel postMessage 服务端类
 * @class Server
 * @description 服务提供接口的Class
 */
class Server {
  /** 通信句柄对象 */
  protected bc: BroadcastChannel | undefined;
  /** 白名单pathname列表 */
  private readonly whitelist: string[];
  /** 创建服务的 */
  private readonly origin: string;
  /** 中间件队列 */
  private middleWareQueue: Middleware[] = [];

  /**
   * 构造函数
   * @param whitelist - 白名单域名列表
   * @param origin - 源pathname
   */
  constructor(whitelist: string[] = [], origin: string) {
    this.whitelist = whitelist;
    this.origin = origin;
    this.onMessage = this.onMessage.bind(this);

    // 实例化channel
    this.bc = new BroadcastChannel(CHANNEL_NAME);
  }

  /**
   * 消息处理函数
   * @param evt - 消息事件
   */
  private onMessage(evt: Event): void {
    try {
      debugger;
      const messageEvent = evt as MessageEvent;
      const data: MessageEventData = JSON.parse(messageEvent.data);

      // 略掉不是白名单中的请求，或没有request的请求
      if (
        // 控制发送方的白名单
        !this.whitelist.includes(data.headers?.origin as string) ||
        // 只关心发给自己的请求，忽略掉不是发给自己的请求
        !data.headers?.target?.includes(this.origin) ||
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

      this.service(data);
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
   * @param data - 消息数据
   */
  private service(data: MessageEventData): void {
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
          // 我发的
          origin: this.origin,
          // 谁发的我在发给谁
          target: [data.headers?.origin as string],
        },
        body: null,
        type: 'response',
      }),
    });

    const _self = this;
    this.middleWareQueueReduce(context).then(() => {
      // 返回响应
      try {
        // 发送回调
        _self?.bc?.postMessage?.(JSON.stringify(context.getResponse()));
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
      // 监听
      this.bc?.addEventListener('message', this.onMessage);
      resolve();
    });
  }

  /**
   * 关闭服务
   * @returns Promise<void>
   */
  close(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.bc?.removeEventListener('message', this.onMessage);
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

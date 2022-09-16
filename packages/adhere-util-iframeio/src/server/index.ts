import Util from '@baifendian/adhere-util';

import { ERROR_MESSAGE, OK_MESSAGE } from '../Constent';
import Context from '../Context';
import Request from '../Request';
import Response from '../Response';
import type { MiddleWare } from '../types';
import Compose from './compose';

/**
 * Server
 * @class Server
 * @classdesc iframe postMessage 服务端
 */
class Server {
  // 白名单
  private readonly whitelist: string[] = [];
  // SourceWindow
  private readonly source: MessageEventSource;
  // SourceOrigin
  private readonly sourceOrigin: string;
  // 中间件队列
  private middleWareQueue: MiddleWare[] = [];

  constructor(whitelist: string[] = [], source: MessageEventSource, sourceOrigin: string) {
    this.whitelist = whitelist;
    this.source = source;
    this.sourceOrigin = sourceOrigin;
    this.onMessage = this.onMessage.bind(this);
  }

  /**
   * onMessage
   * @description 接收到消息
   * @param evt
   */
  private onMessage(evt) {
    // 略掉不是白名单中的请求，或没有request的请求
    if (
      !this.whitelist.includes(evt.origin) ||
      !evt.source ||
      Util.isEmpty(evt.data) ||
      !Util.isObject(evt.data) ||
      !('requestId' in evt.data) ||
      Util.isEmpty(evt.data.requestId)
    ) {
      return;
    }

    this.service(evt);
  }

  /**
   * middleWareQueueReduce
   * @description 对中间件进行迭代
   * @private
   * @param ctx 上下文对象
   */
  private middleWareQueueReduce(ctx: Context): Promise<void> {
    const middleWareCompose = Compose(this.middleWareQueue);

    return middleWareCompose(ctx);
  }

  /**
   * service
   * @description 具体的请求处理
   * @param evt
   * @private
   */
  private service(evt: MessageEvent) {
    // 设置request的statusCode和statusMessage
    const request = new Request(evt.data);
    request.setRequestId(evt.data.requestId);
    request.setStatusCode(200);
    request.setStatusMessage(OK_MESSAGE);

    // 如果中间件为空
    if (!this.middleWareQueue.length) {
      return;
    }

    // 迭代middleWareQueue

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
      }),
    });

    this.middleWareQueueReduce(context).then(() => {
      // 返回响应
      // @ts-ignore
      evt?.source?.postMessage?.(context.response, evt.origin);
    });
  }

  /**
   * start
   * @description 启动服务
   */
  start(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.source.addEventListener('message', this.onMessage);

      resolve();
    });
  }

  /**
   * close
   * @description 关闭服务
   */
  close(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.source.removeEventListener('message', this.onMessage);

      resolve();
    });
  }

  /**
   * use
   * @description 添加中间件
   * @param middleWare
   */
  use(middleWare: MiddleWare | MiddleWare[]): this {
    if (Array.isArray(middleWare)) {
      this.middleWareQueue.push(...middleWare);
    } else {
      this.middleWareQueue.push(middleWare);
    }

    return this;
  }
}

export default Server;

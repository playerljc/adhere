import type { SendOptions } from '../types';
import Response from '../Response';
import Request from '../Request';
import { ERROR_MESSAGE } from '../Constent';

/**
 * Fetch
 * @class Fetch
 * @classdesc 客户端发送消息
 */
class Fetch {
  // 发送方的window
  private readonly source: MessageEventSource;
  // 发送方的origin
  private readonly origin: string;

  constructor(source: MessageEventSource, origin: string) {
    this.source = source;
    this.origin = origin;
  }

  /**
   * send
   * @description 发送一个请求
   * @param targetWindow 目标window
   * @param targetOrigin 目标origin
   * @param pathname 路径
   * @param options 配置
   * @return Promise<Response>
   */
  private send(
    targetWindow: MessageEventSource,
    targetOrigin: string,
    pathname: string,
    options?: SendOptions,
  ): Promise<Response> {
    return new Promise<Response>((resolve, reject) => {
      const request = new Request({
        pathname,
        headers: {
          ...(options?.headers || {}),
          origin: this.origin,
          referer: this.source instanceof Window ? (this.source as Window).location.href : '',
        },
        statusCode: 0,
        stateMessage: ERROR_MESSAGE,
        body: options?.data,
      });

      const onMessage = (evt: MessageEvent) => {
        const response = new Response(evt.data);
        response.setRequestId(evt.data.requestId);

        if (
          evt.origin !== targetOrigin ||
          evt.source !== targetWindow ||
          request.getRequestId() !== response.getRequestId()
        ) {
          return;
        }

        // @ts-ignore
        this.source.removeEventListener('message', onMessage);

        if (response.getStatusCode() === 500) {
          reject(response);
          return;
        }

        resolve(response);
      };

      // @ts-ignore
      this.source.addEventListener('message', onMessage);

      // @ts-ignore
      targetWindow.postMessage(request, targetOrigin);
    });
  }

  /**
   * get
   * @param params
   */
  get(...params): Promise<Response> {
    // @ts-ignore
    return this.send(...params);
  }

  /**
   * put
   * @param params
   */
  put(...params): Promise<Response> {
    // @ts-ignore
    return this.send(...params);
  }

  /**
   * delete
   * @param params
   */
  delete(...params): Promise<Response> {
    // @ts-ignore
    return this.send(...params);
  }
}

export default Fetch;

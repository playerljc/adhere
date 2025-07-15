import { ERROR_MESSAGE } from '../Constant';
import Request from '../Request';
import Response from '../Response';
import type { SendOptions, MessageEventData } from '../types';

/**
 * 客户端发送消息类
 * @class Fetch
 * @description 用于在iframe通信中发送请求并处理响应
 */
class Fetch {
  /** 发送方的window对象 */
  private readonly source: MessageEventSource;
  /** 发送方的origin */
  private readonly origin: string;

  /**
   * 构造函数
   * @param source - 源窗口对象
   * @param origin - 源域名
   */
  constructor(source: MessageEventSource, origin: string) {
    this.source = source;
    this.origin = origin;
  }

  /**
   * 发送请求
   * @param targetWindow - 目标窗口对象
   * @param targetOrigin - 目标域名
   * @param pathname - 请求路径
   * @param options - 发送选项
   * @returns Promise<Response> 响应对象
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
          ...(options?.headers ?? {}),
          origin: this.origin,
          referer: this.source instanceof Window ? (this.source as Window).location.href : '',
        },
        statusCode: 0,
        stateMessage: ERROR_MESSAGE,
        body: options?.data,
        type: 'request',
      });

      const onMessage = (evt: Event): void => {
        const messageEvent = evt as MessageEvent;
        try {
          const data: MessageEventData = JSON.parse(messageEvent.data);
          const response = new Response({
            requestId: data.requestId,
            headers: data.headers ?? {},
            statusCode: data.statusCode ?? 0,
            stateMessage: data.stateMessage ?? '',
            body: data.body,
            type: 'response',
          });

          if (
            messageEvent.origin !== targetOrigin ||
            messageEvent.source !== targetWindow ||
            request.getRequestId() !== response.getRequestId()
          ) {
            return;
          }

          if (data?.type === 'request') {
            return;
          }

          this.source.removeEventListener('message', onMessage);

          if (response.getStatusCode() === 500) {
            reject(response);
            return;
          }

          resolve(response);
        } catch (e) {
          console.warn('解析响应数据失败:', e);
        }
      };

      this.source.addEventListener('message', onMessage);

      try {
        // @ts-ignore - postMessage方法在MessageEventSource上可能不存在
        targetWindow.postMessage(JSON.stringify(request), targetOrigin);
      } catch (e) {
        console.error('发送消息失败:', e);
        this.source.removeEventListener('message', onMessage);
        reject(new Error('发送消息失败'));
      }
    });
  }

  /**
   * GET请求
   * @param targetWindow - 目标窗口对象
   * @param targetOrigin - 目标域名
   * @param pathname - 请求路径
   * @param options - 发送选项
   * @returns Promise<Response> 响应对象
   */
  get(
    targetWindow: MessageEventSource,
    targetOrigin: string,
    pathname: string,
    options?: SendOptions,
  ): Promise<Response> {
    return this.send(targetWindow, targetOrigin, pathname, options);
  }

  /**
   * PUT请求
   * @param targetWindow - 目标窗口对象
   * @param targetOrigin - 目标域名
   * @param pathname - 请求路径
   * @param options - 发送选项
   * @returns Promise<Response> 响应对象
   */
  put(
    targetWindow: MessageEventSource,
    targetOrigin: string,
    pathname: string,
    options?: SendOptions,
  ): Promise<Response> {
    return this.send(targetWindow, targetOrigin, pathname, options);
  }

  /**
   * DELETE请求
   * @param targetWindow - 目标窗口对象
   * @param targetOrigin - 目标域名
   * @param pathname - 请求路径
   * @param options - 发送选项
   * @returns Promise<Response> 响应对象
   */
  delete(
    targetWindow: MessageEventSource,
    targetOrigin: string,
    pathname: string,
    options?: SendOptions,
  ): Promise<Response> {
    return this.send(targetWindow, targetOrigin, pathname, options);
  }
}

export default Fetch;

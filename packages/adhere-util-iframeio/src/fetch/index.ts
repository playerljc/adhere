import {
  ERROR_MESSAGE,
  KEEP_ALIVE_SERVICE_NAME,
  STATUS_CODE_ERROR,
  STATUS_CODE_INIT,
  STATUS_CODE_NOT_ACCEPTABLE,
  STATUS_CODE_OK,
  STATUS_CODE_TIME_OUT,
} from '../Constant';
import Request from '../Request';
import Response from '../Response';
import type { MessageEventData, SendOptions } from '../types';

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
      // 构造一个请求对象
      const request = new Request({
        pathname,
        headers: {
          ...(options?.headers ?? {}),
          origin: this.origin,
          referer: this.source instanceof Window ? (this.source as Window).location.href : '',
        },
        statusCode: STATUS_CODE_INIT,
        stateMessage: ERROR_MESSAGE,
        body: options?.data,
        type: 'request',
      });

      // 回调
      const onMessage = (evt: Event): void => {
        // 在超时时间内返回了响应，则取消超时监听
        if (timeoutHandler !== 0) {
          clearTimeout(timeoutHandler);
          timeoutHandler = 0;
        }

        const messageEvent = evt as MessageEvent;

        const data: MessageEventData = JSON.parse(messageEvent.data);

        const response = new Response({
          requestId: data.requestId,
          headers: data.headers ?? {},
          statusCode: data.statusCode ?? STATUS_CODE_OK,
          stateMessage: data.stateMessage ?? '',
          body: data.body,
          type: 'response',
        });

        try {
          if (
            messageEvent.origin !== targetOrigin ||
            messageEvent.source !== targetWindow ||
            request.getRequestId() !== response.getRequestId()
          ) {
            response.setStatusCode(STATUS_CODE_NOT_ACCEPTABLE);
            reject(response);
            return;
          }

          if (data?.type === 'request') {
            response.setStatusCode(STATUS_CODE_NOT_ACCEPTABLE);
            reject(response);
            return;
          }

          this.source.removeEventListener('message', onMessage);

          if (response.getStatusCode() === STATUS_CODE_ERROR) {
            response.setStatusCode(STATUS_CODE_ERROR);
            reject(response);
            return;
          }

          resolve(response);
        } catch (e) {
          console.warn('Failed to parse response data:', e);
          response.setStatusCode(STATUS_CODE_ERROR);
          reject(response);
        }
      };

      // 注册回调
      this.source.addEventListener('message', onMessage);

      // 超时时间
      const timeOut = options?.timeOut ?? 0;
      let timeoutHandler: number = 0;

      try {
        // 如果设置了超时时间
        if (timeOut !== 0) {
          // 开启超时监听
          timeoutHandler = window.setTimeout(() => {
            // 到了超时时间, 还没有接收到响应则超时
            timeoutHandler = 0;
            this.source.removeEventListener('message', onMessage);
            reject(
              new Response({
                requestId: request.getRequestId(),
                headers: request.getHeaders(),
                statusCode: STATUS_CODE_TIME_OUT,
                stateMessage: 'Request time out',
                body: null,
                type: 'response',
              }),
            );
          }, timeOut);
        }

        // @ts-ignore - postMessage方法在MessageEventSource上可能不存在
        targetWindow.postMessage(JSON.stringify(request), targetOrigin);
      } catch (e) {
        console.error('Failed to send message:', e);
        this.source.removeEventListener('message', onMessage);
        reject(
          new Response({
            requestId: request.getRequestId(),
            headers: request.getHeaders(),
            statusCode: STATUS_CODE_ERROR,
            stateMessage: 'Failed to send message',
            body: null,
            type: 'response',
          }),
        );
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

  /**
   * 发送ping请求
   * @param targetWindow - 目标窗口对象
   * @param targetOrigin - 目标域名
   * @param success - 成功的回调
   * @param error - 失败的回调
   * @param options - 附加参数
   */
  ping(
    targetWindow: MessageEventSource,
    targetOrigin: string,
    success: () => void,
    error: () => void,
    options?: Omit<SendOptions, 'timeOut'> & {
      interval?: number;
    },
  ): void {
    // ping间隔
    const interval = options?.interval ?? 3000;

    const _self = this;

    function _ping(): Promise<Response> {
      return _self.send(targetWindow, targetOrigin, `/${KEEP_ALIVE_SERVICE_NAME}`, {
        ...options,
        // 设置超时时间为10秒
        timeOut: 1000 * 10,
      });
    }

    function keepAlive(): void {
      _ping()
        .then(() => {
          success();
          setTimeout(keepAlive, interval);
        })
        .catch(error);
    }

    keepAlive();
  }
}

export default Fetch;

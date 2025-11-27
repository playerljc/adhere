import {
  CHANNEL_NAME,
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
  /** 发送方 */
  private readonly origin: string;

  /** 通信句柄对象 */
  protected bc: BroadcastChannel | undefined;

  /**
   * 构造函数
   * @param origin - 源域名
   */
  constructor(origin: string) {
    // 发送方
    this.origin = origin;

    // 实例化channel
    this.bc = new BroadcastChannel(CHANNEL_NAME);
  }

  /**
   * 发送请求
   * @param targetOrigin - 接收方
   * @param pathname - 接口地址
   * @param options - 发送选项
   * @returns Promise<Response> 响应对象
   */
  private send(targetOrigin: string[], pathname: string, options?: SendOptions): Promise<Response> {
    return new Promise<Response>((resolve, reject) => {
      const request = new Request({
        pathname,
        headers: {
          ...(options?.headers ?? {}),
          // 发送者
          origin: this.origin,
          // 接收者
          target: targetOrigin,
        },
        statusCode: STATUS_CODE_INIT,
        stateMessage: ERROR_MESSAGE,
        body: options?.data,
        type: 'request',
      });

      const onMessage = (evt: Event): void => {
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
            !targetOrigin.includes(data.headers?.origin as string) ||
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

          this.bc?.removeEventListener('message', onMessage);

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
      this.bc?.addEventListener('message', onMessage);

      const timeOut = options?.timeOut ?? 0;
      let timeoutHandler: number = 0;

      try {
        // 如果设置了超时时间
        if (timeOut !== 0) {
          // 开启超时监听
          timeoutHandler = window.setTimeout(() => {
            // 到了超时时间, 还没有接收到响应则超时
            timeoutHandler = 0;
            this.bc?.removeEventListener('message', onMessage);
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

        // 发送
        this?.bc?.postMessage(JSON.stringify(request));
      } catch (e) {
        console.error('Failed to send message:', e);
        this.bc?.removeEventListener('message', onMessage);
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
   * @param targetOrigin - 目标域名
   * @param pathname - 请求路径
   * @param options - 发送选项
   * @returns Promise<Response> 响应对象
   */
  get(targetOrigin: string[], pathname: string, options?: SendOptions): Promise<Response> {
    return this.send(targetOrigin, pathname, options);
  }

  /**
   * PUT请求
   * @param targetOrigin - 目标域名
   * @param pathname - 请求路径
   * @param options - 发送选项
   * @returns Promise<Response> 响应对象
   */
  put(targetOrigin: string[], pathname: string, options?: SendOptions): Promise<Response> {
    return this.send(targetOrigin, pathname, options);
  }

  /**
   * DELETE请求
   * @param targetOrigin - 目标域名
   * @param pathname - 请求路径
   * @param options - 发送选项
   * @returns Promise<Response> 响应对象
   */
  delete(targetOrigin: string[], pathname: string, options?: SendOptions): Promise<Response> {
    return this.send(targetOrigin, pathname, options);
  }

  /**
   * 发送ping请求
   * @param targetOrigin - 目标域名
   * @param success - 成功的回调
   * @param error - 失败的回调
   * @param options - 附加参数
   */
  ping(
    targetOrigin: string[],
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
      return _self.send(targetOrigin, `/${KEEP_ALIVE_SERVICE_NAME}`, {
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

import { CHANNEL_NAME, ERROR_MESSAGE } from '../Constant';
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
            !targetOrigin.includes(data.headers?.origin as string) ||
            request.getRequestId() !== response.getRequestId()
          ) {
            return;
          }

          if (data?.type === 'request') {
            return;
          }

          this.bc?.removeEventListener('message', onMessage);

          if (response.getStatusCode() === 500) {
            reject(response);
            return;
          }

          resolve(response);
        } catch (e) {
          console.warn('解析响应数据失败:', e);
        }
      };

      // 回调
      this.bc?.addEventListener('message', onMessage);

      try {
        debugger;
        // 发送
        this?.bc?.postMessage(JSON.stringify(request));
      } catch (e) {
        console.error('发送消息失败:', e);
        this.bc?.removeEventListener('message', onMessage);
        reject(new Error('发送消息失败'));
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
}

export default Fetch;

import merge from 'lodash.merge';

import {
  ACCEPT_SERVICE_NAME,
  ERROR_MESSAGE,
  KEEP_ALIVE_SERVICE_NAME,
  OK_MESSAGE,
  STATUS_CODE_ERROR,
  STATUS_CODE_OK,
  STATUS_CODE_TIME_OUT,
  TIME_OUT_MESSAGE,
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
   * constructor
   * @description 构造函数
   * @param {MessageEventSource} source 源窗口对象
   * @param {string} origin 源域名
   */
  constructor(source: MessageEventSource, origin: string) {
    this.source = source;
    this.origin = origin;
  }

  /**
   * send
   * @description 发送请求
   * @param {MessageEventSource} targetWindow 目标窗口对象
   * @param {string} targetOrigin 目标域名
   * @param {string} pathname 请求路径
   * @param {SendOptions} [options] 发送选项
   * @returns {Promise<Response>} 响应对象
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
        statusCode: STATUS_CODE_OK,
        stateMessage: OK_MESSAGE,
        body: options?.data,
        type: 'request',
      });

      // 回调
      const onMessage = (evt: Event): void => {
        const messageEvent = evt as MessageEvent;

        let data: MessageEventData | null = null;

        // 处理返回的数据
        try {
          data = JSON.parse(messageEvent.data);
        } catch (e) {
          console.log(e);
          return;
        }

        // 构造response对象
        const response = new Response({
          requestId: data?.requestId as string,
          headers: data?.headers ?? {},
          statusCode: data?.statusCode ?? STATUS_CODE_OK,
          stateMessage: data?.stateMessage ?? OK_MESSAGE,
          body: data?.body,
          type: 'response',
        });

        // 不和请求对应
        if (
          messageEvent.origin !== targetOrigin ||
          messageEvent.source !== targetWindow ||
          request.getRequestId() !== response.getRequestId()
        ) {
          // console.log('4061', messageEvent.origin, targetOrigin);
          // console.log('4061', messageEvent.source === targetWindow);
          // console.log('4061', request.getRequestId(), response.getRequestId());
          // console.log('4061', request.getPathname(), response.getHeaders());
          return;
        }

        // 不是响应
        if (data?.type === 'request') {
          // console.log('4062', response);
          return;
        }

        // 在超时时间内返回了响应，则取消超时监听
        if (timeoutHandler !== 0) {
          clearTimeout(timeoutHandler);
          timeoutHandler = 0;
        }

        // 删除监听
        this.source.removeEventListener('message', onMessage);

        // 出错了
        if (response.getStatusCode() === STATUS_CODE_ERROR) {
          response.setStatusCode(STATUS_CODE_ERROR);
          response.setStatusMessage(ERROR_MESSAGE);
          reject(response);
          return;
        }

        // 对了
        resolve(response);
      };
      // end onMessage

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
                stateMessage: TIME_OUT_MESSAGE,
                body: null,
                type: 'response',
              }),
            );
          }, timeOut);
        }

        // @ts-ignore - postMessage方法在MessageEventSource上可能不存在
        targetWindow?.postMessage(JSON.stringify(request), targetOrigin);
      } catch (e) {
        console.error('Failed to send message:', e);
        this.source.removeEventListener('message', onMessage);
        reject(
          new Response({
            requestId: request.getRequestId(),
            headers: request.getHeaders(),
            statusCode: STATUS_CODE_ERROR,
            stateMessage: ERROR_MESSAGE,
            body: null,
            type: 'response',
          }),
        );
      }
    });
  }

  /**
   * get
   * @description GET请求
   * @param {MessageEventSource} targetWindow 目标窗口对象
   * @param {string} targetOrigin 目标域名
   * @param {string} pathname 请求路径
   * @param {SendOptions} [options] 发送选项
   * @returns {Promise<Response>} 响应对象
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
   * put
   * @description PUT请求
   * @param {MessageEventSource} targetWindow 目标窗口对象
   * @param {string} targetOrigin 目标域名
   * @param {string} pathname 请求路径
   * @param {SendOptions} [options] 发送选项
   * @returns {Promise<Response>} 响应对象
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
   * delete
   * @description DELETE请求
   * @param {MessageEventSource} targetWindow 目标窗口对象
   * @param {string} targetOrigin 目标域名
   * @param {string} pathname 请求路径
   * @param {SendOptions} [options] 发送选项
   * @returns {Promise<Response>} 响应对象
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
   * ping
   * @description 发送ping请求
   * @param {MessageEventSource} targetWindow 目标窗口对象
   * @param {string} targetOrigin 目标域名
   * @param {() => void} success 成功的回调
   * @param {() => void} error 失败的回调
   * @param {Omit<SendOptions, 'timeOut'> & { interval?: number }} [options] 附加参数
   * @returns {void}
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
        ...merge({}, options, {
          data: JSON.stringify({
            timestamp: Date.now(),
          }),
        }),
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

  /**
   * accept
   * @description 发送链接成功的请求
   * @param {MessageEventSource} targetWindow 目标窗口对象
   * @param {string} targetOrigin 目标域名
   * @param {SendOptions} [options] 发送选项
   * @returns {Promise<Response>} 响应对象
   */
  accept(
    targetWindow: MessageEventSource,
    targetOrigin: string,
    options?: SendOptions,
  ): Promise<Response> {
    return this.send(
      targetWindow,
      targetOrigin,
      `/${ACCEPT_SERVICE_NAME}`,
      merge(
        {},
        {
          timeOut: 1000 * 2,
        },
        options ?? {},
      ),
    );
  }
}

export default Fetch;

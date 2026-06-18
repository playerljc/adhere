import { isBrowser } from './utils';

/**
 * XHR 创建策略（由 createXHR 统一入口决定）：
 * - CSR（浏览器）：原生 XMLHttpRequest，行为与改造前完全一致
 * - SSR（Node.js 等）：FetchXMLHttpRequest，基于 fetch 实现本库所需的 XHR 子集
 *
 * 注意：SSR 兼容层仅覆盖 ajax.ts 实际使用的 API，非完整 XMLHttpRequest 规范实现。
 */

type XhrEventListener = (event: Event) => void;

/** 基于 fetch 的 XMLHttpRequest 子集兼容实现，仅供 SSR 使用 */
class FetchXMLHttpRequest {
  static readonly UNSENT = 0;
  static readonly OPENED = 1;
  static readonly HEADERS_RECEIVED = 2;
  static readonly LOADING = 3;
  static readonly DONE = 4;

  readyState = FetchXMLHttpRequest.UNSENT;
  status = 0;
  statusText = '';
  response: unknown = null;
  responseText = '';
  responseXML: Document | null = null;
  responseType: XMLHttpRequestResponseType = '';
  timeout = 0;
  withCredentials = false;
  onreadystatechange: ((this: XMLHttpRequest, ev: Event) => unknown) | null = null;

  private method = '';
  private url = '';
  private headers: Record<string, string> = {};
  private body: BodyInit | null | undefined;
  private responseHeaders: Headers | null = null;
  private listeners = new Map<string, Set<XhrEventListener>>();
  private aborted = false;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private abortController: AbortController | null = null;

  open(method: string, url: string | URL, _async = true): void {
    this.method = method.toUpperCase();
    this.url = String(url);
    this.readyState = FetchXMLHttpRequest.OPENED;
    this.dispatchReadyStateChange();
  }

  setRequestHeader(name: string, value: string): void {
    this.headers[name] = value;
  }

  getAllResponseHeaders(): string {
    if (!this.responseHeaders) {
      return '';
    }

    const lines: string[] = [];
    this.responseHeaders.forEach((value, name) => {
      lines.push(`${name}: ${value}`);
    });
    return lines.join('\r\n');
  }

  getResponseHeader(name: string): string | null {
    return this.responseHeaders?.get(name) ?? null;
  }

  addEventListener(type: string, listener: XhrEventListener): void {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Set());
    }
    this.listeners.get(type)!.add(listener);
  }

  removeEventListener(type: string, listener: XhrEventListener): void {
    this.listeners.get(type)?.delete(listener);
  }

  abort(): void {
    this.aborted = true;
    this.abortController?.abort();
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    this.emit('abort', new ProgressEvent('abort'));
  }

  send(body?: Document | XMLHttpRequestBodyInit | null): void {
    this.body = body as BodyInit | null | undefined;
    this.abortController = new AbortController();

    if (this.timeout > 0) {
      this.timeoutId = setTimeout(() => {
        this.aborted = true;
        this.abortController?.abort();
        this.emit('timeout', new ProgressEvent('timeout'));
      }, this.timeout);
    }

    this.emit('loadstart', new ProgressEvent('loadstart'));
    void this.performFetch();
  }

  private async performFetch(): Promise<void> {
    const method = this.method.toLowerCase();
    const hasBody = method !== 'get' && method !== 'head';

    try {
      const response = await fetch(this.url, {
        method: this.method,
        headers: this.headers,
        body: hasBody ? (this.body ?? undefined) : undefined,
        signal: this.abortController?.signal,
      });

      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }

      if (this.aborted) {
        return;
      }

      this.responseHeaders = response.headers;
      this.status = response.status;
      this.statusText = response.statusText;

      this.readyState = FetchXMLHttpRequest.HEADERS_RECEIVED;
      this.dispatchReadyStateChange();

      this.readyState = FetchXMLHttpRequest.LOADING;
      this.dispatchReadyStateChange();

      await this.readResponseBody(response);

      this.readyState = FetchXMLHttpRequest.DONE;
      this.dispatchReadyStateChange();
      this.emit('load', new ProgressEvent('load'));
      this.emit('loadend', new ProgressEvent('loadend'));
    } catch (error) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }

      if (this.aborted) {
        return;
      }

      this.readyState = FetchXMLHttpRequest.DONE;
      this.dispatchReadyStateChange();
      this.emit('error', new ProgressEvent('error'));
      this.emit('loadend', new ProgressEvent('loadend'));
    }
  }

  private async readResponseBody(response: Response): Promise<void> {
    switch (this.responseType) {
      case 'arraybuffer':
        this.response = await response.arrayBuffer();
        return;
      case 'blob':
        this.response = await response.blob();
        return;
      case 'json':
        this.response = await response.json();
        this.responseText =
          typeof this.response === 'string' ? this.response : JSON.stringify(this.response);
        return;
      case 'text':
        this.responseText = await response.text();
        this.response = this.responseText;
        return;
      default:
        this.responseText = await response.text();
        this.response = this.responseText;
    }
  }

  private dispatchReadyStateChange(): void {
    this.onreadystatechange?.call(this as unknown as XMLHttpRequest, new Event('readystatechange'));
  }

  private emit(type: string, event: Event): void {
    this.listeners.get(type)?.forEach((listener) => {
      listener.call(this, event);
    });
  }
}

/**
 * 创建 XMLHttpRequest 实例
 * - CSR：使用原生 XMLHttpRequest
 * - SSR：使用 fetch 兼容实现
 */
export function createXHR(): XMLHttpRequest {
  if (isBrowser() && typeof XMLHttpRequest !== 'undefined') {
    return new XMLHttpRequest();
  }

  if (typeof fetch === 'undefined') {
    throw new Error(
      'Ajax requires XMLHttpRequest (browser) or fetch (SSR). Please use Node.js 18+ or provide a fetch polyfill.',
    );
  }

  return new FetchXMLHttpRequest() as unknown as XMLHttpRequest;
}

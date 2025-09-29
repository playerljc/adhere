/**
 * URL 工具类
 * @description 提供 URL 解析、拼接、路由相关的工具函数
 */
import { IUrlConfig } from './types';
import Url from './url';

export const defaultConfig: IUrlConfig = {
  ignoreInvalid: true,
  isDecode: true,
  isEncode: true,
};

const UrlUtil = {
  /**
   * 解析 URL 查询参数为对象
   * @description 将 URL 查询字符串解析为对象
   * @param path - 可选，URL 字符串，默认为当前 window.location.search
   * @param config - 解析配置项
   * @returns 解析后的对象，或 null（非浏览器环境）
   * @example
   * ```typescript
   * parse('?a=1&b=2') // { a: '1', b: '2' }
   * ```
   */
  parse(path?: string, config: IUrlConfig = { ...defaultConfig }): Record<string, string> | null {
    if (typeof window === 'undefined') return null;

    let href = window.location.search;
    if (path) href = path;
    const index = href.indexOf('?');
    if (index === -1) return {};
    const obj: Record<string, string> = {};
    href = href.substring(index + 1);
    const strs = href.split('&');
    for (let i = 0, len = strs.length; i < len; i++) {
      const t = strs[i].split('=');
      const key = config.isDecode ? window.decodeURIComponent(t[0]).trim() : t[0].trim();
      const value = config.isDecode ? window.decodeURIComponent(t[1]).trim() : t[1].trim();
      if (!config.ignoreInvalid) {
        obj[key] = value;
      } else {
        if (!['undefined', ''].includes(value)) {
          obj[key] = value;
        }
      }
    }
    return obj;
  },

  /**
   * 对象转 URL 查询参数
   * @description 将对象转换为 URL 查询字符串
   * @param record - 要转换的对象
   * @param config - 配置项
   * @returns 查询字符串
   * @example
   * ```typescript
   * stringify({ a: 1, b: 2 }) // '?a=1&b=2'
   * ```
   */
  stringify(record: Record<string, any>, config: IUrlConfig = { ...defaultConfig }): string {
    const keys = Object.keys(record ?? {});
    const getStr: string[] = [];
    keys.forEach((key) => {
      const value = config.isEncode ? window.encodeURIComponent(record[key]) : record[key];
      if (!config.ignoreInvalid) {
        getStr.push(`${key.trim()}=${value?.trim()}`);
      } else {
        if (!['undefined', ''].includes(value)) {
          getStr.push(`${key.trim()}=${value.trim()}`);
        }
      }
    });
    return `?${getStr.join('&')}`;
  },

  /**
   * 获取路由 pathname
   * @description 获取当前路由的 pathname，支持 hash/browser 两种模式
   * @param publicPath - 公共路径，默认为 '/'
   * @param router - 路由模式，'hash' 或 'browser'
   * @returns 路径名
   * @example
   * ```typescript
   * getPathName('/app', 'hash')
   * ```
   */
  getPathName(publicPath: string = '/', router: 'hash' | 'browser' = 'browser'): string {
    const routerMode = router || 'browser';
    let pathname = '';
    if (routerMode === 'browser') {
      pathname = window.location.pathname;
    } else if (routerMode === 'hash') {
      const hash = window.location.hash;
      if (hash.lastIndexOf('?') !== -1) {
        pathname = hash.substring(1, hash.lastIndexOf('?'));
      } else {
        pathname = hash.substring(1);
      }
    }
    if (publicPath !== '/') {
      pathname = pathname.replace(`${publicPath}/`, '');
    }
    return pathname;
  },

  /**
   * 获取路由 search
   * @description 获取当前路由的 search 查询参数，支持 hash/browser 两种模式
   * @param router - 路由模式，'hash' 或 'browser'
   * @returns 查询参数字符串
   * @example
   * ```typescript
   * getSearch('hash')
   * ```
   */
  getSearch(router: 'hash' | 'browser' = 'browser'): string {
    const routerMode = router || 'browser';
    if (routerMode === 'browser') {
      return window.location.search;
    } else if (routerMode === 'hash') {
      const hash = window.location.hash;
      const index = hash.lastIndexOf('?');
      if (index !== -1) {
        return hash.substring(index);
      }
      return '';
    }
    return '';
  },

  /**
   * 获取完整路由路径
   * @description 获取当前完整路由路径（pathname + search）
   * @returns 完整路径
   * @example
   * ```typescript
   * getFullPath()
   * ```
   */
  getFullPath(): string {
    return `${UrlUtil.getPathName()}${UrlUtil.getSearch()}`;
  },

  /**
   * isIPv4
   * @description 判断host是否是ipv4
   * @param {string} host
   * @return {boolean}
   */
  isIPv4(host: string): boolean {
    const parts = String(host || '').split('.');
    if (parts.length !== 4) return false;
    return parts.every((p) => /^\d+$/.test(p) && Number(p) >= 0 && Number(p) <= 255);
  },

  /**
   * isIPv6
   * @description 判断host是否是ipv6
   * @param {string} host
   * @return {boolean}
   */
  isIPv6(host: string): boolean {
    return /:/.test(String(host || ''));
  },

  /**
   * shouldEnhance
   * @description 当前Url和origin是否是同一个
   * @param {string} url
   * @return boolean
   */
  shouldEnhance(url: string): boolean {
    if (typeof window === 'undefined' || !url) return false;
    try {
      const parsed = new URL(url, window.location.origin);
      const srcOrigin = parsed.origin;
      const locOrigin = window.location && window.location.origin;
      const srcHost = parsed.hostname;
      const locHost = window.location && window.location.hostname;
      const srcIsIP = UrlUtil.isIPv4(srcHost) || UrlUtil.isIPv6(srcHost);
      const locIsIP = UrlUtil.isIPv4(locHost) || UrlUtil.isIPv6(locHost);
      return srcIsIP && locIsIP && srcOrigin !== locOrigin;
    } catch (e) {
      return false;
    }
  },
};

export default UrlUtil;

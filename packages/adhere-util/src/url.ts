// import WatchMemoized from '@baifendian/adhere-util-watchmemoized';
import { IUrlConfig } from './types';

// const { memoized } = WatchMemoized;

export const defaultConfig: IUrlConfig = {
  ignoreInvalid: true,
  isDecode: true,
  isEncode: true,
};

const methods = {
  /**
   * parse
   * @description - query参数转换成obj
   * @param path
   * @param config
   * @return object
   */
  parse(path?: string, config: IUrlConfig = { ...defaultConfig }): object | null {
    if (typeof window === 'undefined') return null;

    let href = window.location.search;

    if (path) href = path;

    const index = href.indexOf('?');

    if (index === -1) return {};

    const obj = {};

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
   * stringify
   * @description - 对象转换成query参数
   * @param record
   * @param config
   * @return string
   */
  stringify(record: object, config: IUrlConfig = { ...defaultConfig }): string {
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
   * getPathName
   * @description 不同路由模式下获取pathname的方法
   * @return {string}
   */
  getPathName(publicPath: string = '/', router: 'hash' | 'browser' = 'browser') {
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
   * getSearch
   * @description 不同路由模式下获取search的方法
   * @return {string}
   */
  getSearch(router: 'hash' | 'browser' = 'browser') {
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
  },
  /**
   * getFullPath
   * @return {`${string}${string}`}
   */
  getFullPath() {
    return `${methods.getPathName()}${methods.getSearch()}`;
  },
};

// const memoizedMethods = {};
//
// for (const p in methods) {
//   memoizedMethods[p] = memoized.createMemoFun(methods[p]);
// }

export default methods;

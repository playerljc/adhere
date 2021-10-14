import intl from 'react-intl-universal';

// 是否进行过初始化
let isInit = false;

const intlMap = {};

const intlKey = {};

const localKeys = new Map();

let mainLocales = {};

/**
 * initIntlMap - 初始化以中文为key,intl.get()为值的Map
 * @param zh_CN
 */
function initIntlMap(zh_CN) {
  const propertys = Object.getOwnPropertyNames(zh_CN);

  propertys.forEach((p) => {
    // 中文key 国际化值为值
    intlMap[zh_CN[p]] = intl.get(p);

    // 中文key 属性是值
    intlKey[zh_CN[p]] = p;
  });
}

/**
 * getLocal
 * @param prefix
 * @param data
 */
export function getLocal(prefix: string = 'local', data: Array<string>): object {
  // @ts-ignore
  const result = [...Array.from(new Set(data))];

  const local = {};

  for (let i = 0; i < result.length; i++) {
    const key = `${prefix || 'local'}${i + 1}`;

    let val = localKeys.get(key);

    if (!val) {
      localKeys.set(key, key);

      val = key;
    }

    local[key] = result[i];
  }

  return local;
}

/**
 * getLocales
 * @description - 获取系统所有的词条
 * @return object
 */
export function getLocales(): object {
  return { ...mainLocales };
}

export default {
  /**
   * init
   * @param {String} - prefix
   * @param {String} - currentLocale
   * @param {Object} - locales
   * @param {Object} - ...other
   */
  init({
    prefix = 'local',
    currentLocale = 'zh_CN',
    locales = {},
    ...other
  }: {
    prefix: string;
    currentLocale: 'en_US' | 'zh_CN' | 'pt_PT';
    locales: any;
  }): Promise<any> {
    if (isInit) {
      return new Promise((resolve, reject) => {
        reject();
      });
    }

    // 系统的国际化资源
    const finallyLocales = {
      en_US: require('./locales/en_US').default,
      zh_CN: require('./locales/zh_CN').default,
      pt_PT: require('./locales/pt_PT').default,
    };

    const finallyLocalesKeys = Object.keys(finallyLocales);
    const localesKeys = Object.keys(locales);

    let masterLocales;
    let slaveLocales;

    if (finallyLocalesKeys.length > localesKeys.length) {
      masterLocales = finallyLocales;
      slaveLocales = locales;
    } else if (finallyLocalesKeys.length <= localesKeys.length) {
      masterLocales = locales;
      slaveLocales = finallyLocales;
    }

    // 总的国际化资源(系统的国际化资源 merge 用户的国际化资源)

    // 整合用户的locales
    for (const p in masterLocales) {
      mainLocales[p] = getLocal(
        prefix,
        // @ts-ignore
        ...new Set([...masterLocales[p], ...(slaveLocales[p] || [])]),
      );
    }

    return intl
      .init({
        currentLocale,
        locales: mainLocales,
        ...other,
      })
      .then(() => {
        // @ts-ignore
        initIntlMap(mainLocales.zh_CN);
        isInit = true;
      });
  },

  /**
   * v - 以中文获取国际化值
   * @return {String}
   * @param key
   * @param variables
   */
  v(key: string, variables?: object | null): string {
    if (!isInit) return '';

    if (variables) {
      return intl.get(intlKey[key], variables);
    }

    return intlMap[key];
  },

  /**
   * v - 以中文获取国际化后的html
   * @param key
   * @param options
   */
  vHtml(key: string, options?: object | null) {
    if (!isInit) return '';

    if (options) {
      return intl.getHTML(intlKey[key], options);
    }

    return intlMap[key];
  },

  /**
   * get
   * @param key
   * @param variables
   */
  get(key: string, variables?: object | null): string {
    return intl.get(key, variables);
  },

  /**
   * getHTML
   * @param key
   * @param options
   */
  getHTML(key: string, options?: object | null): string {
    return intl.getHTML(key, options);
  },

  /**
   * getInitOptions
   */
  getInitOptions() {
    return intl.getInitOptions();
  },

  /**
   * formatMessage
   * @param options
   * @param variables
   */
  formatMessage(options, variables?: object | null) {
    return intl.formatMessage(options, variables);
  },

  /**
   * formatHTMLMessage
   * @param options
   * @param variables
   */
  formatHTMLMessage(options, variables?: object | null) {
    return intl.formatHTMLMessage(options, variables);
  },
  /**
   * load - Load more locales after init
   * @param locales
   */

  load(locales: { [key: string]: any }) {
    intl.load(locales);
  },

  /**
   * getLocal
   * @param prefix
   * @param data
   */
  getLocal(prefix: string = 'local', data: Array<string>): object {
    return getLocal(prefix, data);
  },
};

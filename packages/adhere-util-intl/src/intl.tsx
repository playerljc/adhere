import intl from 'react-intl-universal';

// 是否进行过初始化
let isInit = false;

const intlMap = {};

const intlKey = {};

const localKeys = new Map();

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
 * @param data
 */
export function getLocal(data: Array<string>): object {
  // @ts-ignore
  const result = [...Array.from(new Set(data))];

  const local = {};

  for (let i = 0; i < result.length; i++) {
    const key = `local${i + 1}`;

    let val = localKeys.get(key);

    if (!val) {
      localKeys.set(key, key);

      val = key;
    }

    local[key] = result[i];
  }

  return local;
}

export default {
  /**
   * init
   * @param {String} - currentLocale
   * @param {Object} - locales
   * @param {Object} - ...other
   */
  init({
    currentLocale = 'zh_CN',
    locales = {},
    ...other
  }: {
    currentLocale: 'en_US' | 'zh_CN' | 'pt_PT';
    locales: any;
  }): Promise<any> {
    if (isInit) {
      return new Promise((resolve, reject) => {
        reject();
      });
    }

    // k007组件的国际化文件
    const finallyLocales = {
      en_US: require('./locales/en_US').default,
      zh_CN: require('./locales/zh_CN').default,
      pt_PT: require('./locales/pt_PT').default,
    };

    // 整合用户的locales
    for (const p in locales) {
      if (p in finallyLocales) {
        finallyLocales[p] = Object.assign(finallyLocales[p], locales[p]);
      }
    }

    return intl
      .init({
        currentLocale,
        locales: finallyLocales,
        ...other,
      })
      .then(() => {
        initIntlMap(finallyLocales.zh_CN);
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
   * @param data
   */
  getLocal(data: Array<string>): object {
    return getLocal(data);
  },
};

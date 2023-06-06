import intl from 'react-intl-universal';

import ar_EG from './locales/ar_EG';
import en_US from './locales/en_US';
import pt_PT from './locales/pt_PT';
import zh_CN from './locales/zh_CN';

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

    // p:local1
    // intlMap.姓名 = '姓名'

    // intlKey.姓名 = local1

    // 中文key 属性是值
    intlKey[zh_CN[p]] = p;
  });
}

/**
 * getLocal
 * @description 生成k,v的对象
 * @param prefix
 * @param data
 */
export function getLocal(prefix: string = 'local', data: Array<string>): object {
  // 先去重
  // const result = [...Array.from(new Set(data))];

  const result = [...data];

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
   * @param reload 是否是重新载入
   */
  init(
    {
      prefix = 'local',
      currentLocale = 'zh_CN',
      locales = {},
      mainLanguage = 'zh_CN',
      ...other
    }: {
      prefix: string;
      currentLocale: 'en_US' | 'zh_CN' | 'pt_PT' | 'ar_EG';
      locales: any;
      mainLanguage: string;
    },
    reload: boolean = false,
  ): Promise<any> {
    if (!reload && isInit) {
      return new Promise((resolve, reject) => {
        reject();
      });
    }

    // 系统的国际化资源
    const finallyLocales = {
      en_US,
      zh_CN,
      pt_PT,
      ar_EG,
    };

    const finallyLocalesKeys = Object.keys(finallyLocales);
    const localesKeys = Object.keys(locales ?? {});

    let masterLocales;
    let slaveLocales;

    if (finallyLocalesKeys.length > localesKeys.length) {
      masterLocales = finallyLocales;
      slaveLocales = locales ?? {};
    } else if (finallyLocalesKeys.length <= localesKeys.length) {
      masterLocales = locales ?? {};
      slaveLocales = finallyLocales;
    }

    // 总的国际化资源(系统的国际化资源 merge 用户的国际化资源)

    // 整合用户的locales
    for (const p in masterLocales) {
      // 每一种语言都需要处理成k,v对象
      const all = [...masterLocales[p], ...(slaveLocales[p] || [])];

      const stringItems: string[] = [];
      const objEntrys: any = [];

      all.forEach((item) => {
        if (typeof item === 'string') stringItems.push(item);
        else objEntrys.push(item);
      });

      // mainLocales[p] = getLocal(prefix, Array.from(new Set(stringItems)));
      mainLocales[p] = getLocal(prefix, stringItems);

      objEntrys.forEach((entry) => {
        const keys = Object.keys(entry);

        keys.forEach((key) => {
          mainLocales[p][key] = entry[key];
        });
      });
    }

    return intl
      .init({
        currentLocale,
        locales: mainLocales,
        ...other,
      })
      .then(() => {
        // @ts-ignore
        initIntlMap(mainLocales[mainLanguage]);
        isInit = true;
      });
  },

  /**
   * isInit
   * @description 是否进行了初始化
   */
  isInit(): boolean {
    return isInit;
  },

  /**
   * v - 以中文获取国际化值
   * @return {String}
   * @param key
   * @param variables
   */
  v(key: string, variables?: object | null): string {
    if (!isInit) return '';

    // p:local1
    // intlMap.姓名 = '姓名'
    // intlKey.姓名 = local1

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

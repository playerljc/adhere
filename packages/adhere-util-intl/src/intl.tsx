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

    // 库的国际化资源
    const libLocales = {
      en_US: [...en_US],
      zh_CN: [...zh_CN],
      pt_PT: [...pt_PT],
      ar_EG: [...ar_EG],
    };

    const duplicateIndex: number[] = [];

    libLocales[mainLanguage].forEach((_word, _index) => {
      if (locales[mainLanguage].includes(_word)) {
        duplicateIndex.push(_index);
      }
    });

    const libLocaleKeys = Object.keys(libLocales);
    libLocaleKeys.forEach((_libLocaleKey) => {
      libLocales[_libLocaleKey] = libLocales[_libLocaleKey].filter(
        (_t, _index) => !duplicateIndex.includes(_index),
      );
    });

    // 最终的国际化资源
    const targetLocales = libLocaleKeys.reduce((_targetLocales, _currentLibLocalKey) => {
      _targetLocales[_currentLibLocalKey] = [
        ...(libLocales[_currentLibLocalKey] ?? []),
        ...(locales[_currentLibLocalKey] ?? []),
      ];

      return _targetLocales;
    }, {});

    // 整合用户的locales
    libLocaleKeys.forEach((_libLocalKey) => {
      // 每一种语言都需要处理成k,v对象
      const local = targetLocales[_libLocalKey];

      const stringItems: string[] = [];
      const objEntry: any = [];

      local.forEach((_item) => {
        if (typeof _item === 'string') stringItems.push(_item);
        else objEntry.push(_item);
      });

      mainLocales[_libLocalKey] = getLocal(prefix, stringItems);

      objEntry.forEach((_entry) => {
        Object.keys(_entry).forEach((_key) => {
          mainLocales[_libLocalKey][_key] = _entry[_key];
        });
      });
    });

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

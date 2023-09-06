import Preferences from '@baifendian/adhere-util-preferences';

import Base from './base';

export default {
  /**
   * getLang
   * @return {String}
   */
  getLang(defaultLocal?: string): string {
    let language = Base.getCookie('lang') || Preferences.getStringByLocal('language');

    if (!language) {
      Preferences.putStringByLocal('language', defaultLocal ?? 'zh_CN');

      language = defaultLocal ?? 'zh_CN';
    }

    return language;
  },
  /**
   * setLang
   * @param lang
   */
  setLang(lang: string = 'zh_CN') {
    Preferences.putStringByLocal('language', lang);
  },
  /**
   * getDatePickerFormat
   * @return {string}
   */
  getDatePickerFormat(): string {
    const lang = this.getLang();

    if (lang === 'zh_CN') {
      return 'YYYY-MM-DD';
    } else {
      return 'DD-MM-YYYY';
    }
  },
  /**
   * 401 casUrl
   * @param baseUrl
   * @param enterUrl
   * @param defaultLocal
   * @return {string}
   */
  casUrl({ baseUrl, enterUrl, defaultLocal }): string {
    const language = this.getLang(defaultLocal);

    const languageParam = language ? `&locale=${language}` : '';

    return `${baseUrl}/gotoLogin?backUrl=${enterUrl}${languageParam}`;
  },
  /**
   * casLogoutUrl
   * @param {String} - baseUrl
   * @param {String} - enterUrl
   * @param {String} - params
   * @return {string}
   */
  casLogoutUrl({ baseUrl, enterUrl, params = '' }): string {
    return `${baseUrl}/logout?service=${enterUrl}${params}`;
  },
};

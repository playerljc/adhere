import qs from 'qs';
import reactElementToJsxString from 'react-element-to-jsx-string';

import { Dict, Preferences, Util } from '@baifendian/adhere';

export default {
  /**
   * initDirection
   * @description 初始化方向
   */
  initDirection() {
    const search = window.location.search;
    const query = qs.parse(search, { ignoreQueryPrefix: true });

    const defaultDirection = this.getDirection();
    const direction = query.direction ?? defaultDirection;

    Preferences.putStringByLocal('direction', direction);

    document.body.removeAttribute('dir');
    document.body.setAttribute('dir', direction);
  },
  /**
   * getDirection
   * @description 获取方向
   * @return {string}
   */
  getDirection() {
    const lang = this.getLang();

    return Dict.value.SystemLang.value[lang].direction;
  },
  /**
   * getLang
   * @description 获取语言
   * @return {string}
   */
  getLang(defaultLang) {
    let language = Util.getCookie('lang') || Preferences.getStringByLocal('language');

    if (!language) {
      Preferences.putStringByLocal('language', defaultLang ?? Dict.value.SystemDefaultLang.value);

      language = defaultLang ?? Dict.value.SystemDefaultLang.value;
    }

    return language;
  },
  /**
   * setLang
   * @description 设置语言
   * @param {string} lang
   */
  setLang(lang) {
    Preferences.putStringByLocal('language', lang ?? Dict.value.SystemDefaultLang.value);
  },
  /**
   * getEvnVars
   * @description 获取webpack的define参数
   * @return {object}
   */ getEvnVars() {
    return CustomEvnVars;
  },
  /**
   * reactElementToJsxStringById
   * @param config
   * @param id
   * @return {string}
   */
  reactElementToJsxStringById({ element, displayName }) {
    return reactElementToJsxString(element, {
      displayName: () => displayName,
    });
  },
};

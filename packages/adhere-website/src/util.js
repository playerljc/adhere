import qs from 'qs';

import { Dict, Preferences, Util } from '@baifendian/adhere';

import Constent from '@/constent';
import { getSearch } from '@/lib/Router/path';

export default {
  initDirection() {
    const query = qs.parse(getSearch(), { ignoreQueryPrefix: true });

    const defaultDirection = this.getDirection();
    const direction = query.direction ?? defaultDirection;

    Preferences.putStringByLocal('direction', direction);

    document.body.removeAttribute('dir');
    document.body.setAttribute('dir', direction);
  },
  getDirection() {
    const lang = this.getLang();

    return Dict.value.SystemLang.value[lang].direction;
  },
  /**
   * getLang
   * @return {String}
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
   * @param lang
   */
  setLang(lang) {
    Preferences.putStringByLocal('language', lang ?? Dict.value.SystemDefaultLang.value);
  },
  getConstent() {
    return Constent(CustomEvnVars);
  },
  getPublicPath() {
    if ((CustomEvnVars.publicPath || '/') !== '/') {
      return `/${CustomEvnVars.publicPath}/`;
    }

    return '/';
  },
  /**
   * getEvnVars
   * @description 获取webpack的define参数
   * @return {*}
   */
  getEvnVars() {
    return CustomEvnVars;
  },
  /**
   * getAntdCssPriority
   * @description 获取antd的css兼容性配置
   */
  getAntdCssPriority() {
    return this.getEvnVars().antdCssPriority;
  },
  /**
   * isDev
   * @description 是否是开发模式
   * @return {boolean}
   */
  isDev() {
    return this.getEvnVars().mode === 'development';
  },
  /**
   * getEnvironment
   * @description 获取环境 dev | stg | pe
   * @return {boolean}
   */
  getEnvironment() {
    return this.getEvnVars().mode === 'environment';
  },
};

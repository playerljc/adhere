import qs from 'qs';

import { Dict, Preferences, Util } from '@baifendian/adhere';

export default {
  initDirection() {
    const search = window.location.search;
    const query = qs.parse(search, { ignoreQueryPrefix: true });

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
};

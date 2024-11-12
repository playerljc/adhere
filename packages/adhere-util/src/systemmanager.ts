export default {
  /**
   * 401 casUrl
   * @param baseUrl
   * @param enterUrl
   * @param defaultLocal
   * @return {string}
   */
  casUrl({ baseUrl, enterUrl, defaultLocal }): string {
    const languageParam = defaultLocal ? `&locale=${defaultLocal}` : '';

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

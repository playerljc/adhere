declare const _default: {
    /**
     * getLang
     * @return {String}
     */
    getLang(): string;
    /**
     * setLang
     * @param lang
     */
    setLang(lang?: string): void;
    /**
     * getDatePickerFormat
     * @return {string}
     */
    getDatePickerFormat(): string;
    /**
     * 401 casUrl
     * @param baseUrl
     * @param enterUrl
     * @return {string}
     */
    casUrl({ baseUrl, enterUrl }: {
        baseUrl: any;
        enterUrl: any;
    }): string;
    /**
     * casLogoutUrl
     * @param {String} - baseUrl
     * @param {String} - enterUrl
     * @param {String} - params
     * @return {string}
     */
    casLogoutUrl({ baseUrl, enterUrl, params }: {
        baseUrl: any;
        enterUrl: any;
        params?: string | undefined;
    }): string;
};
export default _default;

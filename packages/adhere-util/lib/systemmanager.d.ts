declare const _default: {
    /**
     * 401 casUrl
     * @param baseUrl
     * @param enterUrl
     * @param defaultLocal
     * @return {string}
     */
    casUrl({ baseUrl, enterUrl, defaultLocal }: {
        baseUrl: any;
        enterUrl: any;
        defaultLocal: any;
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

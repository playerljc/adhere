import intl from 'react-intl-universal';
/**
 * getLocal
 * @param data
 */
export declare function getLocal(data: Array<string>): object;
declare const _default: {
    /**
     * init
     * @param {String} - currentLocale
     * @param {Object} - locales
     * @param {Object} - ...other
     */
    init({ currentLocale, locales, ...other }: {
        currentLocale: 'en_US' | 'zh_CN' | 'pt_PT';
        locales: any;
    }): Promise<any>;
    /**
     * v - 以中文获取国际化值
     * @return {String}
     * @param key
     * @param variables
     */
    v(key: string, variables?: object | null | undefined): string;
    /**
     * get
     * @param key
     * @param variables
     */
    get(key: string, variables?: object | null | undefined): string;
    /**
     * getHTML
     * @param key
     * @param options
     */
    getHTML(key: string, options?: object | null | undefined): string;
    /**
     * getInitOptions
     */
    getInitOptions(): intl.ReactIntlUniversalOptions;
    /**
     * formatMessage
     * @param options
     * @param variables
     */
    formatMessage(options: any, variables?: object | null | undefined): string;
    /**
     * formatHTMLMessage
     * @param options
     * @param variables
     */
    formatHTMLMessage(options: any, variables?: object | null | undefined): string;
    /**
     * load - Load more locales after init
     * @param locales
     */
    load(locales: {
        [key: string]: any;
    }): void;
    /**
     * getLocal
     * @param data
     */
    getLocal(data: Array<string>): object;
};
export default _default;

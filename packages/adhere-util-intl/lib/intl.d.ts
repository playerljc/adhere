import intl from 'react-intl-universal';
/**
 * getLocal
 * @description 生成k,v的对象
 * @param prefix
 * @param data
 */
export declare function getLocal(prefix: string | undefined, data: Array<string>): object;
/**
 * getLocales
 * @description - 获取系统所有的词条
 * @return object
 */
export declare function getLocales(): object;
declare const _default: {
    /**
     * init
     * @param {String} - prefix
     * @param {String} - currentLocale
     * @param {Object} - locales
     * @param {Object} - ...other
     * @param reload 是否是重新载入
     */
    init({ prefix, currentLocale, locales, mainLanguage, ...other }: {
        prefix: string;
        currentLocale: 'en_US' | 'zh_CN' | 'pt_PT';
        locales: any;
        mainLanguage: string;
    }, reload?: boolean): Promise<any>;
    /**
     * isInit
     * @description 是否进行了初始化
     */
    isInit(): boolean;
    /**
     * v - 以中文获取国际化值
     * @return {String}
     * @param key
     * @param variables
     */
    v(key: string, variables?: object | null): string;
    /**
     * v - 以中文获取国际化后的html
     * @param key
     * @param options
     */
    vHtml(key: string, options?: object | null): any;
    /**
     * get
     * @param key
     * @param variables
     */
    get(key: string, variables?: object | null): string;
    /**
     * getHTML
     * @param key
     * @param options
     */
    getHTML(key: string, options?: object | null): string;
    /**
     * getInitOptions
     */
    getInitOptions(): intl.ReactIntlUniversalOptions;
    /**
     * formatMessage
     * @param options
     * @param variables
     */
    formatMessage(options: any, variables?: object | null): string;
    /**
     * formatHTMLMessage
     * @param options
     * @param variables
     */
    formatHTMLMessage(options: any, variables?: object | null): string;
    /**
     * load - Load more locales after init
     * @param locales
     */
    load(locales: {
        [key: string]: any;
    }): void;
    /**
     * getLocal
     * @param prefix
     * @param data
     */
    getLocal(prefix: string | undefined, data: Array<string>): object;
};
export default _default;

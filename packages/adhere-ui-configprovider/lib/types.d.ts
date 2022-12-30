/**
 * ConfigProviderProps
 * @interface ConfigProviderProps
 */
export interface ConfigProviderProps {
    intl: {
        lang: 'en_US' | 'zh_CN' | 'pt_PT';
        locales: object;
        prefix: string;
        mainLanguage: string;
    };
    children: any;
}
export interface ConfigProviderContext {
}

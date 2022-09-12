/**
 * ConfigProviderProps
 * @interface ConfigProviderProps
 */
export interface ConfigProviderProps {
  intl: {
    lang: 'en_US' | 'zh_CN' | 'pt_PT';
    locales: object;
    prefix: string;
  };
  children: any;
}

export interface ConfigProviderContext {}

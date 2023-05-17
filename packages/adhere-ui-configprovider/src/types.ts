/**
 * IntlType
 */
export type IntlType = {
  lang: 'en_US' | 'zh_CN' | 'pt_PT';
  locales: object;
  prefix: string;
};

/**
 * ConfigProviderProps
 * @interface ConfigProviderProps
 */
export interface ConfigProviderProps {
  intl: IntlType & {
    mainLanguage: string;
  };
  children: any;
  onIntlInit: () => void;
}

/**
 * ConfigProviderProps
 */
export interface ConfigProviderContext {
  intl?: IntlType;
}

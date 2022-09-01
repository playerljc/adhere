/**
 * IConfigProviderProps
 * @interface IConfigProviderProps
 */
export interface IConfigProviderProps {
  intl: {
    lang: 'en_US' | 'zh_CN' | 'pt_PT';
    locales: object;
    prefix: string;
  };
  children: any;
}

export interface IConfigProviderContext {}

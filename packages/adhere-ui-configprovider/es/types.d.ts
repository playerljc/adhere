import type { NamedExoticComponent } from 'react';
import type { CSSProperties } from 'react';
import { Context } from './ConfigProvider';
/**
 * IntlType
 */
export type IntlType = {
    lang: 'en_US' | 'zh_CN' | 'pt_PT';
    locales: Record<string, any>;
    prefix: string;
};
/**
 * ConfigProviderProps
 * @interface ConfigProviderProps
 */
export interface ConfigProviderProps {
    className?: string;
    style?: CSSProperties;
    intl: IntlType & {
        mainLanguage: string;
    };
    onIntlInit: () => void;
    theme: {
        primaryColor: string;
        normalColor: string;
        backColor: string;
        baseFontSize: string;
        smallFontSize: string;
        commonMaxZIndex: string;
    };
    media?: {
        isUseMedia?: boolean;
        designWidth?: number;
    };
    isUseWrapper?: boolean;
    router?: 'hash' | 'browser';
    publicPath?: string;
    children: any;
}
/**
 * ConfigProviderProps
 */
export interface ConfigProviderContext {
    media: ConfigProviderProps['media'];
    intl?: IntlType;
    router?: ConfigProviderProps['router'];
    publicPath?: string;
}
export type ConfigProviderComponent = NamedExoticComponent<ConfigProviderProps> & {
    Context: typeof Context;
};

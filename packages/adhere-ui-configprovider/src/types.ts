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
  theme: {
    primaryColor: string;
    normalColor: string;
    backColor: string;
    baseFontSize: string;
    smallFontSize: string;
    commonMaxZIndex: string;
  };
  onIntlInit: () => void;
  // 媒体相关参数
  media?: {
    // 是否使用媒体
    isUseMedia?: boolean;
    // 设计稿尺寸
    designWidth?: number;
  };
  // 是否使用外部包裹对象
  isUseWrapper?: boolean;
  children: any;
}

/**
 * ConfigProviderProps
 */
export interface ConfigProviderContext {
  media: ConfigProviderProps['media'];
  intl?: IntlType;
}

export type ConfigProviderComponent = NamedExoticComponent<ConfigProviderProps> & {
  Context: typeof Context;
};

import type { ConfigProviderProps } from 'antd-mobile';

export interface DesignTokens {
  radiusS?: number;
  radiusM?: number;
  radiusL?: number;
  fontSize1?: number;
  fontSize2?: number;
  fontSize3?: number;
  fontSize4?: number;
  fontSize5?: number;
  fontSize6?: number;
  fontSize7?: number;
  fontSize8?: number;
  fontSize9?: number;
  fontSize10?: number;
  colorPrimary?: string;
  colorSuccess?: string;
  colorWarning?: string;
  colorDanger?: string;
  colorYellow?: string;
  colorOrange?: string;
  colorWathet?: string;
  colorText?: string;
  colorTextSecondary?: string;
  colorWeak?: string;
  colorLight?: string;
  colorBorder?: string;
  colorBackground?: string;
  colorHighlight?: string;
  colorWhite?: string;
  colorBox?: string;
  colorTextLightSolid?: string;
  colorTextDarkSolid?: string;
  colorFillContent?: string;
  fontSizeMain?: number;
  fontFamily?: string;
  borderColor?: string;
}

export interface InternalConfigProviderProps extends ConfigProviderProps {
  theme?: {
    isUseREM?: boolean;
    designWidth?: number;
    token?: DesignTokens;
  };
}

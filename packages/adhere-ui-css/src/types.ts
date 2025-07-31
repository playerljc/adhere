/**
 * CSS变量映射项接口
 */
export interface CSSVarMapItem {
  /** 变量值 */
  value: string | number;
  /** 映射的token */
  mapToken?: Map<string, CSSVarMapTokenItem>;
}

/**
 * CSS变量映射token项接口
 */
export interface CSSVarMapTokenItem {
  /** 透明度值 */
  alpha?: string;
  /** 计算表达式 */
  calc?: string;
}

/**
 * CSS变量对象接口
 */
export interface CSSVars {
  [key: string]: any;
}

/**
 * 导出对象接口
 */
export interface ExportObj {
  [key: string]: any;
}

/**
 * 主题配置接口
 */
export interface ThemeConfig {
  colorPrimary?: string | number;
  colorTextBase?: string | number;
  colorBgBase?: string | number;
  colorBorderBase?: string | number;
  colorSplitBase?: string | number;
  fontSizeBase?: string | number;
  borderRadiusBase?: string | number;
  lineWidth?: string | number;
  lintType?: string | number;
}

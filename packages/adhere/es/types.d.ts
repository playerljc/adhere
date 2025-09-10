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
    /** 主色调 */
    colorPrimary?: string | number;
    /** 基础文本颜色 */
    colorTextBase?: string | number;
    /** 基础背景颜色 */
    colorBgBase?: string | number;
    /** 基础边框颜色 */
    colorBorderBase?: string | number;
    /** 基础分割线颜色 */
    colorSplitBase?: string | number;
    /** 基础字体大小 */
    fontSizeBase?: string | number;
    /** 基础边框圆角 */
    borderRadiusBase?: string | number;
    /** 线宽 */
    lineWidth?: string | number;
    /** 线型 */
    lintType?: string | number;
}

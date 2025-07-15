import type { IDict } from '@baifendian/adhere-util-dict';

/**
 * 表单验证规则接口
 */
export interface FormValidationRule {
  /** 验证类型 */
  type?: 'string' | 'number' | 'email' | 'url' | 'pattern';
  /** 错误消息 */
  message: string;
  /** 最小值 */
  min?: number;
  /** 最大值 */
  max?: number;
  /** 是否允许空白字符 */
  whitespace?: boolean;
  /** 正则表达式模式 */
  pattern?: RegExp;
  /** 是否必填 */
  required?: boolean;
}

/**
 * 表单弹窗容器函数类型
 */
export type FormPopupContainer = (element: HTMLElement) => HTMLElement | null;

/**
 * GIS坐标点类型
 */
export type GisCoordinate = [number, number];

/**
 * GIS地图范围类型
 */
export type GisMapExtent = [GisCoordinate, GisCoordinate];

/**
 * 国际化资源类型
 */
export interface LocaleResource {
  /** 中文简体 */
  zh_CN: string;
  /** 葡萄牙语 */
  pt_PT: string;
  /** 英语 */
  en_US: string;
  /** 阿拉伯语 */
  ar_EG: string;
  /** 其他语言 */
  [key: string]: string;
}

/**
 * Ant Design国际化资源类型
 */
export interface AntdLocaleResource {
  /** 中文简体 */
  zh_CN: any;
  /** 葡萄牙语 */
  pt_PT: any;
  /** 英语 */
  en_US: any;
  /** 阿拉伯语 */
  ar_EG: any;
  /** 其他语言 */
  [key: string]: any;
}

/**
 * 日期格式化函数类型
 */
export type DateFormatFunction = () => void;

/**
 * 日期格式化资源类型
 */
export interface DateFormatResource {
  /** 中文简体 */
  zh_CN: DateFormatFunction;
  /** 葡萄牙语 */
  pt_PT: DateFormatFunction;
  /** 英语 */
  en_US: DateFormatFunction;
  /** 阿拉伯语 */
  ar_EG: DateFormatFunction;
  /** 其他语言 */
  [key: string]: DateFormatFunction;
}

/**
 * 选项类型
 */
export interface Option {
  /** 显示标签 */
  label: string;
  /** 选项值 */
  value: string | number;
  /** 是否禁用 */
  disabled?: boolean;
  /** 子选项 */
  children?: Option[];
}

/**
 * 罗马数字映射类型
 */
export type RomanNumeralsMap = Map<number, string>;

/**
 * 是否选项映射类型
 */
export type WhetherMap = Map<string, Option>;

/**
 * 正则表达式类型
 */
export type RegexpPattern = RegExp;

/**
 * 表单配置字典类型
 */
export interface FormConfigDict extends IDict {
  /** 初始化静态数据 */
  initStatic(): void;
}

/**
 * GIS配置字典类型
 */
export interface GisConfigDict extends IDict {
  /** 初始化静态数据 */
  initStatic(): void;
  /** 初始化远程数据 */
  initRemote(): void;
}

/**
 * 国际化配置字典类型
 */
export interface LocalsConfigDict extends IDict {
  /** 初始化静态数据 */
  initStatic(): void;
  /** 初始化远程数据 */
  initRemote(): void;
}

/**
 * MIME类型配置字典类型
 */
export interface MimeConfigDict extends IDict {
  /** 初始化静态数据 */
  initStatic(): void;
}

/**
 * 日期格式化配置字典类型
 */
export interface MomentConfigDict extends IDict {
  /** 初始化静态数据 */
  initStatic(): void;
}

/**
 * 通用配置字典类型
 */
export interface NormalConfigDict extends IDict {
  /** 初始化静态数据 */
  initStatic(): void;
}

/**
 * 正则表达式配置字典类型
 */
export interface RegexpConfigDict extends IDict {
  /** 初始化静态数据 */
  initStatic(): void;
  /** 初始化远程数据 */
  initRemote(): void;
}

/**
 * 资源模块配置类型
 */
export interface ResourceConfig {
  /** 表单配置 */
  FormConfig: FormConfigDict;
  /** GIS配置 */
  GisConfig: GisConfigDict;
  /** 国际化配置 */
  LocalsConfig: LocalsConfigDict;
  /** MIME类型配置 */
  MimeConfig: MimeConfigDict;
  /** 日期格式化配置 */
  MomentConfig: MomentConfigDict;
  /** 通用配置 */
  NormalConfig: NormalConfigDict;
  /** 正则表达式配置 */
  RegexpConfig: RegexpConfigDict;
}

/**
 * 资源模块导出类型
 */
export interface ResourceModule {
  /** 字典对象 */
  Dict: any;
} 
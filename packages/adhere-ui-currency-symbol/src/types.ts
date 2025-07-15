import type { CSSProperties, NamedExoticComponent, ReactNode } from 'react';
import { CountUpProps } from 'react-countup/build';

import codes from './codes';
import currenciesMap from './currenciesMap';

/**
 * 货币信息项接口
 * @interface CurrenciesItem
 * @description 定义单个货币的基本信息
 */
export interface CurrenciesItem {
  /** 货币名称 */
  name: string;
  /** 货币符号 */
  symbol: string;
  /** 货币代码（ISO 4217标准） */
  code: string;
}

/**
 * 货币符号大小类型
 */
export type CurrencySymbolSize = 'small' | 'middle' | 'large';

/**
 * 货币符号对齐方式类型
 */
export type CurrencySymbolAlign = 'top' | 'center' | 'bottom';

/**
 * 货币符号组件属性接口
 * @interface CurrencySymbolProps
 * @description 定义CurrencySymbol组件的所有可配置属性
 */
export interface CurrencySymbolProps {
  /** 外层容器CSS类名 */
  className?: string;
  /** 外层容器样式 */
  style?: CSSProperties;
  /** 货币符号CSS类名 */
  symbolClassName?: string;
  /** 货币符号样式 */
  symbolStyle?: CSSProperties;
  /** 金额容器CSS类名 */
  amountClassName?: string;
  /** 金额容器样式 */
  amountStyle?: CSSProperties;
  /** 金额内部元素CSS类名 */
  amountInnerClassName?: string;
  /** 前缀内容 */
  prefix?: ReactNode;
  /** 后缀内容 */
  suffix?: ReactNode;
  /** 金额数值 */
  amount?: number;
  /** 货币代码（ISO 4217标准），默认为CNY */
  code?: string;
  /** 是否加粗显示，默认为true */
  bold?: boolean;
  /** 是否为危险状态（通常显示为红色），默认为false */
  danger?: boolean;
  /** 货币符号大小，默认为middle */
  symbolSize?: CurrencySymbolSize;
  /** 是否使用千分位分隔符，默认为true */
  isUseKilo?: boolean;
  /** 是否使用数字动画效果，默认为false */
  isUseAnimation?: boolean;
  /** 货币符号与金额的对齐方式，默认为bottom */
  align?: CurrencySymbolAlign;
  /** CountUp组件的额外属性 */
  countUpProps?: CountUpProps;
}

/**
 * 货币符号组件类型
 * @description 包含静态属性的组件类型定义
 */
export type CurrencySymbolComponent = NamedExoticComponent<CurrencySymbolProps> & {
  /** 支持的货币代码列表 */
  currencies: typeof codes;
  /** 货币信息映射表 */
  currenciesMap: typeof currenciesMap;
};
